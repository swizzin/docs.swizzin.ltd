---
id: lidarr
title: Lidarr
sidebar_label: Lidarr
---

Lidarr is a music collection manager for Usenet and BitTorrent users. It can monitor multiple RSS feeds for new tracks from your favorite artists and will grab, sort and rename them. It can also be configured to automatically upgrade the quality of files already downloaded when a better quality format becomes available.

## Initial Setup

Installing Lidarr is easy. Simply issue the following command from SSH:

```bash main
sudo box install lidarr
```

This command will configure lidarr for your master user.

## How to Access

Once setup, lidarr will be available at the link `https://<hostname.ltd>/lidarr`


## Service Management

Like all box configured applications, you can manage Lidarr via SSH with box with start, stop, restart, enable and disable commands.

<!--DOCUSAURUS_CODE_TABS-->
<!--Start-->
```bash
sudo systemctl start lidarr
```
<!--Stop-->
```bash
sudo systemctl stop lidarr
```
<!--Restart-->
```bash
sudo systemctl restart lidarr
```
<!--Enable-->
```bash
sudo systemctl enable lidarr
```
<!--Disable-->
```bash
sudo systemctl disable lidarr
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Out of the box, Lidarr comes with very little configuration. Following are some basic tasks to help get your client up and running:

### Add a new artist (and your first root directory)

1. At the left, click `Add New` under `Artist`.
2. Search for an artist and then click on them.
3. Under `Root Folder`, click `Add new path`.
4. Type or click on the directory to use. Click `Ok`.
5. Click `Add <Artist Name>`

### Connect download clients
To add a download client, go to `Settings > Download Client`. Make sure `Advanced Settings` are shown and click `Add Client`.

<!--DOCUSAURUS_CODE_TABS-->
<!--rTorrent-->
```plaintext
Name: rTorrent
rTorrent host: 127.0.0.1
URL Path: /rutorrent/plugins/httprpc/action.php
Use SSL: ON
Username: <your username>
Password: <your password>
Add label to torrent: Music (or anything else you desire)
Optional - Downloaded files location: <custom directory>
```

<!--Deluge (via Web)-->
```plaintext
Name: Deluge
Host: 127.0.0.1
Post: <deluge web port>
Deluge Password: <your password>
Add label to torrent: Music (or anything else you desire)
* label plugin must be enabled in Deluge if you add a label
SSL: OFF
```

<!--nzbGet-->
```plaintext
NZBget host: 127.0.0.1
port: 443
URL Base: nzbget
Connect using HTTPS: ON
nzbget username: <your username>
nzbget Password: <your password>
Add label to torrent: Music (or anything else you desire)
* label must exist under "Categories" in nzbGet
```

<!--Transmission-->
```plaintext
To retrieve your port, please run `grep rpc-port ~/.config/transmission-daemon/settings.json`,
when logged in as the user you want to use transmission of (i.e. not root).
----------
Host: 127.0.0.1
Port: <See above, e.g. 9091>
URL Base: /transmission/ (Should be default)
Username: <your username>
Password: <your password>
Category: <optional, e.g. Sonarr or TV>
Connect using HTTPS: OFF
```
<!--END_DOCUSAURUS_CODE_TABS-->

### Add an indexer with Jackett
Lidarr only supports a few trackers out of the box, but the indexers can be expanded by using the application [Jackett](jackett.md). To add an indexer with Jackett, use the following steps.

:::note
By default, when receiving the torznab feed from Jackett, it will need to be modified to be connected with the application. The default link looks like:

```plaintext
https://xl.swizzin.ltd/jackett/api/v2.0/indexers/yourtracker/results/torznab/
```

We need to edit this link to **remove https** and **add the port number**. Thus, if your port number was `12345`, your edited URL would look like this:

```plaintext
http://xl.swizzin.ltd:9177/jackett/api/v2.0/indexers/yourtracker/results/torznab/
```
:::

1. Go to `Settings > Indexers` and click `+` to add a new indexer.
2. Under `Torrent` choose `Torznab`
3. Use the settings:
```plaintext main
Name: <tracker name>
URL: <click copy torznab feed in jackett and modify as per above>
API: <copy and paste from jackett UI>
```
4. Click `Test`. If all is good, click `Save`.

### Other tasks

You may wish to further alter your setup by setting quality profiles or setting up post-processing so that media is automatically transferred to your Lidarr library when your torrents are completed. If you need further help, you can refer to the [Lidarr Wiki](https://github.com/lidarr/Lidarr/wiki).