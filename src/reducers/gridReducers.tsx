export default function getPageIndex (state={pageSize:3,pageIndex:1,count:0,listofIndex:[]},action:any){
    switch (action.type) {
        case "GET_INDEX":
            
            return {...state,
                pageSize:5,
                pageIndex:action.index,
                count:action.count,
                listofIndex:[]
            }
           

        case "APPLY_CHANGE":
            
             let numberofIndex = 1;
             let listofIndex = [];
            numberofIndex = action.count / 3;

            for (let index = 1; index <= Math.ceil(numberofIndex); index++) {
                const exist = listofIndex.indexOf(index) !== -1 ? true : false;
           
                if(!exist) { 
                
                    listofIndex.push(index) 
                }     
            
            }

            return {...state,
                pageSize:3,
                pageIndex:(action.index > listofIndex.length && listofIndex.length !== 0) ? listofIndex.length:action.index,
                count:action.count,
                listofIndex:listofIndex
            }
            
    
        default:
        return  state;
            
    }
}