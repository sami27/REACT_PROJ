import {loaderState} from '../utils/LoaderState'


let initialState = {
    data: []
} 

export const submitFormData=(state = initialState, action
)=>{
    debugger;
    switch (action.type) {
        case 'SUBMIT_FORM_INITIATED':
           debugger;
          return Object.assign({}, state, {
          data : action.payload
          })
          break;
          case 'SUBMIT_FORM_SUCCESS':
          debugger;
          return Object.assign({},state , {dataSuccess : action.payload})
          break;
          case 'SUBMIT_FORM_ERROR':
          return Object.assign({},state,{data : action.payload})
          break;
          default:
          return state
      }
}

/*export const tableDataState = (state , action) =>{
    debugger;
    console.log("state in reducer", state);
    switch(action.type){
    
        case 'SUBMIT_FORM_SUCCESS':
        return Object.assign({},state,{data : action.payload})
        break;
        case 'SUBMIT_FORM_ERROR':
        return Object.assign({},state,{data : action.payload})
        default:
        return state
    }

}*/
export const hideShowLoader = (state = loaderState.showLoader,action) =>{
    switch (action.type) {
        case "SHOW_LOADER":
            return Object.assign({}, state, {
                status: loaderState.showLoader,
            });
        case "HIDE_LOADER":
            return Object.assign({}, state, {
                status: loaderState.hideLoader,
            });
        default:
            return state;
    }

}