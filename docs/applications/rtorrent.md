---
id: rtorrent
title: rTorrent
sidebar_label: rTorrent
---

rTorrent is a console-based BitTorrent client, based on the libTorrent libraries for Unix.

## Initial Setup

First you must connect to your slot via ssh. If you need help connecting to the server, please read the help article [here](../getting-started/how-do-i-connect.md).

Installing rTorrent is easy. Simply issue the following command:

```plaintext main
sudo box install rtorrent
```
This command will compile and configure rTorrent for use on your slot.

After installation, there will be two 3 new packages installed: xmlrpc-c, libtorrent-rakshasa, and rtorrent. Due to potential packaging conflicts with your distribution's repository, the package `rtorrent` has been held by apt and will not be marked for upgrade. You may see apt issue a warning regarding the held `rtorrent` package. This is completely normal and it means the apt mark is working as expected.

## How to upgrade/downgrade

rTorrent has a upgrade helper script in `box`. To access the function, use the command:

```
sudo box upgrade rtorrent
```

The menu asking which version you'd like to install will pop up. Pick one. Afterwards, the script will rebuild rTorrent against your latest libraries.

## How to Access

Once rTorrent has been installed, you can either choose to access and command rTorrent from either the web-gui (ruTorrent) or the curses gui. The curses gui is considered "advanced" and not many users will opt for this option.

### ruTorrent
In order to access the ruTorrent GUI, you'll first need to install it with `box`. Once you have installed it,  the web-gui of rTorrent can be found at `https://<hostname.ltd>/rutorrent`.

### Command Line

rTorrent runs as a daemon thanks to the screen application. Thus, in order to connect to the curses UI, you simply need to attach to the running screen. For all users, the rtorrent screen is simply named rtorrent. In order to connect to the rtorrent screen session, simply issue the command:
```bash
screen -r rtorrent
```
When done with the session, do not quit rTorrent. Rather, you should detach from the screen, so that rTorrent remains running in the background.

To do this, press the keys: `ctrl-a, ctrl-d`

You will be returned to the command line and you screen will remain running in the background.

For help on using the curses UI, check the rTorrent user guide: here.

## Service Management
The systemd script for rTorrent can be found at
```bash
/etc/systemd/system/rtorrent@.service
```
As a multiuser script, you must call it with the username to change the service status for.
<!--DOCUSAURUS_CODE_TABS-->
<!--Start-->
```bash
systemctl start rtorrent@<username>
```
<!--Stop-->
```bash
systemctl stop rtorrent@<username>
```
<!--Restart-->
```bash
systemctl restart rtorrent@<username>
```
<!--Enable-->
```bash
systemctl enable rtorrent@<username>
```
<!--Disable-->
```bash
systemctl disable rtorrent@<username>
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

The configuration of rTorrent is a file that lives in your home folder called .rtorrent.rc. There are not many reasons you should need to edit this file (and please note that many of the options should not be reconfigured (such as: ip, bind, network.scgi.open_local), otherwise, you may find that your client has stopped working.

### Default Download Location

Files downloaded by rTorrent will be placed in `~/torrents/rtorrent` by default. You can change this behavior by changing the line: `directory.default.set` in the file `~/.rtorrent.rc`. Ensure you restart rtorrent after making any changes to the file `.rtorrent.rc` in order to reload any changes.

### Web Download Location

Similarly, any files in the default download directory (`~/torrents/rtorrent`) will be available for browsing via the web server at the location: `https://<yourhostname.ltd>/rtorrent.downloads`

## Connect to other clients

Generally speaking, most of the other clients connect to rTorrent, not the other way around. There are typically two ways to connect a client to rTorrent: RPC mounts and Unix Sockets.

### Unix Sockets
Rather than exposing a local, insecure TCP port the rTorrent client creates a socket that can only be listened to by your own user.

This socket lives at:

`/run/<username>/.rtorrent.sock`

If you were inputting this to a program, you need to prepend the unix:// protocol designation, thus your final socket may look something like:

`unix:///run/liara/.rtorrent.sock`

### RPC Mounts

An RPC mount is an interface created by the webserver (nginx) to speak directly to the unix socket on the system. There are currently two ways to connect to the RPC socket: through ruTorrent or through an RPC layer created for your user by the webserver. In all cases, the mount is protected by basic nginx authentication measures to protect the mount from unauthorized access. To connect to the RPC mount from a local client use the following details:

```plaintext main
Host: 127.0.0.1
Port: 443
SSL: ON
Username: <your username>
Password: <your password>
RPC Mount: /<username> OR /rutorrent/plugins/httprpc/action.php
```

Both of the RPC mounts behave exactly the same, though if you're on a mobile connection (i.e. for Transdrone), it may be preferrable to use the ruTorrent plugin version of the mount as it will probably be a bit more friendly to your data usage. The nginx mount point was simply created to provide an easy to remember way to provide access to your rTorrent slot.

### Transdroid/Transdrone

Should you wish to connect your rTorrent instance to the mobile application Transdrone, use the following settings:

```plaintext main
Name: rtorrent (or whatever you like)
Server type: rtorrent
IP or host name: <the hostname of your server>
Username: <your username>
Password: <your password>
Advanced Settings:
    SCGI mount point: /rutorrent/plugins/httprpc/action.php OR /<username>
    Use SSL: ON
```

::: note Note
You may prefer to access the SCGI mount from the ruTorrent plugin over a mobile connection as the httprpc plugin has been configured to utilize compression and therefore, less data.
:::
