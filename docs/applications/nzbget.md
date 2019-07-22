---
id: nzbget
title: nzbGet
sidebar_label: nzbGet
---

NZBGet is a binary downloader, which downloads files from Usenet based on information given in nzb-files.

## Initial Setup

Installing nzbGet is easy. Simply issue the following command from SSH:

```plaintext main
sudo box install nzbget
```

This command will configure nzbgGet for your user.

## How to Access

After installation, you can access nzbGet at the url: `https://<yourhostname.ltd>/nzbget`

## Service Management

nzbGet is enabled for use with multiple users. Thus, you must call it with the username of the instance to start.

The systemd service file resides at:

```bash main
/etc/systemd/system/nzbget@.service
```

<!--DOCUSAURUS_CODE_TABS-->
<!--Start-->
```plaintext
sudo systemctl start nzbget@<username>
```
<!--Stop-->
```plaintext
sudo systemctl stop nzbget@<username>
```
<!--Restart-->
```plaintext
sudo systemctl restart nzbget@<username>
```
<!--Enable-->
```plaintext
sudo systemctl enable nzbget@<username>
```
<!--Disable-->
```plaintext
sudo systemctl disable nzbget@<username>
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

If you are unfamiliar with nzbGet, please check out their [documentation](https://nzbget.net/documentation) for assistance in getting your news groups setup or learning how to setup post-processing.

## Connect to other clients

The general settings for connecting nzbget to other clients are as follows:

- Host: `127.0.0.1`
- Control Port: `443`
- URL Base: `nzbget`
- SSL: `ON`
- Username: `<your slot username>`
- Password: `<your slot password>`

