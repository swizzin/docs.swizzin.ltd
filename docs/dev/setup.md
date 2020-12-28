---
id: setup
title: Getting a developer setup
sidebar_label: Setup
---

## VM
We highly suggest you use a virtualised environment to test your swizzin set up. It is extremely convenient to have this isolated from the rest of your system, and be able to discard and initialise a system within minutes.

### Multipass
1. Enable virtualisation
1. Install multipass
1. Run `multipass shell` to start a default primary VM and join the shell. 

### LXD


### Parallels
1. Download your image
1. Create a VM
1. Run through the OS install
1. Install swizzin
1. **Make a snapshot**


## Editor
Our development setup is basically made for VSCode/Codium

### Plugins


## Installation

This will install swizzin and as part of the setup, symlink your folder to `/etc/swizzin/`. This is useful if your virtualisation auto-mounts from your host. 
```bash
dev=true bash /path/to/setup.sh
```

You can also already have the swizzin folder mounted/cloned in `/etc/`, this option will switch to use the `.dev.lock` option. This is useful if you're manually mounting the folder from your host, or have cloned directly into your VM.
```bash
dev=true bash /etc/swizzin/setup.sh
```

### The `--no-git` flag

### The symlink variant

### The `.dev.lock` file
