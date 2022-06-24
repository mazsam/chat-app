import React, {useState} from "react";
import { useMutation } from "@apollo/client";
import {
  InputMessage,
  ADD_MESSAGE
} from 'chat-commons'


const Input = ({ user }) => {
  const [input, setInput] = useState('');
  const [AddMessage, { loading }] = useMutation(ADD_MESSAGE);

  const handleSubmit = () => {
    AddMessage({ variables: { message: input, name: user } });
    setInput('')
  }

  return <InputMessage
    handleSubmit={handleSubmit}
    input={input}
    setInput={setInput}
    loading={loading}  />
};

export default Input;
