import CustomInput from "CommonElements/Forms/Input";
import { CustomSelect } from "Constant";
import { useDrop } from "hooks/useDrop";
import React from "react";
import { useForm } from "react-hook-form";
import { Form, Col, Row } from "reactstrap";

const ItemForm = ({ onSubmit, defaultValues, toggler }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm({ defaultValues });
  const optionItemType = useDrop("inventory/itemType");
  const optionAccountingAccount = useDrop("accounts/accountingAccount");
  return (
    <>
      <Form
        className="form theme-form animate__animated animate__fadeIn"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Row>
          <Col sm="6" md="4" lg="3">
            <CustomSelect
              label="Tipo item"
              name="ItemTypeId"
              options={optionItemType}
              register={register}
              errors={errors}
            />
          </Col>
          <Col sm="6" md="4" lg="3">
            <CustomInput
              label="Descripcion"
              name="description"
              control={control}
              register={register}
              errors={errors}
            />
          </Col>
          <Col sm="6" md="4" lg="3">
            <CustomInput
              label="Precio und"
              name="unitPrice"
              control={control}
              register={register}
              errors={errors}
            />
          </Col>
          <Col sm="6" md="4" lg="3">
            <CustomInput
              label="Stock"
              name="stock"
              control={control}
              register={register}
              errors={errors}
            />
          </Col>
          <Col sm="6" md="4" lg="3">
            <CustomInput
              label="Stock minimo"
              name="minimunStock"
              control={control}
              register={register}
              errors={errors}
            />
          </Col>
          <Col sm="6" md="4" lg="3">
            <CustomInput
              label="Costo"
              name="cost"
              control={control}
              register={register}
              errors={errors}
            />
          </Col>
          <Col sm="6" md="4" lg="3">
            <CustomSelect
              label="Cuenta contable"
              name="accountingAccountId"
              options={optionAccountingAccount}
              register={register}
              errors={errors}
            />
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default ItemForm;
