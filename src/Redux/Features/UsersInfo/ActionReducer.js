import {
  FETCHEDSUCCESSFULLY,
  LOADINGASTRUE,
  ERROROCCURRED,
} from "./ActionTypes";

const initialstate = {
  data: null,
  loading: false,
  error: null,
};

function UserInfoReducer(state = initialstate, action) {
  switch (action.type) {
    case LOADINGASTRUE:
      return {
        ...state,
        loading: true,
      };
    case FETCHEDSUCCESSFULLY:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case ERROROCCURRED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

export default UserInfoReducer;
