---
id: installation
title: Getting Started
sidebar_label: Installation
---

swizzin was designed to be an easy to use, modular seedbox solution.

## System Requirements

### Supported Operating Systems

- Debian 8/9/10
- Ubuntu 16.04 and Ubuntu 18.04

### Recommended Hardware

- A KVM VPS or bare metal server is recommended
- 2+ CPU cores KVM or Intel Atom c2750
- 4 GB of RAM
- An x86_64 (64-bit) processor is required

With the exception of a 64-bit processor, these are not hard and fast requirements -- you may find that you're able to get away with running on a weaker CPU or less RAM; however, best performance will be had if the applications you're using have ample resource overhead.

## Installation

### Quick Start

Make sure you have either `curl` or `wget` installed. Pick the command of your choice to get started:

wget
```bash
bash <(wget -O- -q  https://raw.githubusercontent.com/liaralabs/swizzin/master/setup.sh)
```

curl
```bash
bash <(curl -s  https://raw.githubusercontent.com/liaralabs/swizzin/master/setup.sh)
```

Please note that if you are running Ubuntu and choose to run the initial setup though `sudo` you should include the `-H` argument to ensure that your home directory is modified to /root when you sudo up. The installer will take care of this for you, and this should be the only time you need to specify `sudo -H` before running a swizzin command.

Example:

```bash
sudo -H su -c 'bash <(wget -O- -q https://raw.githubusercontent.com/liaralabs/swizzin/master/setup.sh)'
```

### Setup

After running the above command, the script will check for updates and install some necessary prerequisites before continuing.

When finished, the installer will ask you a few questions:

- A username for the master user
- A password for the master user
- The packages you would like to install

In text fields, you only need to enter your text and hit `return` to enter. To choose packages, from the list, you can navigate with the arrow keys. Press `space` to select an entry. When you're satisfied with your selection, press `tab` to move the selector to `Ok` and then press enter. This will advance the screen.

When you have finished running through the prompts, installation will start. The time it takes will depend on the number of packages you have selected.

## Additional Help

If you're having troubles with any of the items in the documentation, please first consult the [Troubleshooting](/guides/troubleshooting) guide. If that is not enough for you, join us in [Discord](https://discord.gg/2esbu2N) and we will attempt to help you to our best ability.

If you have found a bug or are having an issue, please open an [issue on GitHub](https://github.com/liaralabs/swizzin/issues/new/choose).