import React, { Fragment } from "react";
import { Button, Card, CardBody, Col, Container, Row } from "reactstrap";

const MiniHeader = ({
  fnButton,
  labelButton,
  childTable,
  color = "primary",
  icon = "icofont icofont-ui-add",
}) => {
  return (
    <>
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody style={{ minHeight: "40rem" }}>
                <Fragment>
                  <Row>
                    <Col xs="12" sm="4">
                      <Button color={color} onClick={fnButton}>
                        <i className={icon}></i> {labelButton}
                      </Button>
                    </Col>
                  </Row>
                  <br />
                  {childTable}
                </Fragment>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MiniHeader;
