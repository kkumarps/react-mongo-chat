import "./userInfo.css";

import useUserStore from "../../../lib/hooks/userUserStore";

function UserInfo() {
  const { currentUser } = useUserStore();

  return (
    <>
      <div className="userInfo">
        <div className="user">
          <img src="/assets/avatar.png" alt="" />
          <h2>{currentUser.username}</h2>
        </div>
        <div className="icons">
          <img src="/assets/more.png" alt="" />
          <img src="/assets/video.png" alt="" />
          <img src="/assets/edit.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default UserInfo;
