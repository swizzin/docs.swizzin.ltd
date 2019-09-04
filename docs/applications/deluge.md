---
id: deluge
title: Deluge
sidebar_label: Deluge
---

Deluge is a fully-featured, high performance cross-platform ​BitTorrent client.

## Initial Setup

Installing Deluge is easy. Simply issue the following command from SSH:

```bash main
sudo box install deluge
```

This command will configure Deluge and the associated web interface "Deluge-Web" for use with your user.

After installation, if there will be two 2 new packages installed: libtorrent, and deluge-common. Due to potential packaging conflicts with your distribution's repository, the package `deluge-common` has been held by apt and will not be marked for upgrade. You may see apt issue a warning regarding the held `deluge-common` package. This is completely normal and it means the apt mark is working as expected. The package name for `libtorrent` does not intefere with any apt packages and should not issue any upgrade warnings.

### Install Options

When installing Deluge, depending on your operating system, you'll have a couple choices available to you:

#### Deluge Version
- **Repo**: performs an `apt-get install deluged deluge-console deluge-web` and pulls whatever is available from your operating sytsem's repository. To check versions, you can use the [Debian Package Tracker](https://www.debian.org/distrib/packages) or the [Ubuntu Package Tracker](https://packages.ubuntu.com/).
- **Deluge 1.3.15**: pulls the current head of the `1.3-stable` branch from Deluge and uses `fpm` to pacakge it as a .deb for easy installation and removal with `dpkg`.
- **Deluge 2**: pulls the current head of the `master` branch from Deluge and uses `fpm` to package it as a .deb for easy installation and removal with `dpkg`.
  - Deluge 2 is not supported on installations using Debian Jessie due to severely outdated Python3 dependencies.

#### Libtorrent Version
- **Repo**: performs an `apt-get install` of the `libtorrent-rasterbar*` and `python*-libtorrent` packages to supply both `libtorrent` and the python bindings required by Deluge.
  - Repo is not an option if you are using `Deluge v2` on `Ubuntu 16.04` because Libtorrent 1.1+ is required to install `Deluge v2`. Thus, you must compile a version of Libtorrent to meet this requirement.
- **RC_1_0**: pulls the current head of the Libtorrent 1.0 branch, compiles it and packages it with `fpm` as a .deb file.
  - This branch is only an option if you're using `Deluge 1.3.15` and if your version of `libboost` is `1.65` or earlier. (i.e. Buster is not supported)
- **RC_1_1**: pulls the current head of the Libtorrent 1.1 branch, compiles it and packages it with `fpm` as a .deb file.
  - This branch is currently supported on all supported operating systems.
- **RC_1_2**: pulls the current head of the Libtorrent 1.2 branch, compiles it and packages it with `fpm` as a .deb file.
  - The branch is only an option if you are using `Deluge v2 as` it is completely incompatible with `Deluge 1.3.15`.


## Upgrading and Recompiling

If you decide you'd like to change the version of Deluge/libtorrent you've installed, or you would like to rebuild your current versions against the most recent source, you can recompile and upgrade deluge at any time with the command:

```bash main
sudo box upgrade deluge
```

This command will start the Deluge upgrade script. The installer will ask which version of Deluge you'd like to install and will then work on installing it.

## How to Access

### Thin Client (recommended)

The GTK thin client uses a secure connection to your slot to display the remote contents in the local client. Generally speaking, the thin client is capable of handling more torrents and simply offers better performance than the alternative Web UI. However, in order to use the Thin client, you must have a version of Deluge installed locally on the computer you wish to access your remote client from. Thus the argument of Thin vs Web is generally a choice between "Performance" and "Convenience". Further, the Thin client supports a broader range of plugins -- many plugins have no interface for the Web UI at all.

In order to use the Thin client, you must have a recent version of Deluge installed locally on your computer. Below are instructions for popular operating systems:

<!--DOCUSAURUS_CODE_TABS-->
<!--Windows-->
::: panel
Grab the most recent version from [here](https://ftp.osuosl.org/pub/deluge/windows/?C=M;O=D) and save it to a common location (i.e. Downloads). 
Run the installer and follow the prompts.
:::
<!--Debian / Ubuntu-->
::: panel
Deluge is available from the distribution repositories. Simply open a terminal and issue the command:

```bash
sudo apt update
sudo apt install deluge
```
:::
<!--OpenSUSE-->
::: panel
Deluge is available from the distribution repositories. Simply open a terminal and issue the command:

```bash
sudo zypper install deluge
```
:::
<!--Fedora-->
::: panel
Deluge is available from the distribution repositories. Simply open a terminal and issue the command:

```bash
sudo dnf install deluge
```
:::
<!--Arch Linux-->
::: panel
Deluge is available from the distribution repositories. Simply open a terminal and issue the command:

```bash
sudo pacman -S deluge
```
:::
<!--END_DOCUSAURUS_CODE_TABS-->

Now that Deluge is installed on your machine, you need to configure it to connect to your slot.

First, we must prevent Deluge from starting in "Classic" mode. To do this, open Deluge. In the menu, go to `Preferences > Interface` and untick the box which states "Classic Mode".

Deluge will prompt you to restart. Click "Ok" and re-open Deluge.

You'll notice when you re-open the application that a new connection dialog box will open. Hit the "Add" button and use the following details:

```plaintext main
Hostname: <the hostname of your server>
Username: <your username>
Password: <your password>
Port: <the daemon port of your instance>
```

::: note
During the configuration of Deluge on your slot, the setup output both your Daemon and Web ports. If you've forgotten your daemon port, you can find it with the following command:
```bash
cat ~/.config/deluge/core.conf | grep daemon_port
```
:::

Once you click okay, you'll be taken back to the connection dialog. Your new connection will be listed and if everything is okay, you'll see a green check box next to it. When you click connect, you'll be taken to your client.

### Web UI

The web UI is significantly easier to access, which is why many prefer it. You can access deluge-web from `https://yourhost.ltd/deluge`.

If you are not currently logged in, you will first receive a basic authentication dialog from the webserver. Once authenticated, you'll receive a dialog box from Deluge-Web. This password is the same as the one you just entered.

::: note
This second password authetication layer cannot be fully removed due to restrictions in Deluge. However, you can increase the length of time that the cookie is stored locally by your browser to one year (from one hour):
```bash
sudo systemctl stop deluge-web@<username>
sed -i 's/"session_timeout": 3600,/"session_timeout": 31536000,/g' ~/.config/deluge/web.conf
sudo systemctl start deluge-web@<username>
```
:::

### deluge-console

#### Getting Started
You can access the command line version of the deluge console by using the command:

```bash main
deluge-console
```

#### Connecting to Your Daemon
Once loaded, you'll need to specify your daemon port to connect to:

```bash main
connect 127.0.0.1:<daemon port>
```

#### Available Commands
Once you have successfully connected to the daemon, you can get started with the following commands:

```plaintext main
>>> help
add - Add a torrent
cache - Show information about the disk cache
config - Show and set configuration values
connect - Connect to a new deluge server.
debug - Enable and disable debugging
del - Remove a torrent
exit - Exit from the client.
halt - Shutdown the deluge server.
help - displays help on other commands
info - Show information about the torrents
pause - Pause a torrent
plugin - Manage plugins with this command
quit - Exit from the client.
reannounce - Update tracker for torrent(s)
recheck - Forces a recheck of the torrent data
resume - Resume a torrent
rm - Remove a torrent
update-tracker - Update tracker for torrent(s)

For help on a specific command, use "<command> --help"
```


## Service Management

Deluge has two services associated with it: `deluged` and `deluge-web`. These systemd services can be found here:

```
/etc/systemd/system/deluged@.service
/etc/systemd/system/deluge-web@.service
```
To restart the deluge daemon, use `deluged`. To restart the web interface use `deluge-web`. Multi-user is enabled, so in order to manipulate the service, you'll also need to specify a username.

<!--DOCUSAURUS_CODE_TABS-->
<!--Start-->
```bash
sudo systemctl start deluged@<username>
```
<!--Stop-->
```bash
sudo systemctl stop deluged@<username>
```
<!--Restart-->
```bash
sudo systemctl restart deluged@<username>
```
<!--Enable-->
```bash
sudo systemctl enable deluged@<username>
```
<!--Disable-->
```bash
sudo systemctl disable deluged@<username>
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Most of the settings in the preferences should be left alone; however, you're welcome to alter settings such as `Download location`. That said, you should leave the majority of `Connection Settings` and `ltConfig` settings alone, as the settings have already been optimized for use on your slot.

### Default Download Location

Files downloaded by Deluge will be placed in `~/torrents/deluge` by default. You can change this behavior by change the preference: `Download to` in the Deluge download preferences.

### Web Download Location

Similarly, any files in the default download directory (`~/torrents/deluge`) will be available for browsing via the web server at the location: `https://<yourhostname.ltd>/deluge.downloads`

### Plugins

There are a wide array of plugins available for Deluge. You can find a list of them in the Deluge wiki, [here](https://dev.deluge-torrent.org/wiki/Plugins).

::: note
Not all plugins have a web-ui component. You will likely need to install and manage the options for most of the plugins on the prior page with the [thin client](#thin-client-recommended).
:::

## Connect to other clients

The following variables can be used as a general guide to help you find information you'll need to know in order to connect other clients to Deluge.


### Transdroid

Use these settings when connecting your transdroid client to your Deluge instance:

```bash
IP or Hostname: <yourhostname.ltd>
User name: <your username>
Password: <your password>
Deluge web password: <your password again>
Advanced Settings:
Port Number: 443
Folder: /deluge
Use SSL: On
Accept all SSL certificates: yes (optional with a valid ssl certificate)
```

### Other Local Clients

Settings for connecting another local client (i.e. Sonarr), to your Deluge instance:

- Host: `127.0.0.1`
- Daemon port: `cat ~/.config/deluge/core.conf | grep daemon_port`
- Web port: `cat ~/.config/deluge/web.conf | grep port`
- URL base: `/deluge` (only if accessing via `https`)

### Connecting to a remote client (i.e. Sonarr)

By default, the web interface of Deluge is bound to `127.0.0.1`. In other words, the interface isn't directly accessible from a remote connection. If you want to connect Deluge-web to a remote instance of an application (for instance, Sonarr running from home), you'll need to enable remote connections.

[SSH](../getting-started/how-do-i-connect.md) into your slot and issue the following commands:

```bash main
box stop deluge-web
sed -i 's/127.0.0.1/0.0.0.0/g' ~/.config/deluge/web.conf
box start deluge-web
```

You can now connect to your Deluge-web instance through `http://hostname.ltd:<delugeport>`