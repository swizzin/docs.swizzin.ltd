---
id: nextcloud
title: Nextcloud
sidebar_label: Nextcloud
---

A self-hosted file-sharing and collaboration tool. A Dropbox/Google Drive alternative.

## Installation

Nextcloud requires nginx to be installed. Please install the dependency first, and then install Nextcloud.

```bash
sudo box install nginx
sudo box install nextcloud
```

## Accessing Nextcloud

You can access nextcloud at `https://<hostname.tld>/nextcloud`.

The installation will automatically create the Nextcloud administrator user using your master username and password.

## User management

Nextcloud users are being handled separately to 

At the time of writing, `box` **will not** create Nextcloud accounts for your other users. Please create those manually through the administrator interface.

## Service control

Nextcloud is an application written by PHP, and therefore it does not have its own service, as it is powered by the PHP-FPM stack.

## Troubleshooting

### Domain is not in "trusted domains"
Nextcloud requires to know which domains/IPs/host names it should expect traffic from for security reasons. It will give you an error when it is being accessed from a source it does not recognize.

Box attempts to guess these based on your IP, your machine's hostname and the value it has for the FQDN, as well as the `server_name` value in your nginx configuration, and adds all of those to the "trusted domains" key.

You can manually change these by following the commands below. Please note: the values are stored in an array, and the value must be set to the index you desire it to be on. Therefore if you have 6 entries, you should add your domain to the 7th position.

```bash
cd /srv/nextcloud
# Show all the values currently configured
sudo -u www-data php occ config:system:get trusted_domains
# Get the current amount of entries
sudo -u www-data php occ config:system:get trusted_domains | wc -l
# Set your value to the next index, e.g. <index> = 7
sudo -u www-data php occ config:system:set trusted_domains <index> --value="<domain.tld>"
```

You should be able to connect to your instance now.