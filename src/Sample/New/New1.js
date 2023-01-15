import React from "react";


function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'Harper',
    lastName: 'Perez'
  };
  
  const element = (
    <h1>
      Hello, {formatName(user)}!  </h1>
  );

function New1(){
    return(
        formatName(user)
    )
}



export default New1;