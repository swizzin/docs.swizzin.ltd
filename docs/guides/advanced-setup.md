---
id: advanced-setup
title: Setting up swizzin with advanced options
sidebar_label: Advanced Setup
---

Below are the many ways you can use the installer to get exactly toi where you need to be, fast.

::: warning
Please note that not all the code has been modified yet to be compatible with the unattended setup. If you find some application that is breaking the unattended setup or has no configuration flags, please raise a [GitHub issue](https://github.com/liaralabs/swizzin/issues/new/choose).
:::

## Examples
Quickly get a local environment with a user installed, using your local fork clone instead of upstream
```bash
git clone <your fork>
bash setup.sh --user tester --pass tester123 --local
```
Get a quick transmission installation
```bash
git clone <your fork>
arg_transmissionsource="Repo" bash <(curl -s  https://raw.githubusercontent.com/liaralabs/swizzin/master/setup.sh) --user tester --pass tester123 transmission
```

## Options
## `--user`
  * Takes `username` as positional argument (i.e. `--user username`)
  * Specify the `username` of the master user for swizzin to create.
  * Validity of this is not checked, please perform functional checks before.
  * _Using this implies using [`--unattend`](#--unattend)_
## `--pass`
  * Takes `password` as positional argument (i.e. `--pass password`)
  * Specifying the `password` of the master user for siwzzin to create
  * Validity of this is not checked, please perform functional checks before.
  * _Using this implies using [`--unattend`](#--unattend)_
## `--local`
  * Instead of cloning the repository to `/etc/swizzin/`, it will link the folder where `setup.sh` is located to `/etc/swizzin`.
  * If you (re)move the folder where `setup.sh` was sitting, the link will break, and so will your `box` commands etc.
## `--env`
  * Takes a path to file as positional argument (e.g. `--env /path/to/env/file.env`)
 /path/to/env/file.env
  * Ingests variables and settings from a file for use later through the installer.
  * Please see the [Env File](#env-file) Chapter below
  * _Using this implies using [`--unattend`](#--unattend)_
  * If `--env` is specified after other arguments, contents of env file will override the arguments. If arguments are specified after the `--env file`, they will override the content of the env file.
    * if you do `bash setup.sh --env /path/to/file.env --user otheruser`, all of the env file contents will be ingested, and then the user will be overridden to `otheruser`
    * The only exception to this are the packages specified on the CLI. If they are specified after the `--env`, they will get added to the list.
## **Passing environment variables**
  * Instead of using [the `--env` flag](#--env), you can pass environment variables either through...
    * `export` within your shell before running `bash setup.sh`
    * you can use something like `var1=value var2=value bash setup.sh`
  * Same options are available as are for the env file.
## `--unattend`
  * Disables interactive queries within the `setup.sh` script.
  * Validity of this is not checked, please perform functional checks before.
  * **Does not disable interactive queries in install packages, as those will need per-variable declaration.**
## `[package(s)]`
  * Any other arguments are treated as a name of a package for swizzin to install.
  * Validity of this is not checked, please perform functional checks before.

## Env file
You can use a file with recorded variables for `setup.sh` to use, instead of using the CLI arguments/variables. Please see the `--env` option in the chapter above.

An example file is included in the root of the git repo. Please note that `--local` and the install packages take a slightly different format in the env file than the options.

If a package has Install options, you can specify those in this file. Please note that these options can change over time. An example of these can be found [here](https://docs.swizzin.ltd/applications/transmission#install-options), or in the source code. At the time of writing, not all packages support these options, and support for this will eventually come together.

```bash
# SETUP.SH OPTIONS
## master user setup
user=test
pass=test123
## symlink local swizzin folder to /etc/swizzin/ instead of cloning from upstream
localInstall=true
## packages to install separated by colons
packagelist=nginx:panel:transmission
# PACKAGE SPECIFIC OPTIONS
## transmission flags (https://docs.swizzin.ltd/applications/transmission#install-options)
arg_transmissionsource="Repo"
download_dir="customdir/ddoowwnnllooaaddss"
incomplete_dir="customdir/iinnccoommppllete"
```