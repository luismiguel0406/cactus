import CustomTable from "CommonElements/Table";
import React from "react";
import { Button } from "reactstrap";

const TableSearchSupplier = ({ data = [], selectRow }) => {
  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
      omit: true,
    },
    {
      name: "Nombre / Razon Social",
      selector: (row) => row.name,
      sortable: true,
      grow: 2,
    },
    {
      name: "Documento",
      selector: (row) => row.document,
      sortable: true,
    },
    {
      cell: (row) => (
        <Button
          color="primary"
          className="m-r-10 px-3"
          onClick={() => selectRow(row)}
        >
          <i className="icofont icofont-hand-up" />
        </Button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];
  return (
    <CustomTable
      tableColumns={columns}
      tableData={data}
      selectableRows={false}
    />
  );
};

export default TableSearchSupplier;
