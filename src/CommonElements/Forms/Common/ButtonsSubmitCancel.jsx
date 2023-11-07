import React from "react";
import { Button } from "reactstrap";

const ButtonsSubmitCancel = ({ reset }) => {

  return (
    <>
      <Button color="primary" className="m-r-15" type="submit">
        Submit
      </Button>
      <Button
        color="light"
        onClick={(e) => {
          reset();
          e.preventDefault();
        }}
      >
        Cancel
      </Button>
    </>
  );
};

export default ButtonsSubmitCancel;
