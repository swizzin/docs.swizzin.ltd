---
id: panel
title: Panel
sidebar_label: Panel
---

The dashboard is a graphical user interface which provides a central location for you to keep an eye on server statistics, personal usage information and your services.

## How to Install

By default, the panel is not installed on swizzin installations, you must select it during install or install it afterwards via SSH with the command:

```bash main
sudo box install panel
```

Setup will create a virtual python environment (`/opt/swizzin/venv`) and then clone the github repository (`/opt/swizzin/swizzin`)

## How to Access

If nginx is currently installed, the dashboard is available at the web root for your IP/DNS:

`https://<hostname.ltd>`

If nginx is not installed, you can find the panel at

`http://<hostname.ltd>:8333`

## Configuration options

There should not be much need to alter config options, but a few currently exist. These options should be defined directly in `/opt/swizzin/swizzin/swizzin.cfg`. Please note, all config variables are uppercase:

`ADMIN_USER` - Previously referred to as the "master" user. (Default: User with UID 1000)

`FLASK_HTPASSWD_PATH` - The location of the htpasswd file to protect the panel with. (Default: `/etc/htpasswd`)

`FLASK_AUTH_REALM` - Text displayed during auth pop up

`FORMS_LOGIN` - Whether or not to use the newer forms based login. (Default: `True`)

`HOST` - IP address to bind to (Default: `0.0.0.0`)

`PORT` - Bind port (Default: `8333`)

`SHAREDSERVER` - Defines if this server is a swizzin enterprise server, you will probably never need to set this (Default: `False`)

`DEBUG` - Turn off production mode and turn on the debugger. Prints response times and displays Python errors in the browser instead of causing internal server errors (Default: `False`)

## Service Management

The systemd service file resides at:

```bash main
/etc/systemd/system/panel.service
```

<!--DOCUSAURUS_CODE_TABS-->
<!--Start-->
```bash
sudo systemctl start panel
```
<!--Stop-->
```bash
sudo systemctl stop panel
```
<!--Restart-->
```bash
sudo systemctl restart panel
```
<!--Enable-->
```bash
sudo systemctl enable panel
```
<!--Disable-->
```bash
sudo systemctl disable panel
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Features

### Application Links

On the left side of the dashboard, you'll find quick links to the currently installed applications on your slot. No need to remember the endpoints and ports yourself!

### Server Statistics

The dashboard provides metrics for server load, CPU usage, and the current network metrics for upload and download speeds.

### Statistic Graphs

If you have the `netdata` package installed, you'll see an additional tab in the navbar for Stats.

### Personal Usage Statistics

You can find your disk quota here.

### Service Management

You can see at a glance whether or not your services are currently running. You can also start and stop services directly from the panel, if you just need to quickly restart a service without SSH-ing into your slot.

## Customizing Application Settings

Application profiles can be adjusted to your needs by editing the file `/opt/swizzin/swizzin/core/custom/profiles.py`. While this file is largely just variable definitions, it is Python, so be aware that indentation is extremely important. Please note, it is imperative that you do not touch the `import` definition at the top of this file.

### Application Definitions

Most of the application options are self-explanatory, nevertheless, things can get confusing. Here's a list of options you can currently define and their meaning/usage.

`name` - The name of the application

`pretty_name` - A pretty version of the name, meant for printing in html templates

`process` - The name of the process to search for when running `app_status` (default: `name`)

`runas` - The user of the process to search for when running `app_status` (default: `user`)

`scheme` - Use to force HTTP if reverse proxy is disabled (default: current http scheme, usually https)

`baseurl` - The base URL and/or port of the application. If undefined, no sidebar link will be created.

`urloverride` - A complete override of the URL. If true, will supersede a baseurl/scheme definition. Example: `https://plex.example.com` (default: `False`)

`systemd` - The name of the systemd service (default: `name`)

`check_theD` - If `True`, the panel will use `systemctl is-active` rather than searching `ps` when running `app_status` (default: `False`)

::: note
There is a very large performance penalty when enabling a service with `check_theD`. The following response times speak for themselves.
```
#check_theD enabled for 14 services
"GET /apps/status HTTP/1.1" 200 1163 0.226762
#check_theD enabled for a single service
"GET /apps/status HTTP/1.1" 200 1164 0.043281
#check_theD enabled for no services
"GET /apps/status HTTP/1.1" 200 1164 0.026525
```
Given the results, it is important to remember to use `check_theD` sparingly. As such, it is not enabled by default in any default swizzin profiles.
:::

### Application Definitions with a User

If for some reason your application requires extra information specific to the user's context, the application's meta profile can be called with the user context.

### Editing an existing application

If you want to edit the variables of already profiled applications, you simply need to make a new class definition while calling the same class as the template.

Let's take an application that many users request to make changes to: Plex. Say my Plex instance isn't at port 32400 for some reason (perhaps I have a custom docker container running). If I wanted my dashboard link to instead use port 31400, I can easily make this change by adding two lines of code to `core/custom/profiles.py`:

```python
class plex_meta(plex_meta):
    baseurl = ":31400/web"
```

It's not necessary to add any other already-defined variables unless you wish to change them. This layout will only override the definitions which have been altered by us in the custom profile and use the defaults for everything else. But why stop there? We can also do things like change the "Pretty Name" of Plex displayed on the panel.

```python
class plex_meta(plex_meta):
    baseurl = ":31400/web"
    pretty_name = "PLEX MEDIA SERVER"
```

Now, instead of "Plex" the sidebar link and service status name will be displayed as "PLEX MEDIA SERVER". Why am I yelling? I have no idea.

### Adding a new definition

Another commonly requested task is adding link and service status for applications not managed by swizzin. For instance, some users may have a second instance of Radarr running which they use to manage their 4k libraries. Let's add a new definition -- it won't be based on anything else, so we'll start fresh and define everything we need to make the service show up.

```python
class radarr4k_meta:
    name = "radarr4k"
    pretty_name = "4K Radarr"
    baseurl = "/radarr4k"
    systemd = "radarr4k@"
    check_theD = True
```

Since we enabled the checking of systemd services for this unit, we should enable it for the regular Radarr unit as well; otherwise, we won't be able to tell which Radarr is actually running when checking if it is active.

```python
class radarr_meta(radarr_meta):
    check_theD = True
```

In order to tell the panel to check for the new application, simply create a lock file using SSH with the rest of your swizzin applications:

```
sudo touch /install/.radarr4k.lock
```

Finally, if you want to add an application icon to the sidebar, simply add a similarly named .png to the `static/img/brands` folder. i.e. `static/img/brands/radarr4k.png`.

Once you're happy with your edits, don't forget to restart the panel:

```
systemctl restart panel
```

## Troubleshooting

### Logs
You can retrieve the logs of panel by running `sudo journalctl -u panel`. The logs contain the output of the python application.