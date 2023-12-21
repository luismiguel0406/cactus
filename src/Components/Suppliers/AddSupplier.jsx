import CommonModal from "CommonElements/Modal";
import React from "react";
import SupplierForm from "./Form";
import { usePostMutation } from "hooks/usePostMutation";

const defaultValues = {
  typeServiceId: "0",
  typeDocumentId: "0",
  typeSupplierId: "0",
  document: "",
  name: "",
  districtId: 32, // Santo domiingo
  street: "",
  buildingNumber: "",
  sector: "",
  bankId: "0",
  accountNumber: "",
  bankOptionalId: "0",
  accountNumberOptional: "",
  info: "",
};
export const AddSupplier = ({ isOpen, toggler }) => {
  const postSupplier = usePostMutation("suppliers/supplier");

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
    postSupplier.mutate(infoSupplier);
    toggler();
  };

  return (
    <CommonModal
      size="xl"
      isOpen={isOpen}
      toggler={toggler}
      title="Nuevo proveedor"
    >
      <SupplierForm
        defaultValues={defaultValues}
        onSubmit={onSubmit}
        toggler={toggler}
      />
    </CommonModal>
  );
};
