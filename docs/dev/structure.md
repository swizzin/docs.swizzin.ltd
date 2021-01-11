---
id: structure
title: Understanding the project structure and 
sidebar_label: Structure
---

This sub-chapter goes over what each of the folders in swizzin contains, why the contents is structured the way it is, and what the general philosophy behind the mechanisms that use them is. 

## Scripts


### Install
`scripts/install/`

This directory contains the script that will be executed when `box install <app>` is executed, which will directly invoke `scripts/install/<app>.sh`

### Remove
`scripts/remove/`
This directory contains the script that will be executed when `box remove <app>` is executed, which will directly invoke `scripts/remove/<app>.sh`


### Nginx
`scripts/nginx/`

This directory holds scripts that enable an application to work with the `nginx` reverse proxy.

There are two times this can be triggered, so please take that into account when writing these scripts
- When nginx is already installed and an application is being installed via `box install app`
- After an application is already installed and `nginx` is being via `box install nginx`

This means that all changes to an app's configuration which is require for the reverse proxy to function, needs to be in here, and not in the installer.

**Handle the nginx reload outside of the scripts here**

### Upgrade
`scripts/upgrade/`

### Update
`scripts/update/`

### Logging
`scripts/logging`

## Sources and 

### `globals.sh`
Contains everything that is taken for granted in all the scripts above.

These scripts need to have all of their functions and variables `export`ed so that they are accessible everywhere without them needing to be `source`d in.

### Functions
`sources/functions`

This directory contains all reusable helper functions.

These can be organised by applications, or by specific purposes.

Please make sure to create adequate documentation about the parameters, outputs and return codes.

