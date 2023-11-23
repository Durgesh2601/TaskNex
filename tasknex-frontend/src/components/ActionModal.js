import { Modal, Row, Col, Button, Form } from "antd";
import { BUTTON_LABELS, MODALTYPES } from "../constants";

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
      <Col xs={10} sm={8}>
        <Button style={{ ...btnStyle }} onClick={handleClose}>
          Cancel
        </Button>
      </Col>
      <Col xs={10} sm={8}>
        <Form.Item>
          <Button
            type="primary"
            danger={action === MODALTYPES.DELETE}
            htmlType="submit"
            loading={isBtnLoading}
            style={{ ...btnStyle }}
          >
            {BUTTON_LABELS[action]}
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
