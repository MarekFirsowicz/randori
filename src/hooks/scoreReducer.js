export function scoreReducer(state, action) {

    switch (action.type) {
        case 'UPDATE':
            return { ...state, players: state.players.map(el => el.id === action.payload.id ? { ...el, ...action.payload } : el) };


        case 'SET_OSEAKOMI_PLAYER_ID': {
            const { oseakomiPlayerId } = state;
            if (oseakomiPlayerId === action.payload) {
                return { ...state, oseakomiPlayerId: null };
            } else
                return { ...state, oseakomiPlayerId: action.payload };
        }

        case "SET_RANDORI_TIMER":
            return { ...state, randoriTimer: action.payload };

        case 'RESET_SCORES':
            return {
                ...INITIAL_STATE, players: state.players.map(el => el.id === action.payload.id ? ({ ...el, ippon: 0, wazari: 0, yuko: 0, shido: 0 }) : el)
            }
        default:
            return state
    }
}

export const INITIAL_STATE = {
    oseakomiTimer: 20,
    oseakomiPlayerId: null,
    randoriTimer: 120,
    players: [{
        id: 'player_1',
        name: 'player 1',
        score: 0,
        ippon: 0,
        wazari: 0,
        yuko: 0,
        shido: 0,
        color: '#ffffff',
    },
    {
        id: 'player_2',
        name: 'player 2',
        score: 0,
        ippon: 0,
        wazari: 0,
        yuko: 0,
        shido: 0,
        color: '#0000ff',
    }]
}