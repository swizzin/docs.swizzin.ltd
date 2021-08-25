---
id: setup
title: Getting a developer setup
sidebar_label: Setup
---

## VM
We highly suggest you use a virtualized environment to test your swizzin set up. It is extremely convenient to have this isolated from the rest of your system, and be able to discard and initialize a system within minutes.

### Multipass
:::tip Sausage's preferred development setup
:::
1. Enable virtualization OS and BIOS side
1. [Install multipass](https://multipass.run)
1. Run `multipass shell` to start a default primary VM and join the shell. 
2. Get swizzin repo on your VM
   1. You can mount it wherever you want (your user directory should be auto-mounted into `/home/ubuntu` if you're using the `primary` instance)
   2. You can clone it wherever you want
3. Install swizzin with `bash /path/to/setup.sh --local`

### LXD

**TODO**

### Parallels
1. Download your image
2. Create a VM
3. Run through the OS install
4. Get swizzin repo on your VM
   1. You can mount it wherever you want
   2. You can clone it wherever you want
5. Install swizzin with `bash /path/to/setup.sh --local`
6. **Make a snapshot**

## Editor and source code

We highly suggest you keep your code on your host and mount it into your VM so your changes are kept when you throw away VMs, and so that you need to set up your git environment only once

Our development setup is basically made for VSCode/Codium

### Plugins

**TODO**
:::caution
Please see contributors.md in the main repo while this is under development
:::

## Installation

This will install swizzin and as part of the setup, symlink your folder to `/etc/swizzin/`. This is useful if your virtualization auto-mounts from your host. 
```bash
bash /path/to/setup.sh --local
```

You can also already have the swizzin folder mounted/cloned in `/etc/`, this option will switch to use the `.dev.lock` option. This is useful if you're manually mounting the folder from your host, or have cloned directly into your VM.
```bash
bash /etc/swizzin/setup.sh --local
```
### Updating mechanism
The updater will always reset `/etc/swizzin` to the latest commit in `master`, which you don't necessarily always want.

We have made a couple ways to make sure that you can skip that, so that you can then manipulate the content of the directory on your own.

*  Running `box update --local`
*  Making `/etc/swizzin` a symlink to some other directory on your FS
   *  This should be done for you if you ran `setup.sh` when it was located outside of `/etc/swizzin` with `--local`
*  Adding `.dev.lock` to `/etc/swizzin/`
   *  This should be done for you if you ran `setup.sh` when it was located in `/etc/swizzin` with `--local`
   *  You can do `touch /etc/swizzin/.dev.lock`


## Testing mechanism
You can run `box test` to test whether all packages are performing as intended. You can supply a specific set of packages (e.g. `box test app1 app2`) to test specifically those.

If you create  `.test.lock` in `/etc/swizzin`, the test will be performed on every applicable `box` command executed (package and user management ones)


## Working across forks
If you need a branch from someplace else, please use the GitHub CLI tool `gh`

You can read how to install and use the tool on the [GitHub CLI website](https://cli.github.com/).

You can then just run `gh pr checkout 401` to checkout PR #401