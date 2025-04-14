import { useScoreState} from "../hooks/useScoreContext";
import Player from "./Player";

const Board = () => {
    const {players} = useScoreState();
    
    return ( 
        <section className="board" aria-label="Player Scoreboard">
            {players?.map((player)=>
            <div key={player.id} className={`player`}>
            <Player  player={player}/>
            </div>
            )}
        </section>
     );
}
 
export default Board;