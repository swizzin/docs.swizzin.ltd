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

After you issue this command, you'll receive the following notice:

```plaintext main wrap
Please visit https://www.plex.tv/claim, login, copy your plex claim token to your clipboard and paste it here. This will automatically claim your server! Please note, you will be unable to tunnel to your slot later if you do not claim it now.
```

It's not necessary to claim your server now, but it **will** make your life a bit easier after installation, as you can avoid having to claim your server after it's setup.

For convience sake, the link to grab a claim token is [here](https://www.plex.tv/claim). If you're not logged into Plex, the page will ask you to login. Once you're logged in, you'll be redirected to a page with a claim token on it. Copy this to your clipboard and paste it back in the terminal.

::: tip Tip
On Windows, under PuTTY, you can paste with a right-click.
On Linux, you'll need to use Control-Shift-V.
:::

Installation will take a few moments. Once it's done, you'll receive a notice that the installation is complete and the installer will let you know where you can access the application. (e.g. `https://xl.swizzin.ltd:7777/web`). 

## How to Access

As above, the Plex installer will output your personal port access at the end of the installation. Since Plex doesn't have outstanding support for reverse proxies, access to Plex will be through the port it was setup on. For instance, `7777`. To access the application directly, you can use the link `https://serverhostname.ltd:port/web`, or, for example: `https://xl.swizzin.ltd:7777/web`

::: tip Tip
If you forgot your personalized port, you can always access Plex from the "Plex" link on your dashboard, or you can re-discover your port programatically with the command `cat ~/.install/.plex.lock`. However, as long as your server has been claimed, it should always be viewable from your Plex Web dashboard at https://app.plex.tv/dashboard
:::

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

## Configuration

::: caution
You are welcome to change most of the settings under the server configuration; however, **you should never touch the Plex remote port, nor the manual port mapping mode under the "Remote Access" settings. Doing so will likely result in you losing access to your plex instance.**
:::

### Libraries

During the setup of Plex, we automatically configure two media Libraries for you. These correspond to two directories in your home folder:

- TV Shows > `~/media/TV Shows`
- Movies > `~/media/Movies`

Furthermore, if you are needing to create a custom folder to your Library (in the instance of rclone or plexdrive), you will find that your entire home directory has been mounted under the /data folder of your Plex instance.

### Manual claiming

If you skipped claiming of your Plex server during installation, you can still claim it manually, but you'll need to create an SSH Tunnel to your server to appear as if you're using the same network as your Plex instance.

If you've gotten this far, I'll assume you don't need any reminders on how to connect to the server via SSH ;) However, creating an SSH tunnel takes a bit more effort than simply creating an SSH Connection.

<!--DOCUSAURUS_CODE_TABS-->
<!--Linux / OS X-->
::: panel 
1. Open a command prompt or terminal
2. Enter the command: `ssh <username>@<hostname.ltd> -L 8888:localhost:<plexport>`
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
    3. Under destination, enter `localhost:<plexport>` 
    4. Click `Add`
4. Connect to the server by clicking `Open`
5. PuTTY will prompt you for your username and password like a regular SSH session.
6. Once connected, open your browser and navitage to `http://localhost:8888/web`
7. The browser will connect to your Plex server and let you know that there is an unclaimed server on your network.
:::
<!--END_DOCUSAURUS_CODE_TABS-->

## Connect to other clients

If you need to link your Plex instance to another application, such as Sonarr or Tautulli, you can use the following details:

```plaintext main
Host: 127.0.0.1
Port: <your plex port>
```