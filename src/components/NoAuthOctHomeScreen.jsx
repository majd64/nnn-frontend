import React from "react";
import TimerTillNovember from "./TimerTillNovember";
import { Link } from 'react-router-dom';

function NoAuthOctoberHomescreen(props) {
  return (
    <header className="center">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto mt-2 mb-0">No Nut November</h1>
          <h5 className="mx-auto mt-2 mb-0"><em>Where boys become men.</em></h5>
          <TimerTillNovember className="mx-auto mt-2 mb-5" size={5}/>
          <h5>36,847 comrades</h5>
          <Link type="button" to="/register" className="btn btn-danger">Join the boys!</Link>
        </div>
      </div>
    </header>
  );
}

export default NoAuthOctoberHomescreen;
