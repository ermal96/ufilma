import { message } from "antd";

export const ErrorMsg = (msg) => {
  return message.error(msg);
};

export const SuccessMsg = (msg) => {
  return message.success(msg);
};
