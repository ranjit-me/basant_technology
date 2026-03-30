import GetApiData from "./GetApiData";
import PostDataApi from "./PostDataApi";
import Ipl from "./Ipl";
import { useState } from "react";
function Api() {
  // const [value, setValue] = useState("value");
  const goForTrophy = (value) => {
    console.log("CSK", value);
  };
  return (
    <>
      {/* <div>
        <h1 className="text-4xl">Get Api Calling</h1>
        <GetApiData />
      </div> */}
      <div>
        <h1 className="text-4xl">Post Api Calling</h1>
        <PostDataApi />
      </div>
      {/* <div>
        <h1 className="text-4xl flex ">IPl </h1>
        <Ipl name="CSK" handle={goForTrophy} />
      </div> */}
      {/* <div>
        <h1>RCD:{value}</h1>
      </div> */}
    </>
  );
}
export default Api;
//how do yo pass data from child class to parent class or how do you pass data child to parent
