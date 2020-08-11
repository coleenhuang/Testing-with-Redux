import { SAVE_COMMENT } from './comments'

export default function(state=[], action) {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload]
    default:
      return state;
  }
}
