import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { FiFlag } from "react-icons/fi";
import Headline from "@theme/Headline";
import styles from "./styles.module.scss";

const data = [
  {
    title: "Airsonic",
    url: "applications/airsonic",
  },
  {
    title: "AutoDL-irssi",
    url: "applications/autodl",
  },
  {
    title: "Bazarr",
    url: "applications/bazarr",
  },
  {
    title: "Couchpotato",
    url: "applications/couchpotato",
  },
  {
    title: "Deluge",
    url: "applications/deluge",
  },
  {
    title: "DuckDNS",
    url: "applications/duckdns",
  },
  {
    title: "Emby Server",
    url: "applications/emby",
  },
  {
    title: "ffmpeg",
    url: "applications/ffmpeg",
  },
  {
    title: "Filebrowser",
    url: "applications/filebrowser",
  },
  {
    title: "Flood",
    url: "applications/flood",
  },
  {
    title: "Headphones",
    url: "applications/headphones",
  },
  {
    title: "Jackett",
    url: "applications/jackett",
  },
  {
    title: "Jellyfin",
    url: "applications/jellyfin",
  },
  {
    title: "Let's Encrypt",
    url: "applications/letsencrypt",
  },
  {
    title: "Librespeed",
    url: "applications/librespeed",
  },
  {
    title: "Lidarr",
    url: "applications/lidarr",
  },
  {
    title: "The Lounge",
    url: "applications/lounge",
  },
  {
    title: "Mango",
    url: "applications/mango",
  },
  {
    title: "Medusa",
    url: "applications/medusa",
  },
  {
    title: "Netdata",
    url: "applications/netdata",
  },
  {
    title: "Nextcloud",
    url: "applications/nextcloud",
  },
  {
    title: "Nginx",
    url: "applications/nginx",
  },
  {
    title: "NZBGet",
    url: "applications/nzbget",
  },
  {
    title: "NZBHydra2",
    url: "applications/nzbhydra",
  },
  {
    title: "Ombi",
    url: "applications/ombi",
  },
  {
    title: "Organizr",
    url: "applications/organizr",
  },
  {
    title: "Plex",
    url: "applications/plex",
  },
  {
    title: "pyLoad",
    url: "applications/pyload",
  },
  {
    title: "qBittorrent",
    url: "applications/qbittorrent",
  },
  {
    title: "Quassel",
    url: "applications/quassel",
  },
  {
    title: "Quota",
    url: "applications/quota",
  },
  {
    title: "Radarr",
    url: "applications/radarr",
  },
  {
    title: "Rapidleech",
    url: "applications/rapidleech",
  },
  {
    title: "Rclone",
    url: "applications/rclone",
  },
  {
    title: "Resilio Sync",
    url: "applications/btsync",
  },
  {
    title: "rTorrent",
    url: "applications/rtorrent",
  },
  {
    title: "ruTorrent",
    url: "applications/rutorrent",
  },
  {
    title: "SABnzbd",
    url: "applications/sabnzbd",
  },
  {
    title: "Shellinabox",
    url: "applications/shellinabox",
  },
  {
    title: "SickChill",
    url: "applications/sickchill",
  },
  {
    title: "SickGear",
    url: "applications/sickgear",
  },
  {
    title: "Sonarr v2",
    url: "applications/sonarr",
  },
  {
      title: "Sonarr v3",
      url: "applications/sonarrv3",
  },
  {
    title: "Subsonic",
    url: "applications/subsonic",
  },
  {
    title: "Swizzin Panel",
    url: "applications/panel",
  },
  {
    title: "Syncthing",
    url: "applications/syncthing",
  },
  {
    title: "Tautulli",
    url: "applications/tautulli",
  },
  {
    title: "Transmission",
    url: "applications/transmission",
  },
  {
    title: "Vsftpd",
    url: "applications/vsftpd",
  },
  {
    title: "Webmin",
    url: "applications/webmin",
  },
  {
    title: "Wireguard",
    url: "applications/wireguard",
  },
  {
    title: "X2go",
    url: "applications/x2go",
  },
  {
    title: "Xmrig",
    url: "applications/xmrig",
  },
  {
    title: "ZNC",
    url: "applications/znc",
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
