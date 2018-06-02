import {createStore, combineReducers, applyMiddleware} from "redux";
import User from "./reducers/formReducers";
import Grid from "./reducers/gridReducers";
import {applyChange}from "./actions/formActions";
import thunk from 'redux-thunk';

const changePagination:any = (store :any) => (next:any) => (action:any) =>{
      
        let count=0,index=0,size=0;        
        let result = next(action);

         count = store.getState().User.length;
         index = store.getState().Grid.pageIndex;
         size = store.getState().Grid.pageSize;

        if (action.type !== "APPLY_CHANGE") {
            store.dispatch(applyChange(index,size,count));
        }
        return result;    
}

const combined =  combineReducers({User,Grid})  ; 
const store = createStore(combined,applyMiddleware(changePagination,thunk));

export default store;