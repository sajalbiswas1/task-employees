import React, { useState } from "react";
import { Row, Col, Card, Dropdown } from "react-bootstrap";

// components
import PageTitle from "../../components/PageTitle";
import Table from "../../components/Table";

//dummy data
import { records as data } from "./data";

const columns = [
  {
    Header: "Name",
    accessor: "name",
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

            <span className="">
              {row.original.name} {row.original.department}
            </span>
          </div>
        </>
      );
    },
  },
  {
    Header: "Date",
    accessor: "date",
    sort: true,
    Cell: ({ row }: any) => {
      const inputDate = new Date(row.original.date);
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
    Header: "Projects",
    accessor: "project",
    sort: true,
  },
  {
    Header: "Assigned Hours",
    accessor: "assignedHours",
    sort: true,
  },
  {
    Header: "Hours",
    accessor: "hours",
    sort: true,
  },
  {
    Header: "Description",
    accessor: "description",
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
      console.log(row);
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
const TimeSheet = () => {
  return (
    <>
      <PageTitle title={"Time Sheet"} subTitle={"Dashboard / Time Sheet"} />

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

export default TimeSheet;
