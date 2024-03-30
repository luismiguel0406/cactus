import CustomTable from "CommonElements/Table";
import React from "react";
import { Button } from "reactstrap";

const TableAccountingAccounts = ({
  tableData = [],
  selectedRow,
  deleteRow,
}) => {
  const colunms = [
    {
      name: "id",
      selector: ({ id }) => id,
      omit: true,
    },
    {
      name: "No. cuenta",
      selector: ({ accountNumber }) => accountNumber,
    },
    {
      name: "Descripcion",
      selector: ({ description }) => description,
    },
    {
      name: "Grupo",
      selector: ({ accountingGroup }) => accountingGroup.description,
    },
    {
      name: "Grupo Id",
      selector: ({ accountingGroupId }) => accountingGroupId,
      omit: true,
    },
    {
      name: "Moneda",
      selector: ({ currency }) => currency.description,
    },
    {
      name: "Moneda Id",
      selector: ({ currencyId }) => currencyId,
      omit: true,
    },

    {
      cell: (row) => {
        const { id } = row;
        return (
          <>
            <Button
              color="secondary"
              className="m-r-10 px-3"
              onClick={() => selectedRow(row)}
            >
              <i className="fa fa-edit" />
            </Button>
            <Button
              color="danger"
              className="m-r-10 px-3"
              onClick={() => deleteRow(id)}
            >
              <i className="fa fa-trash-o" />
            </Button>
          </>
        );
      },
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      omit: false,
    },
  ];

  return (
    <CustomTable
      tableData={tableData}
      columns={colunms}
      searchParams={{
        placeholder: "No. cuenta / descripcion de la cuenta.",
        prop1: "accountNumber",
        prop2: "description",
      }}
    />
  );
};

export default TableAccountingAccounts;
