---
id: jackett
title: Jackett
sidebar_label: Jackett
---

API support for your favourite torrent trackers.

## Initial Setup

Installing Jackett is easy. Simply issue the following command from SSH:

```plaintext main
sudo box install jackett
```

This command will configure jackett for your user.
## How to Access

After installation, you can access the web client at `https://<hostname.ltd>/jackett/`. When prompted for an admin password, simply enter your slot password. This double authentication layer is necessary because your jackett port has been exposed externally -- if you disabled the password authentication, your configuration and tracker information would be publically accessible.

## Service Management

Despite using the multiuser format, jackett multi-user is not enabled by default.

The service for jackett resides at:

```bash
/etc/systemd/system/jackett@.service
```

<!--DOCUSAURUS_CODE_TABS-->
<!--Start-->
```plaintext
sudo systemctl start jackett@<username>
```
<!--Stop-->
```plaintext
sudo systemctl stop jackett@<username>
```
<!--Restart-->
```plaintext
sudo systemctl restart jackett@<username>
```
<!--Enable-->
```plaintext
sudo systemctl enable jackett@<username>
```
<!--Disable-->
```plaintext
sudo systemctl disable jackett@<username>
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

To add a new tracker to Jackett, click the `Add Indexer` button near the top of the page. There should be some instructions to help you get Jackett set up with the tracker you've specified.

Since every tracker is different in how they accept connections through their API, you should refer to your tracker if you need specific help in setting up an Indexer.

::: caution
Please do not touch the following settings:
- Admin password (you can change, but do not remove)
- Base URL
- Server Port
- External access (leave enabled)
:::

## Connect to other clients

In order to connect Jackett with other trackers, you need to connect directly to the port. You must bypass the webserver because it has authentication headers which are not supported when accessing Jackett from other clients. If you need help in constructing your URL for a tracker, please refer to the example below.

::: tip
Remember your port from installtion? If you have forgotten it, you can find it in your Jackett dashboard.
:::

Now, click `Copy Torznab Feed`. The link you'll receive will look something like this:

```plaintext
https://<yourhost>.ltd/jackett/api/v2.0/indexers/yourtracker/results/torznab/
```

We need to edit this link to **remove https** and **add the port number**. Thus, if your port number was `12345`, your editted URL would look like this:

```plaintext
http://<yourhost>.ltdltd:9117/jackett/api/v2.0/indexers/yourtracker/results/torznab/
```