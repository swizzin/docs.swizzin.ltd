This is the original write up of how to install the CloudFlare reverse proxy for Plex from the QuickBox forums. Since the forums and site are currently gone, I have decided to host it here, for posterity, for as long as this project remains on github.

The following Wiki article will take you through how to Set up a CDN for Plex with CloudFlare & NGINX.

Difficulty: Moderate

Requirements:

* A second IP (can be done with one, but not the scope of this guide)
* A domain
* A free CloudFlare account

Caveats: CloudFlare has the effect of forcing certain levels of TLS encryption on the client. Older clients (such as some SmartTVs) do not support the minimum level of TLS required by CloudFlare, and may prevent them from being able to connect to the server. You can bypass this by rolling your own proxy where you control the level of security.

I modified this a bit from the github entry posted here along with the corresponding post on Reddit. This may take a good amount of time to setup, so make sure your read through and understand the instructions before starting! Sure this might be a bit convoluted and setting up apache and nginx to work aside each other is a bit of a pain, but with QuickBox utilizing Apache and Plex not playing well with it, there are few options.

Once you understand what’s involved, grab a cup of coffee and let’s get to work!

1. Sign up for CloudFlare

The first step is to sign up with an account at CloudFlare and move the nameservers of your domain over to the one’s provided during CloudFlare’s setup. Once CloudFlare is setup, make sure you add your failover IP to a new subdomain, i.e. plex.yourdomain.com. Until we setup Let’s Encrypt for the subdomain, ensure server traffic is not being routed through CloudFlare just yet. (grey icon) Further, under the crypto tab, ensure SSL is set to either Full or Full (Strict)

2. Add a second IP to your server

As your new nameservers propagate throughout the network, take this time to bring up the second IP on your server. We need this second IP to bind an instance of NGINX to, so that there are no conflicts with our currently running Apache server. If you want to reverse proxy apache through nginx, you could run this all off a single IP, but that won’t be covered here.

The setup of an IP may vary from host to host; however for a dedicated machine running Ubuntu, this method should work for most. A failover ip can be brought online by editing the file/etc/network/interfaces to bring a new ip address online for your network interface.

```
sudo nano /etc/network/interfaces
```

Insert at the bottom of interface eth0 (before ipv6 if your server supports it). Replace IP.OF.FAIL.OVER with the IP you were given by your provider and replace eth0 with the name of your adapter if necessary (e.g. enp2s0):

```
up ip addr add IP.OF.FAIL.OVER/32 dev eth0
down ip addr del IP.OF.FAIL.OVER/32 dev eth0
```

Save and exit. Bring the new interface online with the command

```
ip addr add IP.OF.FAIL.OVER/32 dev eth0
```

You should now be able to ping your new IP. Confirm with a local test:ping IP.OF.FAIL.OVER If your new IP fails to respond to ping, consider consulting your host’s documentation for help.

3. Bind Apache to the main IP of your server

If you don’t know the IP address of your server you can attempt to be lazy and grab it with this one-liner:

```
sudo ifconfig | grep -m1 "inet addr" | cut -d: -f2 | cut -d" " -f1
```

If that doesn’t work, check the email that your host sent you :sweat_smile:

Now we need to edit two files in apache to prevent Apache2 from binding to all available interfaces:

```
sudo nano /etc/apache2/ports.conf
```

It should look something like this:

```
# If you just change the port or add more ports here, you will likely also
# have to change the VirtualHost statement in
# /etc/apache2/sites-enabled/000-default.conf
 
Listen 80
 
<IfModule ssl_module>
Listen 443
</IfModule>
 
<IfModule mod_gnutls.c>
Listen 443
</IfModule>
 
# vim: syntax=apache ts=4 sw=4 sts=4 sr noet
```

Alter the file as such:

```
# If you just change the port or add more ports here, you will likely also
# have to change the VirtualHost statement in
# /etc/apache2/sites-enabled/000-default.conf
 
Listen ORIG.IP.OF.SRV:80
 
<IfModule ssl_module>
Listen ORIG.IP.OF.SRV:443
</IfModule>
 
<IfModule mod_gnutls.c>
Listen ORIG.IP.OF.SRV:443
</IfModule>
 
# vim: syntax=apache ts=4 sw=4 sts=4 sr noet
```

Save, exit and load up the next file:

```
sudo nano /etc/apache2/sites-enabled/default-ssl.conf
```

Find the sections where it says<VirtualHost *:80> and<VirtualHost*:443>. Replace the asterisks with the ORIG.IP.OF.SRV:

```
...
<VirtualHost ORIG.IP.OF.SRV:80>
...
<VirtualHost ORIG.IP.OF.SRV:443>
```

Now, stop Apache2.

```
sudo systemctl stop apache2
```

4. Install NGINX, Let’s Encrypt and bind to the failover IP Start by installing nginx:

```
sudo apt update
sudo apt install nginx
```

Also, if you do not have Let’s Encrypt installed, now would be the time to do that

```
sudo apt install letsencrypt
```

Now, we need to alter nginx to bind to our new IP and also connect with the Let’s Encrypt servers so that they can issue you an SSL certificate.

```
sudo nano /etc/nginx/sites-enabled/default
```

Underneath the block you should see

```
server {
listen 80 default_server;
```

Insert your failover IP and the .well-known location for Let’s Encrypt:

```
server {
listen IP.OF.FAIL.OVER:80 default_server;
 
location ~ /.well-known {
allow all;
}
```

Save and exit. Run the command `sudo nginx -t` to ensure your configuration is valid. If yes, hooray! Let’s take this opportunity to restart nginx and bring our apache2 server back online.

```
sudo systemctl restart nginx
sudo systemctl restart apache2
```

Ensure there are no conflicts and both services are currently running (`systemctl status apache2` & `systemctl status nginx`)

Now we can use Let’s Encrypt to grab an SSL certificate. Make sure your DNS is pointing at your failover (and not through cloudflare)

```
sudo letsencrypt certonly -a webroot --webroot-path=/var/www/html -d plex.yourdomain.com
```

If all goes well you now have shiny new SSL certs for plex.yourdomain.com.

Now we will beef up security just a bit more:

```
sudo bash
cd /etc/letsencrypt/live/plex.yourdomain.com/
```

Check the issuing authority of your certificate as per: source

```
sudo openssl x509 -noout -text -in fullchain.pem | grep Issuer:
```

You’ll see something like:

```
Issuer: C=US, O=Let's Encrypt, CN=Let's Encrypt Authority X3
```

Download the corresponding pem:

```
wget -O chain.pem "https://letsencrypt.org/certs/lets-encrypt-x3-cross-signed.pem"
```

Change x3 if necessary to correlate to the authority who issued your certificate.

Now we will generate a dhparam for nginx

```
mkdir -p /etc/nginx/ssl
cd /etc/nginx/ssl
openssl dhparam -out dhparam.pem 2048
```

We now have everything we need to configure our Plex Reverse Proxy:

```
cd /etc/nginx/sites-enabled
wget -O plex.conf https://raw.githubusercontent.com/toomuchio/plex-nginx-reverseproxy/master/nginx.conf
```

Now we must alter the file to include our failover IP, ssl certificates and dhparam.

```
nano plex.conf
```

Find and insert your failover IP into the two listen parameters

```
listen 80;
listen 443 ssl http2;
```

becomes

```
listen IP.OF.FAIL.OVER:80;
listen IP.OF.FAIL.OVER:443 ssl http2;
```

Next find:

```
ssl_certificate
ssl_certificate_key
```

Insert your letsencrypt certificates here:

```
ssl_certificate /etc/letsencrypt/live/plex.yourdomain.com/fullchain.pem;
ssl_certificate_key /etc/letsencrypt/live/plex.yourdomain.com/privkey.pem;
```

Now add our trusted certificate (chain.pem):

```
ssl_trusted_certificate /etc/letsencrypt/live/plex.yourdomain.com/chain.pem;
```

And the dhparam a bit further down:

```
ssl_dhparam /etc/nginx/ssl/dhparam.pem;
```

That’s all the edits we need to make to this file so save and exit. Test your config and cross your fingers!

```
nginx -t
```

If all goes well, start your server

```
systemctl start nginx
```

Now your Plex should be accessible viahttps://plex.yourdomain.com

5. Alter your Plex Server settings

Make sure “Show Advanced Settings” is on. Under the Network tab add a custom access url:

```
https://plex.yourdomain.com:443
```

Under Remote Access, disable remote access

6. Update firewall to prevent external pinging of port 32400

```
iptables -A INPUT -p tcp -s localhost --dport 32400 -j ACCEPT
iptables -A INPUT -p tcp --dport 32400 -j DROP
```

The first rule ensures our localhost is still able to talk with Plex. This allows our proxy to communicate, with the internal server, but the second rule prevents all other access. As such, you should still be able to access your plex installation from both plex.tv/web/app and plex.yourdomain.com. Confirm you are able to, then once you have, ensure these rules stay persistent upon a reboot with iptables-persistent:

```
apt install iptables-persistent
```

Choose yes during installation to save your current iptables (note if you have any fail2ban rules, they may get included in here. Make sure you have no firewall rules you don’t want to save, though you can remove unintentional additions if needed.

At this point, no data should be served from your server via port 32400 and all traffic should flow exclusively through port 443 (you can verify this with tcptrack – your server will not establish connections via port 32400 during playback though it will try- SYN_CONNECT).

7. Enable CloudFlare CDN for plex.mydomain.com

Change over that grey cloud icon to the orange one!

Your data is now being proxied through CloudFlare’s servers. Congratulations!! Once the DNS switches over to your CloudFlare IP you should see a noticeable improvement in your speeds and jitter.

Please note this may not be perfect – I will do my best to answer questions and update and errors in the guide. Please let me know if you run into issues!

If you’re worried about sending all of your data through cloudflare, the same basic principle could apply to a VPS such as Linode, Vultr or other.
