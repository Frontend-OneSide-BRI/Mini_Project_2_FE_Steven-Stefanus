import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Card() {
  const { user } = useParams();
  const [stateUser, setStateUser] = useState("");

  useEffect(() => {
    setStateUser(user);
  }, [user]);

  return (
    <div
      className="ui raised very padded text container segment"
      style={{ marginTop: "80px" }}
    >
      <h3 className="ui header">{stateUser}</h3>
    </div>
  );
}

export default Card;