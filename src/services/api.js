 const url = `https://69c275e57518bf8facbe6b7a.mockapi.io/users/userList`;

//GET API
export const getAPIData = async () => {
   const res = await fetch(url);
    return await res.json();
  };
 
   //CREATE API
  export const createUser = async (data) => {
   const res = await fetch(url,{                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(data),
   });
    return await res.json();
  };

  // //UPDATE
  export const updateUser = async (id,data) => {
   const res = await fetch(`${url}/${id}`,{
    method:'PUT',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(data),
   });
    return await res.json();
  };

   //DELETE
  export const deleteUser = async (id) => {
   await fetch(`${url}/${id}`,{
    method:'DELETE',
   });
  };