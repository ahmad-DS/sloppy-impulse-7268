import * as types from "./actionTypes";
const initial = {
  data:[],
  isLoading: false,
  isError: false,
};
const reducer = (state = initial, action) => {
  const { type, payload } = action;
  switch (type) {
    // case types.loadData:
    //   return { ...state, isLoading: true };

    case types.GetData:
      return { ...state, isLoading: false, data: payload };
    case types.FailData:
      return { ...state, isError: true };

    default:
      return state;
  }
};
export { reducer };
