---
id: structure
title: The project's structure 
sidebar_label: Structure
---

This sub-chapter goes over what each of the folders in swizzin contains, why the contents are structured the way they are, and what the general philosophy behind the mechanisms that use them is.

## Lock-file structure

A lot of swizzin logic **depends** on lockfiles and script files following a naming convention. Scripts will be called `<app>.sh` and their lockfiles will be called `/install/.<app>.lock`. This means that the naming of these **must** stay in sync in order for swizzin to function correctly. Plase bare this in mind. Exceptions to this rule are explained in the chapters where they apply.

## Scripts
These scripts are to be called directly from their respective `box` calls. Each category is expected to follow the same general structure.

**Please familiarise yourself with the "rules of thumb" of the code that is present around the code you are making.**

### Install
`scripts/install/`

This directory contains the script that will be executed when `box install <app>` is executed, which will directly invoke `scripts/install/<app>.sh`.

The script should generally do the following, if it applies.

- Gathering information from the user required for installation
  - Please make sure to expose an option to skip these through defining environment variables to provide the answers, and checking their presence. These will need to also be documented.
- Checking incompatibilities
  - Possibly migrate from previous major versions/forks of the same application, such as Sonarr v2 -> v3.
- Installing dependencies
- Installing the application (through `apt`, a binary or a script)
- Handling user addition in case the app is Multi-user compatible.
- Creating and starting the `systemd` service
- Installing an nginx config for the application
  - _Note: Please make sure to print the application's port to the user when nginx is not installed!_
- **Creating the lock for the application**

It is _heavily_ encouraged to compartmentalise your code into bash functions which are then executed in sequence at the bottom of the file. This provides a better visual segmentation of the code, as well as a better semantic separation which helps with maintenance.

### Remove
`scripts/remove/`
This directory contains the script that will be executed when `box remove <app>` is executed, which will directly invoke `scripts/remove/<app>.sh`

The script should generally do the following, if it applies.

- Remove application from package managers
- Stop and remove the service
- Remove application files (e.g. from `/opt`)
- **Removing the lock for the application**

**Please note**: Removing the application's user data/config is something we are currently debating and assessing on a per-application basis. 

### Nginx
`scripts/nginx/`

This directory holds scripts that enable an application to work with the `nginx` reverse proxy.

There are two times this can be triggered, so please take that into account when writing these scripts
- When nginx is already installed and an application is being installed via `box install app`
- After an application is already installed and `nginx` is being via `box install nginx`

This means that all changes to an app's configuration which is require for the reverse proxy to function, needs to be in here, and not in the installer.

**Handle the nginx reload outside of these scripts**. If you add nginx reloads, this would mean that while the `nginx` installer is running, it will have to reload after every config is installed, which is a bit unnecessary.

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
  - e.g. the Sonarr v2 to Sonarr v3 migration has to be made by user's choice, and additional functionality needs to be executed to complete a succesful migration between the version.

Before any of the upgrade scripts are ran, the `box update` procedure is done.

### Update
`scripts/update/`

These scripts intend to make sure that the user's installation is up to spec with what we expect in our code, so that we do not need to keep track of all the different changes and the history of the package in all the scripts above.

**All scripts in this directory will be executed in alphabetical order when `box update` is ran**. It is therefore required that scripts here have their "main functionality" wrapped in `if` statements which verify if the script should run.

Each update statement is required to have the following implemented:
- Conditional checks whether execution is necessary (exceptions apply, but discussed at PR-time)
  - In general, this would usually consist of
         1. Top-level check for whether an application is installed
         2. Per-segment check whether the conditions for the update are present
- A comment describing the condition for the update to trigger
  - Any further context should be provided 
- Handled echos
  - `echo_info` for the start of an update segment and `echo_success` at the end of it
  - An `echo_log` in case the update is being skipped. 

These scripts are meant to ensure that older installations behave the exact same way that a fresh installation would. They do not upgrade packages themselves at all. They are purely maintenance scripts ran to update the installation.

These scripts can contain non-application-specific maintenance changes as well.

While not exactly kosher, you _can_ use this folder for other scripts that should run every time `box update` or `box upgrade` is triggered, and also manually execute those from other parts of the code wherever that would apply (e.g. the apt dependencies update file which is used in `setup.sh`)

<!-- 
### Logging
`scripts/logging`
-->

## Sources
`sources`

This directory contains a lot of helper scripts in general.

You can read what each of these functions does in the [functions chapter](functions.md)

### `globals.sh`
Contains the sourcing of all the functions that are "taken for granted" in all the scripts above.

This script gets ran as the first thing when `box` functions are triggered, and when running the `setup.sh`. In case you're running `box`-less, you will need to source this into your shell before running your scripts.

All of the files mentioned in this file **must** have their functions and variables `export`ed so that they are accessible in the parent shell.

### Functions
`sources/functions`

This directory contains all reusable helper functions. All the files within here are expected to be `source`d (often done via the bash `.` alias). This means that all the files here should **only** contain functions which are re-used later, and that these files do not execute anything when being sourced.

These can be organized by applications, or by specific purposes.

Please make sure to create adequate documentation about the parameters, outputs and return codes.

If you are introducing new functions or changing exisitng ones, please make sure to **thoroughly** test the functions, and confirm with the maintainers that they function properly.

Please read the further [function documentation here](functions.md) and also the comments and code itself in the other functions. In case you have any questions about whether something is already implemented, feel free to ask!
