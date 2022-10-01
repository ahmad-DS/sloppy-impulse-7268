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
const weigthpatch=(id,payload)=>(dispatch)=>{
   console.log("patch",payload);
    dispatch({type:types.loadpatchData})
return axios.patch(`http://localhost:8080/data/${id}`,payload).then((r)=>{

 dispatch({type:types.postpatchData})
}).catch((err)=>{
    dispatch({type:types.FailpatchData})
})
}
export  {getrequestdata,weigthpatch}