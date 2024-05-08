import { useEffect, useState } from "react";

import AddUser from "./addUser/AddUser";
import "./chatList.css";

import useFetch from "../../../lib/hooks/useFetch";

function ChatList() {
  const [addMode, setAddMode] = useState(false);
  const [contacts, setContacts] = useState([]);

  const changeAddMode = () => {
    setAddMode((prev) => !prev);
  };

  useEffect(() => {
    const fetchContactsList = () => {
      useFetch("https://fakestoreapi.com/users", { method: "GET" }).then(
        (data) => {
          setContacts(data);
        }
      );
    };

    return () => {
      fetchContactsList();
    };
  }, []);

  return (
    <>
      <div className="chat-list">
        <div className="search">
          <div className="search-bar">
            <img src="/assets/search.png" alt="" />
            <input type="text" placeholder="Search" />
          </div>
          <div>
            <img
              src={addMode ? "/assets/minus.png" : "/assets/plus.png"}
              alt=""
              className="add"
              onClick={changeAddMode}
            />
          </div>
        </div>
        {contacts.map((contact) => (
          <div className="item" key={contact.id}>
            <img src="/assets/avatar.png" alt="" />
            <div className="texts">
              <span>{contact.username}</span>
              <p>Hello</p>
            </div>
          </div>
        ))}

        {addMode && <AddUser />}
      </div>
    </>
  );
}

export default ChatList;
