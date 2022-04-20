---
id: box-basics
title: Getting started with box
sidebar_label: Getting started with box
---

`box` is a homegrown application that will help you install applications on your server and manage their services.

## Introduction
In order to use the installer and management functions on your slot, you'll need to use the included management script: `box`.

`box` has several functions, which we'll go over here:
- help
- install
- remove
- update
- upgrade
- adduser
- deluser
- chpasswd
- list
- test

:::caution Warning
Since `box` is considered a complete box management script, its functions require root/sudo permissions to execute. The guide will assume that you're either a root user or prefixing the commands with `sudo`
:::

## box
When run alone, box will start a graphical user interface with install and remove functions similar to the initial setup. This is a good option if you are new to swizzin and/or linux, but once you get familiar with the system, `install` and `remove` are more powerful options.

Syntax:
```bash
box
```

## help
The function of help is basic: provide you usage details on how to use box and the commands available to you.

Syntax:
```bash
box help
```

## install
The function used to install applications from the server. If you need help with specific commands, they are available on the application sub-pages here. You can specify as many applications is you like here.

Syntax:
```bash
box install rtorrent deluge
```

## remove
The function used to remove applications from the server. If you need help with specific commands, they are available on the application sub-pages here. You can specify as many applications is you like here.

Syntax:
```bash
box remove rtorrent deluge
```

## update
This function can be used to update your swizzin repository. There are a number of update scripts that trigger each time this command is called -- these will typically help fix issues or upgrade your current installation to a new method of handling the application in question.

Syntax:
```bash
box update
```

## upgrade
This function can be used to upgrade a specific application to a newer version or recompile an application which was compiled during install. Only selected applications have upgrade scripts. You can check which scripts have `upgrade` components by looking in the `/etc/swizzin/scripts/upgrade` directory. Call them directly by name.

Syntax:
```bash
box upgrade nginx
```

## adduser
The function used to add a secondary user to your server. Please note, only the master user has access to a significant portion of the included applications

Syntax:
```bash
box adduser faithfulfriend
```

## deluser
The function used to remove a user from your server. All of the user's data will be destroyed, please use with caution.

Syntax:
```bash
box deluser exgirlfriend
```

## chpasswd
Use this command when you'd like to change your password. `chpasswd` will change the password for SSH, FTP, HTTP and Deluge. You must specify a username as well.

Syntax:
```bash
box chpasswd forgetfulfriend
```

## list
This function lists the applications currently available for installation and a quick description of the application.

Syntax:
```bash
box list
```

## Test
You can use this in order to perform a sanity check about the status of installed applications. Primarily intended for CI, but might as well let you know.

Syntax:
```bash
box test # Tests all installed apps
box test sonarr radarr # Tests only specified app(s)
```