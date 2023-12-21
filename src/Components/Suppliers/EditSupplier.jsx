import React from "react";
import SupplierForm from "./Form";
import CommonModal from "CommonElements/Modal";
import { usePutMutation } from "hooks/usePutMutation";

const EditSupplier = ({ isOpen, toggler, editData = {} }) => {
  const { id } = editData;
  const editSupplier = usePutMutation(`suppliers/supplier/${id}`);

  const onSubmit = (data) => {
    const address = {
      districtId: data.districtId,
      street: data.street,
      sector: data.sector,
      buildingNumber: data.buildingNumber,
    };

    const infoSupplier = {
      typeSupplierId: data.typeSupplierId,
      typeDocumentId: data.typeDocumentId,
      document: data.document,
      name: data.name,
      typeServiceId: data.typeServiceId,
      phone: data.phone,
      email: data.email,
      bankId: data.bankId,
      bankOptionalId: data.bankOptionalId,
      accountNumber: data.accountNumber,
      accountNumberOptional: data.accountNumberOptional,
      info: data.info,
      address,
      username: "SA",
    };
    editSupplier.mutate(infoSupplier);
    toggler();
  };
  return (
    <CommonModal
      size="xl"
      isOpen={isOpen}
      toggler={toggler}
      title="Editar proveedor"
    >
      <SupplierForm
        defaultValues={editData}
        onSubmit={onSubmit}
        toggler={toggler}
      />
    </CommonModal>
  );
};

export default EditSupplier;
