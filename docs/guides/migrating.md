---
id: migrating
title: Migrating swizzin installations across servers
sidebar_label: Migrating
---
This guide should be used as a generic reference for when you wanna get onto a new Linux server.

:::warning
This is still a WIP guide, any experience or suggestions are welcome. If things go wrong, don't blame me. Make sure to always have a backup with a verification plan before doing something stoopet.
:::


## 1. Update everything on old server
### Server itself
Do a full `apt update && apt upgrade` run
### Swizzin source code
`sudo box update` before 

### Any other applications
`sudo box upgrade` any other application remaining

### (Optional) De-dupe your stuff
If you want to make sure you aren't transferring some files that are 100% carbon copies over, you can run `fdupes` to hardlink any file that matches another on the same disk 100%.

**Make sure you know what you are doing before getting into this, it could lead to some pretty dumb mistakes**

I highly suggest only running this for a set of files that you know belong to one user, so that users don't accidntally change each other's files later on.

After you install `fdupes`, you can run this command which will ensure that all the files within these directories of the logged in user are hardlinked, and only take up the space of one instance of the file on a disk.

This obviously will not work if these directories mount over multiple disks, they all have to be on the same disk for this to work. 

```bash
fdupes -r ~/sonarr/ ~/radarr/ ~/transmission/ ~/torrents/rtorrent -n -L
```

## 2. Prepare new server

### OS & Disks

Install the latest version of your OS so that you don't have to do a dist upgrade later on.

Ensure that your drives are set up just the way you want them _before_ doing _anything_. Swizzin relies on `/root` and `/home` a lot so just mount everything how you want to, and swizzin will just blindly follow that filesystem to wherever it leads to.

### Swizzin
Run the script, maybe check out the advanced options while you're at it so that you can set it and forget it.

#### Users
Create all your users with **the same usernames and passwords**. If you want to change passwords for the users, you'll have to do that after the installation

#### Apps
Install the same apps you got on your old system.

Make sure to shut them down after you're done installing them so that the configs and everything will not get overwritten after you transfer your stuff.

## 3. Spin down apps on old server
You **absolutely** need to stop everything that's happening on the old server. Otherwise you'll be transferring data that might be written into, which is no bueno.

You might as well reboot your system into rescue, `mount` and `chroot` your old setup in, and start an SSH server.

## 4. Transfer data

:::info
We highly recommend running this in `screen` so that you can disconnect from your SSH in case this takes a while.
:::

The most sane way to do this would be to do this from the POV of `root` on the new machine, which will talk to the `root` on the old machine. Make yourself a new SSH key with `ssh-keygen` on the new machine, and paste the contents of `/root/.ssh/id_rsa.pub` at the bottom of `/root/.ssh/authorized_keys`. Ensure the old machine allows root SSH connections over SSH keys by checking that `PermitRootLogin prohibit-password` is set in the `/etc/ssh/sshd_config`.

Check that the ssh connections works before running the command below.

```bash
rsync -ahH --info=progress2 -e'ssh -p $portNumber' root@oldserver:/home/<oldusername>/ /home/<newusername> --usermap=<oldusername>:<newusername>
```

Breakdown of the parameters:
- `-a`: quick way  of  saying  you  want  recursion  and  want  to preserve  almost  everything
- `-h`: human readable output
- `-H`: preserve hardlinks
- `-e'ssh -p $port'`: optional, allows you to override the SSH port number
- `--usermap=[...]`: ensures that permissions are allocated to the right user afterwards
- `--info=progress-2`: Gives a nice single overview of the whole process

## 5. Migrate all applications

Check whether some of your apps require some configuration that is not covered with the data transfer rsync command above.

Notable examples are:
- Transmission
  - The files which bind a logged in user to the right session need to be migrated/re-created. You have two options for migrating this and making it functional:
    1. First transfer all the data, and then remove and re-install transmission on the target. This will erase every user's `settings.conf` and re-create it alongside the binding for the webserver.
    2. Copy over all `<user>.transmission.conf` files from `/etc/nginx/conf.d/` after all users are created and transmission is installed.
- Deluge
  - Generally same as transmission
- R**u**Torrent
  - Reinstall rutorrent after all data is moved
  - Nothing specific should be necessary to do for rtorrent itself.
- Plex
  - More in [this guide](https://support.plex.tv/articles/201370363-move-an-install-to-another-system/) and in [this guide specifically for Linux](https://forums.plex.tv/t/pms-migration-linux/678445/2)
- ombi
  - More [here](https://github.com/Ombi-app/Ombi/wiki/Backups) or [here](https://docs.ombi.app/info/backing-up/)
- tautulli
  - More [here](https://github.com/Tautulli/Tautulli/wiki/Frequently-Asked-Questions#q-i-need-to-movereinstall-tautulli-can-i-keep-my-history-and-statistics)
- Lounge IRC
  - Last time I asked, I was told this:\
  `[19:51:21] xnaas: just move your entire thelounge folder over flying_sausages; that's it`\
  So make sure to install lounge via `box`, stop teh service, and then transfer over the files from `/home/thelounge` to `/home/thelounge`
- znc
  - More [here](https://wiki.znc.in/FAQ#How_do_I_migrate_ZNC_from_one_machine_to_another.3F)
- nextcloud
  - Loosely follow [this guide](https://docs.nextcloud.com/server/21/admin_manual/maintenance/migrating.html) but make sure to check in with us in the discord because I don't have time to write all the differences right now
- letsencrypt
  - Install before and also after just for good measure
- organizr
  - Shut down nginx on old server, then transfer the `config.php` and `users.db` files in `/srv/organizr` and its db folder
- quota
- quassel
- rclone
- mango
- Flood
- _... and probably a couple more ..._

