import React, { Component } from "react";

const Home = props => {
  console.log(props);

  return (
    <div className='bluebar'>
      <a href="http://apple.com" target="_blank"> Home </a>
      {/* <button onClick={() => props.handleChangeName("Matias")}></button> */}
    </div>
  );
};

export default Home;
