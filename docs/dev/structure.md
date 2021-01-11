---
id: structure
title: The project's structure 
sidebar_label: Structure
---

This sub-chapter goes over what each of the folders in swizzin contains, why the contents are structured the way they are, and what the general philosophy behind the mechanisms that use them is.


## Scripts
These scripts are to be called directly, and offer no functions.

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

This directory contains the script that will be executed when `box upgrade <app>` is executed, which will directly invoke `scripts/upgrade/<app>.sh`

The aim of the scripts in here is to ensure that applications get upgraded across versions when one of the following scenarios is true
- Application is **not** managed through the `apt` package manager
  - e.g. `lounge` is installed via `npm`
- There is not built in updater in the application
  - e.g. `lounge` has no "update" button in the application itself
  - however `radarr` has a built-in self-updater, so no `upgrade` script is necessary
- A new major version needs to be opted-in by the user
  - e.g. the Sonarr v2 to Sonarr v3 migration has to be made by user's choice, and the change requires a different apt package too

Before any of the upgrade scripts are ran, the `box update` procedure is done.

### Update
`scripts/update/`

**All scripts in this directory will be executed in alphabetical order when `box update` is ran**. 

These scripts are meant to ensure that older installations behave the exact same way that a fresh installation would. They do not upgrade packages themselves at all. They are purely maintenance scripts ran to update the installation.

These scripts can contain non-application-specific maintenance changes as well.

### Logging
`scripts/logging`

## Sources
`sources`

This directory contains a lot of helper scripts in general.

You can read what each of these functions does in the [functions chapter](functions.md)

### `globals.sh`
Contains everything that is taken for granted in all the scripts above.

This script gets ran as the first thing when `box` functions are triggered, and when running the `setup.sh`

These scripts need to have all of their functions and variables `export`ed so that they are accessible everywhere without them needing to be `source`d in.

### Functions
`sources/functions`

This directory contains all reusable helper functions.

These can be organised by applications, or by specific purposes.

Please make sure to create adequate documentation about the parameters, outputs and return codes.

