import { toast } from "react-toastify";

class ToastService {
  success = (message) => {
    toast.success(message, {
      position: "top-right",
      style: { fontSize: "13px", fontFamily: "arial" },
    });
  };

  error = (message) => {
    toast.error(message, {
      position: "top-right",
      style: { fontSize: "13px", fontFamily: "arial" },
    });
  };

  warn = (message) => {
    toast.warn(message, {
      position: "top-right",
      style: { fontSize: "13px", fontFamily: "arial" },
    });
  };
}
export default new ToastService();
