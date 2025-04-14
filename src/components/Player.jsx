import { FaHandHolding, FaHandPaper, FaHandPointer } from "react-icons/fa";
import { LuRotateCcw} from "react-icons/lu";

import { useScoreDispatch, useScoreState} from "../hooks/useScoreContext";
import Button from "./Button";
import Timer from "./Timer";
import useDoubleTap from "../hooks/useDoubleTap";


const Player = ({player}) => {
    const scoreDispatch = useScoreDispatch()
    const {oseakomiTimer, oseakomiPlayerId} = useScoreState()
    
    function updateScore (e, value){ 
        e.preventDefault()
        const name = e.target.name
        const max = e.target.dataset.max||20
        if(player[name]+value > max||player[name]+value <0)return
        scoreDispatch({type:'UPDATE', payload:{id:player.id, [name]:player[name]+value}})
    }

    const handleClick= useDoubleTap(
            (e) => updateScore(e, 1),   // single tap
            (e) => updateScore(e, -1)   // double tap
        )
   
    return ( 
        <>
            <div className="playerData" >
                <div className="playerName" >
                    <h2 >{player.name}</h2>
                    <div style={{backgroundColor:player.color}} className="playerColor"></div>       
                </div>
                <Button  aria-label="Reset Scores" onClick={()=>scoreDispatch({type:'RESET_SCORES', payload:{id:player.id}})}><LuRotateCcw aria-hidden="true"/></Button>  
            </div>

            <div className="scoreBtns">
                <div className="scoreDiv">
                    <span>{player.ippon}</span>
                    <Button aria-label="Ippon point" aria-description="Tap to increase, double tap to decrease" name='ippon' onClick={handleClick} data-max={1}><FaHandPaper className='ippon'/></Button>
                </div>
                <div className="scoreDiv">
                    <span>{player.wazari}</span>
                    <Button aria-label="Wazari point" aria-description="Tap to increase, double tap to decrease" name='wazari' onClick={handleClick} data-max={2}><FaHandHolding className='wazari'/></Button>
                </div>
                <div className="scoreDiv">
                    <span>{player.yuko}</span>
                    <Button aria-label="Yuko point" aria-description="Tap to increase, double tap to decrease" name='yuko'  onClick={handleClick}><FaHandHolding className='yuko'/></Button>
                </div>                
                <div className="scoreDiv">
                    <span>{player.shido}</span>
                    <Button aria-label="Shido penalty" aria-description="Tap to increase, double tap to decrease" name='shido' onClick={handleClick} data-max={3}><FaHandPointer className="shido"/></Button>
                </div>

                <div className="oseakomiDiv">
                {oseakomiPlayerId===player.id&&<Timer timerLimit={oseakomiTimer}/>}
                <Button aria-label="Oseakomi timer" style={oseakomiPlayerId===player.id?{backgroundColor:'green'}:{backgroundColor:'white'}} className='oseakomi' disabled={oseakomiTimer.playerId===player.id} name='oseakomi' onClick={()=>scoreDispatch({type:'SET_OSEAKOMI_PLAYER_ID', payload:player.id})} value={player.oseakomi}><FaHandPaper className='oseakomi'/></Button>
                </div>
            </div>           
        </>        
     );
}
 
export default Player;