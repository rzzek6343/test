import React from "react";

const Relationships = ({ responsible }) => {
  return (
    <div className="card__relationships">
      <p>Есть вопросы?</p>
      <span>
        {responsible.name}
        {responsible.jobPosition}
      </span>
    </div>
  );
};

export default Relationships;
