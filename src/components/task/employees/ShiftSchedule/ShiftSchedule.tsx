import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  Dropdown,
  Form,
  FloatingLabel,
  InputGroup,
  Button,
} from "react-bootstrap";
import "./shiftSchedule.css";
// components
import PageTitle from "../../components/PageTitle";
import Table from "../../components/Table";

//dummy data
import { records as data } from "./data";
import AddScheduleModal from "./AddScheduleModal";
import EditScheduleModal from "./EditScheduleModal";
import DataModal from "./DataModal";

const columns = [
  {
    Header: "Scheduled Shift",
    accessor: "name",
    sort: false,
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
    Header: "Fri 21",
    accessor: "day1",
    sort: false,
    Cell: ({ row }: any) => {
      return <DataModal data={row.original.day1[0]} />;
    },
  },
  {
    Header: "Sat 22",
    accessor: "day2",
    sort: false,
    Cell: ({ row }: any) => {
      return <DataModal data={row.original.day2[0]} />;
    },
  },
  {
    Header: "Sun 23",
    accessor: "day3",
    sort: false,
    Cell: ({ row }: any) => {
      return <DataModal data={row.original.day3[0]} />;
    },
  },
  {
    Header: "Mon 24",
    accessor: "day4",
    sort: false,
    Cell: ({ row }: any) => {
      return <DataModal data={row.original.day4[0]} />;
    },
  },
  {
    Header: "Tue 25",
    accessor: "day5",
    sort: false,
    Cell: ({ row }: any) => {
      return <DataModal data={row.original.day5[0]} />;
    },
  },
  {
    Header: "Wed 26",
    accessor: "day6",
    sort: false,
    Cell: ({ row }: any) => {
      return <DataModal data={row.original.day6[0]} />;
    },
  },
  {
    Header: "Thu 27",
    accessor: "day7",
    sort: false,
    Cell: ({ row }: any) => {
      return <DataModal data={row.original.day7[0]} />;
    },
  },
  {
    Header: "Fri 28",
    accessor: "day8",
    sort: false,
    Cell: ({ row }: any) => {
      return <DataModal data={row.original.day8[0]} />;
    },
  },
  {
    Header: "Sat 29",
    accessor: "day9",
    sort: false,
    Cell: ({ row }: any) => {
      return <DataModal data={row.original.day9[0]} />;
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
const ShiftSchedule = () => {
  return (
    <>
      <PageTitle
        title={"Daily Scheduling"}
        subTitle={"Dashboard / Employee / Shift Scheduling"}
      />

      {/* Input Form */}

      <Form className="form-horizontal">
        <Row>
          <Col>
            <div className="row">
              <Form.Group as={Col} className="mb-3 ">
                <Form.Label column lg={2} htmlFor="simpleinput">
                  Employee
                </Form.Label>
                <Col lg={10}>
                  <Form.Control
                    type="text"
                    id="simpleinput"
                    placeholder="Employee"
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Col} className="mb-3">
                <Form.Label column lg={2}>
                  Department
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
                <Form.Label column lg={2} htmlFor="example-date">
                  From
                </Form.Label>
                <Col lg={10}>
                  <Form.Control id="example-date" type="date" name="date" />
                </Col>
              </Form.Group>
              <Form.Group as={Col} className="mb-3">
                <Form.Label column lg={2} htmlFor="example-date">
                  To
                </Form.Label>
                <Col lg={10}>
                  <Form.Control id="example-date" type="date" name="date" />
                </Col>
              </Form.Group>

              <button type="button" className="btn btn-success col h-25 mt-4">
                Search
              </button>
            </div>
          </Col>
        </Row>
      </Form>

      {/* Table */}
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
                showDisplayPage={false}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ShiftSchedule;
