import React from "react";
import Responsible from "./Responsible";
import TenderHeader from "./TenderHeader";
import TenderInfo from "./TenderInfo";

const TenderCard = ({ tender }) => {
  return (
    <div className="tender__card">
      <div className="card__wrapper">
        <TenderHeader tender={tender} />
        <TenderInfo tender={tender} />
        <Responsible responsible={tender.responsible} />
      </div>
    </div>
  );
};

export default TenderCard;
