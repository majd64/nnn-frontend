import React, {useState, useEffect} from "react";

function TimerTillNovember(props) {
  const [timerText, setTimerText] = useState(calculateTimeTillNovember());

  function calculateTimeTillNovember(){
    const total = Date.parse('Nov 1 2020') - Date.parse(new Date());
    const seconds = Math.floor( (total/1000) % 60 );
    const minutes = Math.floor( (total/1000/60) % 60 );
    const hours = Math.floor( (total/(1000*60*60)) % 24 );
    const days = Math.floor( total/(1000*60*60*24) );
    return days + ":" + hours + ":" + minutes + ":" + seconds
  }

  useEffect(() => {
    setTimeout(() => {
      setTimerText(calculateTimeTillNovember());
    }, 1000);
  });


  switch (props.size) {
    case 1:
      return <h1 style={props.style} className={props.className}>{timerText}</h1>;
    case 2:
      return <h2 style={props.style}className={props.className}>{timerText}</h2>;
    case 3:
      return <h3 style={props.style} className={props.className}>{timerText}</h3>;
    case 4:
      return <h4 style={props.style} className={props.className}>{timerText}</h4>;
    case 5:
      return <h5 style={props.style} className={props.className}>{timerText}</h5>;
    case 6:
      return <h6 style={props.style} className={props.className}>{timerText}</h6>;
    default:
      return <h5 style={props.style} className={props.className}>{timerText}</h5>;
  }
}

export default TimerTillNovember;
