---
id: lounge
title: The Lounge
sidebar_label: The Lounge
---

The Lounge is an web-based IRC client which runs in the background.

## Installation
You can simply run the following command to install The Lounge
```bash
sudo box install lounge
```
## Accessing The Lounge

You can access The Lounge on the following addresses

- With nginx: `https://hostname.tld/irc`
- Without nginx: `https://hostname.tld:9000`

## User management
Users from box are accessible under The Lounge. Changing passwords and removing users through box will push those changes into The Lounge.

## Service management
You can control The Lounge using the systemctl service file.

<!--DOCUSAURUS_CODE_TABS-->
<!--Start-->
```bash
sudo systemctl start lounge
```
<!--Stop-->
```bash
sudo systemctl stop lounge
```
<!--Restart-->
```bash
sudo systemctl restart lounge
```
<!--Enable-->
```bash
sudo systemctl enable lounge
```
<!--Disable-->
```bash
sudo systemctl disable lounge
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration
A new system user is created for The Lounge. The configuration file is stored in this users directory, therefore `/home/lounge/.thelounge/config.js`

The Lounge also offers a CLI utility. You can access the help file by issuing the following commands:

```bash
sudo su lounge
thelounge --help
```