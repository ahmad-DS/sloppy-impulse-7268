function loadData(key){
	try{
		let data=JSON.parse(localStorage.getItem(key));
		return data
		
	}
	catch(err){
		return undefined
	}
}
export default loadData;

// function saveData(key,data=""){
// 	loc
// }