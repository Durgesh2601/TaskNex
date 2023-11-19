import { Form, Input, Select, Typography, Checkbox, Row } from "antd";
import { MODALTYPES } from "../constants";

const { Option } = Select;
const { Text } = Typography;

const TaskForm = ({ modalType }) => {
  const taskFormItems = (
    <>
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: "Please enter a title" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Status"
        name="status"
        rules={[{ required: true, message: "Please select a status" }]}
      >
        <Select>
          <Option value="To Do">To Do</Option>
          <Option value="In Progress">In Progress</Option>
          <Option value="Done">Done</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Description" name="description">
        <Input.TextArea />
      </Form.Item>
    </>
  );

  const taskDeleteFormItems = (
    <>
      <Row
        style={{
          marginBottom: "0.5rem",
        }}
      >
        <Text strong level={5}>
          Are you sure you want to delete the following task?
        </Text>
      </Row>
      <Form.Item
        name="confirmDelete"
        valuePropName="checked"
        rules={[{ required: true, message: "Please confirm deletion" }]}
      >
        <Checkbox>I confirm that I want to delete this task.</Checkbox>
      </Form.Item>
    </>
  );

  const getFormItemsByType = (modalType = MODALTYPES.CREATE) => {
    switch (modalType) {
      case MODALTYPES.CREATE:
      case MODALTYPES.UPDATE:
        return taskFormItems;
      case MODALTYPES.DELETE:
        return taskDeleteFormItems;
      default:
        return null;
    }
  };

  return getFormItemsByType(modalType);
};

export default TaskForm;
