import React from "react";
import { Row, Col, Card } from "react-bootstrap";

// components
import PageTitle from "../../components/PageTitle";
import Table from "../../components/Table";

//dummy data
import { records as data, expandableRecords } from "./data";

const columns = [
  {
    Header: "ID",
    accessor: "id",
    sort: true,
  },
  {
    Header: "Name",
    accessor: "name",
    sort: true,
  },
  {
    Header: "Phone Number",
    accessor: "phone",
    sort: false,
  },
  {
    Header: "Age",
    accessor: "age",
    sort: true,
  },
  {
    Header: "Company",
    accessor: "company",
    sort: false,
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
      <PageTitle
        breadCrumbItems={[
          { label: "Employee", path: "/task/employee/department" },
          {
            label: "Department Tables",
            path: "/task/employee/department",
            active: true,
          },
        ]}
        title={"Department"}
        subTitle={"Dashboard / Department"}
      />

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Table
                columns={columns}
                data={expandableRecords}
                pageSize={5}
                sizePerPageList={sizePerPageList}
                isSortable={true}
                pagination={true}
                isExpandable={true}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Departments;
