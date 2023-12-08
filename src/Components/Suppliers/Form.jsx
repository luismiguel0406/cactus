import React from "react";
import { useForm } from "react-hook-form";
import { Form, Col, Row, CardFooter } from "reactstrap";
import CustomInput from "CommonElements/Forms/Input";
import CustomSelect from "CommonElements/Forms/Select";
import CustomTextArea from "CommonElements/Forms/Textarea";
import ButtonsSubmitCancel from "CommonElements/Forms/Common/ButtonsSubmitCancel";
import { useDrop } from "hooks/useDrop";
import { useMutation } from "@tanstack/react-query";
import { postData } from "Service";
import { toast } from "react-toastify";

const SupplierForm = ({ editData = {} }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
    watch,
  } = useForm();
  const SANTO_DOMINGO = "32";
  const optionSuppliers = useDrop("proveedores/tipoServicio");
  const optionTypeSuppliers = useDrop("proveedores/tipoProveedor");
  const optionTypeDocuments = useDrop("proveedores/tipoDocumento");
  const optionBanks = useDrop("proveedores/banco");
  const optionDistricts = useDrop("territorios/provincias");

  const postSupplier = useMutation({
    mutationFn: (body) => postData("proveedores/proveedor", body),
  });

  const typeDocument = watch("typeDocumentId", 1);

  let documentMask = "";
  const currentItem = optionTypeDocuments?.filter(
    (item) => item.value === Number(typeDocument)
  );
  if (currentItem) documentMask = currentItem[0]?.mask;

  const onSubmit = (data) => {
    const address = {
      districtId: data.districtId,
      street: data.street,
      sector: data.sector,
      buildingNumber: data.buildingNumber,
      username: "SA",
    };

    const infoSupplier = {
      typeSupplierId: data.typeSupplierId,
      typeDocumentId: data.typeDocumentId,
      document: data.document,
      name: data.name,
      typeServiceId: data.typeServiceId,
      phone: data.phone,
      email: data.email,
      bankId: data.bankId,
      bankOptionalId: data.bankOptionalId,
      accountNumber: data.accountNumber,
      accountNumberOptional: data.accountNumberOptional,
      info: data.info,
      username: "SA",
    };

    postSupplier.mutate({ infoSupplier, address });
  };

  if (postSupplier.isSuccess) {
    //reset();
    toast.success(postSupplier?.data?.message, {
      style: { color: "white" },
    });
  } else if (postSupplier.isError) {
    toast.error(postSupplier?.data?.message, { style: { color: "white" } });
  }

  return (
    <>
      <Form className="form theme-form" onSubmit={handleSubmit(onSubmit)}>
        <h4>Identificación fiscal</h4>
        <Row>
          <Col sm="6" md="4" lg="3">
            <CustomSelect
              label="Tipo de proveedor"
              name="typeSupplierId"
              options={optionTypeSuppliers}
              register={register}
              errors={errors}
            />
          </Col>
          <Col sm="6" md="4" lg="3">
            <CustomSelect
              label="Tipo de documento"
              name="typeDocumentId"
              options={optionTypeDocuments}
              register={register}
              errors={errors}
            />
          </Col>
          <Col sm="6" md="4" lg="3">
            <CustomInput
              label="Documento"
              name="document"
              isMasked
              mask={documentMask}
              control={control}
              register={register}
              errors={errors}
            />
          </Col>
          <Col sm="6" md="4" lg="3">
            <CustomInput
              label="Nombre / razón social"
              name="name"
              register={register}
              errors={errors}
            />
          </Col>
          <Col sm="6" md="4" lg="3">
            <CustomSelect
              label="Tipo de servicio"
              name="typeServiceId"
              options={optionSuppliers}
              register={register}
              errors={errors}
            />
          </Col>
        </Row>
        <hr />
        <h4>Contacto</h4>
        <Row>
          <Col sm="6" md="4" lg="3">
            <CustomSelect
              label="Distrito"
              name="districtId"
              defaultValue={SANTO_DOMINGO}
              options={optionDistricts}
              register={register}
              errors={errors}
            />
          </Col>
          <Col sm="6" md="4" lg="3">
            <CustomInput
              label="Sector"
              name="sector"
              register={register}
              errors={errors}
            />
          </Col>
          <Col sm="6" md="4" lg="3">
            <CustomInput
              label="Calle"
              name="street"
              register={register}
              errors={errors}
            />
          </Col>
          <Col sm="6" md="4" lg="3">
            <CustomInput
              label="Edif / Apto No"
              name="buildingNumber"
              register={register}
              errors={errors}
            />
          </Col>
          <Col sm="6" md="4" lg="3">
            <CustomInput
              label="Telefono"
              name="phone"
              isMasked
              mask="(999)-999-9999"
              control={control}
              register={register}
              errors={errors}
            />
          </Col>
          <Col sm="6" md="4" lg="3">
            <CustomInput
              label="Email"
              name="email"
              type="email"
              register={register}
              errors={errors}
            />
          </Col>
        </Row>
        <hr />
        <h4>Detalles bancarios</h4>
        <Row>
          <Col sm="6" md="4" lg="3">
            <CustomSelect
              label="Entidad bancaria"
              name="bankId"
              options={optionBanks}
              register={register}
              errors={errors}
            />
          </Col>
          <Col sm="6" md="4" lg="3">
            <CustomInput
              label="Número de cuenta"
              name="accountNumber"
              register={register}
              errors={errors}
            />
          </Col>
        </Row>
        <Row>
          <Col sm="6" md="4" lg="3">
            <CustomSelect
              label="Entidad bancaria opcional"
              name="bankOptionalId"
              options={optionBanks}
              register={register}
              errors={errors}
              isRequired={false}
            />
          </Col>
          <Col sm="6" md="4" lg="3">
            <CustomInput
              label="Número de cuenta opcional"
              name="accountNumberOptional"
              register={register}
              errors={errors}
              isRequired={false}
            />
          </Col>
        </Row>
        <hr />
        <h4>Información adicional</h4>
        <Row>
          <Col sm="12">
            <CustomTextArea
              label="Información adicional"
              name="info"
              isRequired={false}
              register={register}
              errors={errors}
            />
          </Col>
        </Row>
        <CardFooter className="text-end">
          <ButtonsSubmitCancel reset={reset} />
        </CardFooter>
      </Form>
    </>
  );
};

export default SupplierForm;
