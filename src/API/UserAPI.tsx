import store from '../store';
import {AddUser,getUsers,EditUser,DeleteUser} from '../actions/formActions'

export const insertUser=(user:any)=>{
    return {type:"INSERT_USER",value:setTimeout(
    fetch('http://localhost:53801/api/Users',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(user)
     }).then((resp) => resp.json()
        ).then((data)=>{
        store.dispatch(AddUser(data));
     }).catch((err)=>{
         return {
             type:"ERROR",
             user
         }
     }),1500)
    }
}



export const updateUser=(user:any)=>{
    return {type:"UPDATE_USER",value:setTimeout(
    fetch('http://localhost:53801/api/Users/'+ user.userId,{
        method:'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(user)
     }).then((resp) => resp.json()
        ).then((data)=>{
        store.dispatch(EditUser(data));
     }).catch((err)=>{
         return {
             type:"ERROR",
             user
         }
     }),1500)
    }
}


export const deleteUser=(id:number)=>{
    return {type:"DELETE_USER_API",value:setTimeout(
    fetch('http://localhost:53801/api/Users/'+ id,{
        method:'DELETE',
        headers:{
            'Content-Type': 'application/json'
        }
     }).then((data)=>{
        store.dispatch(DeleteUser(id));
     }).catch((err)=>{
         return {
             type:"ERROR",
             id
         }
     }),1500)
    }
}



export const getAllUsers=()=>{
    return {type:"GET_ALL_Users",value:setTimeout(
    fetch('http://localhost:53801/api/Users',{
        method:'GET',
        headers:{
            'Content-Type': 'application/json'
        }
     }).then((resp) => resp.json()
    ).then((data)=>{
        store.dispatch(getUsers(data));       
     }).catch((err)=>{
         return {
             type:"ERROR",
             
         }
     }),1500)
    }}
