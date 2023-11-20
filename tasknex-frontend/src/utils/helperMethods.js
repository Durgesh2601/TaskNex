import { TASK_STATUS } from "../constants";
const getColorByStatus = (status) => {
  switch (status) {
    case TASK_STATUS.TO_DO:
      return "red";
    case TASK_STATUS.IN_PROGRESS:
      return "blue";
    case TASK_STATUS.DONE:
      return "green";
    default:
      return "";
  }
};
export { getColorByStatus };
