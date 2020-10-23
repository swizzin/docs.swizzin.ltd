import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { FiFlag } from "react-icons/fi";

import Headline from "@theme/Headline";
import styles from "./styles.module.scss";

const data = [
  {
    title: "AutoDL-irssi",
    url: "https://github.com/autodl-community",
  },
  {
    title: "Bazarr",
    url: "https://github.com/autodl-community",
  },
  {
    title: "Couchpotato",
    url: "https://github.com/autodl-community",
  },
  {
    title: "Deluge",
    url: "https://github.com/autodl-community",
  },
  {
    title: "DuckDNS",
    url: "https://github.com/autodl-community",
  },
  {
    title: "Emby Server",
    url: "https://github.com/autodl-community",
  },
  {
    title: "ffmpeg",
    url: "https://github.com/autodl-community",
  },
  {
    title: "Filebrowser",
    url: "https://github.com/autodl-community",
  },
  {
    title: "Flood",
    url: "https://github.com/autodl-community",
  },
  {
    title: "Headphones",
    url: "https://github.com/autodl-community",
  },
  {
    title: "Jackett",
    url: "https://github.com/autodl-community",
  },
  {
    title: "Jellyfin",
    url: "https://github.com/autodl-community",
  },
  {
    title: "Let's Encrypt",
    url: "https://github.com/autodl-community",
  },
  {
    title: "Librespeed",
    url: "https://github.com/autodl-community",
  },
  {
    title: "Lidarr",
    url: "https://github.com/autodl-community",
  },
  {
    title: "The Lounge",
    url: "https://github.com/autodl-community",
  },
  {
    title: "Mango",
    url: "https://github.com/autodl-community",
  },
  {
    title: "Medusa",
    url: "https://github.com/autodl-community",
  },
  {
    title: "Netdata",
    url: "https://github.com/autodl-community",
  },
  {
    title: "Nextcloud",
    url: "https://github.com/autodl-community",
  },
  {
    title: "Nginx",
    url: "https://github.com/autodl-community",
  },
  {
    title: "NZBGet",
    url: "https://github.com/autodl-community",
  },
  {
    title: "NZBHydra2",
    url: "https://github.com/autodl-community",
  },
  {
    title: "Ombi",
    url: "https://github.com/autodl-community",
  },
  {
    title: "Organizr",
    url: "https://github.com/autodl-community",
  },
  {
    title: "Plex",
    url: "https://github.com/autodl-community",
  },
  {
    title: "pyLoad",
    url: "https://github.com/autodl-community",
  },
  {
    title: "qBittorrent",
    url: "https://github.com/autodl-community",
  },
  {
    title: "Quassel",
    url: "https://github.com/autodl-community",
  },
  {
    title: "Quota",
    url: "https://github.com/autodl-community",
  },
  {
    title: "Radarr",
    url: "https://github.com/autodl-community",
  },
  {
    title: "Rapidleech",
    url: "https://github.com/autodl-community",
  },
  {
    title: "Rclone",
    url: "https://github.com/autodl-community",
  },
  {
    title: "Resilio Sync",
    url: "https://github.com/autodl-community",
  },
  {
    title: "rTorrent",
    url: "https://github.com/autodl-community",
  },
  {
    title: "ruTorrent",
    url: "https://github.com/autodl-community",
  },
  {
    title: "SABnzbd",
    url: "https://github.com/autodl-community",
  },
  {
    title: "Shellinabox",
    url: "https://github.com/autodl-community",
  },
  {
    title: "SickChill",
    url: "https://github.com/autodl-community",
  },
  {
    title: "SickGear",
    url: "https://github.com/autodl-community",
  },
  {
    title: "Sonarr v2/v3",
    url: "https://github.com/autodl-community",
  },
  {
    title: "Subsonic",
    url: "https://github.com/autodl-community",
  },
  {
    title: "Swizzin Dashboard",
    url: "https://github.com/autodl-community",
  },
  {
    title: "Syncthing",
    url: "https://github.com/autodl-community",
  },
  {
    title: "Tautulli",
    url: "https://github.com/autodl-community",
  },
  {
    title: "Transmission",
    url: "https://github.com/autodl-community",
  },
  {
    title: "Vsftpd",
    url: "https://github.com/autodl-community",
  },
  {
    title: "Webmin",
    url: "https://github.com/autodl-community",
  },
  {
    title: "Wireguard",
    url: "https://github.com/autodl-community",
  },
  {
    title: "X2go",
    url: "https://github.com/autodl-community",
  },
  {
    title: "Xmrig",
    url: "https://github.com/autodl-community",
  },
  {
    title: "ZNC",
    url: "https://github.com/autodl-community",
  },
];

function Application({ title, url }) {
  return (
    <div className={clsx("col col--2", styles.feature, styles.applications)}>
      <a href={url}>{title}</a>
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
