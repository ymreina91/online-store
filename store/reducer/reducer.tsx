import { IAnnouncement } from '../state/state'
import * as announcementActions from '../actions/actions'

const initialState: IAnnouncement = {
  message: 'No announcement...'
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case announcementActions.UPDATE_ANNOUNCEMENT:
      return Object.assign({}, state, { message: action.message })
    default: return state
  }
}