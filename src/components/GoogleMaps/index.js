import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

const GoogleMaps = (props) => {
  const [embed, setEmbed] = useState("");
  const [externalLink, setExternalLink] = useState("");

  useEffect(() => {
    setEmbed(
      props &&
        props.mapsInfo &&
        props.mapsInfo[Object.keys(props.mapsInfo)[0]].embed
    );

    setExternalLink(
      props &&
        props.mapsInfo &&
        props.mapsInfo[Object.keys(props.mapsInfo)[0]].externalLink
    );
  }, []);

  return (
    <div className="google-maps-container">
      <iframe
        src={embed}
        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
        title="Endereco Santa Casa"
        className="google-maps-embed"
      ></iframe>

      <span className="google-maps-link">
        <Link target="_blank" to={externalLink}>
          Abrir no Google Maps
        </Link>
      </span>
    </div>
  );
};

export default GoogleMaps;
