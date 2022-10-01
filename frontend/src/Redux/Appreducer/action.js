import * as  types from "./actionTypes"
import axios from "axios"

const getrequestdata=()=>(dispatch)=>{
    dispatch({type:types.loadData})
return axios.get("http://localhost:8080/data").then((r)=>{

 dispatch({type:types.GetData,payload:r.data})
}).catch((err)=>{
    dispatch({type:types.FailData})
})
}

export default getrequestdata