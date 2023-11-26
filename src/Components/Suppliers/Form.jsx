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

const SupplierForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
    watch,
  } = useForm();

  const optionsSuppliers = useDrop("proveedores/tipoServicio");
  const optionsTypeSupplier = useDrop("proveedores/tipoProveedor");
  const optionsTypeDocument = useDrop("proveedores/tipoDocumento");
  const optionsBanks = useDrop("proveedores/banco");
  const mutation = useMutation({
    mutationFn: (body) => postData("proveedores/proveedor", body),
  });

  const typeDocument = watch("typeDocumentId", 1);

  let documentMask = "";
  const currentItem = optionsTypeDocument?.filter(
    (item) => item.value === Number(typeDocument)
  );
  if (currentItem) documentMask = currentItem[0]?.mask;

  const onSubmit = (data) => {
    const address = {
      district: data.district,
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
      bankOptionalId: data.bankOptionalid,
      accountNumber: data.accountNumber,
      accountNumberOptional: data.accountNumberOptional,
      info: data.info,
      username: "SA",
    };

    mutation.mutate({ infoSupplier, address });
  };
  if (mutation.isSuccess) alert("agregado");
  return (
    <>
      <Form className="form theme-form" onSubmit={handleSubmit(onSubmit)}>
        <h4>Identificación fiscal</h4>
        <Row>
          <Col sm="6" md="4" lg="3">
            <CustomSelect
              label="Tipo de proveedor"
              name="typeSupplierId"
              options={optionsTypeSupplier}
              register={register}
              errors={errors}
            />
          </Col>
          <Col sm="6" md="4" lg="3">
            <CustomSelect
              label="Tipo de documento"
              name="typeDocumentId"
              options={optionsTypeDocument}
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
              options={optionsSuppliers}
              register={register}
              errors={errors}
            />
          </Col>
        </Row>
        <hr />
        <h4>Contacto</h4>
        <Row>
          <Col sm="6" md="4" lg="3">
            <CustomInput
              label="Distrito"
              name="district"
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
              options={optionsBanks}
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
              options={optionsBanks}
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
