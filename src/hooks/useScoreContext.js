import { useContext } from 'react';
import { ScoreState, ScoreDispatch } from './ScoreContext';


export function useScoreState() {
    const context = useContext(ScoreState);
    if (context === undefined) {
        throw new Error('useScoreState must be used within a ScoreProvider');
    }
    return context;
}

export function useScoreDispatch() {
    const context = useContext(ScoreDispatch);
    if (context === undefined) {
        throw new Error('useScoreDispatch must be used within a ScoreProvider');
    }
    return context;
}

