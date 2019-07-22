---
id: medusa
title: Medusa
sidebar_label: Medusa
---

(py)Medusa is an automatic video library manager for TV Shows written in Python. It watches for new episodes of your favorite shows, and when they are posted it does its magic.

## Initial Setup

Installing Medusa is easy. Simply issue the following command from SSH:

```plaintext main
sudo box install medusa
```

This command will install and configure medusa for your user.

## How to Access

After installation, you can access Medusa at the url: `https://<yourhostname.ltd>/medusa`

## Service Management

Despite using a multi-user service name, multi-user for medusa is not enabled by default.

The systemd service file resides at:

```bash main
/etc/systemd/system/medusa@.service
```

<!--DOCUSAURUS_CODE_TABS-->
<!--Start-->
```plaintext
sudo systemctl start medusa@<username>
```
<!--Stop-->
```plaintext
sudo systemctl stop medusa@<username>
```
<!--Restart-->
```plaintext
sudo systemctl restart medusa@<username>
```
<!--Enable-->
```plaintext
sudo systemctl enable medusa@<username>
```
<!--Disable-->
```plaintext
sudo systemctl disable medusa@<username>
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

If you are unfamiliar with Medusa, please check out their [wiki](https://github.com/pymedusa/Medusa/wiki) for assistance in getting your trackers setup or learning how to add shows or setup post-processing.

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
