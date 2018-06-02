export default function addUserReducer (state:any=[],action:any) {
    switch (action.type) {
        case "ADD_USER":
            return [...state, action.user]
           
        case "EDIT_USER":
            Object.assign(state[state.findIndex((u:any) => u.userId === action.user.userId)], action.user);
            return state;
           
        case "DELETE_USER":
            state.splice(state.findIndex((u:any) => u.userId === action.id),1);        
            return [...state]; 
        case "GET_USERS":
            //state.splice(state.findIndex(u => u.UserId === action.user.UserId),1);        
            return action.users;
                 
        default:
        return state;
            
    }
}




