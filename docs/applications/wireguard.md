---
id: wireguard
title: Wireguard
sidebar_label: Wireguard
---

WireGuard is an extremely simple yet fast and modern VPN that utilizes state-of-the-art cryptography

## Initial Setup

Installing wireguard is easy. Simply issue the following command from SSH:

```bash main
sudo box install wireguard
```

This command will configure wireguard for your user. When install finished, the installer will output the configuration for your user. This is an example configuration:

```bash main
[Interface]
Address = 10.100.0.2
PrivateKey = {averysecretkey}
ListenPort = 21841

[Peer]
PublicKey = {apublickey}
Endpoint = {shared/dedicated IP}:{port}
AllowedIPs = 0.0.0.0/0

# This is for if you're behind a NAT and
# want the connection to be kept alive.
#PersistentKeepalive = 25
```

## How to Access

### Client Install
In order to use the Wireguard tunnel, you'll need to install the client on your local computer or mobile phone. In order to get started, please check the [Wireguard site](https://www.wireguard.com/install/) for help on installing Wireguard on the operating system of your choice.

::: note
If you prefer, and alternate client called [TunSafe](https://tunsafe.com/download) exists and is already a bit more mature than the official Wireguard client for Windows. **While the client itself is open-source and developed by a community member with prior credibility, it bears mentioning that using this client completely, 100% at your own risk as it is not developed or maintained by the Wireguard team. You have been warned.**
:::

### Client Setup

Wireguard is available on many platforms. Setting it up for use with your swizzin configuration should be fairly straight-forward, but in case you need a littl help getting your client setup, here are some instructions for popular operating systems.

<!--DOCUSAURUS_CODE_TABS-->
<!--Linux / OS X-->
::: panel
1. Simply copy-paste the configuration file outputted at the end of the server setup into a file in /etc/wireguard.
```bash
sudo nano /etc/wireguard/wg0.conf
sudo chmod 600 /etc/wireguard/wg0.conf
sudo wg-quick up wg0
```
2. Wireguard should now be up and tunnelling all you traffic through swizzin.
3. [Check your IP Address](https://duckduckgo.com/?q=ip+address&ia=answer). It should now reflect your shared or dedicated IP for your slot.

4. On Linux systems, you can configure a systemd service to automatically run and enable this configuration on each boot:
```bash
sudo systemctl enable wg-quick@wg0
```
:::
<!--Windows-->
::: panel
1. Copy-paste the contents of the client configuration outputted at the end of configuration into a file onto your local desktop,eg: `swizzin.conf.d`

2. Open TunSafe, click and drag the configuration file you just created to the TunSafe window. TunSafe will automatically import the client configuration and connect. Easy!

3. [Check your IP Address](https://duckduckgo.com/?q=ip+address&ia=answer). It should now reflect your shared or dedicated IP for your slot.
:::
<!--Android-->
::: panel
Configuration is easiest if you use utilize the QR Encode function.

1. Connect to your server from a computer and issue the commands:
```bash
u=$(whoami)
qrencode -t ansiutf8 < ~/.wireguard/$u.conf
```
2. In your client on your phone, add a new tunnel and chose the `QR Code` option. Scan the QR code which was generated in your terminal.
3. Enable the tunnel by ticking the switch.
4. [Check your IP Address](https://duckduckgo.com/?q=ip+address&ia=answer).
:::
<!--iOS-->
::: panel
Configuration is easiest if you use utilize the QR Encode function.

1. Connect to your server from a computer and issue the commands:
```bash
u=$(whoami)
qrencode -t ansiutf8 < ~/.wireguard/$u.conf
```
2. In your client on your phone, add a new tunnel and chose the `QR Code` option. Scan the QR code which was generated in your terminal.
3. Enable the tunnel by ticking the switch.
4. [Check your IP Address](https://duckduckgo.com/?q=ip+address&ia=answer).
:::
<!--END_DOCUSAURUS_CODE_TABS-->

## Service Management

Service management for wireguard is a bit different from other services. Wireguard interfaces are managed by the systemd service `wg-quick@.service`.

The default location for the wg-quick service is:

```bash
/lib/systemd/system/wg-quick@.service
```

Instead of usernames, wg-quick uses the id of the user as an identifier. Since Wireguard is only installed for the master user, in most cases, the id of the user in question will be `1000` unless you added a different initial user before installing swizzin.

Regardless, you can easily find the id of your user with the command: `id -u <username>`

The basic construction of the service name is:

```bash
wg-quick@wg$(id -u <username>)
```

This service corresponds to the configuration file `wg$(id -u <username>).conf` in `/etc/wireguard`

Once you have the id of your user in question (for example, 1000), you can manipulate the service by calling it with:

```
wg-quick@wg1000

```

Calling `wg1000` means use the conf file `/etc/wireguard/wg1000.conf` when calling `wg-quick`.


<!--DOCUSAURUS_CODE_TABS-->
<!--Start-->
```bash
sudo systemctl start wg-quick@wg1000
```
<!--Stop-->
```bash
sudo systemctl stop wg-quick@wg1000
```
<!--Restart-->
```bash
sudo systemctl restart wg-quick@wg1000
```
<!--Enable-->
```bash
sudo systemctl enable wg-quick@wg1000
```
<!--Disable-->
```bash
sudo systemctl disable wg-quick@wg1000
```
<!--END_DOCUSAURUS_CODE_TABS-->
