import { LuRotateCcw, LuCirclePause, LuCirclePlay } from "react-icons/lu";
import useInterval from '../hooks/useInterval'
import Button from "./Button";
import { useEffect, useState } from "react";

const Timer = ({timerLimit, timerCounter=1}) => {
    const [timer,setTime] = useState({time:timerCounter>0?0:timerLimit, pause:true})
    
    const isFinished= timerCounter>0?timer.time>=timerLimit:timer.time<=0
    
    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    useInterval(()=>setTime(prev=>({...prev, time:prev.time+timerCounter})),
                !timer.pause? 1000 : null)

    useEffect(()=>{
        if(isFinished)setTime(prev=>({...prev, pause:true}))
    },[isFinished])
    
    return ( 
    <div className="timer" role="group" aria-label="Timer Controls">        
        <Button className='reset' disabled={!timer.pause} onClick={()=>{setTime(prev=>({...prev, time:timerCounter>0?0:timerLimit}))}} aria-label="Reset Timer"><LuRotateCcw aria-hidden="true"/></Button>
        <div className="time" aria-live="polite" aria-atomic="true">
            <span aria-label={`Time: ${formatTime(timer.time)}`}>
                {formatTime(timer.time)}
            </span>
        </div>      
        <Button className='play' disabled={isFinished}  onClick={()=>setTime(prev=>({...prev, pause:!prev.pause}))} aria-label={timer.pause ? "Start Timer" : "Pause Timer"}>{timer.pause?<LuCirclePlay aria-hidden="true"/>:<LuCirclePause aria-hidden="true"/>}</Button>
    </div>
    );
}
 
export default Timer;   