import React from "react";
import { useForm } from "react-hook-form";
import { Card, CardBody, Form, Col, Row } from "reactstrap";
import CustomInput from "CommonElements/Forms/Input";
import CustomSelect from "CommonElements/Forms/Select";
import CustomTextArea from "CommonElements/Forms/Textarea";
import FooterCard from "CommonElements/Forms/Common/FooterCard";

const SupplierForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
        <Form className="form theme-form" onSubmit={handleSubmit(onSubmit)}> 
            <Row>
              <Col sm="6" md="4" lg="3">
                <CustomSelect
                  label="Tipo de proveedor"
                  name="tipoProveedor"
                  options={[]}
                  register={register}
                  errors={errors}
                />
              </Col>
              <Col sm="6" md="4" lg="3">
                <CustomSelect
                  label="Tipo de documento"
                  name="tipoDocumento"
                  options={[]}
                  register={register}
                  errors={errors}
                />
              </Col>
              <Col sm="6" md="4" lg="3">
                <CustomInput
                  label="Documento"
                  name="documento"
                  type="text"
                  register={register}
                  errors={errors}
                />
              </Col>
              <Col sm="6" md="4" lg="3">
                <CustomInput
                  label="Nombre / razón social"
                  name="nombre"
                  type="text"
                  register={register}
                  errors={errors}
                />
              </Col>
              <Col sm="6" md="4" lg="3">
                <CustomSelect
                  label="Categoria"
                  name="categoria"
                  options={[]}
                  register={register}
                  errors={errors}
                />
              </Col>
              <Col sm="6" md="4" lg="3">
                <CustomTextArea
                  label="Informacion adicional"
                  name="infoAdicional"
                  type="text"
                  register={register}
                  errors={errors}
                />
              </Col>
            </Row>  
          <FooterCard className='text-end mb-3 mx-3'/>
        </Form>    
    </>
  );
};

export default SupplierForm;
