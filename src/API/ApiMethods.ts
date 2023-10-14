import axios from "axios";
export const apiHandle = axios.create({baseURL: "https://jsonplaceholder.typicode.com"})

export const AXGet = (endPoint: string, id?: (string | number))=>
{return apiHandle.get(`${endPoint}/${id ? id : ''}`)}
export const AXPost = (endPoint: string ,pushData:{})=>
{return apiHandle.post(endPoint,pushData)}

export const AXEditByID = (Editpath:any ,pushData:{})=>
{return apiHandle.put(Editpath,pushData)}
export const AXDelete = (DeletePath: any)=>
{return apiHandle.delete(DeletePath)}


// heple for useing====
// Get("posts")
//     .then((res) => {
//         setData([...res.data])

//     })
//     .catch((error) => {
//         console.log(error);

//     })