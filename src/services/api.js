


const url = 'https://69c275e57518bf8facbe6b7a.mockapi.io/users/userList';

export const deleteUser = async(id)=>{
    
    console.log(`${url}/${id}`);
    
    let result = await fetch(`${url}/${id}`,{
      method:"DELETE"
        });
        result = await result.json();
    if(result){
        console.log("User deleted");
     }
    }
   
export const getAPIData = async () => {
  try {
    const url = 'https://69c275e57518bf8facbe6b7a.mockapi.io/users/userList';
    let response = await fetch(url);
    let result = await response.json();
    return result; // MUST return the data
  } catch (error) {
    console.error("Fetch error:", error);
    return []; // Return empty array on error
  }
};

    
