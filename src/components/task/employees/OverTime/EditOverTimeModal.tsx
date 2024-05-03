import { Modal, Button, Form, Row, Col } from "react-bootstrap";
// components

interface AddNewTaskProps {
  newTaskModal: boolean;
  toggleNewTaskModal: () => void;
}

const EditOverTimeModal = ({
  newTaskModal,
  toggleNewTaskModal,
}: AddNewTaskProps) => {
  return (
    <Modal show={newTaskModal} onHide={toggleNewTaskModal} centered>
      <Modal.Header closeButton>
        <h4 className="modal-title" style={{ margin: "10px" }}>
          Add Overtime
        </h4>
      </Modal.Header>
      <Modal.Body>
        <Form className="form-horizontal">
          <Row>
            <div className="row p-10" style={{ marginLeft: "4px" }}>
              <Form.Group as={Row} className="mb-3">
                <Form.Label lg={2}>
                  <div className="d-flex">
                    Projects <span className="text-danger">*</span>
                  </div>
                </Form.Label>
                <Col lg={12}>
                  <Form.Select>
                    <option>All Development</option>
                    <option>Finance</option>
                    <option>Finance Management</option>
                    <option>Hr and Finance</option>
                    <option>ITech</option>
                  </Form.Select>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label lg={2} htmlFor="example-date">
                  Deadline<span className="text-danger">*</span>
                </Form.Label>
                <Col lg={12}>
                  <Form.Control id="example-date" type="date" name="date" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3 col">
                <Form.Label lg={2}>
                  <div className="">
                    Total Hours <span className="text-danger">*</span>
                  </div>
                </Form.Label>
                <Col lg={12}>
                  <Form.Control type="tel" name="tel" className="w-100" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column lg={2} htmlFor="example-textarea">
                  Text area
                </Form.Label>
                <Col lg={12}>
                  <Form.Control as="textarea" rows={5} id="example-textarea" />
                </Col>
              </Form.Group>
            </div>
          </Row>

          <div className="text-end me-4">
            <Button
              variant="light"
              className="me-1"
              onClick={toggleNewTaskModal}
            >
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditOverTimeModal;
