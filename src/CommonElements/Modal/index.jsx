import React from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap";

const CommonModal = ({
  isOpen,
  toggler,
  size,
  title,
  children,
  bodyClass,
  classNameModal,
  fullScreen = false,
  hasCancelButton = false,
  hasSaveButton = false,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      toggle={toggler}
      size={size}
      fullscreen={fullScreen}
      className={classNameModal}
      centered
      scrollable
    >
      <ModalHeader style={{ color: "green" }} toggle={toggler}>
        {title}
      </ModalHeader>
      <ModalBody className={bodyClass}>{children}</ModalBody>
      <ModalFooter>
        {hasCancelButton ? (
          <Button color="secondary" onClick={toggler}>
            {"Close"}
          </Button>
        ) : null}
        {hasSaveButton ? (
          <Button color="primary" onClick={toggler}>
            {"Save"}
          </Button>
        ) : null}
      </ModalFooter>
    </Modal>
  );
};

export default CommonModal;
