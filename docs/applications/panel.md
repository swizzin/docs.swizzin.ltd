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

## Adding Custom Links to the Menu

The custom menu file is located at: `/srv/panel/custom/custom.menu.php`

We're going to use jellyfin as example. 

1. Place logo of your application to `/srv/panel/img/brands`. Use the .png extension so the background is transparent. The recommended image size is 128x128 but bigger images will work aswell.

2. Now open `/srv/panel/custom/custom.menu.php` in your favourite text editor:

::: block
``` bash
sudo nano /srv/panel/custom/custom.menu.php
```
:::

3. Go all the way to bottom of file without editing anything and add your custom php/html there. Make sure to replace `https://yourdomain.com/applicationname` with your custom URL and `yourlogo.png` with the filename of the png you added to `/srv/panel/img/brands` in Step 1:

::: block
``` html
<li><a class="grayscale" href="https://yourdomain.com/applicationname" target="_blank"><img src="img/brands/yourlogo.png" class="brand-ico"> <span>Application name</span></a></li>
```

So for our Jellyfin example:

``` html
<li><a class="grayscale" href="https://yoururl.com/jellyfin" target="_blank"><img src="img/brands/jellyfin.png" class="brand-ico"> <span>Jellyfin</span></a></li>
```
:::

4. Once done, you may need to restart php-fpm to refresh the cache. The php-fpm version will depend on your current OS:

::: block
``` bash
systemctl restart php7.3-fpm
```
:::