import React from "react";
import NoAuthOctHome from "./NoAuthOctHome";
import AuthOctHome from "./AuthOctHome";

function HomeScreen(props){
  let isNov = false;
  if (isNov){
    if (props.auth){

    }else{

    }
  }else{
    if (props.auth){
      return <AuthOctHome user={props.user}/>
    }else{
      return <NoAuthOctHome />
    }
  }
}

function Home(props) {
  return (
    <HomeScreen user={props.user} auth={props.auth}/>
  );
}

export default Home;
