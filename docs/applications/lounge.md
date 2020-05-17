---
id: lounge
title: The Lounge
sidebar_label: The Lounge
---

The Lounge is an web-based IRC client which runs in the background.

## Installaion
You can simply run the following command to install The Lounge
```bash
sudo box install lounge
```
## Accessing The Lounge

You can access The Lounge on the following addresses

- With nginx: `https://hostname.tld/irc`
- Without nginx: `https://hostname.tld:9000`

## User management
Users from box are accessible under The Lounge. Changing passwrods and removing users through box will push those changes into The Lounge.

## Configuration
A new system user is created for The Lounge. The configuration file is stored in this users directory, therefore `/home/lounge/.thelounge/config.js`

The Lounge also offers a CLI utility. You can access the help file by issuing the following commands:

```bash
sudo su lounge
thelounge --help
```