---
id: sonarr
title: Sonarr
sidebar_label: Sonarr
---

Sonarr is a PVR for Usenet and BitTorrent users. It can monitor multiple RSS feeds for new episodes of your favorite shows and will grab, sort and rename them. It can also be configured to automatically upgrade the quality of files already downloaded when a better quality format becomes available.

## Initial Setup

Installing Sonarr is easy. Simply issue the following command from SSH:

```plaintext main
sudo box install sonarr
```

This command will configure sonarr for your user. Sonarr is installed via an apt repository, thus the easiest way to keep it up to date is by issuing the command `apt update && apt upgrade`. The sonarr base files will be located in `/opt/nzbdrone`

## How to Access

Once setup, sonarr will be available at the link `https://<hostname.ltd>/sonarr`


## Service Management

Service status for sonarr is handled by systemd. Despite the service being enabled for multi-user usage, Sonarr itself has not been configured for usage on more than one user account with swizzin. Regardless, as a multi-user service, you must append the username of the service you need to modify follow the `@` sign. The systemd service file resides at

```bash main
/etc/systemd/system/sonarr@.service
```

<!--DOCUSAURUS_CODE_TABS-->
<!--Start-->
```plaintext
sudo systemctl start sonarr@<username>
```
<!--Stop-->
```plaintext
sudo systemctl stop sonarr@<username>
```
<!--Restart-->
```plaintext
sudo systemctl restart sonarr@<username>
```
<!--Enable-->
```plaintext
sudo systemctl enable sonarr@<username>
```
<!--Disable-->
```plaintext
sudo systemctl disable sonarr@<username>
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Out of the box, Sonarr comes with very little configuration. Following are some basic tasks to help get your client up and running:

### Add a new show (and your first root directory)

1. At the top, click series.
2. Click the button `+ Add Series`
3. Type the name of the show you want to add
4. Under `Path`, choose `Add a new path`. Enter the path for the folder you wish to add your Sonarr shows to and click the green checkmark to add the directory.
  - e.g. `"/home/<username>/media/TV Shows"`
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
Add label to torrent: TV (or anything else you desire)
Optional - Downloaded files location: <custom directory>
```

<!--Deluge (via Web)-->
```plaintext
Name: Deluge
Host: 127.0.0.1
Post: <deluge web port>
Deluge Password: <your password>
Add label to torrent: TV (or anything else you desire)
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
Add label to torrent: Series (or anything else you desire)
* label must exist under "Categories" in nzbGet
```
<!--END_DOCUSAURUS_CODE_TABS-->

### Add an indexer with Jackett
Sonarr only supports a few trackers out of the box, but the indexers can be expanded by using the application [Jackett](jackett.md). To add an indexer with Jackett, use the following steps.

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

You may wish to further alter your setup by setting quality profiles or setting up post-processing so that media is automatically transferred to your Sonarr library when your torrents are completed. If you need further help, you can refer to the [Sonarr Wiki](https://github.com/Sonarr/Sonarr/wiki).