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
    Header: "Name",
    accessor: "company",
    sort: true,
  },

  {
    Header: "Action",
    accessor: "name",
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
    text: "5",
    value: 5,
  },
  {
    text: "10",
    value: 10,
  },
  {
    text: "25",
    value: 25,
  },
  {
    text: "All",
    value: data.length,
  },
];

const Departments = () => {
  return (
    <>
      <PageTitle title={"Department"} subTitle={"Dashboard / Department"} />

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Table
                columns={columns}
                data={data}
                pageSize={5}
                sizePerPageList={sizePerPageList}
                isSortable={true}
                pagination={true}
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
