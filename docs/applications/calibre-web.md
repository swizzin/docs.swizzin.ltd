---
id: calibre-web
title: Calibre-Web
sidebar_label: Calibre-Web
---

Calibre-web is a graphical web frontend for a Calibre Library with many very useful features, such as user management, on-the-fly conversion, Send-to-Kindle and Kobo Sync API.

## Initial Setup

Installing Calibre-web is easy. Simply issue the following command from SSH:

```bash main
sudo box install calibre-web
```

This command will configure and install Calibre-web.

You will then be able to access it through either `http://domain.tld/calibre` or `http://domain.tld:8083`, depending on whether or not you have nginx installed.

### Options

::: warning Make sure you know what you're doing!
**Please note that it is difficult for us to support these options as they are custom for each install**

None of the options are sanity-checked on install so setting something wrong could break your installation.

Again, you do not need to set these if you don't know what you're doing.
:::

```bash main
export download_dir='torrents/downloads'
```

- `calibredbuser`:
  - Default: The name of the master user
  - Use this to allow Calibre-web to access the Calibre Library of someone other than the master user.

## Post-install
1. Link to your instance of the Calibre Library folder
   - For example `/home/masteruser/Calibre Library`
2. Change the username and password of the admin user
   - Go to `http://domain/calibre/me` and change the details there


## User management
Calibre-web has its own internal user database **which swizzin does not manage in any way**. Please manage your users through the web interface.

## Service management

Calibre-web runs as its own single process with its own system user. You can use the following commands to manage the service.

<!--DOCUSAURUS_CODE_TABS-->
<!--Start-->
```bash
sudo systemctl start calibre-web.service
```
<!--Stop-->
```bash
sudo systemctl stop calibre-web.service
```
<!--Restart-->
```bash
sudo systemctl restart calibre-web.service
```
<!--Enable-->
```bash
sudo systemctl enable calibre-web.service
```
<!--Disable-->
```bash
sudo systemctl disable calibre-web.service
```
<!--END_DOCUSAURUS_CODE_TABS-->


## Troubleshooting

::: tip 
You can always also try the [general troubleshooting tips written in our guide](/guides/troubleshooting). They might or might not apply, but asking these questions can often make you understand what is under the hood better and help you find what needs to be fixed. It's always worth a shot!
:::

Please make sure to consult the issues of Calibre-web and the expansive wiki of the project. 

### Verbose output
Calibre-web stores its logs in `/opt/calibre-web/calibre-web.log` and optionally `/opt/calibre-web/access.log`. You can increase the verbosity of the log level by going to http://<domain>/calibre/admin/config, opening the "Logfile Configuration" section and changing the level there.