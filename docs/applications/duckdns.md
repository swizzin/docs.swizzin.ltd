---
id: duckdns
title: Duck DNS
sidebar_label: Duck DNS
---

A simple setup for your own free Dynamic DNS domain, ideal for (but not limited to) setups hosted at home.

This will allow you to access your server remotely without having to remember the possibly ever-changing IP, and use a domain name instead.

## Registering at Duck DNS
It is required to register with Duck DNS first in order to be able to use their service. The registration is free, and is done through GitHub, Reddit, Google or other SSO providers.

After logging in, please create your first Duck DNS domain. There is a limit of 5 domains per account.

## Installation

You can start the installation by running the following command.

```bash
sudo box install duckdns
```

During the installation you will be asked for your **Duck DNS domain**, and your **Duck DNS token**. You can find both of these on your profile page after logging in.

Your full domain is the "`domain`" in the image below, plus "`.duckdns.org`". Therefore, in the example below, the full domain would mean `test003.duckdns.org`

<img src="https://i.imgur.com/lXN6o5I.png" alt="Duck DNS Token and domain registration" width="600"/>

## Environment variables

You can specify some environment variables to skip the questions during the installation.

The following variables are exposed:

- `duck_subdomain`
    - e.g. `test003`, or `my-house`.
    - **Do NOT include the `duckdns.org` if you are using the environment variable**
- `duck_token`
    - e.g. `abcd12e3-ab1c-123a-a1bc-123abc45d678`

As an example, executing `export duck_subdomain="my-house"` will set the variable for the script.

You can then run the installation command, and the values will be ingested.

If you are using `sudo ...`, please use `sudo -E ...` for these variables to be considered in the installation. 

## Changing domain and token after installation

Please remove duckdns with box and install it again. This will double-check that everything is correct for you.

```bash
sudo box remove duckdns
```

However we won't stop you from editing the full script in `/opt/duckdns/duck.sh` and changing the values there.