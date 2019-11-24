import { userData } from '../usersJson'
const postReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_POST':
      // return state.concat([action.data]);
    default:
      return state.concat([userData]);
  }
}
export default postReducer;