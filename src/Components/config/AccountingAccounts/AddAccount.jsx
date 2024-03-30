import CommonModal from "CommonElements/Modal";
import React from "react";
import AccountingAccountsForm from "./Form";
import { usePostMutation } from "hooks/usePostMutation";

const defaultValues = {
  currencyId: "1",
  description: "",
  accountingGroupId: "0",
  accountNumber: "",
};

const AddAccount = ({ isOpen, toggler }) => {
  const invalidatedQuery = "accountingAccounts";
  const postAccounts = usePostMutation(
    "accounts/accountingAccount",
    invalidatedQuery
  );

  const onSubmit = (data) => {
    const { currencyId, description, accountingGroupId, accountNumber } = data;
    let account = {
      currencyId,
      description,
      accountingGroupId,
      accountNumber,
    };
    postAccounts.mutate(account);
    toggler();
  };
  return (
    <CommonModal
      size="lg"
      isOpen={isOpen}
      toggler={toggler}
      title="Nueva cuenta contable"
    >
      <AccountingAccountsForm
        defaultValues={defaultValues}
        onSubmit={onSubmit}
        toggler={toggler}
      />
    </CommonModal>
  );
};

export default AddAccount;
