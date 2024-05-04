import React from "react";
import { Modal } from "react-bootstrap";
import { Row, Col, Form } from "react-bootstrap";

interface EditScheduleModalProps {
  show: boolean;
  handleClose: () => void;
  rowData: any;
}

const EditScheduleModal = ({
  show,
  handleClose,
  rowData,
}: EditScheduleModalProps) => {
  console.log("row data", rowData);
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
          <span id="addScheduleTitle">Edit Schedule</span>
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
              <Col lg={11} xs={11}>
                <Form.Select defaultValue={rowData.department}>
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
              <Col lg={11} xs={11}>
                <Form.Select defaultValue={rowData.employeeName}>
                  <option>Rish mail</option>
                  <option>Jhone Smith</option>
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
              <Col lg={11} xs={11}>
                <Form.Control
                  id="example-date"
                  type="date"
                  name="date"
                  defaultValue={rowData.date}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Col} className="mb-3">
              <Form.Label lg={2}>
                <div className="d-flex">
                  Shifts <span className="text-danger">*</span>
                </div>
              </Form.Label>
              <Col lg={11} xs={11}>
                <Form.Select defaultValue={rowData.shift}>
                  <option>10'o clock shift</option>
                  <option>10:30 Shift</option>
                  <option>Daily Shift</option>
                  <option>New Shift</option>
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
              <Col lg={10} xs={10}>
                <Form.Control
                  id="example-time"
                  type="time"
                  name="time"
                  defaultValue={rowData.minStartTime}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Col} className="mb-3">
              <Form.Label lg={2} htmlFor="example-time">
                <div className="d-flex">
                  Start Time <span className="text-danger">*</span>
                </div>
              </Form.Label>
              <Col lg={10} xs={10}>
                <Form.Control
                  id="example-time"
                  type="time"
                  name="time"
                  defaultValue={rowData.startTime}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Col} className="mb-3">
              <Form.Label lg={2} htmlFor="example-time">
                <div className="d-flex">
                  Max Start Time <span className="text-danger">*</span>
                </div>
              </Form.Label>
              <Col lg={10} xs={10}>
                <Form.Control
                  id="example-time"
                  type="time"
                  name="time"
                  defaultValue={rowData.maxStartTime}
                />
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
              <Col lg={10} xs={10}>
                <Form.Control
                  id="example-time"
                  type="time"
                  name="time"
                  defaultValue={rowData.minEndTime}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Col} className="mb-3">
              <Form.Label lg={2} htmlFor="example-time">
                <div className="d-flex">
                  End Time <span className="text-danger">*</span>
                </div>
              </Form.Label>
              <Col lg={10} xs={10}>
                <Form.Control
                  id="example-time"
                  type="time"
                  name="time"
                  defaultValue={rowData.endTime}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Col} className="mb-3">
              <Form.Label lg={2} htmlFor="example-time">
                <div className="d-flex">
                  Max End Time <span className="text-danger">*</span>
                </div>
              </Form.Label>
              <Col lg={10} xs={10}>
                <Form.Control
                  id="example-time"
                  type="time"
                  name="time"
                  defaultValue={rowData.maxEndTime}
                />
              </Col>
            </Form.Group>
          </div>
          <div className="row p-10" style={{ marginLeft: "16px" }}>
            <Form.Group as={Row} className="mb-3">
              <Form.Label lg={2}>
                <div className="d-flex">
                  Break_Time <span className="text-danger">*</span>
                </div>
              </Form.Label>
              <Col lg={4}>
                <Form.Control
                  type="tel"
                  name="tel"
                  defaultValue={rowData.breakTime}
                />
              </Col>
            </Form.Group>
          </div>
          <div className="col p-10" style={{ marginLeft: "30px" }}>
            <Form.Group as={Col} className="mb-3">
              {/* <Form.Label column lg={2} htmlFor="example-time">
                Publish
              </Form.Label> */}
              <Col lg={3}>
                <Form.Check // prettier-ignore
                  type="checkbox"
                  label="Recuter Shift"
                  defaultChecked={rowData.recuterShift}
                />
              </Col>
            </Form.Group>
            <div className="d-flex">
              <Form.Check
                className="me-1" // prettier-ignore
                type="checkbox"
                label="M"
                defaultChecked={rowData.M}
              />
              <Form.Check
                className="me-1" // prettier-ignore
                type="checkbox"
                label="T"
                defaultChecked={rowData.T}
              />
              <Form.Check
                className="me-1" // prettier-ignore
                type="checkbox"
                label="W"
                defaultChecked={rowData.W}
              />
              <Form.Check
                className="me-1" // prettier-ignore
                type="checkbox"
                label="T"
                defaultChecked={rowData.TT}
              />
              <Form.Check
                className="me-1" // prettier-ignore
                type="checkbox"
                label="F"
                defaultChecked={rowData.F}
              />
              <Form.Check
                className="me-1" // prettier-ignore
                type="checkbox"
                label="S"
                defaultChecked={rowData.S}
              />
              <Form.Check
                className="me-1" // prettier-ignore
                type="checkbox"
                label="S"
                defaultChecked={rowData.S}
              />
            </div>
            <Form.Group as={Col} className="mb-3 mw-100">
              <Form.Label lg={2} htmlFor="example-date">
                End On <span className="text-danger">*</span>
              </Form.Label>
              <Col lg={10} xs={10}>
                <Form.Control
                  id="example-date"
                  type="date"
                  name="date"
                  defaultValue={rowData.endOn}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Col} className="mb-3">
              {/* <Form.Label column lg={2} htmlFor="example-time">
                Publish
              </Form.Label> */}
              <Col lg={3}>
                <Form.Check // prettier-ignore
                  type="checkbox"
                  label="Indefinite"
                />
              </Col>
            </Form.Group>
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

export default EditScheduleModal;
