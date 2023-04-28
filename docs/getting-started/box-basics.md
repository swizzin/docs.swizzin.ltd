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
When run alone, `box` will start a guided tutorial with install and remove options for availible applications. This option is intended for unfamiliar Swizzin or Linux users. Most users will find `install`, `remove` and `upgrade` to be more viable options, after the initial setup procress.

Syntax:
```bash
box
```

## help
This function provides basic information and usage examples for all availible box commands.

Syntax:
```bash
box help
```

## install
This function installs applications on the server. If you need help with specific commands, please see the `Applications` section on the left side of the website. You can specify multiple applications to install at the same time.

Syntax:
```bash
box install rtorrent deluge
```

## remove
This function removes applications from the server. If you need help with specific commands, please see the `Applications` section on the left side of the website. You can specify multiple applications to remove at once.

Syntax:
```bash
box remove rtorrent deluge
```

## update
This function updates to the latest swizzin release, and applies configuration fixes to already installed applications. This typically fixes issues with the install procress. It is often a requirement for upgrading applications or fixing broken aspects of the seedbox solution.

Note: It does _not_ upgrade versions of applications, please see `upgrade` below.

Syntax:
```bash
box update
```

## upgrade
This function upgrades a specific application to a newer version. It can also recompile applications without versions to install the latest fixes. Only some applications have upgrade scripts and their name is required to upgrade them. You can view the specialized list on GitHub. https://github.com/swizzin/swizzin/tree/master/scripts/upgrade

Syntax:
```bash
box upgrade nginx
```

## adduser
This function adds additional users to your server. Please note, only the primary user has access to a significant portion of applications.

Syntax:
```bash
box adduser faithfulfriend
```

## deluser
This function removes a user from your server. Please proceed with caution because all of the user data will be destroyed.

Syntax:
```bash
box deluser exgirlfriend
```

## chpasswd
This function changes a user password. `chpasswd` will change the password for SSH, FTP, HTTP, Deluge, and most if-not-all applications. Please specify `chpasswd` followed by the username you wish to change the password.

Syntax:
```bash
box chpasswd forgetfulfriend
```

## list
This function lists and describes all applications currently available for installation.

Syntax:
```bash
box list
```

## test
This function is intended for swizzin developers. It will perform sanity checks about the status of installed applications.

Syntax:
```bash
box test # Tests all installed apps
box test sonarr radarr # Tests only specified app(s)
```
