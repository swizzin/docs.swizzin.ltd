---
id: dist-upgrade
title: Keeping your Server Up-to-Date
sidebar_label: Server Updates
---

Keeping your server up-to-date is important as security fixes are constantly being discovered and released. There are two forms of updates: regular upgrades and distribution upgrades.

## Regular Upgrades

Regular upgrades are the updates to packages released for the current version of your operating system (either Debian or Ubuntu). Since only LTS (Long Term Support) branches are supported in swizzin, security updates are typically the only updates you'll receive; however, the kernel does update regularly, so it's a good idea to check for updates every so often. Regular upgrades are safe and should pose no reliability issues when performing routine restarts.

Checking for updates is easy:

```bash main
sudo apt -y update
sudo apt upgrade
```

After running these commands, you'll see if any packages are available for upgrade. If you are ready and confirm the upgrade of the packages listed, press `y` to continue. If you change your mind, press `n` or hit `control-c`.

Following updates, it's typically a good idea to restart any services that were upgraded in order to start using the new versions immediately.

If there was an update to the `linux-image` package, this is the kernel. The only way to reload the kernel is to restart the server. (Unless you're running Ubuntu 18.04 with live kernel updates, which is not covered here.)

## Distribution Upgrades

:::danger DISCLAIMER AND LIMITATION OF LIABILITY
The steps provided below are meant only to provide you with an outline of the steps required to make a major version change to your operating system (i.e. Debian 9 -> 10). While the steps outlined below will absolutely upgrade your operating system, there are risks involved, for example (but not limited to):

- Package updates causing issues that prevent boot
- Package updates causing previously installed packages in swizzin to fail to start

Distribution upgrades are ***NOT*** officially supported. If anything breaks, I am not liable for your server or any of the data contained within it. Further, you are not guaranteed to receive any form of support or help to help get your server functional again. This information is provided for educational purposes only. If you choose to follow the steps, be prepared for the possibility that something could go wrong. If your data is important to you, make a backup.

Certain things are known to cause issues -- those issues will be gone over here and the workarounds to get the applications back online, but I cannot provide information for all circumstances and variables.

You have been warned.
:::

That's a large scary warning, yes. Please think twice about performing the following steps. That said, performing a distribution upgrade is only slightly more involved than a regular update. The biggest difference is that we need to change our `sources` file to reference the newer version of the OS we'd like to upgrade to.

The absolute best time to perform an upgrade is **before you install swizzin**; however, it's still possible to do a distribution upgrade after installation, but it may be more tricky. The reason it's easier is that nothing has been installed or configured yet. When everything gets installed for the first time, it'll be installed correctly for the OS and won't need to be (potentially tweaked).

swizzin currently supports these distributions:

Debian:
- Stretch (oldoldstable)
- Buster (oldstable)
- Bullseye (stable)

Ubuntu:
- Bionic (18.04 LTS)
- Focal (20.04 LTS)

If you don't know the OS or version you're running, you can determine it here with the command `lsb_release -a`. Your `codename` will hopefully correspond to a value above. The codename is the release that's in your current apt sources list (`/etc/apt/sources.list`). We will be changing this to the version you'd like to upgrade to.

Let's take the scenario where your server was delivered with Debian 9 (stretch), but you'd like to upgrade to Debian 10 (buster). In this scenario, our upgrade path looks like this:

```bash main
stretch > buster
```

Thus, we need to replace all mention of stretch with buster in the file `/etc/apt/sources.list`.

You can either `sudo nano /etc/apt/sources.list` and change all instances of `stretch` to `buster` or issue the following command:

```bash main
sed -i 's/buster/bullseye/g' /etc/apt/sources.list
```

This simple `sed` command simply states: find the word stretch, replace it with buster in the file `/etc/apt/sources.list.

Once our sources have been updated, it's time to grab new manifests and update:

```bash main
sudo apt -y update
sudo apt upgrade
```

If you receive an error regarding any repositories without release files, please double check your sources. Certain repos (like Debian's security updates) repository may not yet exist and will throw a hard error. This won't prevent you from using `apt` by command line, but the hard error will cause any apt-based installs while using `box` to fail.

The update, once started, will take some time. Hundreds (if not 1000+) packages will be downloaded and updated. Please be patient: consider grabbing a coffee or a beer.

Once this command finishes, we need to complete the upgrade with a `dist upgrade`:

```bash main
sudo apt dist-upgrade
```

This should offer to upgrade more packages and will round out the full distribution upgrade process.

After this command finishes, we need to reboot the server to refresh everything that was just upgraded. Use the command:

```bash main
sudo reboot
```

Pray to your lucky stars that nothing goes wrong and your server comes back up without any issues.

If you haven't installed swizzin yet, feel free to start the installer now. If you have already installed packages, we have a bit more updating to do.

### Updating packages after an upgrade

A few things are known to be broken after a `dist-upgrade` and will need to be fixed. Major breakers typically include things like php version upgrades and library upgrades (like openSSL), which packages (such as rtorrent) are compiled against.

Luckily the major breakers have scripts in place designed to help get you back up and running.

#### nginx

We need to upgrade nginx configs to use the correct php socket for applications like the panel and ruTorrent. The easiest way to reconfigure nginx for your current environment is to use the command:

```bash main
sudo box upgrade nginx
```

:::tip Tip
This command is considered semi-destructive. In the case of custom nginx configurations, it won't clear the `nginx/app` directory, but it will clear the `nginx/conf.d` directory. If you have any custom nginx configurations, it's recommended to back them up before running the above command
:::

#### rtorrent

rTorrent likely failed to start on boot. If you try to start `rtorrent` from the command line, you'll likely receive some error about libraries. We just need to recompile rTorrent against the current system. This is simple:

```bash main
sudo box upgrade rtorrent
```

rTorrent will recompile and should start without issues afterwards.

#### deluge

Deluge shouldn't have any issues with the upgrade, but if Deluge fails to start, recompiling would be the first point of troubleshooting:

```bash main
sudo box upgrade deluge
```

#### Python3 virtual environments

Applications which require the use of virtual environments will likely be broken following a dist-upgrade as the python3 symlinks to the system binaries and any venv specific dependencies will no longer be pointing to the correct location. Python venvs will need to be redeployed.

For example, to fix the panel after a dist-upgrade, the following steps should fix the python venv for the panel

```bash
python3 -m venv /opt/.venv/swizzin
/opt/.venv/swizzin/bin/pip install -r /opt/swizzin/requirements.txt
systemctl restart panel
```

Depending on the application and the amount of configuration you have done, it may be easier to simply back up your app configuration and reinstall the application entirely and restore your backup.

#### Other packages

Distribution upgrades haven't been tested rigorously. It's entirely possible other packages may have broken during the upgrade. You'll need to start doing your own troubleshooting here if anything else is broken. You can consult [the Troubleshooting guide](/guides/troubleshooting) for a quick start. You can find out if any of your systemd services are failing to start with `systemctl list-units --failed`. If there are failed units there, you can start debugging with `systemctl status <failed unit>`. However, you're on your own form here.


