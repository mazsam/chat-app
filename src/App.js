import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "./client";
import Message from "./pages/message";
import LoginPage from "./pages/login";
import { useLocalStorage } from "react-use";

function App() {
  const [user, setValue] = useLocalStorage("user", "");
  
  return (
    <ApolloProvider client={client}>
      <div className="bg-gray-100">
      {!!user.length ? (
          <Message user={user} />
        ) : (
          <LoginPage setValue={setValue} />
        )}
      </div>
    </ApolloProvider>
  );
}

export default App;
