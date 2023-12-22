import React, { Fragment, useState } from "react";
import { Breadcrumbs } from "../../AbstractElements";
import { Button, Card, CardBody, Col, Container, Row } from "reactstrap";
import TableSuppliers from "Components/Suppliers/Table";
import { useGetData } from "hooks/useGetData";
import { AddSupplier } from "Components/Suppliers/AddSupplier";
import { useModal } from "hooks/useModal";
import EditSupplier from "Components/Suppliers/EditSupplier";
import { useDeleteMutation } from "hooks/useDeleteMutation";

export const Suppliers = () => {
  const { data } = useGetData("suppliers/supplier");
  const invalidatedQuery = "supplier";
  const deleteSupplier = useDeleteMutation(
    "suppliers/supplier",
    invalidatedQuery
  );

  const [isOpenAdd, toggleAdd] = useModal();
  const [isOpenEdit, toggleEdit] = useModal();
  const [editData, setEditData] = useState({});

  const handleSelectedRow = (rowData) => {
    delete rowData.address;
    toggleEdit();
    setEditData(rowData);
  };

  const handleDeleteRow = (id) => {
    deleteSupplier.mutate(id);
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
              <CardBody style={{ minHeight: "40rem" }}>
                <Fragment>
                  <Row>
                    <Col sm="4">
                      <Button color="primary" onClick={toggleAdd}>
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
                        selectedRow={handleSelectedRow}
                        deleteRow={handleDeleteRow}
                      />
                    </Col>
                  </Row>
                </Fragment>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <AddSupplier isOpen={isOpenAdd} toggler={toggleAdd} />
      <EditSupplier
        isOpen={isOpenEdit}
        toggler={toggleEdit}
        editData={editData}
      />
    </Fragment>
  );
};
