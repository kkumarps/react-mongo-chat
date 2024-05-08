import { Zoom, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function useNotifier(code, message) {
  switch (code) {
    case 1:
      toast.success(message, {
        position: "top-right",
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
      break;

    case -1:
      toast.error(message, {
        position: "top-right",
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
      break;

    case 0:
      toast.warn(message, {
        position: "top-right",
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });

    default:
      break;
  }
}

export default useNotifier;
