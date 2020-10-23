---
id: sickchill
title: Sickchill
sidebar_label: Sickchill
---

Video File Manager for TV Shows, It watches for new episodes of your favorite shows and when they are posted it does its magic.

## Initial Setup

Installing SickChill is easy. Simply issue the following command from SSH:

```plaintext main
sudo box install sickchill
```

This command will install and configure SickChill for your user.

## How to Access

After installation, you can access SickChill at the url: `https://<yourhostname.ltd>/sickchill`

## Service Management

Despite using a multi-user service name, multi-user for SickChill is not enabled by default.

The systemd service file resides at:

```bash main
/etc/systemd/system/sickchill@.service
```

<!--DOCUSAURUS_CODE_TABS-->
<!--Start-->
```bash
sudo systemctl start sickchill@<username>
```
<!--Stop-->
```bash
sudo systemctl stop sickchill@<username>
```
<!--Restart-->
```bash
sudo systemctl restart sickchill@<username>
```
<!--Enable-->
```bash
sudo systemctl enable sickchill@<username>
```
<!--Disable-->
```bash
sudo systemctl disable sickchill@<username>
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

If you are unfamiliar with SickChill, please check out their [wiki](https://github.com/SickChill/SickChill/wiki) for assistance in getting your trackers setup or learning how to add shows or setup post-processing.

## Connect to other clients

<!--DOCUSAURUS_CODE_TABS-->
<!--rTorrent-->
```plaintext
Send torrent files to: rTorrent
rTorrent host/port: https://127.0.0.1/rutorrent/plugins/httprpc/action.php
Http Authentication: Basic
Verify certificate: off (shouldn't need to be turned on)
rTorrent username: <your username>
rTorrent password: <your password>
Add label to torrent: TV (or anything else you desire)
Downloaded files location: ~/torrents/rtorrent (or a custom directory)
```

<!--Deluge (via Daemon)-->
```plaintext
Send torrent files to: Deluge (via Daemon)
Deluge: 127.0.0.1:<your daemon port>
Verify certificate: off
Deluge username: <your username>
Deluge password: <your password>
Add label to torrent: TV (or anything else you desire)
* label plugin must be enabled in Deluge if you add a label
```

<!--Deluge (via Web)-->
```plaintext
Send torrent files to: Deluge (via Web)
Deluge: 127.0.0.1:<your web port>
Verify Certificate: off
Deluge Password: <your password>
Add label to torrent: TV (or anything else you desire)
* label plugin must be enabled in Deluge if you add a label
```

<!--nzbGet-->
```plaintext
Send nzb files to: nzbget
NZBget host:port: 127.0.0.1/nzbget
Connect using HTTPS: ON
nzbget username: <your username>
nzbget Password: <your password>
Add label to torrent: Series (or anything else you desire)
* label must exist under "Categories" in nzbGet
```
<!--END_DOCUSAURUS_CODE_TABS-->

:::note
SickChill does not currently handle special characters in your password very well. If you are having troubles connecting to your applications, make sure your password is alpha-numeric
:::