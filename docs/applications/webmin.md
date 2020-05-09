---
id: webmin
title: Webmin
sidebar_label: Webmin
---

Webmin is a web-based user interface for administration of various parts of a Linux system.

## How to Install

```bash main
sudo box install webmin
```

The setup will install the apt repository of Webmin, and pull the latest package for your distribution from there.

## How to Access

If nginx is currently installed, Webmin is available on the address below. 
`https://<hostname.tld>/webmin`

If nginx is not installed, you can find webmin at
`https://<hostname.tld>:10000`

### Authentication

Regardless whether or not you have nginx installed, Webmin's HTML-based authentication will allow through any UNIX user on the system with sudo permissions.

## Configuration options

These are all optional. If none are specified, he defaults will be used, and no other configuration is required. None of the options are sanity-checked on install so setting something wrong could break your installation.

There are a couple options you can set **before** installing webmin through export. If you'd like to use one of these, run `export option=value` **before** running the install command. The following is an example of how this would look:

```bash main
export webmin_referers='mysuperlongdomain.co.za'
```
### Options:
- `webmin_referers`
  - Default: Undefined. Guessed from default nginx conf and checked with user interactively during install.

## Service Management

<!--DOCUSAURUS_CODE_TABS-->
<!--Start-->
```bash
sudo systemctl start webmin
```
<!--Stop-->
```bash
sudo systemctl stop webmin
```
<!--Restart-->
```bash
sudo systemctl restart webmin
```
<!--Enable-->
```bash
sudo systemctl enable webmin
```
<!--Disable-->
```bash
sudo systemctl disable webmin
```
<!--END_DOCUSAURUS_CODE_TABS-->
