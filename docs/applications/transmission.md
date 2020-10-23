---
id: transmission
title: Transmission
sidebar_label: Transmission
---

Transmission is a cross-platform Torrent client.

## Initial Setup

Simply run this command
```bash main
box install transmission
```

If you are on Ubuntu, you will be offered to use the PPA sources to take updates straight from the transmission team.

### Install options

None of these are required for you to define if you want an easy install. If you would like to do something custom, then here are some options for you.

:::danger Make sure you know what you're doing!
**Please note that it is difficult for us to support these options as they are custom for each install**

None of the options are sanity-checked on install so setting something wrong could break your installation.

Again, you do not need to set these if you don't know what you're doing.
:::

There are a couple options you can set **before** installing transmission through export. 

The names of the variables correlate to the similar equivalent variables available here on the Transmission configuration docs page https://github.com/transmission/transmission/wiki/Editing-Configuration-Files

If you'd like to use one of these, run `export option=value` **before** running the install command.

The following is an example of how this would look

```bash main
export download_dir='torrents/downloads'
```

For the directory options, the installer will create these automatically (e.g. `mkdir -p /home/${user}/${download_dir}`, etc.)

Please do note that in the event you have nginx installed, some of these settings will be overridden and the application will pass through the `/transmission` endpoint on your domain/IP.

- `download_dir`:
  - Default: `transmission/downloads`
- `incomplete_dir_enabled`
  - Default: `false`
- `incomplete_dir`
  - Default: transmission/incomplete'
- `rpc_whitelist_enabled`
  - Default: `0`
- `rpc_whitelist`
  - Default: `'*.*.*.*'`
- `rpc_port`
  - Default: Next unused port after 9091
- `peer_port`
  - Default: Next unused port after 51314
- `rpc_password`
  - Default: User's system password

## Service management

Transmission has a process for each user, and this is how you can manage it

<!--DOCUSAURUS_CODE_TABS-->
<!--Start-->
```bash
sudo systemctl start transmission@<user>
```
<!--Stop-->
```bash
sudo systemctl stop transmission@<user>
```
<!--Restart-->
```bash
sudo systemctl restart transmission@<user>
```
<!--Enable-->
```bash
sudo systemctl enable transmission@<user>
```
<!--Disable-->
```bash
sudo systemctl disable transmission@<user>
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Connecting to Transmission Remote

<img src="https://camo.githubusercontent.com/262dda501114cb91dceee1a738b6e3679cf37160/687474703a2f2f692e696d6775722e636f6d2f584262463456682e706e67" alt="Transmission Remote" width="500"/>

Transmission [has a desktop remote application available](https://github.com/transmission-remote-gui/transgui/releases), as well as a couple mobile remote clients for both Android [(1)](https://play.google.com/store/apps/details?id=net.yupol.transmissionremote.app&hl=en) [(2)](https://play.google.com/store/apps/details?id=com.neogb.rtac&hl=en) and [iOS](https://github.com/alcheck/transshift)

To connect to your session, use the following parameters:
- Host: _`<your domain/IP>`_
- RPC URL: `/transmission/rpc` (Default usually)
- Port: **`443`**
- Username: _`your normal username`_
- Password: _`your normal password`_
- SSL: **Yes**
- Validate SSL: **??**
  - _(Depends if you have LetsEncrypt or an other non-self-signed SSL solution)_

## Troubleshooting

### My speeds to private trackers are slow
Please ensure that your peer ports are open. If you're not sure, change it to a different port and restart Transmission.

### It won't start
Please try running `transmission-daemon` in your terminal with the correct flags to keep it in the foreground, and watch what the output says. 