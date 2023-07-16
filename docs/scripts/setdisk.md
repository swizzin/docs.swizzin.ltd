---
id: setdisk
title: setdisk
sidebar_label: setdisk
---

This script helps setting quotas to users in an easy manner.

It is run during the `box adduser` command as well.

By default, the master user does not have a quota set which can result in odd UI behavior. You can use this command to rectify such issues. Please consider if you truly need the quota functionality if you are the sole user of a machine.

## Format for the size

You can specify the format in one of the following formats:

- Specific size
    - Available units are MBs, GBs and TBs.
        - This format does not allow for decimals, therefore only `12GB`, `123456MB` or etc. will work; not `12.3GB`, `1.45TB` etc.
- Maximum
    - This will retrieve the disk that quotas are set on, and set the maximum.  
    - **Please note the following caveats**:
        - This size can be slightly larger than what the disk can actually store due to how partitioning works.
        - The "Available" is purely a subtraction of the user's used space minus the quota, therefore it does not take into account space used by anything else other than the user.

## Running interactively

You can run `sudo setdisk` and specify the user and size interactively on the command line.

## Running with parameters

`setdisk` also runs non-interactively. You can set the user as the first argument, and the size as described above as an optional second argument.

```bash
#Set size interactively
sudo setdisk user1
#Set size as parameter
sudo setdisk user1 20GB
```
