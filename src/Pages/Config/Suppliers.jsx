import React, { Fragment, useState } from "react";
import { Breadcrumbs } from "../../AbstractElements";
import { Button, Card, CardBody, Col, Container, Row } from "reactstrap";
import TableSuppliers from "Components/Suppliers/Table";
import { useGetData } from "hooks/useGetData";
import { AddSupplier } from "Components/Suppliers/AddSupplier";
import { useModal } from "hooks/useModal";
import EditSupplier from "Components/Suppliers/EditSupplier";
import { useDeleteMutation } from "hooks/useDeleteMutation";
import { confirmAlert } from "Components/shared/Alerts";
import SweetAlert from "sweetalert2";

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
    confirmAlert().then((result) => {
      if (result.value) {
        deleteSupplier.mutate(id);
        if (deleteSupplier.isSuccess) {
          SweetAlert.fire(
            "Eliminado!",
            "Tu elemento ha sido borrado.",
            "success"
          );
        }
      } else {
        SweetAlert.fire("Uff", "Tu elemento esta seguro!", "info");
      }
    });
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
                    <Col xs="12" sm="4">
                      <Button color="primary" onClick={toggleAdd}>
                        <i className="icofont icofont-ui-add"></i> Nuevo
                        proveedor
                      </Button>
                    </Col>
                  </Row>
                  <br />
                  <TableSuppliers
                    tableData={data}
                    selectedRow={handleSelectedRow}
                    deleteRow={handleDeleteRow}
                  />
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
