import React, { useState } from "react";
import { getData } from "./getData";
import TenderCard from "./TenderCard";
import FavouritesTenders from "./FavouritesTenders";

const TenderList = () => {
  const [tenders, setTenders] = useState([]);
  const [favCounts, setFavCount] = useState(0);

  return;
   (
    <div>
      <FavouritesTenders favCounts={() => setFavCount(1)} />
      <div className="tender__row">
        {tenders.map((tender) => (
          <TenderCard
            tender={tender}
          />
        ))}
      </div>
    </div>
  );
};

export default TenderList;
