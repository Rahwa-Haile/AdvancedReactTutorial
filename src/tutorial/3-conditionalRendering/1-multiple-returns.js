import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users/mojombo";

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  useEffect(()=>{
    fetch(url).then((response)=>response.json().then((user)=>{
        setIsLoading(false)
        setUser(user.login)
    }))
  })
  if (isLoading) {
    return (
      <div>
        <h1>Loading ...</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h1>Error</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
};

export default MultipleReturns;
