import { FaGear } from "react-icons/fa6";
import { LuCircleMinus,LuCirclePlus, LuRotateCcw, LuCirclePause, LuCirclePlay } from "react-icons/lu";
import { useScoreState, useScoreDispatch } from "../hooks/useScoreContext";
import InputField from "./InputField";
import { useState} from "react";
import Button from "./Button";
const MAX_TIME = 3600;
const MIN_TIME = 1;

const Settings = () => {
    const [open, setOpen] = useState(false)
    const {randoriTimer,players} = useScoreState();
    const scoreDispatch = useScoreDispatch()

    function setTimeFromInput(type, e) {
        const value = Number(e.target.value);

        if (isNaN(value)||value<0||value>59) return;
    
        const totalSeconds = 
            type === 'minutes' 
            ? value * 60 + randoriTimer.defaultTime % 60
            : Math.floor(randoriTimer.defaultTime / 60) * 60 + value;
    
        if (totalSeconds >= MAX_TIME || totalSeconds < MIN_TIME) return;
    
        scoreDispatch({ type: 'SET_RANDORI_TIMER', payload: totalSeconds });
    }

    function handleChange(e){
        const name = e.target.name
        const id = e.target.id
        let value = e.target.value
        scoreDispatch({type:'UPDATE', payload:{id:id, [name]:value}})
    }

    function setTimer(val){
        const timer = randoriTimer+val
        if(timer>=MAX_TIME||timer<MIN_TIME)return
        scoreDispatch({type: 'SET_RANDORI_TIMER', payload: timer})
    }

    
    return ( 
        <section className={`settings ${open ? 'openSettings' : ''}`} id="settings-panel" aria-label="Settings Panel">
            <Button className={`settingsBtn ${open ? 'settingsBtnRotate' : ''}`}  
                aria-label="Toggle settings panel"
                aria-expanded={open}
                aria-controls="settings-panel" onClick={()=>setOpen(!open)}>
                    <FaGear className={open ? 'settingsBtnRotate' : ''}/>
            </Button>
            <h2>SETTINGS</h2>
            <h3>Players:</h3>
            <div className="players">
            {players.map((player) => (
                <div key={player.id} className="playerSettings">
                    <InputField id={player.id} maxLength="15" name='name' onChange={handleChange} value={player.name}/>
                    <InputField id={player.id} className='colorInput' type='color' name={'color'} onChange={(e)=>handleChange(e)} value={player.color}/>
                </div>
            ))}
            </div>
            

            <h3>Timer:</h3>
            <div className="timerSettings">
                <div>
                    <span>min:</span>
                    <Button disabled={randoriTimer-60<MIN_TIME} aria-label="Decrease timer by 1 minute" onClick={()=>setTimer(-60)}><LuCircleMinus /></Button>
                    <InputField maxLength={2}  type="number" min="0" max="59" value={Math.floor(randoriTimer / 60)} onChange={(e) => setTimeFromInput('minutes', e)}/>
                    <Button disabled={randoriTimer+60>=MAX_TIME} aria-label="Increase timer by 1 minute" onClick={()=>setTimer(60)}><LuCirclePlus /></Button>
                </div>
                <div>
                    <span>sec:</span>
                    <Button disabled={randoriTimer-15<MIN_TIME} aria-label="Decrease timer by 15 seconds" onClick={()=>setTimer(-15)}><LuCircleMinus /></Button>
                    <InputField maxLength={2} type="number" min="0" max="59" value={Math.floor(randoriTimer % 60)} onChange={(e) => setTimeFromInput('seconds', e)} />
                    <Button disabled={randoriTimer+15>=MAX_TIME} aria-label="Increase timer by 15 seconds" onClick={()=>setTimer(15)}><LuCirclePlus /></Button>
                </div>
            </div>
            
        </section>
     );
}
 
export default Settings
