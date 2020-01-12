import React from "react";
import { Marker } from "react-map-gl";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Pin } from "./styles";


const Properties = ({ properties }) =>
  properties.map(property => (
    <Marker
      key={property.id}
      longitude={property.last_position.lng}
      latitude={property.last_position.lat}
    >
      <Pin>
        <a target="_blank" href={property.url} title={property.address}>{property.license_plate}</a>
      </Pin>
    </Marker>
  ));

Properties.propTypes = {
  properties: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      longitude: PropTypes.number,
      license_plate: PropTypes.string,
      latitude: PropTypes.number
    })
  ).isRequired
};

export default Properties;