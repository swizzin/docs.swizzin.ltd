---
id: rtorrent
title: rTorrent
sidebar_label: rTorrent
---

rTorrent is a console-based BitTorrent client, based on the libTorrent libraries for Unix.

## Initial Setup

First you must connect to your slot via ssh. If you need help connecting to the server, please read the help article [here](../getting-started/how-do-i-connect.md).

Installing rTorrent is easy. Simply issue the following command:

```bash main
sudo box install rtorrent
```
This command will compile and configure rTorrent for use on your slot.

Before installation, you'll receive a prompt asking you which version of rTorrent you'd like to install. These version tags correspond with recent releases supported for your OS the the `feature-bind` branch. The `feature-bind` branch is considered the unstable head of development on GitHub. This branch is not guaranteed to compile properly and may fail. If it does, please consider reinstalling rTorrent with one of the released versions.

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
In order to access the ruTorrent GUI, you'll first need to install it with `box`. Once you have installed it, the web-gui of rTorrent can be found at `https://<hostname.ltd>/rutorrent`.

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
As a multi-user script, you must call it with the username to change the service status for.
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

If you were inputting this to a program, you need to pre-pend the unix:// protocol designation, thus your final socket may look something like:

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

Both of the RPC mounts behave exactly the same, though if you're on a mobile connection (i.e. for Transdrone), it may be preferable to use the ruTorrent plugin version of the mount as it will probably be a bit more friendly to your data usage. The nginx mount point was simply created to provide an easy to remember way to provide access to your rTorrent slot.

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

:::note Note
You may prefer to access the SCGI mount from the ruTorrent plugin over a mobile connection as the httprpc plugin has been configured to utilize compression and therefore, less data.
:::

## Troubleshooting

:::tip 
You can always also try the [general troubleshooting tips written in our guide](/guides/troubleshooting). They might or might not apply, but asking these questions can often make you understand what is under the hood better and help you find what needs to be fixed. It's always worth a shot!
:::

Please remember: `rtorrent` and `r`**`u`**`torrent` are two _very_ different things.

Rtorrent is the process doing the "work", and r**u**torrent is a WEB frontend which runs in the PHP environment, which talks to rtorrent. These two need to be troubleshot very differently, and if one is down it does not mean the other os malfunctioning.

### XYZ Plugin will not work

If you get a message like `XYZ: Plugin will not work. rTorrent user can't access external program (<ABC>)`, you should be able to run the following

```bash
box install <ABC>
```

If it is not available, please google the message above and see what you need to install.

### rtorrent doesn't start up

You might get a good look at what is causing the service to fail by simply running `rtorrent` while logged in as the user you're troubleshooting for. You can also check `systemctl status rtorrent@<user>`

Half the time time, the issue stems from either an invalid configuration in the `.rtorrent.rc` file, or file/directory permissions of the resources rtorrent is attempting to access.

The other half of the times, it might be the case that your rtorrent has not stopped properly and has left behind the `rtorrent.lock` file. If this file is present, it will prevent any rtorrent process from starting.

To troubleshoot the above issues, you can try our child-tested and mother approved rtorrent troubleshooting dance.

:::caution Disclaimer
Please note that while this won't necessarily fix your setup straight away, it will help you expose the culprit of the issue. If you find something that is out of line, you'll have a lead.
:::

```bash
# !!! This dance assumes you are logged into the console as the user who is having the issues.
# If necessary, use the su or sudo su commands to switch he user.

# Stop rtorrent if it is currently running in some odd state.
sudo systemctl stop rtorrent@$USER
#Check there are no screen sessions running for rtorrent
screen -ls
# Verify there is no other random rtorrent process running
ps x | grep rtorrent
# Check if the lock file exists
find ~ -name "*rtorrent.lock"
# Remove the file that prevents the startup
rm ~/.sessions/rtorrent.lock # Or whatever the path was that returned above
#Verify that rtorrent can start successfully
rtorrent
# Quit the rtorrent 
# <Press CTRL+q>
# Start the rtorrent service
sudo systemctl start rtorrent@$USER
# check the output
systemctl status rtorrent@$USER
# See if you can attach the screen with rtorrent
screen -r rtorrent
# !!! DETACH from the screen
# <Press CTRL+a (release) d>
```
Below are some steps to resolve common issues that arise in the above
#### `error while loading shared libraries: libtorrent.so.19` or some other number at the end

This usually means you are missing the right version of `libtorrent` for the version of `rtorrent` you are trying to run.

Please check `apt policy libtorrent19` (or `libtorrent21` or whatever other number you got above) to confirm whether you have the right library installed.

If not, run `box upgrade rtorrent` and choose whichever version you desire. This should fix your issues. If you still have problems, please check the swizzin logs (see big [troubleshooting guide](guides/troubleshooting.md)).

### The Web UI is broken

You might want to look into troubleshooting your NGINX+PHP setup in this case.

Please consult the [Troubleshooting guide](/guides/troubleshooting) further.

### My disk is full?
Are you seeing this error?

![Rutorrent disk full error](https://i.imgur.com/NABrtlz.png)

Please fix your [`quota` installation](/applications/quota).
