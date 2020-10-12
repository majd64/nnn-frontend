import React from "react";
import NoAuthOctHomeScreen from "./NoAuthOctHomeScreen";

function HomeScreen(props){
  let isNov = false;
  if (isNov){
    if (props.auth){

    }else{

    }
  }else{
    if (props.auth){

    }else{
      return <NoAuthOctHomeScreen />
    }
  }
}
function Home(props) {

  return (
    <HomeScreen />

  );
}

export default Home;
