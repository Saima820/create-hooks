import React from "react";

const List = (data) => {
  return (
    <>
      {data.data.map((item) => (
        <>{item.is_active ? <h1>{item.name}</h1> : "this user is inactive"}
        
        </>
      ))}
      {data.data.map((item)=>(
        <>{item.is_active && <h1>{item.name}</h1>}</>
      ))}
    </>
  );
};

export default List;
