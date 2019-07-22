---
id: panel
title: Panel
sidebar_label: Panel
---

The dashboard is a graphical user interface which provides a central location for you to keep an eye on server statisics, personal usage information and your services.

## How to Install

By default, the panel is not installed on swizzin installations, you must select it during install or install it afterwards via SSH with the command:

```bash main
sudo box install panel
```

You must have nginx installed in order to use the panel.

## How to Access
The dashboard is available at the web root for the server you've been assigned to:

`https://<hostname.ltd>`

## Features

### Application Links
On the left side of the dashboard, you'll find quick links to the currently installed applications on your slot. No need to remember the endpoints and ports yourself!

### Server Statistics
The dashboard provides metrics for server load, CPU usage, and the current network metrics for upload and download speeds.

### Personal Usage Statistics
You can find your disk quota here.

### Service Management
You can see at a glance whether or not your services are currently running. You can also start and stop services directly from the panel, if you just need to quickly restart a service without SSHing into your slot.