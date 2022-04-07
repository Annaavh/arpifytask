import React, { useEffect } from 'react';
import userApi from "./api/api"

function Page1() {
    useEffect(()=>{
         foo()
      
    },[])
    async function foo(){
        userApi.post('/init', 
        {
            firstName: 'Anna',
            lastName: 'Avetisyan',
            birthDay:"23.08.2000",
            gender:"female"

          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          })
    }
    
  return (
    <div>
        <table className="table mt-2">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody>
         
        </tbody>
      </table>
    </div>
  )
}

export default Page1