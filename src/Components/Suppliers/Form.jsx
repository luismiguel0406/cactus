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
  const optionsBanks = useDrop("proveedores/entidadBancaria");
  const mutation = useMutation((body) =>
    postData("api/proveedores/proveedor", body)
  );

  const typeDocument = watch("tipoDocumento", 1);

  let documentMask = "";
  const currentItem = optionsTypeDocument?.filter(
    (item) => item.value === Number(typeDocument)
  );
  if (currentItem) documentMask = currentItem[0]?.mask;

  const onSubmit = (data) => {
    console.log(data);
    const { distrito, calle, sector, numeroEdificio } = data;
    const direccion = { distrito, calle, sector, numeroEdificio };
    const proveedor = { ...data, direccion };
    mutation.mutate(proveedor);
  };

  return (
    <>
      <Form className="form theme-form" onSubmit={handleSubmit(onSubmit)}>
        <h4>Identificación fiscal</h4>
        <Row>
          <Col sm="6" md="4" lg="3">
            <CustomSelect
              label="Tipo de proveedor"
              name="tipoProveedorId"
              options={optionsTypeSupplier}
              register={register}
              errors={errors}
            />
          </Col>
          <Col sm="6" md="4" lg="3">
            <CustomSelect
              label="Tipo de documento"
              name="tipoDocumentoId"
              options={optionsTypeDocument}
              register={register}
              errors={errors}
            />
          </Col>
          <Col sm="6" md="4" lg="3">
            <CustomInput
              label="Documento"
              name="documento"
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
              name="nombre"
              register={register}
              errors={errors}
            />
          </Col>
          <Col sm="6" md="4" lg="3">
            <CustomSelect
              label="Tipo de servicio"
              name="tipoServicioId"
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
              name="distrito"
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
              name="calle"
              register={register}
              errors={errors}
            />
          </Col>
          <Col sm="6" md="4" lg="3">
            <CustomInput
              label="Edif / Apto No"
              name="numeroEdificio"
              register={register}
              errors={errors}
            />
          </Col>
          <Col sm="6" md="4" lg="3">
            <CustomInput
              label="Telefono"
              name="telefono"
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
              name="entidadBancaria"
              options={optionsBanks}
              register={register}
              errors={errors}
            />
          </Col>
          <Col sm="6" md="4" lg="3">
            <CustomInput
              label="Número de cuenta"
              name="numeroCuenta"
              register={register}
              errors={errors}
            />
          </Col>
        </Row>
        <Row>
          <Col sm="6" md="4" lg="3">
            <CustomSelect
              label="Entidad bancaria opcional"
              name="entidadBancariaOpcional"
              options={optionsBanks}
              register={register}
              errors={errors}
              isRequired={false}
            />
          </Col>
          <Col sm="6" md="4" lg="3">
            <CustomInput
              label="Número de cuenta opcional"
              name="numeroCuentaOpcional"
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
              name="infoAdicional"
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
