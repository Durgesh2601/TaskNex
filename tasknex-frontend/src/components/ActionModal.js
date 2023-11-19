import { Modal, Row, Col, Button, Form } from "antd";

const btnStyle = {
  width: "100%",
};

const ActionModal = ({
  showModal,
  handleClose,
  action,
  isBtnLoading,
  children,
  form,
  onFinish,
}) => {
  const modalFooter = (
    <Row justify="space-between" style={{ marginTop: "1.5rem" }}>
      <Col span={6}>
        <Button style={{ ...btnStyle }} onClick={handleClose}>
          Cancel
        </Button>
      </Col>
      <Col span={6}>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={isBtnLoading}
            style={{ ...btnStyle }}
          >
            Done
          </Button>
        </Form.Item>
      </Col>
    </Row>
  );

  return (
    <Modal
      open={showModal}
      onCancel={handleClose}
      footer={null}
      title={`${action} Task`}
      destroyOnClose
    >
      <Form onFinish={onFinish} form={form} layout="vertical">
        {children}
        {modalFooter}
      </Form>
    </Modal>
  );
};

export default ActionModal;
