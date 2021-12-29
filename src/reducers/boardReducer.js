import { DRAW_X, DRAW_O } from '../helpers/actionTypes'

const initialState = [
  null, null, null,
  null, null, null,
  null, null, null,
]

export function boardReducer(state = initialState, action) {
  switch (action.type) {
    case DRAW_X:
      const newXState = [...state]
      newXState[action.cellIndex] = 'X'
      return newXState

    case DRAW_O:
      const newOState = [...state]
      newOState[action.cellIndex] = 'O'
      return newOState

    default:
      return state
  }
}