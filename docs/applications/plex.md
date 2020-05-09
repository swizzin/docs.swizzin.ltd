---
id: plex
title: Plex
sidebar_label: Plex
---

Plex media server allows you to aggregate all your personal media and access it anywhere you go.

## Initial Setup

First you must connect to your slot via ssh. If you need help connecting to the server, please read the help article [here](../getting-started/how-do-i-connect.md).

Installing Plex on your slot is easy. Simply issue the following command:

```sh
sudo box install plex
```

### Automatic claiming

As of v1.6.0, swizzin now supports claiming your server during the installation. When you install Plex, you'll be greeted by the prompt:

```wrap
Please visit https://www.plex.tv/claim, login, copy your plex claim token to your clipboard and paste it here. This will automatically claim your server! Otherwise, you can leave this blank and to tunnel to the port instead.
```

Simply visit [the link](https://www.plex.tv/claim) to grab your claim code and paste it into the terminal. After Plex is installed, the script will use the claim code to grab a valid token for your user and apply it to your server.

If for some reason you didn't claim during installation, you can still run the command manually from SSH.

First we must source the Plex functions called during installation:

```bash
. /etc/swizzin/sources/functions/plex
```

Then we can call the function directly:

```bash
claim=<your plex.tv/claim code>
claimPlex ${claim}
```

The function will run and if all goes well, you'll receive a `success` message stating that your server as been claimed under your account.

### Manual claiming

After installation, you'll need to create an SSH Tunnel to your server to appear as if you're using the same network as your Plex instance.

If you've gotten this far, I'll assume you don't need any reminders on how to connect to the server via SSH ;) However, creating an SSH tunnel takes a bit more effort than simply creating an SSH Connection.

<!--DOCUSAURUS_CODE_TABS-->
<!--Linux / OS X-->
::: panel 
1. Open a command prompt or terminal
2. Enter the command: `ssh <username>@<hostname.ltd> -L 8888:localhost:32400`
3. Open your browser window and navigate to `http://localhost:8888/web`
4. The browser will connect to your Plex server and let you know that there is an unclaimed server on your network.
:::
<!--Windows-->
::: panel
1. Open up your PuTTY client again.
2. Under gateway, enter the hostname of your server, e.g.: `yourhostname.ltd`
3. Configure the tunnel:
    1. On the left hand side, navigate to `Connection > SSH > Tunnels`
    2. Under source port, enter `8888`
    3. Under destination, enter `localhost:32400` 
    4. Click `Add`
4. Connect to the server by clicking `Open`
5. PuTTY will prompt you for your username and password like a regular SSH session.
6. Once connected, open your browser and navigate to `http://localhost:8888/web`
7. The browser will connect to your Plex server and let you know that there is an unclaimed server on your network.
:::
<!--END_DOCUSAURUS_CODE_TABS-->

## How to Access

Plex is hard-coded to use port 32400 on each and every installation.

You can access your plex instance directly at `https://yourhostname.ltd:32400/web`

## How to keep Plex up-to-date

An upgrade helper script has been included in the box scripts. You can call it with:

```bash
sudo box upgrade plex
```

This script is a simple wrapper for the [Update Plex script by MrWorf](https://github.com/mrworf/plexupdate). By default of the `plexupdate` installer, the script files will be installed to `/opt/plexupdate`. If you change the location of the update scripts, please remember! The `box upgrade` command needs only to be used once -- after the first time, the update script will be installed locally and will run according to the settings you set during the installation of the updater script.

After running the `box upgrade plex` command, the `box upgrade plex` will no longer appear to do anything -- you'll need to call the `plexupdate.sh` script manually if you wish to trigger an update outside of the periods defined by the cron jobs.

## Service Management

The systemd service installed by the plex package is the default one pushed by the maintainers of the Plex debian packages.

```plaintext
/lib/systemd/system/plexmediaserver.service
```

If you intended to create your own service or modify this one, please create a secondary version in `/etc/systemd/system` as updates to the Plex package may overwrite any changes to the version controlled default file.

<!--DOCUSAURUS_CODE_TABS-->
<!--Start-->
```bash
sudo systemctl start plexmediaserver
```
<!--Stop-->
```bash
sudo systemctl stop plexmediaserver
```
<!--Restart-->
```bash
sudo systemctl restart plexmediaserver
```
<!--Enable-->
```bash
sudo systemctl enable plexmediaserver
```
<!--Disable-->
```bash
sudo systemctl disable plexmediaserver
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Connect to other clients

If you need to link your Plex instance to another application, such as Sonarr or Tautulli, you can use the following details:

```plaintext main
Host: 127.0.0.1
Port: <your plex port>
```