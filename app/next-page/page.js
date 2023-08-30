import React from "react";
import Clone from "../components/Clone";
import CloneNavBar from "../components/CloneNavBar";
import CloneBtns from "../components/CloneBtns";
import CloneGrid from "../components/CloneGrid";
import CloneNext from "../components/CloneNext";

export default function NextPage() {
  return (
    <div>
      <CloneNavBar />
      <Clone />
      <CloneBtns />
      <CloneGrid />
      <CloneNext/>
    </div>
  );
}
