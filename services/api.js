 const url = `https://69c275e57518bf8facbe6b7a.mockapi.io/users/userList`;
//GET API
export const getAPIData = async () => {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result; // return data
  } catch (error) {
    console.error("Fetch error:", error);
    return []; 
  }
};
 //post ,Add API
export const createUser = async(data)=>{
  try{
    const res = await fetch(url,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'},
        body:JSON.stringify(data),
    });
    return await res.json();
  }catch(error){
    console.log('POST error',error);
  }
};
//PUT
// export const updateUser = async(id ,data)=>{
//   try{
//     const res = await fetch(`${url}/${id}`,{
//       method:'PUT',
//       headers:{
//         'Content-Type':'application/json'},
//         body:JSON.stringify(data),
//     });
//     return await res.json();
//   }catch(error){
//     console.log('PUT error',error);
//   }
// };
//DELETE
export const DeleteteUser = async(id)=>{
  try{
    await fetch(`${url}/${id}`,{
      method:'DELETE',
    });
      return true;
  }catch(error){
    console.log('Delete error',error);
  }
};
 // Delete API wrong
// export const deleteUser = async(id)=>{
    
//     console.log(`${url}/${id}`);
    
//     let result = await fetch(`${url}/${id}`,{
//       method:"DELETE"
//         });
//         result = await result.json();
//     if(result){
//         console.log("User deleted");
//      }
//     }

  