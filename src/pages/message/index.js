import React from "react";
import Input from "./Input";
import List from "./List";

const Message = ({ user }) => {
  return (
    <div className="flex flex-col justify-between items-stretch h-screen w-screen p-10 ">
      <List user={user}/>
      <Input user={user} />
    </div>
  );
};

export default Message;
