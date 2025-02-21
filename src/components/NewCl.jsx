import React from "react";

const NewCl = React.memo((props) => {
  console.log("I am from child class");
  return <div>i am from another class </div>;
});

export default NewCl;
