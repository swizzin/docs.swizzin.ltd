---
id: couchpotato
title: Couchpotato
sidebar_label: Couchpotato
---

Download movies automatically, easily and in the best quality as soon as they are released, via usenet or torrents.

Resilio Sync (formerly BitTorrent Sync) is a peer-to-peer file synchronization tool available for Windows, Mac, Linux, Android, iOS, Windows Phone, Amazon Kindle Fire and BSD. It can sync files between devices on a local network, or between remote devices over the Internet via a modified version of the BitTorrent protocol. 

## Initial Setup

Installing CouchPotato is easy. Simply issue the following command from SSH:

```plaintext main
sudo box install couchpotato
```

This command will configure and install CouchPotato for your user.

## How to Access

After CouchPotato has been configured for your user, the application can be accessed from your web browser at `https://<domain.ltd>/couchpotato`

During installation, the files were placed in your home folder: `~/.couchpotato`

## Service Management

The couchpotato service is managed by systemd. The systemd service file uses the multi-user format, but the service is not configured for any user other than the master.

The systemd service for couchpotato resides here:

```bash
/etc/systemd/system/couchpotato@.service
```

As the service utilizes the mutli-user format, you must specify a username along with the command.

<!--DOCUSAURUS_CODE_TABS-->
<!--Start-->
```bash
sudo systemctl start couchpotato@<username>
```
<!--Stop-->
```bash
sudo systemctl stop couchpotato@<username>
```
<!--Restart-->
```bash
sudo systemctl restart couchpotato@<username>
```
<!--Enable-->
```bash
sudo systemctl enable couchpotato@<username>
```
<!--Disable-->
```bash
sudo systemctl disable couchpotato@<username>
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration & Usage

### Connecting Clients

Out of the box, CouchPotato supports a number of downloader options that can be used with swizzin: blackhole, nzbget, sabnzbd, rtorrent and deluge. It should be fairly straight forward to set them up for use with CouchPotato

<!--DOCUSAURUS_CODE_TABS-->
<!--Blackhole-->
::: panel
```
Directory: where you would like CouchPotato to send torrent files/nzbs
```

Then in your torrent client, configure the same directory as a watch directory. Your client will automatically add items in this folder to your client.

:::
<!--nzbGet-->
::: panel
```
Host: 127.0.0.1:6789/nzbget
Password: <empty>
Category: *optional*
```
:::
<!--Sabnzbd-->
::: panel
```
Host: 127.0.0.1:65080/sabnzbd
Api Key: <your sabnzbd api key>
Category: *optional*
```
:::
<!--rTorrent-->
::: panel
Ensure Advanced Settings are Enabled (can't be done during initial wizard)
```
SSL: Enabled
Verify SSL: Off (can be left on if your certificate is valid)
Host: 127.0.0.1:443
RPC Url: <username>
Username: <your username>
Password: <your password>
Label: *optional*
Directory: *optional*
```
:::
<!--Deluge-->
::: panel
```
Host: 127.0.0.1:<daemon port>
Username: <your username>
Password: <your password>
Directory: *optional*
Label: *optional (must have plugin enabled)*
```
:::
<!--END_DOCUSAURUS_CODE_TABS-->
