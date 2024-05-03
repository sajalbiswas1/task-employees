import React, { useState } from "react";
import { Row, Col, Card, Dropdown } from "react-bootstrap";

// components
import PageTitle from "../../components/PageTitle";
import Table from "../../components/Table";

//dummy data
import { records as data, overtimeCards } from "./data";
import AddOverTimeModal from "./AddOverTimeModal";
import EditOverTimeModal from "./EditOverTimeModal";

const columns = [
  {
    Header: "#",
    accessor: "id",
    sort: true,
  },
  {
    Header: "Department",
    accessor: "department",
    sort: true,
    Cell: ({ row }: any) => {
      return (
        <>
          <div className="d-flex justify-content-start ">
            <img
              src={row.original.image}
              alt=""
              title="Mat Helme"
              className="avatar-sm rounded-circle me-2"
            />
            <span className="">{row.original.name}</span>
          </div>
        </>
      );
    },
  },
  {
    Header: "OT Date",
    accessor: "otDate",
    sort: true,
    Cell: ({ row }: any) => {
      const inputDate = new Date(row.original.otDate);
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const formattedDate = `${inputDate.getDate()} ${
        months[inputDate.getMonth()]
      } ${inputDate.getFullYear()}`;
      return (
        <>
          <p className="">{formattedDate}</p>
        </>
      );
    },
  },
  {
    Header: "OT Hour",
    accessor: "otHours",
    sort: true,
  },
  {
    Header: "OT Type",
    accessor: "otType",
    sort: true,
  },
  {
    Header: "Description",
    accessor: "description",
    sort: true,
  },
  {
    Header: "Status",
    accessor: "status",
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
    Header: "Approved By",
    accessor: "approved",
    sort: true,
    Cell: ({ row }: any) => {
      return (
        <>
          <div className="d-flex justify-content-start ">
            <img
              src={row.original.approvedImage}
              alt=""
              title="Mat Helme"
              className="avatar-sm rounded-circle me-2"
            />
            <span className="">{row.original.approvedName}</span>
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

      const [newTaskModal, setNewTaskModal] = useState<boolean>(false);
      const toggleNewTaskModal = () => {
        setNewTaskModal(!newTaskModal);
      };
      const handleClick = () => {
        setNewTaskModal(!newTaskModal);
      };
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
                <div onClick={handleClick}>
                  <i className="bi uil-edit-alt fs-18 me-2"></i>Edit
                </div>
              </Dropdown.Item>
              <Dropdown.Item href="#/">
                <i className="bi uil-trash fs-18 me-2"></i>Delete
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {newTaskModal && (
            <EditOverTimeModal
              newTaskModal={newTaskModal}
              toggleNewTaskModal={toggleNewTaskModal}
            />
          )}
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
const OverTime = () => {
  const [newTaskModal, setNewTaskModal] = useState<boolean>(false);
  const toggleNewTaskModal = () => {
    setNewTaskModal(!newTaskModal);
  };
  const handleClick = () => {
    setNewTaskModal(!newTaskModal);
  };
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <PageTitle title={"Overtime"} subTitle={"Dashboard / Overtime"} />

        <button
          type="button"
          className="btn btn-primary rounded-pill me-3"
          onClick={handleClick}
        >
          <i className="bi bi-plus-lg me-2"></i>
          Add Overtime
        </button>
      </div>
      <Row>
        <div className="container">
          <div className="row">
            {overtimeCards.map((card) => {
              return (
                <>
                  <div key={card.id} className="col">
                    <Col>
                      <div className="card-body mb-3 bg-white text-center">
                        <h5 className="card-title fw-bold">{card.name}</h5>
                        <p className="card-text fw-bold fs-3">
                          {card.number}
                          {card.month ? (
                            <>
                              <span className="fs-6"> This month</span>
                            </>
                          ) : (
                            ""
                          )}
                        </p>
                      </div>
                    </Col>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </Row>
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
      {newTaskModal && (
        <AddOverTimeModal
          newTaskModal={newTaskModal}
          toggleNewTaskModal={toggleNewTaskModal}
        />
      )}
    </>
  );
};

export default OverTime;
