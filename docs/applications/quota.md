---
id: quota
title: Quota
sidebar_label: Quota
---
This application installs the necessary dependencies to use the Quota system.

An administrator can use this utility to restrict how much disk space can each user fill, using a soft and a hard limit.

## Installation

You can install the quota application by running the following command.

```bash
box install quota
```

## Setup

As part of the installation you will be asked which drive to use fo the quota functionality. This is due to the fact that quota works on a per-disk basis.

If you are unsure which partition to use, please refer to the help printed into the terminal during the installation.

## Management

The quotas can be managed either using the (Webmin application)[webmin.md], or through the command line using the (setquota)[setquota.md] script.

All users can see their quota standing by running `quota -s`.