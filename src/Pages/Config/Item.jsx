import { Breadcrumbs } from "AbstractElements";
import MiniHeader from "Components/shared/MiniHeader";
import { Fragment } from "react";

const Item = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Item" parent="Configuracion" title="Item" />
      <MiniHeader
        labelButton="Nuevo Item"
        fnButton={() => {}}
        childTable={<></>}
      />
    </Fragment>
  );
};
export default Item;
