module.exports = {
    docs: [
        {
            type: "category",
            label: "Getting Started",
            collapsed: true,
            items: [
                "getting-started/installation",
                "getting-started/how-do-i-connect",
                "getting-started/box-basics",
                "getting-started/faqs"
            ],
        },
        {
            type: "category",
            label: "Applications",
            collapsed: true,
            items: [
                "applications/index",
                {
                    type: "category",
                    label: "Automation",
                    collapsed: true,
                    items: [
                        "applications/autodl",
                        "applications/bazarr",
                        "applications/couchpotato",
                        "applications/headphones",
                        "applications/lidarr",
                        "applications/medusa",
                        "applications/ombi",
                        "applications/sickchill",
                        "applications/sickgear",
                        "applications/sonarr",
                        "applications/sonarrv3",
                        "applications/radarr",
                    ],
                },
                {
                    type: "category",
                    label: "Backup & Sync",
                    collapsed: true,
                    items: [
                        "applications/btsync",
                        "applications/nextcloud",
                        "applications/rclone",
                        "applications/syncthing",
                        "applications/vsftpd",
                    ],
                },
                {
                    type: "category",
                    label: "Indexers",
                    collapsed: true,
                    items: [
                        "applications/jackett",
                        "applications/nzbhydra",
                    ],
                },
                {
                    type: "category",
                    label: "IRC",
                    collapsed: true,
                    items: [
                        "applications/lounge",
                        "applications/quassel",
                        "applications/znc",
                    ],
                },
                {
                    type: "category",
                    label: "Media Servers",
                    collapsed: true,
                    items: [
                        "applications/emby",
                        "applications/jellyfin",
                        "applications/mango",
                        "applications/plex",
                        "applications/tautulli",
                    ],
                },
                {
                    type: "category",
                    label: "Torrent Clients & GUIs",
                    collapsed: true,
                    items: [
                        "applications/deluge",
                        "applications/flood",
                        "applications/qbittorrent",
                        "applications/rtorrent",
                        "applications/rutorrent",
                        "applications/transmission",
                    ],
                },
                {
                    type: "category",
                    label: "Usenet Clients",
                    collapsed: true,
                    items: [
                        "applications/nzbget",
                        "applications/sabnzbd",
                        "applications/nzbhydra",
                    ],
                },
                {
                    type: "category",
                    label: "Utilities",
                    collapsed: true,
                    items: [
                        "applications/duckdns",
                        "applications/ffmpeg",
                        "applications/filebrowser",
                        "applications/librespeed",
                        "applications/letsencrypt",
                        "applications/netdata",
                        "applications/nginx",
                        "applications/organizr",
                        "applications/panel",
                        "applications/pyload",
                        "applications/quota",
                        "applications/rapidleech",
                        "applications/shellinabox",
                        "applications/webmin",
                        "applications/wireguard",
                        "applications/x2go",
                        "applications/xmrig",
                    ],
                },
            ],
        },
        {
            type: "category",
            label: "Guides",
            collapsed: true,
            items: [
                "guides/dist-upgrade",
                "guides/troubleshooting",
                "guides/advanced-setup",
                "guides/migrating"
            ],
        },
        {
            type: "category",
            label: "Helper Scripts",
            collapsed: true,
            items: [
                "scripts/setdisk",
                "scripts/rtx",
            ],
        }, {
            type: "category",
            label: "Development",
            collapsed: true,
            items: [
                "dev/intro",
                "dev/setup",
                "dev/structure",
                "dev/functions",
                "dev/beta-testing",
            ]
        }
    ],
};
