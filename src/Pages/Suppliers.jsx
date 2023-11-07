import React, { Fragment } from 'react'
import { Breadcrumbs, H5,  } from '../AbstractElements'
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap'
import SupplierForm from '../Components/Suppliers/Form'

export const Suppliers = () => {
  return (
    <Fragment>
            <Breadcrumbs mainTitle='Proveedores' parent="Configuración" title="Proveedores" />
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>                     
                            <CardBody>
                               <SupplierForm/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
</Fragment>
  )
}
