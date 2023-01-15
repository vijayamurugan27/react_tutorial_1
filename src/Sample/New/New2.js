import React from "react";

function getGreeting(user) {
    if (user) {
      return <h1>Hello, {formatName(user)}!,</h1>;  }
    return <h1>Hello, Stranger.</h1>;}

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



function New2(){
    return(
        getGreeting(user)

    )
}

export default New2;