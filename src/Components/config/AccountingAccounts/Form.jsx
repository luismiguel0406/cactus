import CustomInput from "CommonElements/Forms/Input";
import CustomSelect from "CommonElements/Forms/Select";
import SaveCancelButton from "Components/shared/SaveCancelButton";
import { useDrop } from "hooks/useDrop";
import React from "react";
import { useForm } from "react-hook-form";
import { Col, Form, Row } from "reactstrap";

const AccountingAccountsForm = ({ onSubmit, defaultValues, toggler }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ defaultValues });

  const optionsAccountingGroup = useDrop("accounts/accountingGroups");
  const optionsCurrency = useDrop("invoice/currency");
  let accountingGroupSelected = watch("accountingGroupId", null);
  const { accountNumber } = optionsAccountingGroup?.filter(
    (i) => i.id === accountingGroupSelected
  );

  return (
    <>
      <Form
        className="form theme-form animate__animated animate__fadeIn"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Row>
          <Col sm="12" md="3" lg="3">
            <CustomSelect
              label="Moneda"
              name="currencyId"
              options={optionsCurrency}
              register={register}
              errors={errors}
            />
          </Col>
          <Col sm="12" md="9" lg="9">
            <CustomSelect
              label="Grupo contable"
              name="accountingGroupId"
              options={optionsAccountingGroup}
              register={register}
              errors={errors}
            />
          </Col>

          <Col sm="12" md="3" lg="3">
            <CustomInput
              label="No. Cuenta"
              name="accountNumber"
              register={register}
              otherRules={{
                pattern: {
                  value: `/^${accountNumber}/`,
                  message: `Debe iniciar con ${accountNumber}.`,
                },
              }}
              errors={errors}
            />
          </Col>
          <Col sm="12" md="9" lg="9">
            <CustomInput
              label="Descripcion"
              name="description"
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
export default AccountingAccountsForm;
