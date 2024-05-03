import React from "react";
import { Modal } from "react-bootstrap";
import {
  Row,
  Col,
  Card,
  Form,
  FloatingLabel,
  InputGroup,
  Button,
} from "react-bootstrap";
import "./shiftSchedule.css";
// images
// import img1 from "../../../assets/images/users/avatar-2.jpg";

interface VideocallModalProps {
  show: boolean;
  handleClose: () => void;
}
const AddScheduleModal = ({ show, handleClose }: VideocallModalProps) => {
  return (
    <Modal
      //   centered
      size="lg"
      show={show}
      onHide={handleClose}
      //   contentClassName="video-call"
    >
      <Modal.Header className="mb-2 justify-content-start">
        <div>
          <span id="addScheduleTitle">Add Schedule</span>
        </div>
      </Modal.Header>
      <Form className="form-horizontal">
        <Row>
          <div className="row p-10" style={{ marginLeft: "16px" }}>
            <Form.Group as={Col} className="mb-3">
              <Form.Label lg={2}>
                <div className="d-flex">
                  Department <span className="text-danger">*</span>
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

            <Form.Group as={Col} className="mb-3">
              <Form.Label lg={2}>
                <div className="d-flex">
                  <span>Employee_Name</span>
                  <span className="text-danger">*</span>
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
          <div className="row p-10" style={{ marginLeft: "16px" }}>
            <Form.Group as={Col} className="mb-3 mw-100">
              <Form.Label lg={2} htmlFor="example-date">
                Date
              </Form.Label>
              <Col lg={10}>
                <Form.Control id="example-date" type="date" name="date" />
              </Col>
            </Form.Group>
            <Form.Group as={Col} className="mb-3">
              <Form.Label lg={2}>
                <div className="d-flex">
                  Shifts <span className="text-danger">*</span>
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
          <div className="row p-10" style={{ marginLeft: "16px" }}>
            <Form.Group as={Col} className="mb-3">
              <Form.Label lg={2} htmlFor="example-time">
                <div className="d-flex">
                  Min Start Time <span className="text-danger">*</span>
                </div>
              </Form.Label>
              <Col lg={10}>
                <Form.Control id="example-time" type="time" name="time" />
              </Col>
            </Form.Group>
            <Form.Group as={Col} className="mb-3">
              <Form.Label lg={2} htmlFor="example-time">
                <div className="d-flex">
                  Start Time <span className="text-danger">*</span>
                </div>
              </Form.Label>
              <Col lg={10}>
                <Form.Control id="example-time" type="time" name="time" />
              </Col>
            </Form.Group>
            <Form.Group as={Col} className="mb-3">
              <Form.Label lg={2} htmlFor="example-time">
                <div className="d-flex">
                  Max Start Time <span className="text-danger">*</span>
                </div>
              </Form.Label>
              <Col lg={10}>
                <Form.Control id="example-time" type="time" name="time" />
              </Col>
            </Form.Group>
          </div>
          <div className="row p-10" style={{ marginLeft: "16px" }}>
            <Form.Group as={Col} className="mb-3">
              <Form.Label lg={2} htmlFor="example-time">
                <div className="d-flex">
                  Min End Time <span className="text-danger">*</span>
                </div>
              </Form.Label>
              <Col lg={10}>
                <Form.Control id="example-time" type="time" name="time" />
              </Col>
            </Form.Group>
            <Form.Group as={Col} className="mb-3">
              <Form.Label lg={2} htmlFor="example-time">
                <div className="d-flex">
                  End Time <span className="text-danger">*</span>
                </div>
              </Form.Label>
              <Col lg={10}>
                <Form.Control id="example-time" type="time" name="time" />
              </Col>
            </Form.Group>
            <Form.Group as={Col} className="mb-3">
              <Form.Label lg={2} htmlFor="example-time">
                <div className="d-flex">
                  Max End Time <span className="text-danger">*</span>
                </div>
              </Form.Label>
              <Col lg={10}>
                <Form.Control id="example-time" type="time" name="time" />
              </Col>
            </Form.Group>
          </div>
          <div className="row p-10" style={{ marginLeft: "16px" }}>
            <Form.Group as={Col} className="mb-3">
              <Form.Label column lg={2} htmlFor="example-time">
                <div className="d-flex">
                  Break_Time <span className="text-danger">*</span>
                </div>
              </Form.Label>
              <Col lg={3}>
                <Form.Control id="example-time" type="time" name="time" />
              </Col>
            </Form.Group>
          </div>
          <div className="col p-10" style={{ marginLeft: "30px" }}>
            <Form.Group as={Col} className="mb-3">
              <Form.Label column lg={2} htmlFor="example-time">
                Accept Extra Hours
              </Form.Label>
              <Col lg={3}>
                <Form.Check // prettier-ignore
                  type="switch"
                  id="custom-switch"
                  //   label="Check this switch"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Col} className="mb-3">
              <Form.Label column lg={2} htmlFor="example-time">
                Publish
              </Form.Label>
              <Col lg={3}>
                <Form.Check // prettier-ignore
                  type="switch"
                  id="custom-switch"
                  //   label="Check this switch"
                />
              </Col>
            </Form.Group>
          </div>
        </Row>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-auto">
              <button
                onClick={handleClose}
                type="button"
                className="btn btn-primary p-10"
                style={{
                  margin: "20px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </Form>

      {/* </Modal.Body> */}
    </Modal>
  );
};

export default AddScheduleModal;
