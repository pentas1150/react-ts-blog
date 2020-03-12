const ADD_SESSION = "session/ADD_SESSION" as const;
const REMOVE_SESSION = "session/REMOVE_SESSION" as const;

export const addSession = (user: JSON, cookies: JSON) => ({
  type: ADD_SESSION,
  payload: {
    user: user,
    cookies: cookies
  }
});

export const removeSession = () => ({
  type: REMOVE_SESSION
});
type SessionAction = ReturnType<typeof addSession> | ReturnType<typeof removeSession>;
type SessionState = { authenticated: boolean; session: { user?: JSON; cookies?: JSON } };

const initialState: SessionState = { authenticated: false, session: {} };

export default function session(state: SessionState = initialState, action: SessionAction) {
  switch (action.type) {
    case ADD_SESSION:
      return Object.assign({}, state, { authenticated: true, session: { user: action.payload.user, cookies: action.payload.cookies } });
    case REMOVE_SESSION:
      return Object.assign({}, state, { authenticated: false, session: {} });
    default:
      return state;
  }
}
