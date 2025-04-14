import { createContext} from 'react';
import { useScores } from './useScores';

const ScoreState = createContext()
const ScoreDispatch = createContext()

export function ScoreProvider ({children}) {
    const {state, dispatch} = useScores()  
    return (
        <ScoreState.Provider value={state}>
            <ScoreDispatch.Provider value={dispatch}>
                {children}
            </ScoreDispatch.Provider>
        </ScoreState.Provider>
    )
}
export {ScoreState, ScoreDispatch}