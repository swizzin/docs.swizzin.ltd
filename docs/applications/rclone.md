---
id: rclone
title: Rclone
sidebar_label: Rclone
---
Rclone is a command line program to manage files on cloud storage.

The tool is provided as is with no extra configuration.

## Installation

```bash main
sudo box install rclone
```

## Usage
By default, a `~/cloud` directory is made in each user directory.

You can run `rclone configure` to manage the instance 

Please refer to the [rclone documentation](https://rclone.org/docs/) for further help.

## Service Management
The systemd script for rclone can be found at
```bash
/etc/systemd/system/rclone@.service
```
As a multi-user script, you must call it with the username to change the service status for.
<!--DOCUSAURUS_CODE_TABS-->
<!--Start-->
```bash
systemctl start rclone@<username>
```
<!--Stop-->
```bash
systemctl stop rclone@<username>
```
<!--Restart-->
```bash
systemctl restart rclone@<username>
```
<!--Enable-->
```bash
systemctl enable rclone@<username>
```
<!--Disable-->
```bash
systemctl disable rclone@<username>
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Troubleshooting

::: tip 
You can always also try the [general troubleshooting tips written in our guide](/guides/troubleshooting). They might or might not apply, but asking these questions can often make you understand what is under the hood better and help you find what needs to be fixed. It's always worth a shot!
:::

Please refer to the [rclone documentation](https://rclone.org/docs/) for further help.

