import * as types from "./actionTypes";
import axios from "axios";

const getrequestdata = () => (dispatch) => {
  dispatch({ type: types.loadData });
  return axios
    .get("https://stormy-harbor-09503.herokuapp.com/data")
    .then((r) => {
      dispatch({ type: types.GetData, payload: r.data });
    })
    .catch((err) => {
      dispatch({ type: types.FailData });
    });
};
const weigthpatch = (id, payload) => (dispatch) => {
  dispatch({ type: types.loadpatchData });
  return axios
    .patch(`https://stormy-harbor-09503.herokuapp.com/data/${id}`, payload)
    .then((r) => {
      dispatch({ type: types.postpatchData });
    })
    .catch((err) => {
      dispatch({ type: types.FailpatchData });
    });
};
export { getrequestdata, weigthpatch };
