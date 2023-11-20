const MODALTYPES = {
  CREATE: "Create",
  UPDATE: "Update",
  DELETE: "Delete",
};

const BUTTON_LABELS = {
  [MODALTYPES.CREATE]: "Add Task",
  [MODALTYPES.UPDATE]: "Update",
  [MODALTYPES.DELETE]: "Delete",
};

const TASK_STATUS = {
  TO_DO: "To Do",
  IN_PROGRESS: "In Progress",
  DONE: "Done",
};

export { MODALTYPES, BUTTON_LABELS, TASK_STATUS };
