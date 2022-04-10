import React from "react";
import Header from "./Header";
import Templates from "./Templates";

function Main(props) {
  return (
    <div className="main">
      <Header />
      <Templates
        name={props.name}
        jobTitle={props.jobTitle}
        jobTitle2={props.jobTitle2}
        phone={props.phone}
        email={props.email}
        avatar={props.avatar}
        addRadius={props.addRadius}
        template={props.template}
        extraLine={props.extraLine}
      />
    </div>
  );
}

export default Main;
