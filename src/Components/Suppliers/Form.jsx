import React from "react";
import { useForm } from "react-hook-form";
import { Form, Col, Row, CardFooter } from "reactstrap";
import CustomInput from "CommonElements/Forms/Input";
import CustomSelect from "CommonElements/Forms/Select";
import CustomTextArea from "CommonElements/Forms/Textarea";
import ButtonsSubmitCancel from "CommonElements/Forms/Common/ButtonsSubmitCancel";
import { useDrop } from "hooks/useDrop";
import { useState } from "react";


const SupplierForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
    watch
  } = useForm();


 const optionsSuppliers = useDrop('proveedores/tipoServicio');
 const optionsTypeSupplier = useDrop('proveedores/tipoProveedor');
 const optionsTypeDocument = useDrop('proveedores/tipoDocumento');

 const typeDocument = watch('tipoDocumento');

 let documentMask = '';
 const currentItem = optionsTypeDocument?.filter(item=>item.value === Number(typeDocument));
 if(currentItem) documentMask = currentItem[0]?.mask;
 
  const onSubmit = (data) => {
    console.log(data)
  };

  return (
    <>
        <Form className="form theme-form" onSubmit={handleSubmit(onSubmit)}> 
            <Row>
              <Col sm="6" md="4" lg="3">
                <CustomSelect
                  label="Tipo de proveedor"
                  name="tipoProveedor"
                  options={optionsTypeSupplier}
                  register={register}
                  errors={errors}
                />
              </Col>
              <Col sm="6" md="4" lg="3">
                <CustomSelect
                  label="Tipo de documento"
                  name="tipoDocumento"
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
                  name="tipoServicio"
                  options={optionsSuppliers}
                  register={register}
                  errors={errors}
                />
              </Col>
              <Col sm="6" md="4" lg="3">
                <CustomTextArea
                  label="Informacion adicional"
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
