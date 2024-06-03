import { useState, useEffect } from "react";
import "./App.css";
import Profile from "./component/Profil/Profil";

function useTime(){
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
  const id = setInterval(() => {
      setTime(new Date());
  },1000);
  return () => clearInterval(id);
  },[]);
  return time;
}

export default function App() {
    const time = useTime();
      return(
        <div>
           <Profile />
        </div>
    );
}