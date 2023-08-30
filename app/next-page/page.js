import React from "react";
import Clone from "../components/Clone";
import CloneNavBar from "../components/CloneNavBar";
import CloneBtns from "../components/CloneBtns";
import CloneGrid from "../components/CloneGrid";

export default function NextPage() {
  return (
    <div>
      <CloneNavBar />
      <Clone />
      <CloneBtns />
      <CloneGrid />
    </div>
  );
}
