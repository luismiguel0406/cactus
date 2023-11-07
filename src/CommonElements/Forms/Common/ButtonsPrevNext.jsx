import React from "react";
import { Button } from "reactstrap";

const ButtonsPrevNext = () => {
  return (
    <>
      <Button color="light" className="m-r-15" type="submit">
        Previous
      </Button>
      <Button color="primary" type="submit">
        Next
      </Button>
    </>
  );
};

export default ButtonsPrevNext;
