import React from "react";

const FavouritesTenders = (props) => {
  const favCounts = props.favCounts && props.favCounts > 0 && props.favCounts;
  return (
    <div className="fav_row card__relationships">
      <p>You have {` ${favCounts || 0} `} interesting tenders</p>
    </div>
  );
};

export default FavouritesTenders;
