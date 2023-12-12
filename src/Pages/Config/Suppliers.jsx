import React, { Fragment, useState } from "react";
import { Breadcrumbs } from "../../AbstractElements";
import { Button, Card, CardBody, Col, Container, Row } from "reactstrap";
import SupplierForm from "../../Components/Suppliers/Form";
import TableSuppliers from "Components/Suppliers/Table";
import { useGetData } from "hooks/useGetData";

export const Suppliers = () => {
  const { data } = useGetData("suppliers/supplier");

  const [editData, setEditData] = useState({});
  const [showForm, setShowForm] = useState(false);

  const handleEdit = (rowValue) => {
    setEditData(rowValue);
    setShowForm(true);
    console.log(rowValue);
  };
  return (
    <Fragment>
      <Breadcrumbs
        mainTitle="Proveedores"
        parent="Configuración"
        title="Proveedores"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                {!showForm ? (
                  <Fragment>
                    <Row>
                      <Col sm="4">
                        <Button
                          color="primary"
                          onClick={() => setShowForm(true)}
                        >
                          <i className="icofont icofont-ui-add"></i> Nuevo
                          proveedor
                        </Button>
                      </Col>
                    </Row>
                    <br />
                    <Row>
                      <Col sm="12">
                        <TableSuppliers
                          tableData={data}
                          selectedRow={handleEdit}
                        />
                      </Col>
                    </Row>
                  </Fragment>
                ) : (
                  <SupplierForm editData={editData} />
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
