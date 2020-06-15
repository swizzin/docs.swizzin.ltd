---
id: jellyfin
title: Jellyfin
sidebar_label: Jellyfin
---
Jellyfin is a self-hosted AV streaming platform. It is a FOSS fork of the Emby project.

## Installation
You can install Jellyfin using the following command.

```bash
sudo box install jellyfin
```
:::warning Finish install in browser
Please make sure to finish the setup of the application through the web browser, and create your admin user.
:::

## Access
You can access jellyfin through `https://domain.tld/jellyfin` if you have nginx installed, or through `https://domain.tld:port` if you do not.

## User management
Jellyfin manages its users in a separate database. **`box` does not add users to the database in any way**. You will need to manage the jellyfin users manually. Whether you choose to keep those in sync with box or not is up to you

## Service management
<!--DOCUSAURUS_CODE_TABS-->
<!--Start-->
```bash
systemctl start jellyfin
```
<!--Stop-->
```bash
systemctl stop jellyfin
```
<!--Restart-->
```bash
systemctl restart jellyfin
```
<!--Enable-->
```bash
systemctl enable jellyfin
```
<!--Disable-->
```bash
systemctl disable jellyfin
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Troubleshooting

::: tip 
You can always also try the [general troubleshooting tips written in our guide](/guides/troubleshooting). They might or might not apply, but asking these questions can often make you understand what is under the hood better and help you find what needs to be fixed. It's always worth a shot!
:::

Jellyfin has a general [Troubleshooting guide](https://jellyfin.org/docs/general/administration/troubleshooting.html) which we highly suggest you follow first in case you have any issues.

### Unable to connect using apps
Some jellyfin clients will not work with self-signed certificates. For that reason we recommend that you follow the [LetsEncrypt](docs/applications/letsencrypt.md) guide and set up a valid signed certificate. You can grab a valid free domain from various places like `freenom`, or get a proper personalized one from places like `namecheap`.