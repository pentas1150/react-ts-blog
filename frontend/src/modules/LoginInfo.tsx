const ADD_INFO = "logininfo/ADD_INFO" as const;
const REMOVE_INFO = "logininfo/REMOVE_INFO" as const;

export const addInfo = (user: JSON) => ({
  type: ADD_INFO,
  payload: {
    user: user
  }
});

export const removeInfo = () => ({
  type: REMOVE_INFO
});
type InfoAction = ReturnType<typeof addInfo> | ReturnType<typeof removeInfo>;
type InfoState = { authenticated: boolean; session: { user?: JSON } };

const initialState: InfoState = { authenticated: false, session: {} };

export default function LoginInfo(state: InfoState = initialState, action: InfoAction) {
  switch (action.type) {
    case ADD_INFO:
      return Object.assign({}, state, { authenticated: true, session: { user: action.payload.user } });
    case REMOVE_INFO:
      return Object.assign({}, state, { authenticated: false, session: {} });
    default:
      return state;
  }
}
