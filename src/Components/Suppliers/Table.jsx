import CustomTable from "CommonElements/Table";
import React from "react";
import { Button } from "reactstrap";

const TableSuppliers = () => {
  const columns = [
    {
      name: "id",
      selector: (row) => row.id,
      omit: true,
    },
    {
      name: "document",
      selector: ({ document }) => document,
    },
    {
      name: "typeService",
      selector: ({ typeService }) => typeService.description,
    },
    {
      name: "phone",
      selector: ({ phone }) => phone,
    },
    {
      name: "email",
      selector: ({ email }) => email,
    },
    {
      name: "bank",
      selector: ({ bank }) => bank.description,
    },
    {
      name: "type supplier",
      selector: ({ typeSupplier }) => typeSupplier.description,
    },
    {
      name: "account Number",
      selector: ({ accountNumber }) => accountNumber,
    },
    {
      name: "account number optional",
      selector: ({ info }) => info,
    },
    {
      name: "info",
      selector: ({ info }) => info,
    },
    {
      name: "type document",
      selector: ({ typeDocument }) => typeDocument.description,
    },
    {
      cell: (row) => (
        <>
          <Button color="secondary" className="m-r-10 px-3" onClick={() => {}}>
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

  return <CustomTable tableData={[]} columns={columns} />;
};

export default TableSuppliers;
