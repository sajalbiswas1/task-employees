import React, { useState } from "react";
import { Row, Col, Card, Dropdown } from "react-bootstrap";

// components
import PageTitle from "../../components/PageTitle";
import Table from "../../components/Table";

//dummy data
import { records as data } from "./data";
import AddScheduleModal from "../ShiftSchedule/AddScheduleModal";
import AddShiftModal from "./AddShiftModal";

const columns = [
  {
    Header: "#",
    accessor: "id",
    sort: true,
  },
  {
    Header: "Shift Name",
    accessor: "shiftName",
    sort: true,
  },
  {
    Header: "Min Start Time",
    accessor: "minStartTime",
    sort: true,
  },
  {
    Header: "Start Time",
    accessor: "startTime",
    sort: true,
  },
  {
    Header: "Max Start Time",
    accessor: "maxStartTime",
    sort: true,
  },
  {
    Header: "Min End Time",
    accessor: "minEndTime",
    sort: true,
  },
  {
    Header: "End Time",
    accessor: "endTime",
    sort: true,
  },
  {
    Header: "Max End Time",
    accessor: "maxEndTime",
    sort: true,
  },
  {
    Header: "Break Time",
    accessor: "breakTime",
    sort: true,
  },
  {
    Header: "Status",
    accessor: "",
    sort: true,
    Cell: ({ row }: any) => {
      return (
        <>
          <div>
            <button className="border bg-white rounded-pill ">
              <i className="bi  uil-compact-disc me-1"></i>
              <span className="fs-5">new</span>
            </button>
          </div>
        </>
      );
    },
  },

  {
    Header: "Action",
    accessor: "action",
    sort: false,
    headerClassName: "text-end",
    Cell: ({ row }: any) => {
      const [showProfileModal, setShowProfileModal] = useState<boolean>(false);
      const handleProfileModalShow = () => setShowProfileModal(true);
      // add shift modal
      const [showAddShiftModal, setShowAddShiftModal] =
        useState<boolean>(false);

      const handleAddShiftModalClose = () => setShowAddShiftModal(false);
      const handleAddShiftModalShow = () => setShowAddShiftModal(true);
      return (
        <>
          <Dropdown as="li" className="list-inline-item fs-18">
            <Dropdown.Toggle
              id="dropdown-apps"
              as="a"
              className="cursor-pointer text-dark"
            >
              <i className="bi bi-three-dots-vertical"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu-end">
              <Dropdown.Item href="#/" onClick={() => handleProfileModalShow()}>
                {" "}
                <div onClick={handleAddShiftModalShow}>
                  <i className="bi uil-edit-alt fs-18 me-2"></i>Edit
                </div>
              </Dropdown.Item>
              <Dropdown.Item href="#/">
                <i className="bi uil-trash fs-18 me-2"></i>Delete
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {/* add Shift */}
          <AddShiftModal
            show={showAddShiftModal}
            handleClose={handleAddShiftModalClose}
          />
        </>
      );
    },
  },
];

const sizePerPageList = [
  {
    text: "10",
    value: 10,
  },
  {
    text: "25",
    value: 25,
  },
  {
    text: "50",
    value: 50,
  },
  {
    text: "All",
    value: data.length,
  },
];
const Shifts = () => {
  // add Schedule
  const [showAddScheduleModal, setShowAddScheduleModal] =
    useState<boolean>(false);

  const handleAddScheduleModalClose = () => setShowAddScheduleModal(false);
  const handleAddScheduleModalShow = () => setShowAddScheduleModal(true);

  //add shift modal
  const [showAddShiftModal, setShowAddShiftModal] = useState<boolean>(false);

  const handleAddShiftModalClose = () => setShowAddShiftModal(false);
  const handleAddShiftModalShow = () => setShowAddShiftModal(true);
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <PageTitle
          title={"Shift List"}
          subTitle={"Dashboard / Employees / Shift List"}
        />
        <div>
          <Dropdown as="li" className="list-inline-item fs-18 me-3">
            <Dropdown.Toggle
              id="dropdown-apps"
              as="a"
              className="cursor-pointer text-dark"
            >
              <button
                type="button"
                className="btn btn-primary rounded-pill "
                onClick={() => handleAddScheduleModalShow()}
              >
                <i className="bi bi-plus-lg me-2"></i>
                Assign Shift
              </button>
            </Dropdown.Toggle>
          </Dropdown>

          <button
            className="btn btn-primary rounded-pill me-1"
            onClick={handleAddShiftModalShow}
          >
            Add Shift
          </button>
        </div>
      </div>

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Table
                columns={columns}
                data={data}
                pageSize={10}
                sizePerPageList={sizePerPageList}
                isSortable={true}
                pagination={true}
                showDisplayPage={true}
                // isExpandable={true}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* ass Schedule */}
      <AddScheduleModal
        show={showAddScheduleModal}
        handleClose={handleAddScheduleModalClose}
      />
      {/* add Shift */}
      <AddShiftModal
        show={showAddShiftModal}
        handleClose={handleAddShiftModalClose}
      />
    </>
  );
};

export default Shifts;
