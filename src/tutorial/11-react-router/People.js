import React, { useState } from "react";
import { data } from "../../data";

const People = () => {
  const [people, setPeople] = useState(data);

  return (
    <>
      <h2>People page</h2>
      <div>
        {people.map((person) => {
          return (
            <div key={person.id} className="item">
              <h4>{person.name}</h4>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default People;
