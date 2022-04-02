import React,{useState,useEffect} from "react"

const TimeBox = () => {

  const[Hour,SetHour] = useState(new Date().getHours());
  const[Minute,SetMinutes] = useState(new Date().getMinutes());
  const[Seconds,SetSeconds] = useState(new Date().getSeconds());

  useEffect(() => {
    const interval = setInterval(() => {
      SetHour(new Date().getHours())
      SetMinutes(new Date().getMinutes())
      SetSeconds(new Date().getSeconds())
    }, 1000);
    return () => clearInterval(interval);
  }, []);

    return (
      <>
        
        <p>{Hour}:{Minute}:{Seconds}</p>
        
      </>
    );
}
  
  
  export default TimeBox;
  