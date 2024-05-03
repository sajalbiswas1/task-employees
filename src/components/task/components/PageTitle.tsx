import React from "react";
import { Row, Col, Breadcrumb } from "react-bootstrap";

interface PageTitleProps {
  title: string;
  subTitle: string;
}

/**
 * PageTitle
 */
const PageTitle = (props: PageTitleProps) => {
  return (
    <Row>
      <Col>
        <div className="page-title-box">
          <div>
            <h3 className="page-title">{props.title}</h3>
            <h6 className="">{props.subTitle}</h6>
          </div>
          {/* <div className="page-title-right">
            

            <Breadcrumb listProps={{ className: "m-0" }}>
              <Breadcrumb.Item href="/">Task</Breadcrumb.Item>

              {(props.breadCrumbItems || []).map((item, index) => {
                return item.active ? (
                  <Breadcrumb.Item active key={index}>
                    {item.label}
                  </Breadcrumb.Item>
                ) : (
                  <Breadcrumb.Item key={index} href={item.path}>
                    {item.label}
                  </Breadcrumb.Item>
                );
              })}
            </Breadcrumb>
          </div> */}
        </div>
      </Col>
    </Row>
  );
};

export default PageTitle;
