import store from '../store/ReduxStore'
export const fetchUser = async (data) => {
  
    try {
       const response =  await fetch("https://jsonplaceholder.typicode.com/posts",{
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }
    )

    const dataSuccess = await response.json();
    return dataSuccess;
    
    } catch(e) {
      console.log("Error", e);
  }
}