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
        phone={props.phone}
        email={props.email}
        avatar={props.avatar}
        addRadius={props.addRadius}
        template={props.template}
      />
    </div>
  );
}

export default Main;
