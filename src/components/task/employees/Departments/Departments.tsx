import React, { useState } from "react";
import { Row, Col, Card, Dropdown } from "react-bootstrap";

// components
import PageTitle from "../../components/PageTitle";
import Table from "../../components/Table";

//dummy data
import { records as data } from "./data";

const columns = [
  {
    Header: "#",
    accessor: "id",
    sort: true,
  },
  {
    Header: "Department Name",
    accessor: "department",
    sort: true,
  },

  {
    Header: "Action",
    accessor: "action",
    sort: false,
    headerClassName: "text-end",
    Cell: ({ row }: any) => {
      const [showProfileModal, setShowProfileModal] = useState<boolean>(false);
      const handleProfileModalShow = () => setShowProfileModal(true);
      return (
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
              <i className="bi uil-edit-alt fs-18 me-2"></i>Edit
            </Dropdown.Item>
            <Dropdown.Item href="#/">
              <i className="bi uil-trash fs-18 me-2"></i>Delete
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
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

const Departments = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <PageTitle title={"Department"} subTitle={"Dashboard / Department"} />
        <button type="button" className="btn btn-primary rounded-pill me-3">
          <i className="bi bi-plus-lg me-2"></i>
          Add Department
        </button>
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
    </>
  );
};

export default Departments;
