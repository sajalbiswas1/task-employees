import { Modal, Button, Form, Row, Col } from "react-bootstrap";
// components
import { FormInput } from "../../..";

interface AddNewTaskProps {
  newTaskModal: boolean;
  toggleNewTaskModal: () => void;
}

const EditTimeSheetModal = ({
  newTaskModal,
  toggleNewTaskModal,
}: AddNewTaskProps) => {
  return (
    <Modal show={newTaskModal} onHide={toggleNewTaskModal} size="lg" centered>
      <Modal.Header closeButton>
        <h4 className="modal-title" style={{ margin: "30px" }}>
          Edit Today Work Details
        </h4>
      </Modal.Header>
      <Modal.Body>
        <Form className="form-horizontal">
          <Row>
            <div className="row p-10" style={{ marginLeft: "4px" }}>
              <Form.Group as={Col} className="mb-3">
                <Form.Label lg={2}>
                  <div className="d-flex">
                    Projects <span className="text-danger">*</span>
                  </div>
                </Form.Label>
                <Col lg={10}>
                  <Form.Select>
                    <option>All Development</option>
                    <option>Finance</option>
                    <option>Finance Management</option>
                    <option>Hr and Finance</option>
                    <option>ITech</option>
                  </Form.Select>
                </Col>
              </Form.Group>
            </div>
            <div className="row p-10" style={{ marginLeft: "4px" }}>
              <Form.Group as={Col} className="mb-3">
                <Form.Label lg={2} htmlFor="example-date">
                  Deadline<span className="text-danger">*</span>
                </Form.Label>
                <Col lg={10}>
                  <Form.Control
                    id="example-date"
                    type="date"
                    name="date"
                    disabled
                    defaultValue="2024-05-03"
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Col} className="mb-3 col">
                <Form.Label lg={2}>
                  <div className="">
                    Total Hours <span className="text-danger">*</span>
                  </div>
                </Form.Label>
                <Col lg={10}>
                  <Form.Control
                    type="tel"
                    name="tel"
                    defaultValue="45"
                    className="w-100"
                    disabled
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Col} className="mb-3 col">
                <Form.Label lg={2}>
                  <div className="">
                    Remaining Hours <span className="text-danger">*</span>
                  </div>
                </Form.Label>
                <Col lg={10}>
                  <Form.Control
                    type="tel"
                    name="tel"
                    defaultValue="45"
                    disabled
                  />
                </Col>
              </Form.Group>
            </div>

            <div className="row p-10" style={{ marginLeft: "4px" }}>
              <Form.Group as={Col} className="mb-3">
                <Form.Label lg={2} htmlFor="example-date">
                  Deadline<span className="text-danger">*</span>
                </Form.Label>
                <Col lg={11}>
                  <Form.Control id="example-date" type="date" name="date" />
                </Col>
              </Form.Group>

              <Form.Group as={Col} className="mb-3 col">
                <Form.Label lg={2}>
                  <div className="">
                    Total Hours <span className="text-danger">*</span>
                  </div>
                </Form.Label>
                <Col lg={11}>
                  <Form.Control
                    type="tel"
                    name="tel"
                    defaultValue="45"
                    className="w-100"
                  />
                </Col>
              </Form.Group>
            </div>
            <div className="row p-10" style={{ marginLeft: "4px" }}>
              <Form.Group as={Col} className="mb-3">
                <Form.Label column lg={2} htmlFor="example-textarea">
                  Text area
                </Form.Label>
                <Col lg={12}>
                  <Form.Control as="textarea" rows={5} id="example-textarea" />
                </Col>
              </Form.Group>
            </div>
          </Row>
          <div className="text-end">
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

export default EditTimeSheetModal;
