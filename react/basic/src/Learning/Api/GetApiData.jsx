import React, { useState, useEffect } from "react";

const GetApiData = () => {
  const [items, setItems] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        const result = await response.json();
        console.log("i have a result", result);
        setItems(result);
        setDataIsLoaded(true);
      } catch (error) {
        setError(error);
        console.log(error);
      }
    };

    fetchData();
  }, []);

  if (!dataIsLoaded) {
    return (
      <div>
        <h1>Please wait some time.....</h1>
      </div>
    );
  }

  return (
    <div>
      <h3>Fetch data from an API in React</h3>
      <div>
        {items.slice(0, 5).map((item) => {
          return (
            <div key={item.id}>
              <ol>
                <div>
                  <strong>User Name: </strong>
                  {item.username}
                </div>
                <div>Full Name: {item.name}</div>
                <div>User Email: {item.email}</div>
              </ol>
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GetApiData;
