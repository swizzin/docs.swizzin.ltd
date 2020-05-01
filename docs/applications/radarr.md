---
id: radarr
title: Radarr
sidebar_label: Radarr
---

Radarr is an independent fork of Sonarr reworked for automatically downloading movies via Usenet and BitTorrent.

## Initial Setup

Installing Radarr is easy. Simply issue the following command:

```bash main
sudo box install radarr
```

This command will configure radarr for your user.

## How to Access

After Radarr has been installed, it will be available for access at `https://<hostname.ltd>/radarr`.

## Service Management

The Radarr service is managed by systemd and has been configured for single user usage. You can find the service file here:

```
/etc/systemd/system/radarr.service
```

<!--DOCUSAURUS_CODE_TABS-->
<!--Start-->
```bash
sudo systemctl start radarr
```
<!--Stop-->
```bash
sudo systemctl stop radarr
```
<!--Restart-->
```bash
sudo systemctl restart radarr
```
<!--Enable-->
```bash
sudo systemctl enable radarr
```
<!--Disable-->
```bash
sudo systemctl disable radarr
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Out of the box, Radarr comes with very little configuration. Following are some basic tasks to help get your client up and running:

### Add a new show (and your first root directory)

1. At the top, click series.
2. Click the button `+ Add Movie`
3. Type the name of the show you want to add
4. Under `Path`, choose `Add a new path`. Enter the path for the folder you wish to add your Sonarr shows to and click the green checkmark to add the directory.
  - e.g. `/home/<username>/media/Movies`
5. Change the other settings to your own needs
6. Click the green + to add the show.

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
Add label to torrent: Movies (or anything else you desire)
Optional - Downloaded files location: <custom directory>
```

<!--Deluge (via Web)-->
```plaintext
Name: Deluge
Host: 127.0.0.1
Post: <deluge web port>
Deluge Password: <your password>
Add label to torrent: Movies (or anything else you desire)
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
Add label to torrent: Movies (or anything else you desire)
* label must exist under "Categories" in nzbGet
```

<!--Transmission-->
To retrieve your port, please run `grep rpc-port ~/.config/transmission-daemon/settings.json` when logged in as the user you want to use transmission of (i.e. not root).
```plaintext
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
Radarr only supports a few trackers out of the box, but the indexers can be expanded by using the application [Jackett](jackett.md). To add an indexer with Jackett, use the following steps.

::: note
By default, when receivng the torznab feed from Jackett, it will need to be modified to be connected with the application. The default link looks like:

```plaintext
https://<yourhostname.ltd>/jackett/api/v2.0/indexers/yourtracker/results/torznab/
```

We need to edit this link to **remove https** and **add the port number**. Thus, if your port number was `12345`, your editted URL would look like this:

```plaintext
http://<yourhostname.ltd>:12345/jackett/api/v2.0/indexers/yourtracker/results/torznab/
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

You may wish to further alter your setup by setting quality profiles or setting up post-processing so that media is automatically transferred to your Radarr library when your torrents are completed. If you need further help, you can refer to the [Radarr Wiki](https://github.com/Radarr/Radarr/wiki).