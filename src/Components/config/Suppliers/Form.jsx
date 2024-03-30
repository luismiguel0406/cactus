import React from "react";
import { Form, Col, Row } from "reactstrap";
import CustomInput from "CommonElements/Forms/Input";
import CustomSelect from "CommonElements/Forms/Select";
import CustomTextArea from "CommonElements/Forms/Textarea";
import { useDrop } from "hooks/useDrop";
import { useForm } from "react-hook-form";
import SaveCancelButton from "Components/shared/SaveCancelButton";

const SupplierForm = ({ onSubmit, defaultValues, toggler }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm({ defaultValues });

  const optionTypeServices = useDrop("suppliers/typeService");
  const optionTypeSuppliers = useDrop("suppliers/typeSupplier");
  const optionTypeDocuments = useDrop("suppliers/typeDocument");
  const optionBanks = useDrop("suppliers/bank");
  const optionDistricts = useDrop("territories/provinces");

  const typeDocument = watch("typeDocumentId", 2);

  let documentMask = "";
  const currentItem = optionTypeDocuments?.filter(
    (item) => item.value === Number(typeDocument)
  );
  if (currentItem) documentMask = currentItem[0]?.mask;

  return (
    <>
      <Form
        className="form theme-form animate__animated animate__fadeIn"
        onSubmit={handleSubmit(onSubmit)}
      >
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
              options={optionTypeServices}
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
        <SaveCancelButton toggler={toggler} />
      </Form>
    </>
  );
};

export default SupplierForm;
