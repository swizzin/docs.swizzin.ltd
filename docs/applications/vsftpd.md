---
id: vsftpd
title: vsftpd
sidebar_label: vsftpd
---

vsftpd is a lightweight FTP server for linux

## Installation

Installing vsftpd is easy. Simply issue the following command from SSH:

```bash
sudo box install vsftpd
```

vsftpd will be installed from your operating system's package repository and can be kept up-to-date with the rest of your operating system's packages.

## Configuration

By default, we ship vsftpd with a pretty light configuration. FTP(S) is enabled by default. If you are having troubles connecting to your server via FTP, please make sure your client supports the key ciphers in use on your server. The configuration file for vsftpd lives at:

```bash
/etc/vsftpd.conf
```

After altering the configuration file, restart vsftpd to make the changes take effect.


### Enable FXP Support

FXP support is not enabled by default. To enable it, uncomment the lines (remove the `#`) in your `vsftpd.conf`:

```bash
pasv_promiscuous=YES
port_promiscuous=YES
```

### Changing the default port

If you want to change the port used by vsftpd, uncomment and add a port to the line in your `vsftpd.conf`:

```bash
listen_port=
```

### Enable chroot

If you'd like to lock ftp users to their home directory to prevent snooping around your server, add these lines to your `vsftpd.conf`

```bash
chroot_local_user=YES
allow_writeable_chroot=YES
```

:::danger Warning
Please be aware that FTP and SFTP are separate protocols. If you enable chroot on your FTP server, your SFTP server will still not be using jails by default.
:::

## Service Management

Service management is done by systemd with the default vsftpd.service file.

The systemd service file resides at:

```bash main
/lib/systemd/system/vsftpd.service
```

<!--DOCUSAURUS_CODE_TABS-->
<!--Start-->
```bash
sudo systemctl start vsftpd
```
<!--Stop-->
```bash
sudo systemctl stop vsftpd
```
<!--Restart-->
```bash
sudo systemctl restart vsftpd
```
<!--Enable-->
```bash
sudo systemctl enable vsftpd
```
<!--Disable-->
```bash
sudo systemctl disable vsftpd
```
<!--END_DOCUSAURUS_CODE_TABS-->