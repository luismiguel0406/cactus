import CustomTable from "CommonElements/Table";
import React from "react";
import { Button } from "reactstrap";

const TableSuppliers = ({ tableData = [], selectedRow, deleteRow }) => {
  const columns = [
    {
      name: "id",
      selector: ({ id }) => id,
      omit: true,
    },
    {
      name: "Tipo de documento",
      selector: ({ typeDocument }) => typeDocument.description,
    },
    {
      name: "Tipo de documentoId",
      selector: ({ typeDocumentId }) => typeDocumentId,
      omit: true,
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
      name: "Tipo proveedor",
      selector: ({ typeSupplier }) => typeSupplier.description,
    },
    {
      name: "Tipo proveedorId",
      selector: ({ typeSupplierId }) => typeSupplierId,
      omit: true,
    },
    {
      name: "Tipo de servicio",
      selector: ({ typeService }) => typeService.description,
    },
    {
      name: "Tipo servicioId",
      selector: ({ typeServiceId }) => typeServiceId,
      omit: true,
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
      name: "BancoId",
      selector: ({ bankId }) => bankId,
      omit: true,
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
      omit: true,
    },
    {
      name: "districtId",
      selector: ({ address }) => address.districtId,
      omit: true,
    },
    {
      name: "street",
      selector: ({ address }) => address.street,
      omit: true,
    },
    {
      name: "sector",
      selector: ({ address }) => address.sector,
      omit: true,
    },
    {
      name: "buildingNumber",
      selector: ({ address }) => address.buildingNumber,
      omit: true,
    },
    {
      cell: (row) => {
        const { address, id } = row;
        return (
          <>
            <Button
              color="secondary"
              className="m-r-10 px-3"
              onClick={() =>
                selectedRow({
                  ...row,
                  districtId: address.districtId,
                  sector: address.sector,
                  street: address.street,
                  buildingNumber: address.buildingNumber,
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

  return <CustomTable tableData={tableData} columns={columns} />;
};

export default TableSuppliers;
