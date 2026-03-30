import React from "react";
import HOCUser from "./HOCUser";
import NormalUser from "./NormalUser";

function PremiumUser() {
  return (
    <>
      <NormalUser />
    </>
  );
}

export default HOCUser(PremiumUser);
