import { useState } from "react";

import AddUser from "./addUser/AddUser";
import "./chatList.css";

function ChatList() {
  const [addMode, setAddMode] = useState(false);

  const changeAddMode = () => {
    setAddMode((prev) => !prev);
  };

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
        <div className="item">
          <img src="/assets/avatar.png" alt="" />
          <div className="texts">
            <span>Jack Doe</span>
            <p>Hello</p>
          </div>
        </div>
        <div className="item">
          <img src="/assets/avatar.png" alt="" />
          <div className="texts">
            <span>Jack Doe</span>
            <p>Hello</p>
          </div>
        </div>
        <div className="item">
          <img src="/assets/avatar.png" alt="" />
          <div className="texts">
            <span>Jack Doe</span>
            <p>Hello</p>
          </div>
        </div>
        <div className="item">
          <img src="/assets/avatar.png" alt="" />
          <div className="texts">
            <span>Jack Doe</span>
            <p>Hello</p>
          </div>
        </div>
        <div className="item">
          <img src="/assets/avatar.png" alt="" />
          <div className="texts">
            <span>Jack Doe</span>
            <p>Hello</p>
          </div>
        </div>
        <div className="item">
          <img src="/assets/avatar.png" alt="" />
          <div className="texts">
            <span>Jack Doe</span>
            <p>Hello</p>
          </div>
        </div>
        <AddUser />
      </div>
    </>
  );
}

export default ChatList;
