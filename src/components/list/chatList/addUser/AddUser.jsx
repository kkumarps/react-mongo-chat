import "./addUser.css";

function AddUser() {
  return (
    <>
      <div className="add-user">
        <form>
          <input type="text" placeholder="Username" name="username" />
          <button>Search</button>
        </form>
        <div className="user">
          <div className="detail">
            <img src="/assets/avatar.png" alt="" />
            <span>Jane Doe</span>
          </div>
          <button>Add User</button>
        </div>
      </div>
    </>
  );
}

export default AddUser;
