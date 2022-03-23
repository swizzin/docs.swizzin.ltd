---
id: faqs
title: Frequently Asked Questions
sidebar_label: Frequently Asked Questions
---

## I literally just installed my machine and the dashboard says swizzin is using XXXGB. WHY?! That's simply absurd.

swizzin hasn't used the space, don't worry. By default, when using the ext4 partition format, the disk reserves 5% of the space in the partition for the potential scenario whereby the disk runs out of space. If this happens, and your whole server is formatted under a root partition scheme (i.e. no separate /home directory), your server will still have some space reserved to perform essential tasks such as (but not limited to): system updates, logging and various other things, such as bash auto(tab)-completion (crazy, right?).

Since the reservation is percentage based, the larger your partition, the greater the reserved space.

You can remove the reserved space on the partition `sda3` with the following command:

```bash
sudo tune2fs -m 0 /dev/sda3
```

You can also enter other non-zero values to customize the reserved space:

```bash
sudo tune2fs -m 1 /dev/sda3
```

Will reserve 1% instead.

It's unlikely that the partition on *your* server is sda3, so you'll need to use the command `lsblk` to determine which partition exactly to modify.

## The dashboard states I have 0 out of 0 remaining disk space. What's going on?

Did you install the `quota` package? You need to use the [`setdisk`](/scripts/setdisk) script to define the limits per user. The default quota is undefined, which is the source of this error.

If you just installed every package just because and you don't actually need quotas, feel free to remove the package with `box remove quota`

## RuTorrent says I have no space left on my disk

Please see the chapter above.

## Application XYZ is not running! Everything is broken! What do I do?
Please consult the [Troubleshooting](/guides/troubleshooting) guide for more information.

## ... Docker?

No.

You cannot run Swizzin in a docker. The way docker works does not mix well with the amount of different resources swizzin relies on that are present in a standard Debian/Ubuntu Installation.

Swizzin installs all applications in their non-containerized, bare-metal form. This for performance and maintainability reasons. 

 However you could away with a proper LXC container, using something like Proxmox or with systemd if you know your stuff. Many folks have reported success with those methods.