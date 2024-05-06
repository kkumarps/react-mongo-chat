import { ToastContainer } from "react-toastify";

function Notification() {
  return (
    <>
      <div className="notification">
        <ToastContainer position="top-right" />
      </div>
    </>
  );
}

export default Notification;
