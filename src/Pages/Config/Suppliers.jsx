import React, { Fragment, useState } from "react";
import { Breadcrumbs } from "../../AbstractElements";
import TableSuppliers from "Components/config/Suppliers/Table";
import { useGetData } from "hooks/useGetData";
import { AddSupplier } from "Components/config/Suppliers/AddSupplier";
import { useModal } from "hooks/useModal";
import EditSupplier from "Components/config/Suppliers/EditSupplier";
import { useDeleteMutation } from "hooks/useDeleteMutation";
import { confirmAlert } from "Components/shared/Alerts";
import SweetAlert from "sweetalert2";
import MiniHeader from "Components/shared/MiniHeader";

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
      <MiniHeader
        fnButton={toggleAdd}
        labelButton="Nuevo proveedor"
        childTable={
          <TableSuppliers
            tableData={data}
            selectedRow={handleSelectedRow}
            deleteRow={handleDeleteRow}
          />
        }
      />
      <AddSupplier isOpen={isOpenAdd} toggler={toggleAdd} />
      <EditSupplier
        isOpen={isOpenEdit}
        toggler={toggleEdit}
        editData={editData}
      />
    </Fragment>
  );
};
