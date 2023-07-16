The following Wiki article will take you through how to Set up a CDN for Plex with CloudFlare & swizzin.

Difficulty: Easy (easier than a QuickBox install, for sure!)

Requirements:

* A domain
* A free CloudFlare account

Caveats: CloudFlare has the effect of forcing certain levels of TLS encryption on the client. Older clients (such as some SmartTVs) do not support the minimum level of TLS required by CloudFlare, and may prevent them from being able to connect to the server. You can bypass this by rolling your own proxy where you control the level of security.

I modified this a bit from the github entry posted here along with the corresponding post on Reddit and my old QuickBox guide. This may take a some time to setup, so make sure your read through and understand the instructions before starting!

Once you understand what’s involved, grab a cup of coffee and let’s get to work!

1. Sign up for CloudFlare

    The first step is to sign up with an account at CloudFlare and move the nameservers of your domain over to the one’s provided during CloudFlare’s setup. Once CloudFlare is setup, make sure you add your server's IP to a new subdomain, i.e. plex.yourdomain.com. Make sure to turn on routing to CloudFlare (orange cloud icon). Further, under the crypto tab, ensure SSL is set to either Full or Full (Strict)

2. Grab the SSL certificate for your domain:

    First install acme.sh if you have not run the let's encrypt installer from swizzin yet. Ignore the warning about socat if you receive one. We will not be using the standalone webserver to issue certificates

    ```
    curl https://get.acme.sh | sh
    ```

    Now, we will issue a certificate, but first we will define a couple variables:

    ```
    hostname={YOUR HOSTNAME. eg plex.yourdomain.com}
    export CF_Key={YOUR CF API KEY}
    export CF_Email={YOUR CF EMAIL}
    ```

    Once you have defined these variables then get the certificates and install them to your nginx directory. You can copy and paste these commands if you have defined your variables correctly, as above:

    ```
    mkdir -p /etc/nginx/ssl/${hostname}
    /root/.acme.sh/acme.sh --issue --dns dns_cf -d ${hostname}
    /root/.acme.sh/acme.sh --install-cert -d ${hostname} --key-file /etc/nginx/ssl/${hostname}/key.pem --fullchain-file /etc/nginx/ssl/${hostname}/fullchain.pem --ca-file /etc/nginx/ssl/${hostname}/chain.pem --reloadcmd "service nginx force-reload"
    ```

    We now have everything we need to configure our Plex Reverse Proxy:

3. Configure nginx

    ```
    cd /etc/nginx/sites-enabled
    wget -O plex.conf https://raw.githubusercontent.com/toomuchio/plex-nginx-reverseproxy/master/nginx.conf
    ```

    Now we must alter the file to include our failover IP, ssl certificates and dhparam.

    ```
    nano plex.conf
    ```

    Find:

    ```
    server_name
    ```

    and replace plex.EXAMPLE.COM with your own hostname

    Then find:

    ```
    ssl_certificate
    ssl_certificate_key
    ```

    Insert your letsencrypt certificates here:

    ```
    ssl_certificate /etc/nginx/ssl/{YOUR HOSTNAME}/fullchain.pem;
    ssl_certificate_key /etc/nginx/ssl/{YOUR HOSTNAME}/key.pem;
    ```

    Now add our trusted certificate (chain.pem):

    ```
    ssl_trusted_certificate /etc/nginx/ssl/{YOUR HOSTNAME}/chain.pem;
    ```

    And the dhparam already generated on a default swizzin install a bit further down:

    ```
    ssl_dhparam /etc/nginx/ssl/dhparam.pem;
    ```

    That’s all the edits we need to make to this file so save and exit. Test your config and cross your fingers!

    ```
    nginx -t
    ```

    If all goes well, reload your server configuration

    ```
    systemctl reload nginx
    ```

    Now your Plex should be accessible via <https://plex.yourdomain.com>

4. Alter your Plex Server settings

    Make sure “Show Advanced Settings” is on. Under the Network tab add a custom access url:

    ```
    http://plex.yourdomain.com:80,https://plex.yourdomain.com:443
    ```

    Under Remote Access, disable remote access

5. Update firewall to prevent external pinging of port 32400

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

6. Test and enjoy!

    Please note this may not be perfect – I will do my best to answer questions and update and errors in the guide. Please let me know if you run into issues!

    If you’re worried about sending all of your data through cloudflare, the same basic principle could apply to a VPS such as Linode, Vultr or other.
