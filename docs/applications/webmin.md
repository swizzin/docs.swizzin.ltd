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

Webmin will authenticate any user who has administrative sudo permissions on the system using its own mechanism. Therefore you should be able to use your master credentials.

This means that in case you have nginx installed, you will first be asked for the Nginx authentication through the browser UI and then to webmin through the Webmin page. This is a deliberate choice for your own security. If you are already authenticated to the Panel, you will only see the Webmin authentication.

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
