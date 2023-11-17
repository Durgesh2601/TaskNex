import { Form, Input, Button, Select } from "antd";

const { Option } = Select;

const TaskForm = ({ onSubmit, initialValues, form, isBtnLoading }) => {
  const onFinish = (values) => {
    // Handle form submission
    onSubmit(values);
  };

  return (
    <Form
      initialValues={initialValues}
      onFinish={onFinish}
      form={form}
      layout="vertical"
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: "Please enter a title" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Description" name="description">
        <Input.TextArea />
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
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isBtnLoading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TaskForm;
