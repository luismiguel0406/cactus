import CustomTable from "CommonElements/Table";
import React from "react";
import { Button } from "reactstrap";

const Table = ({ tableData = [], selectedRow, deleteRow }) => {
  const columns = [
    {
      name: "id",
      selector: ({ id }) => id,
      omit: true,
    },
    {
      name: "Descripcion",
      selector: ({ description }) => description,
    },
    {
      name: "Stock",
      selector: ({ stock }) => stock,
    },
    {
      name: "Stock minimo",
      selector: ({ minimunStock }) => minimunStock,
    },
    {
      name: "Precio und.",
      selector: ({ unitPrice }) => unitPrice,
    },
    {
      name: "Costo",
      selector: ({ cost }) => cost,
    },
    {
      name: "Tipo item Id",
      selector: ({ itemTypeId }) => itemTypeId,
      omit: true,
    },
    {
      name: "Tipo item",
      selector: ({ itemType }) => itemType.description,
    },
    {
      name: "cuentaContableId",
      selector: ({ accountingAccountId }) => accountingAccountId,
      omit: true,
    },
    {
      name: "Cuenta contable",
      selector: ({ accountingAccount }) => accountingAccount.description,
    },
    {
      cell: (row) => {
        const { id } = row;
        return (
          <>
            <Button
              color="secondary"
              className="m-r-10 px-3"
              onClick={() =>
                selectedRow({
                  ...row,
                })
              }
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
      columns={columns}
      searchParams={{
        placeholder: "Busca por descripción / cuenta contable.",
        prop1: "description",
        prop2: "accountingAccount",
      }}
    />
  );
};

export default Table;
