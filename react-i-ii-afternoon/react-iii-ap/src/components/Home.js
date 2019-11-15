import React, { Component } from "react";

const Home = props => {
  console.log(props);

  return (
    <div className='bluebar'>
      <a href="www.apple.com"> Home </a>
      {/* <button onClick={() => props.handleChangeName("Matias")}></button> */}
    </div>
  );
};

export default Home;
