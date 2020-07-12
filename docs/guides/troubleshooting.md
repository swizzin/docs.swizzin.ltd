---
id: troubleshooting
title: Troubleshooting 101
sidebar_label: Troubleshooting
---

This page servers as a starting point for self-assessing common problems that you might encounter.

::: tip Check App's pages first!
For each specific application, it is always a good idea to first refer to the relevant documentation. You can find app-specific troubleshooting guides there.
:::

If you ran all the relevant steps mentioned below and still cannot identify your issue, feel free to visit our [Discord](https://discord.gg/2esbu2N) and ask for help there! We're always happy to help with anything we are able to.

## Accessing swizzin/`box` logs
Swizzin stores its logs into the `/root/logs` directories. The installer installs into `install.log`, and any other command you run with `box` will end up in `swizzin.log`. You can access the logs by running the following commands.

```bash
# To check the logs of the Swizzin installer
sudo less +G /root/logs/install.log
# To check the logs of any application manipulation through box
sudo less +G /root/logs/swizzin.log
```

Please consult these logs for any errors or other bad-sounding messages before continuing.

## Server is not responding

First ensure that your machine is accessible and connecting correctly by running the following command.

```bash
ping <domain/IP>
```

You can check if your domain is resolving correctly by checking the output of the following command.

```bash
dig <domain>
```

If your machine is not accessible, see if it is online, and the networking is set up correctly.

## Troubleshooting failed SSH
You can always determine what is causing your SSH connectivity issues by running the following command.
```bash
ssh -v <destination>
```
You can add the amount of `v`s to increase the level of verbosity.

_Pro-tip: You can quickly kill an unresponsive SSH session by hitting `ENTER ~ .` in that order._

## Sharing logs

You can always share large logs using termbin straight from your terminal. Below is an example for sharing the content of your syslog.

```bash
cat /var/log/syslog | nc <an instance of fiche> 9999
``` 

## Checking if an application is running

Most applications installed through swizzin have a `systemd` unit available. This allows you to control the applications as services through the `systemctl` interface.

You can always check the current status of an app by running the command under. This will return the whether the application is Active or not, and some of the latest log messages coming from it. It is always a good idea to read those.
```bash
sudo systemctl status <application>
```

Please refer to your application's docs page to see if there are any deviations to this, such as per-user configuration.

## Identifying failed services
You can quickly get an overview of which services have had a problem and are currently nor running by executing the following command.

```bash
sudo systemctl list-units --failed
```

You can then use the other chapters in this document to further find what has gone wrong.

## Checking the system logs

You can always check the logs of the system as a whole by running the following command.
```bash
sudo journalctl -xe
```
You can use your arrow keys o navigate up down left and right. Please consult the manpage of `less` for more handy features like search and others.

You can also open the last `syslog` file which often has useful information. You can do that by running the following command.
```bash
sudo less +G /var/log/syslog
```
You can always filter the output of the `less` command by typing `&`, followed by your filter pattern.

There are many other log files available under the `/var/log` directory which are often a very large trove of information. Please see if any of the other log files might have any relevant information 

## Checking NGINX configuration

NGinx is the application which connects your browser to the right swizzin application.

If you cannot connect to a single application, please consider running the following commands to gather where your issues are stemming from

```bash
# To check if the syntax of your config is valid
sudo nginx -t
# To print the entire config for sharing
sudo nginx -T
```

If any changes have been done recently, you can always trigger a reload of the nginx configuration by running the following command
```bash
sudo nginx -s reload
# or alternatively
sudo systemctl reload nginx
```

### Sharing your nginx configuration

You can quickly upload your nginx configuration to a pastebin by running the following command as root

```bash
nginx -T | nc <an instance of fiche> 9999
```

## Troubleshooting applications which services' won't start

You can always attempt to run an application in the foreground of the terminal instead of in the background as a service.

To do that, you need to figure out which environment to run it from, and which command to execute.

A good start to do that would be to inspect the output of the following command, which can give you an idea of what the service attempts to do.

```bash
sudo systemctl cat <application>
```
The command above will produce output like the one under. This is an example output of `sudo systemctl cat transmission@`.

```systemd
# /etc/systemd/system/transmission@.service
[Unit]
Description=Transmission BitTorrent Daemon
After=network.target

[Service]
User=%i
Group=%i
Type=simple
ExecStart=/usr/bin/transmission-daemon -f --log-error
ExecReload=/bin/kill -s HUP 

[Install]
WantedBy=multi-user.target
```

This means that the service logs in as user `%i` (which means "the string passed after the `@` in `transmission@user`", therefore the user) and then executes the command `/usr/bin/transmission-daemon -f --log-error` on start.

You can therefore switch your user (by running `sudo su <user>`) and execute the same command. This will print the log of the application into your terminal, allowing you to better see when and how a service fails.

Please consult the manpage or `--help` page of the application you are about to run before you do it, to understand what some of the options might mean.

## Accessing a home-hosted swizzin installation externally
Issues in this area usually stem from not setting up port-forwarding correctly on your router, or not setting a static IP right.

### Resources for setting static IP on Debian/Ubuntu
- [Configuring static addresses on Debian/Ubuntu](https://www.cyberciti.biz/faq/linux-configure-a-static-ip-address-tutorial/)

### Resources for setting a static IP on your router
- [Ensuring your router will hand out he right IP to your system](https://www.howtogeek.com/184310/ask-htg-should-i-be-setting-static-ip-addresses-on-my-router/)

### Resources for port-forwarding on router's
- [Guides for forwarding ports on multiple routers](https://portforward.com/router.htm)
- [Generic port forwarding guide](https://www.howtogeek.com/66214/how-to-forward-ports-on-your-router/)
- [Tool to check if ports are open](http://www.portchecktool.com/)

**Please ensure to forward the following ports:**
- 22 (Or your custom SSH/SFTP port)
- 80 (HTTP)
- 443 (HTTPS)

You might additionally forward/open the ports for your torrent clients, FTP or other applications. The steps are the same.

Consider using a Dynamic DNS (DDNS) provider like the swizzin-available [Duck DNS](/applications/duckdns) for your home IP to gain a free domain that can be used for something such as letsencrypt.

## Staring from scratch
We generally advise against this scenario as you lose the opportunity to learn from the mistakes that happened somewhere along the line. This knowledge can help you save time and restore the functionality of the system in case it goes ver awry. Please attempt the steps above first before nuking the system.

There is currently no convenient way to uninstall the entire swizzin suite and return all files and settings to their byte-for-byte original state.

If you are having problems with a specific application, we advise to re-install that application first, and if necessary the underlying dependencies (these could be `nginx`, `rtorrent`, or others depending on the application).

Remember to also remove any additional users you created.

You can also attempt to remove swizzin by removing every app you have installed, and then removing the following files and directories recursively.

**Please be careful to not remove anything else by accident, those mistakes are often irrecoverable.**

- `/etc/swizzin`
- `/usr/local/bin/swizzin`
- `/install/`
- `/root/logs/`
- `/etc/htpasswd`
- `/etc/htpasswd.d`
- `/etc/sudoers.d`
- Any file under `/root/` which ends in `.info`

If you would truly prefer to like to star from scratch, it is best to completely reformat and re-install your OS this will allow you to determine whether the issues you were facing were inside or outside the operating system much faster.

If you are re-installing your OS, we recommend to use the latest LTS version of the distribution of your choice.