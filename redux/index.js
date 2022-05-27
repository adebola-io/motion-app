/** @typedef {{current: '/'|'/new'|'/tasks'}} State */
/** @typedef {{type: ActionType, payload: any}} Action */
/**
 * Motion App State Reducer.
 * @param {State} state old state.
 * @param {Action} action
 * @returns {State} new state.
 */
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_PAGE":
      return { ...state, current: action.payload };
    default:
      return state;
  }
};

/** @type {State} */
export const initialState = {
  current: '/'
};
