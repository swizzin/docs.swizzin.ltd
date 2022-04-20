---
id: how-do-i-connect
title: How do I connect to the server?
sidebar_label: How do I connect to the server?
---

In order to connect to your slot for installation, you'll need to access your slot via SSH. Never done that before? Fear not! Read on to find out more.

When you received your server or VPS, you should have received an email with the following:

- An IP
- A username (often `root`)
- A password

We'll use all of these pieces of information to connect to your server

## Step-by-step guide (Linux/OS X/Windows 10+)

Connecting to your slot via Linux or OSX is trivial:
1. Open a terminal or command prompt/powershell
2. Type: `ssh <username>@<hostname>`
    eg: `ssh liara@server.swizzin.ltd`
3. If this is your first time connecting, you will be asked to accept the host's public key. Type "yes" to verify.
4. Enter your password
- (Recommended) Setup [public/private keypair](https://www.cyberciti.biz/faq/how-to-set-up-ssh-keys-on-linux-unix/) authentication
- (Bonus) Encrypt your key with a password during creation
5. Done!

## Step-by-step guide (PuTTY)

1. If you don't already have PuTTY installed, you can grab it [here](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html). Once downloaded, click the .exe and follow the instructions to install.

2. Once installed you can enter your server details including username and password

3. On first login you may be presented with a warning - this is to confirm that the server identity is correct.

4. From there user your username and password to log in. If you are successful you should see a default Linux command prompt, and can now install applications.

```
Linux *.swizzin.ltd 5.10.0-11-amd64 #1 SMP Debian 5.10.92-2 (2022-02-28) x86_64

The programs included with the Debian GNU/Linux system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.

Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent
permitted by applicable law.
➜  ~ 

```