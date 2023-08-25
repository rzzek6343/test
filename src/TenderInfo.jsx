import React from "react";

const FlatInfo = ({ tender }) => {
  const { attributes } = tender;
  const { city, street, house } = attributes.region;
  return (
    <div>
      <div>
        <p>Platform {attributes.platform}</p>
      </div>
      <div>
        <p>
          Place of performance
          {city} ул. {street} д.{house}
        </p>
      </div>
    </div>
  );
};

export default FlatInfo;
