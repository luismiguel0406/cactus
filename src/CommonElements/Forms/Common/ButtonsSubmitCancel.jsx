import React from "react";
import { Button } from "reactstrap";

const ButtonsSubmitCancel = ({ reset }) => {
  return (
    <>
      <Button color="primary" className="m-r-15" type="submit">
        Guardar
      </Button>
      <Button
        color="light"
        onClick={(e) => {
          reset();
          e.preventDefault();
        }}
      >
        Cancelar
      </Button>
    </>
  );
};

export default ButtonsSubmitCancel;
