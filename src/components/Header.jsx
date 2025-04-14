import Timer from "./Timer";
import { useScoreState} from "../hooks/useScoreContext";


const Header = () => {
    const {randoriTimer} = useScoreState();
    
    return ( 
        <header>
            <h1>Randori</h1>
            <Timer timerCounter={-1} timerLimit={randoriTimer}/>
        </header>
        
     );
}
 
export default Header;