import { Table, Button, Tag, Row, Col } from "antd";
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
        <Row align="center">
          <Col>
            <Button type="link" onClick={() => onUpdate(record)}>
              Edit
            </Button>
          </Col>
          <Col>
            <Button type="link" danger onClick={() => onDelete(record)}>
              Delete
            </Button>
          </Col>
        </Row>
      ),
    },
  ];

  return (
    <Row>
      <Col xs={24} span={24}>
        <Table dataSource={tasks} columns={columns} pagination={false} />
      </Col>
    </Row>
  );
};

export default TaskList;
