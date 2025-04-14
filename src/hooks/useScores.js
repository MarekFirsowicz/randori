import { useReducer, useEffect } from "react"
import { scoreReducer, INITIAL_STATE } from "./scoreReducer"



export const useScores = () => {
    const [state, dispatch] = useReducer(scoreReducer, INITIAL_STATE, () => {
        const saved = localStorage.getItem('scores');
        return saved ? JSON.parse(saved) : INITIAL_STATE;
    })

    useEffect(() => {
        localStorage.setItem('scores', JSON.stringify(state));
    }, [state]);

    return { state, dispatch }
}