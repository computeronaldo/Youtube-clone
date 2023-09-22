import React, { useContext, useEffect } from "react";

import { Context } from "../context/contextApi";
import Leftnav from "./LeftNav";

const Feed = () => {
  return (
    <div className="flex flex-row h-[calc(100% - 56px)]">
      <Leftnav />
    </div>
  );
};

export default Feed;
