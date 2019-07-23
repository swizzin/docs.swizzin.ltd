---
id: bazarr
title: Bazarr
sidebar_label: Bazarr
---

Bazarr is a companion application to Sonarr and Radarr. It manages and downloads subtitles based on your requirements. You define your preferences by TV show or movie and Bazarr takes care of everything for you.

## Initial Setup

Installing Bazarr is easy. Simply issue the following command from SSH:

```plaintext main
sudo box install bazarr
```

This command will configure bazarr for the main user.

## How to Access

Once setup, bazarr will be available at the link `https://<hostname.ltd>/bazarr`


## Service Management

The systemd script for bazarr can be found at
```bash
/etc/systemd/system/bazarr.service
```

By default, bazarr can only be configured for use with a single user with swizzin.

<!--DOCUSAURUS_CODE_TABS-->
<!--Start-->
```bash
sudo systemctl start bazarr
```
<!--Stop-->
```bash
sudo systemctl stop bazarr
```
<!--Restart-->
```bash
sudo systemctl restart bazarr
```
<!--Enable-->
```bash
sudo systemctl enable bazarr
```
<!--Disable-->
```bash
sudo systemctl disable bazarr
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

You'll need to do a bit of configuration to setup Bazarr with your subtitle providers; however, if you installed Sonarr and/or Radarr prior to installing Bazarr, we've done our best to streamline the configuration process by pre-configuring the connections to these apps for you.

### First run

If you've already got Sonarr or Radarr installed, you'll skip the setup wizard. Nifty!

You'll still need to setup your subtitles provider. Go to `Settings > Subtitles`. Select a provider, enter your credentials. Scroll down the page to `Subtitle Languages` and add your preferred languages. Click Save. Bazarr should now be ready to go!


If you haven't installed Sonarr or Radarr yet, you'll be greeted by a setup wizard. You shouldn't need to edit any details on the `General` page; however, if the `URL Base` field is empty, make sure you enter: `/bazarr/` (note the leading and trailing slashes). Click `Next`.

On the `Subtitles` page, choose a provider and set at least one language. You won't be able to proceed with the wizard until you've set these basics.

### Connect to *darr apps
If Sonarr or Radarr weren't setup when you installed, you can still manually configure the connection to these apps. To add a media client, go to `Settings > Sonarr` or `Settings > Radarr`.

<!--DOCUSAURUS_CODE_TABS-->
<!--Sonarr-->
```plaintext
IP: 127.0.0.1
Port: <sonarr port>
Base URL: /sonarr
API Key: <sonarr API>
```

<!--Radarr-->
```plaintext
IP: 127.0.0.1
Port: <radarr port>
Base URL: /radarr
API Key: <radarr API>
```
<!--END_DOCUSAURUS_CODE_TABS-->

::: tip Tip
Forgot your API key or port? No worries, here are oneliners you can submit from SSH:

Sonarr:
```bash
cat ~/.config/NzbDrone/config.xml | grep -e \<Api -e \<Port
```
Radarr:
```bash
cat ~/.config/Radarr/config.xml | grep -e \<Api -e \<Port
```
:::

### More info

If you need further help, please refer to the [Bazarr Wiki](https://github.com/morpheus65535/bazarr/wiki).