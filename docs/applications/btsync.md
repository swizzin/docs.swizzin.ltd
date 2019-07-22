---
id: btsync
title: Resilio (bt)Sync
sidebar_label: Resilio (bt)Sync
---

Resilio Sync (formerly BitTorrent Sync) is a peer-to-peer file synchronization tool available for Windows, Mac, Linux, Android, iOS, Windows Phone, Amazon Kindle Fire and BSD. It can sync files between devices on a local network, or between remote devices over the Internet via a modified version of the BitTorrent protocol. 

## Initial Setup

Installing Resilio is easy. Simply issue the following command from SSH:

```plaintext main
sudo box install btsync
```

This command will configure and install btsync for your user.

## How to Access

After Resilio Sync has been configured for your user, the application can be accessed from your web browser at `https://<domain.ltd>:8888/gui`

## Service Management

The systemd service for btsync is an override for the default one shipped with the application. The swizzin file lives at

```bash
/etc/systemd/system/resilio-sync.service
```

<!--DOCUSAURUS_CODE_TABS-->
<!--Start-->
```bash
sudo systemctl start resilio-sync
```
<!--Stop-->
```bash
sudo systemctl stop resilio-sync
```
<!--Restart-->
```bash
sudo systemctl restart resilio-sync
```
<!--Enable-->
```bash
sudo systemctl enable resilio-sync
```
<!--Disable-->
```bash
sudo systemctl disable resilio-sync
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration & Usage

The Resilio Sync user guide can be found [here](https://help.resilio.com/hc/en-us/categories/200140177-Get-started-with-Sync)