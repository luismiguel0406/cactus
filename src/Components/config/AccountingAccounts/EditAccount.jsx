import CommonModal from "CommonElements/Modal";
import React from "react";
import AccountingAccountsForm from "./Form";

const EditAccount = ({ isOpen, toggler, editData = {} }) => {
  const onSubmit = () => {
    //update data
  };

  return (
    <CommonModal
      size="lg"
      isOpen={isOpen}
      toggler={toggler}
      title="Nueva cuenta contable"
    >
      <AccountingAccountsForm
        defaultValues={editData}
        onSubmit={onSubmit}
        toggler={toggler}
      />
    </CommonModal>
  );
};

export default EditAccount;
