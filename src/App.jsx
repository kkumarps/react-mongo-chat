import { useEffect } from "react";

import List from "./components/list/List";
import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";

import useUserStore from "./lib/hooks/userUserStore";

function App() {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();

  useEffect(() => {
    return () => {
      fetchUserInfo(1)
        .then((data) => {})
        .catch((err) => console.log(err));
    };
  }, [fetchUserInfo]);

  if (isLoading)
    return (
      <>
        <div className="loading">Loading...</div>
      </>
    );

  return (
    <div className="container">
      {currentUser ? (
        <>
          <List />
          <Chat />
          <Detail />
        </>
      ) : (
        <>
          <Login />
        </>
      )}
      <Notification />
    </div>
  );
}

export default App;
