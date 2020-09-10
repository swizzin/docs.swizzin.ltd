---
id: qbittorrent
title: qBittorrent
sidebar_label: qBittorrent
---

The qBittorrent project aims to provide an open-source software alternative to µTorrent. It is written in C++ and uses Boost, Qt toolkit, and libtorrent-rasterbar library.

## Initial Setup

Installing qBittorrent is easy. Simply issue the following command from SSH:

```bash main
sudo box install qbittorrent
```

This command will configure qBittorrent and the associated web interface for use with your user.

After installation, if there will be two 2 new packages installed: `libtorrent-rasterbar`, and `qbittorrent-nox` (aka qBittorrent no X). The package name for `libtorrent` does not interfere with any apt packages and should not issue any upgrade warnings when upgrading packages with `apt-get`.

### Install Options

When installing qBittorrent, depending on your operating system, you'll have a couple choices available to you:

#### qBittorrent Version
- **Repo**: performs an `apt-get install qbittorrent-nox` and pulls whatever is available from your operating system's repository. To check versions, you can use the [Debian Package Tracker](https://www.debian.org/distrib/packages) or the [Ubuntu Package Tracker](https://packages.ubuntu.com/).
- **qBittorrent 4.1**: Downloads the latest 4.1.* release from qBittorrent's github repo and uses `fpm` to package it as a .deb for easy installation and removal with `dpkg`.
- **Latest**: Downloads the latest qBittorrent release from qBittorrent's github repo and uses `fpm` to package it as a .deb for easy installation and removal with `dpkg`.
  - The latest branch is not supported on installations using Debian Stretch or Ubuntu Xenial due to outdated QT dependencies.

#### Libtorrent Version
- **Repo**: performs an `apt-get install` of the `libtorrent-rasterbar*` and `python*-libtorrent` packages to supply both `libtorrent` and the python bindings required by Deluge.
  - Repo is not an option if you are using `Deluge v2` on `Ubuntu 16.04` because Libtorrent 1.1+ is required to install `Deluge v2`. Thus, you must compile a version of Libtorrent to meet this requirement.
- **RC_1_1**: pulls the current head of the Libtorrent 1.1 branch, compiles it and packages it with `fpm` as a .deb file.
  - This branch is currently supported on all supported operating systems.
- **RC_1_2**: pulls the current head of the Libtorrent 1.2 branch, compiles it and packages it with `fpm` as a .deb file.
  - The branch is only an option if you are using `Deluge v2` or `qBittorrent latest` as it is completely incompatible with `Deluge 1.3.15` and versions of `qBittorrent < 4.2`.


## Upgrading and Recompiling

If you decide you'd like to change the version of qBittorrent/libtorrent you've installed, or you would like to rebuild your current versions against the most recent source, you can recompile and upgrade deluge at any time with the command:

```bash main
sudo box upgrade qbittorrent
```

This command will start the qBittorrent upgrade script. The installer will ask which version of qBittorrent you'd like to install and will then work on installing it. A second check will run to determine whether or not you are able to skip libtorrent compilation and prompt you of your choice.

## How to Access

### Web UI

The web UI is significantly easier to access, which is why many prefer it. You can access deluge-web from `https://yourhost.ltd/qbittorrent`.

If you are not currently logged in, you will first receive a basic authentication dialog from the webserver. Once authenticated, you'll receive a secondary prompt from qBittorrent. This password is the same as the one you just entered.

::: note
This second password authentication layer can be disabled in the qBittorrent WebUI settings (`Bypass auth for localhost`). However, security implications exist if you are sharing your server with other users. If you disable localhost auth for the web UI, other users on the server can access the qBittorrent port directly from CLI -- so please only turn this option on if you trust the users on your server!

:::


## Service Management

These systemd service can be found here:

```
/etc/systemd/system/qbittorrent@.service
```
Multi-user is enabled, so in order to manipulate the service, you'll also need to specify a username.

<!--DOCUSAURUS_CODE_TABS-->
<!--Start-->
```bash
sudo systemctl start qbittorrent@<username>
```
<!--Stop-->
```bash
sudo systemctl stop qbittorrent@<username>
```
<!--Restart-->
```bash
sudo systemctl restart qbittorrent@<username>
```
<!--Enable-->
```bash
sudo systemctl enable qbittorrent@<username>
```
<!--Disable-->
```bash
sudo systemctl disable qbittorrent@<username>
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Feel free to edit the majority of the settings here, but do not change the WebUI port if you expect the nginx proxy to continue working!

### Default Download Location

Files downloaded by qBittorrent will be placed in `~/torrents/qbittorrent` by default. You can change this behavior by change the preference: `Download to` in the Deluge download preferences.

### Web Download Location

Similarly, any files in the default download directory (`~/torrents/qbittorrent`) will be available for browsing via the web server at the location: `https://<yourhostname.ltd>/qbittorrent.downloads`

## Connect to other clients

The following variables can be used as a general guide to help you find information you'll need to know in order to connect other clients to Deluge.


### Transdroid

Use these settings when connecting your transdroid client to your qBittorrent instance:

```bash
IP or Hostname: <yourhostname.ltd>
User name: <your username>
Password: <your password>
Advanced Settings:
Port Number: 443
Folder: /qbittorrent
Use SSL: On
Accept all SSL certificates: yes (optional with a valid ssl certificate)
```

### Other Local Clients

Settings for connecting another local client (i.e. Sonarr), to your Deluge instance:

- Host: `127.0.0.1`
- Port: `Found in WebUI section of qBittorrent`
- Username: `Your username`
- Password: `Your password`