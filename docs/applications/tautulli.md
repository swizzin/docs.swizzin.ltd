---
id: tautulli
title: Tautulli
sidebar_label: Tautulli
---

A Python based monitoring and tracking tool for Plex Media Server.

## Initial Setup

Installing Tautulli is easy. Simply issue the following command from SSH:

```bash main
sudo box install tautulli
```

This command will configure Tautulli for your user. Installation files have been placed in `/opt/tautulli`.

## How to Access

Once Tautulli has been installed, you can access it from your browser at `https://<hostname.ltd>/tautulli`.

## Service Management

The service for Tautulli is managed by systemd. The service file for tautulli resides at:

```bash main
/etc/systemd/system/tautulli.service
```

<!--DOCUSAURUS_CODE_TABS-->
<!--Start-->
```bash
sudo systemctl start tautulli
```
<!--Stop-->
```bash
sudo systemctl stop tautulli
```
<!--Restart-->
```bash
sudo systemctl restart tautulli
```
<!--Enable-->
```bash
sudo systemctl enable tautulli
```
<!--Disable-->
```bash
sudo systemctl disable tautulli
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Upon visiting your Tautulli dashboard for the first time, the welcome wizard will run.

1. Sign in with Plex
2. Input settings for Plex:
```plaintext main
Plex IP: 127.0.0.1
Port: 32400
```
3. Run through the rest of the wizard.
4. Tautulli is now connected to Plex.