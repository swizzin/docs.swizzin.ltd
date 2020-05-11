---
id: duckdns
title: Duck DNS
sidebar_label: Duck DNS
---

A simple setup for your own _free_ Dynamic DNS domain, ideal for (but not limited to) setups hosted at home.

This will allow you to access your server remotely through a domain, rather than having to remember the dynamically changing IP

## Registering at Duck DNS
You need a (free) account with [Duck DNS](https://duckdns.org) in order to be able to use their service. 

After logging in, please create your Duck DNS domain. There is a limit of 5 domains per account.

## Installation

You can start the installation by running the following command. This will register the IP of your machine to your domain at Duck DNS, and schedule automatic updates in order to detect changes in your IP in the future.

```bash
sudo box install duckdns
```

During the installation you will be asked for your **Duck DNS domain**, and your **Duck DNS token**. You can find both of these on your profile page after logging in.

<img src="https://i.imgur.com/lXN6o5I.png" alt="Duck DNS Token and domain registration" width="600"/>

Your full domain is the "`domain`" in the image below, plus "`.duckdns.org`". Therefore, in the example below, the full domain would mean `test003.duckdns.org`

### Further steps
Assuming you are using a home setup, we suggest you to set up static IPs on both your machine and your router, and then setting up the port forwarding. A great resource for this is https://portforward.com.

Depending on your installed applications, you might need to forward different ports.
<!-- Decide if these will be going into the troubleshooting guide later or not. -->

If you intend to use any applications facilitated by [nginx](/applications/nginx) (You probably do...), we **highly** suggest you to install [letsencrypt](/applications/letsencrypt) through box. This will give you a valid SSL certificate as well as set your nginx configuration to use the new domain name.


## Environment variables
You can specify environment variables to skip the questions during the installation for automation.

The following variables are exposed:

- `duck_subdomain`
    - e.g. `test003`, or `my-house`.
    - **Do NOT include the `duckdns.org` if you are using the environment variable**
- `duck_token`
    - e.g. `abcd12e3-ab1c-123a-a1bc-123abc45d678`

As an example, executing `export duck_subdomain="my-house"` will set the value of the variable for use in the script.

You can then run the installation command, and the values will be ingested.

**Note**: If you are using `sudo ...`, please use `sudo -E ...` for these variables to be considered in the installation. 

## Removing Duck DNS

You can get rid of all the files as well as the automatic refresh behavior by running the command below.

Please note: This will also make a call to Duck DNS to un-set the IP from your domain. 

```bash
sudo box remove duckdns
```

## Changing domain and token after installation

Please remove duckdns with box and install it again. This will double-check that everything is correct for you.

```bash
sudo box remove duckdns && sudo box install duckdns
```

However, we won't stop you from editing the full script in `/opt/duckdns/duck.sh` and changing the values there, just make sure to get a new letsencrypt cert if you had one before.