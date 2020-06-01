import React, { useEffect, useState } from "react";
import axios from "axios";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const url =
      "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/Priest";
    axios
      .get(url, {
        headers: {
          "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
          "x-rapidapi-key":
            "6cad9a4fb4msh9c34bf13bb9f838p1f784fjsna38b9c34760a",
        },
      })
      .then((res) => {
        setLoading(false);
        console.log(res.data);
        setClasses(res.data);
      })
      .catch((err) => {
        setLoading(true);
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h1>Classes</h1>
    </div>
  );
};

export default Classes;
