
export const AddUser = function (user:any){
return {type:"ADD_USER",user}
};

export const EditUser = function (user:any){
    return {type:"EDIT_USER",user}
    };

export const DeleteUser = function (id:number){
        return {type:"DELETE_USER",id}
        };

export const GetIndex = function (index:number,size:number,count:number){
    return {type:"GET_INDEX",index,size,count}
    };
        
export const applyChange=(index:number,size:number,count:number)=>{
    return {type:"APPLY_CHANGE",index,size,count}
}


export const getUsers = function (users:any[]){
    return {type:"GET_USERS",users}
}



