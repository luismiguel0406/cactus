import { Breadcrumbs } from "AbstractElements";
import AddAccount from "Components/config/AccountingAccounts/AddAccount";
import EditAccount from "Components/config/AccountingAccounts/EditAccount";
import TableAccountingAccounts from "Components/config/AccountingAccounts/Table";
import MiniHeader from "Components/shared/MiniHeader";
import { useGetData } from "hooks/useGetData";
import { useModal } from "hooks/useModal";
import React, { Fragment, useState } from "react";

export const AccountingAccounts = () => {
  const { data } = useGetData("accounts/accountingAccount");

  const [isOpenAdd, toggleAdd] = useModal();
  const [isOpenEdit, toggleEdit] = useModal();
  const [editData, setEditData] = useState({});

  const handleSelectedRow = (rowData) => {
    toggleEdit();
    setEditData(rowData);
  };

  return (
    <Fragment>
      <Breadcrumbs
        mainTitle="Cuentas contables"
        parent="Configuración"
        title="Cuentas contables"
      />
      <MiniHeader
        labelButton="Nueva cuenta contable"
        fnButton={toggleAdd}
        childTable={
          <TableAccountingAccounts
            tableData={data}
            selectedRow={handleSelectedRow}
            deleteRow={() => {}}
          />
        }
      />
      <AddAccount isOpen={isOpenAdd} toggler={toggleAdd} />
      <EditAccount
        isOpen={isOpenEdit}
        toggler={toggleEdit}
        editData={editData}
      />
    </Fragment>
  );
};
