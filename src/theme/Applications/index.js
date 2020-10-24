import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { FiFlag } from "react-icons/fi";
import Headline from "@theme/Headline";
import styles from "./styles.module.scss";

const data = [
  {
    title: "AutoDL-irssi",
    url: "docs/applications/autodl",
  },
  {
    title: "Bazarr",
    url: "docs/applications/bazarr",
  },
  {
    title: "Couchpotato",
    url: "docs/applications/couchpotato",
  },
  {
    title: "Deluge",
    url: "docs/applications/deluge",
  },
  {
    title: "DuckDNS",
    url: "docs/applications/duckdns",
  },
  {
    title: "Emby Server",
    url: "docs/applications/emby",
  },
  {
    title: "ffmpeg",
    url: "docs/applications/ffmpeg",
  },
  {
    title: "Filebrowser",
    url: "docs/applications/filebrowser",
  },
  {
    title: "Flood",
    url: "docs/applications/flood",
  },
  {
    title: "Headphones",
    url: "docs/applications/headphones",
  },
  {
    title: "Jackett",
    url: "docs/applications/jackett",
  },
  {
    title: "Jellyfin",
    url: "docs/applications/jellyfin",
  },
  {
    title: "Let's Encrypt",
    url: "docs/applications/letsencrypt",
  },
  {
    title: "Librespeed",
    url: "docs/applications/librespeed",
  },
  {
    title: "Lidarr",
    url: "docs/applications/lidarr",
  },
  {
    title: "The Lounge",
    url: "docs/applications/lounge",
  },
  {
    title: "Mango",
    url: "docs/applications/mango",
  },
  {
    title: "Medusa",
    url: "docs/applications/medusa",
  },
  {
    title: "Netdata",
    url: "docs/applications/netdata",
  },
  {
    title: "Nextcloud",
    url: "docs/applications/nextcloud",
  },
  {
    title: "Nginx",
    url: "docs/applications/nginx",
  },
  {
    title: "NZBGet",
    url: "docs/applications/nzbget",
  },
  {
    title: "NZBHydra2",
    url: "docs/applications/nzbhydra",
  },
  {
    title: "Ombi",
    url: "docs/applications/ombi",
  },
  {
    title: "Organizr",
    url: "docs/applications/organizr",
  },
  {
    title: "Plex",
    url: "docs/applications/plex",
  },
  {
    title: "pyLoad",
    url: "docs/applications/pyload",
  },
  {
    title: "qBittorrent",
    url: "docs/applications/qbittorrent",
  },
  {
    title: "Quassel",
    url: "docs/applications/quassel",
  },
  {
    title: "Quota",
    url: "docs/applications/quota",
  },
  {
    title: "Radarr",
    url: "docs/applications/radarr",
  },
  {
    title: "Rapidleech",
    url: "docs/applications/rapidleech",
  },
  {
    title: "Rclone",
    url: "docs/applications/rclone",
  },
  {
    title: "Resilio Sync",
    url: "docs/applications/btsync",
  },
  {
    title: "rTorrent",
    url: "docs/applications/rtorrent",
  },
  {
    title: "ruTorrent",
    url: "docs/applications/rutorrent",
  },
  {
    title: "SABnzbd",
    url: "docs/applications/sabnzbd",
  },
  {
    title: "Shellinabox",
    url: "docs/applications/shellinabox",
  },
  {
    title: "SickChill",
    url: "docs/applications/sickchill",
  },
  {
    title: "SickGear",
    url: "docs/applications/sickgear",
  },
  {
    title: "Sonarr v2",
    url: "docs/applications/sonarr",
  },
  {
      title: "Sonarr v3",
      url: "docs/applications/sonarrv3",
  },
  {
    title: "Subsonic",
    url: "docs/applications/subsonic",
  },
  {
    title: "Swizzin Dashboard",
    url: "docs/applications/panel",
  },
  {
    title: "Syncthing",
    url: "docs/applications/syncthing",
  },
  {
    title: "Tautulli",
    url: "docs/applications/tautulli",
  },
  {
    title: "Transmission",
    url: "docs/applications/transmission",
  },
  {
    title: "Vsftpd",
    url: "docs/applications/vsftpd",
  },
  {
    title: "Webmin",
    url: "docs/applications/webmin",
  },
  {
    title: "Wireguard",
    url: "docs/applications/wireguard",
  },
  {
    title: "X2go",
    url: "docs/applications/x2go",
  },
  {
    title: "Xmrig",
    url: "docs/applications/xmrig",
  },
  {
    title: "ZNC",
    url: "docs/applications/znc",
  },
];

function Application({ title, url }) {
  return (
    <div className={clsx("col col--2", styles.feature, styles.applications)}>
      <Link href={url} >{title}</Link>
    </div>
  );
}

function Applications() {
  return (
    <>
      {data && data.length > 0 && (
        <section id="applications" className={styles.features}>
          <div className="container">
            <Headline
              category="Applications"
              title="A whole repository of applications to fit your needs"
              offset={1}
            />

            <div className="row">
              {data.map((props, idx) => (
                <Application key={idx} {...props} />
              ))}
            </div>

            <div className="row">
              <div className="col col--5 col--offset-1">
                <Link
                  className={clsx(
                    "button button--primary button--lg",
                    styles.button
                  )}
                  href="https://feathub.com/liaralabs/swizzin"
                >
                  <FiFlag size={24} /> App and feature requests
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Applications;
