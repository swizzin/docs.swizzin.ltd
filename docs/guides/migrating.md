---
id: migrating
title: Migrating swizzin installations across servers
sidebar_label: Migrating
---
This guide should be used as a generic reference for when 

# 1. Update everything on old server
## Server itself
Do a full `apt update && apt upgrade` run
## Swizzin source code
`sudo box update` before 

## Any other applications
`sudo box upgrade` any other application remaining

# 2. Prepare new server

## OS & Disks

## Swizzin
Follow the standard install procedures.

### Users
Create all your users with the same usernames **and passwords**.


### Apps
Install the same apps you got on your old system.

Make sure to shut them down after you're done installing them so that the configs nd everything will not get overwritten after you transfer your stuff.

# 3. Spin down apps on old server
You **absolutely** need to stop everything that's happening on the old server. Otherwise you'll be transferring data that might be written into, which is no bueno.

You might as well reboot your system into rescue, `mount` and `chroot` your old setup in, and start an SSH server.

# 4. Transfer data

We highly recommend running this in `screen` so that you can disconnect from your SSH in case this takes a while.

```bash
rsync -ahH --info=progress-2 -e'ssh' user@oldserver:/home/<oldusername>/ /home/<newusername> --usermap=<oldusername>:<newusername> --exclude=.config/deluge/core.conf --exclude=.config/deluge/web.conf --exclude=.rtorrent.rc
```
# 5. Migrate all applications

Check whether some of your apps require some configuration that is not covered with the data transfer rsync command above.

Notable examples are:
- letsencrypt
  - Just reinstall it
- Flood
  - 
- Plex
  - More in [this guide](https://support.plex.tv/articles/201370363-move-an-install-to-another-system/) and in [this guide specifically for Linux](https://forums.plex.tv/t/pms-migration-linux/678445/2)
- mango
- ombi
  - More [here](https://github.com/Ombi-app/Ombi/wiki/Backups) or [here](https://docs.ombi.app/info/backing-up/)
- tautulli
  - More [here](https://github.com/Tautulli/Tautulli/wiki/Frequently-Asked-Questions#q-i-need-to-movereinstall-tautulli-can-i-keep-my-history-and-statistics)
- thelounge
- znc
  - More [here](https://wiki.znc.in/FAQ#How_do_I_migrate_ZNC_from_one_machine_to_another.3F)
- nextcloud
  - Loosely follow [this guide](https://docs.nextcloud.com/server/21/admin_manual/maintenance/migrating.html) but make sure to check in with us in the discord because I don't have time to write all the differences right now
- organizr
- quassel
- rclone
- rutorrent
- _... and probably a couple more ..._

