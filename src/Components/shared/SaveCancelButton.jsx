import React from "react";
import { Button, CardFooter } from "reactstrap";

const SaveCancelButton = ({ toggler }) => {
  return (
    <CardFooter className="text-end">
      <Button color="primary" className="m-r-15" type="submit">
        Guardar
      </Button>
      <Button color="light" onClick={toggler}>
        Cancelar
      </Button>
    </CardFooter>
  );
};

export default SaveCancelButton;
