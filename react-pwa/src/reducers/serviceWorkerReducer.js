import { SW_INIT, SW_UPDATE } from '../actions/types.json';

const initialState = {
  initialized: false,
  updated: false,
  registration: null,
};

const serviceWorkerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SW_INIT:
      return { ...state, initialized: true };

    case SW_UPDATE:
      return { ...state, updated: true, registration: payload };

    default:
      return state;
  }
};

export default serviceWorkerReducer;
