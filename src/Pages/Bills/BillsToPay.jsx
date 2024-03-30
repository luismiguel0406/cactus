import { Breadcrumbs } from "AbstractElements";
import MiniHeader from "Components/shared/MiniHeader";
import React, { Fragment } from "react";

const BillsToPay = () => {
  return (
    <Fragment>
      <Breadcrumbs
        mainTitle="Facturas por pagar"
        parent="CXP"
        title="Proveedores"
      />
      <MiniHeader labelButton={"Nueva factura"} />
    </Fragment>
  );
};

export default BillsToPay;
