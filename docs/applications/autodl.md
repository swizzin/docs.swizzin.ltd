---
id: autodl
title: Autodl
sidebar_label: Autodl
---

autodl-irssi is a plugin for irssi that monitors IRC announce channels and downloads torrent files based on user-defined filters.

## Initial Setup

Installing autodl is easy. Simply issue the following command from SSH:

```bash main
sudo box install autodl
```

This command will configure autodl and the associated ruTorrent plugin.

## How to Access

Autodl is a plugin for the console IRC client, `irssi`. Thus, autodl doesn't have a graphical user interface of its own. You can either add rules with the ruTorrent plugin (the only GUI option), or write them by hand in the file: `~/.autodl/autodl.cfg`

You can attach directly to the running irssi screen with:

```bash main
screen -r irssi
```
To detach again, press: `control-a, control-d`

## Service Management

The systemd script for irssi (the main client for the autodl plugin) can be found at
```bash main
/etc/systemd/system/irssi@.service
```
As a multiuser script, you must call it with the username to change the service status for.

<!--DOCUSAURUS_CODE_TABS-->
<!--Start-->
```bash
sudo systemctl start irssi@<username>
```
<!--Stop-->
```bash
sudo systemctl stop irssi@<username>
```
<!--Restart-->
```bash
sudo systemctl restart irssi@<username>
```
<!--Enable-->
```bash
sudo systemctl enable irssi@<username>
```
<!--Disable-->
```bash
sudo systemctl disable irssi@<username>
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Configuration options for the GUI client can be found [here](https://code.google.com/archive/p/rutorrent/wikis/PluginAutodlirssi.wiki#Usage). The options will be found under the header "Usage".

If you don't want to use the ruTorrent plugin and would prefer to configure the configuration files by hand, you can read the [autodl-irssi documentation](https://autodl-community.github.io/autodl-irssi/configuration/overview/) for an in-depth review of the available options.

## Patch for 'Could not read: SSL: Unknown error code: 5'

Some users may run into this error with AutoDL-Irssi, as documented [here] (https://github.com/autodl-community/autodl-irssi/issues/168). This may be patched with the following:

```bash
cd ~/.irssi/scripts/AutodlIrssi/
wget https://raw.github.com/mnechita/autodl-irssi/master/AutodlIrssi/SslSocket.pm -O SslSocket.pm
```
