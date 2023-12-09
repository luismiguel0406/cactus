import CustomTable from "CommonElements/Table";
import React from "react";
import { Button } from "reactstrap";

const TableSuppliers = ({ tableData = [], selectedRow }) => {
  const columns = [
    {
      name: "id",
      selector: (row) => row.id,
      omit: true,
    },
    {
      name: "Tipo de documento",
      selector: ({ typeDocument }) => typeDocument.description,
    },
    {
      name: "Documento",
      selector: ({ document }) => document,
    },
    {
      name: "Nombre/razon social",
      selector: ({ name }) => name,
    },
    {
      name: "Tipo",
      selector: ({ typeSupplier }) => typeSupplier.description,
    },
    {
      name: "Tipo de servicio",
      selector: ({ typeService }) => typeService.description,
    },
    {
      name: "Telefono",
      selector: ({ phone }) => phone,
    },
    {
      name: "Email",
      selector: ({ email }) => email,
    },
    {
      name: "Banco",
      selector: ({ bank }) => bank.description,
    },

    {
      name: "Número de cuenta",
      selector: ({ accountNumber }) => accountNumber,
    },
    {
      name: "Número de cuenta opcional",
      selector: ({ accountNumberOptional }) => accountNumberOptional,
    },
    {
      name: "Detalle",
      selector: ({ info }) => info,
    },
    {
      cell: (row) => (
        <>
          <Button
            color="secondary"
            className="m-r-10 px-3"
            onClick={() => selectedRow(row)}
          >
            <i className="fa fa-edit" />
          </Button>
          <Button color="danger" className="m-r-10 px-3">
            <i className="fa fa-trash-o" />
          </Button>
        </>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      omit: false,
    },
  ];

  return <CustomTable tableData={tableData} columns={columns} />;
};

export default TableSuppliers;
