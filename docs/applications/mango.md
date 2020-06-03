---
id: mango
title: Mango
sidebar_label: Mango
---

Mango is a CBZ viewer with an integrated MangaDex downloader

### Installation

You can install mango by issuing the following command:
```bash
sudo box install mango
```

### Accessing Mango
You can access Mango using `domain.tld/mango` if you have nginx installed. Otherwise, it is available on `domain.tld:9003/mango`

Your default administrator credentials are printed into the terminal when you install the application. A copy of these credentials is saved into /root/mango.info

### Retrieving files

As the library for mango is shared, it is located under `/opt/mango/library`. This directory is accessible to all users of the server.

### User management

Mango manages its users in a separate database to `box`. However, `box` will automatically add, remove and update users and their passwords from box when you use the user commands. You can still manage users through thee Mango admin interface.