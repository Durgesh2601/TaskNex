import { Table, Button, Space, Tag } from "antd";
import { getColorByStatus } from "../utils/helperMethods";

const TaskList = ({ tasks, onUpdate, onDelete }) => {
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      ellipsis: true,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      ellipsis: true,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      align: "center",
      ellipsis: true,
      render: (text) => <Tag color={getColorByStatus(text)}>{text}</Tag>,
    },
    {
      title: "Actions",
      key: "actions",
      align: "center",
      render: (text, record) => (
        <Space size="middle">
          <Button type="link" onClick={() => onUpdate(record)}>
            Edit
          </Button>
          <Button type="link" danger onClick={() => onDelete(record)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return <Table dataSource={tasks} columns={columns} pagination={false} />;
};

export default TaskList;
