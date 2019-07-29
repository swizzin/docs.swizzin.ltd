---
id: letsencrypt
title: Letsencrypt
sidebar_label: Letsencrypt
---

SSL certificates made easy via the script `acme.sh`

## Installation

### Before Install

Setting up your server with a Let's Encrypt certificate is easy, though it does require a couple steps. We use the helper script [acme.sh](https://github.com/neilpang/acme.sh) for domain verification and easy renewals.

First, you must have your own domain or a subdomain already pointed at the IP address of your server. (An `A Record`).

If you need a domain name, there are plenty of registrars, here are two that I personally use [Namecheap](https://namecheap.com); however, if you already own your domain, you can consider transferring it to [CloudFlare](https://www.cloudflare.com/products/registrar/) to potentially save money.

If you are using the CloudFlare DNS option, you can use the DNS Verification method rather than the webroot verification method -- this method is a bit more resiliant and less prone to future issues than the webroot error as domain verification doesn't take place on your server. If you have a CloudFlare proxy in front of your server (for instance), there can sometimes be issues with renewal which will cause it to fail. The DNS Verification should not fail where the webroot does.

If you'd like to use DNS verification for your CloudFlare domain, make sure you grab your API Key from your CloudFlare Profile (`Profile > API Tokens > View Global API Key`).

::: warning Warning
Make sure you keep your API Key safe -- it's **as good as** your password in terms of modifying the settings on your account.
:::

### Setting up Let's Encrypt

In order to start issuing a certificate use the command:

```bash
sudo box install letsencrypt
```

A dialog box will pop up and ask you the domain you'd like to secure with LE:

```
Enter domain name to secure with LE
docs.swizzin.ltd
```

And press enter. You'll be asked if you want to use this domain for your default site. If you say yes, the `server_name` variable in the default nginx configuration will be updated with the provided domain. If you say no, the script will issue a certificate, but not apply it.

You'll be asked if you want to use CloudFlare. If you choose "No", the installer will continue with the webroot (.well-known) domain verification. If you choose "Yes", you'll be asked for your CloudFlare email and API Key (don't worry, this will never leave your server -- the key is stored in `/root/.acme.sh/account.conf` for future renewals). After entering these details, the issuing will continue.

If everything goes well, acme.sh should declare success. If you reload your site, you should now be greeted by a valid SSL certificate, rather than a warning about invalid SSL.

## Renewals

Renewals are handled automatically via the cronjob that acme.sh installs during the initial run. If your server is configured correctly, you shouldn't have to worry about future renewals.

## Changing domains (or adding secondaries)

If you decide you've outgrown your old domain or want to update your domain, simply run the script again with:

```bash
sudo box install letsencrypt
```

There are no lock files associated with the LE script, so it can be run as many times as you like to issue certificates for as many domains as you desire.

## Certificate and Install Locations
By default, the configuration files for acme.sh reside in:

```bash
/root/.acme.sh
```

This folder contains "account" information and domains currently configured via acme.sh.

SSL certificates are "installed" into your nginx directory as well and this is the location you should use with your scripts when configuring where the certificates are located on your machine:

```bash
/etc/nginx/ssl/<hostname.ltd>
```