import {SUBMIT_FORM_INITIATED, SUBMIT_FORM_ERROR, REQUEST_INITIATED, REVIEW_STEP, EDIT_FORM, SUBMIT_FORM_SUCCESS,SHOW_LOADER,HIDE_LOADER} from './constants'

export function submitFormInitiated(formData){
	return{
		type:SUBMIT_FORM_INITIATED,
		payload:formData
	}
}

export function submitFormError(error){
	return{
		type: SUBMIT_FORM_ERROR,
		payload: error
	}
}
export function submitFormSuccess(data){
     return {
		 type : SUBMIT_FORM_SUCCESS,
		 payload: data
	 }
}


  export function reviewStep(newFormState) {
	return {type: REVIEW_STEP, newFormState}
	}
	
	export function editForm(editFormState){
		return {
			type: EDIT_FORM, 
			payload: editFormState
		}
    }
    
    export function showLoader(){
		return {
			type: SHOW_LOADER, 
			payload:''
		}
    }
    
    export function hideLoader(){
		return {
			type: HIDE_LOADER, 
			payload:''
		}
	}