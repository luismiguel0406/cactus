import React, { Fragment } from "react";
import { CardFooter } from 'reactstrap'
import { Btn } from "../../../AbstractElements"


const FooterCard = ({ footerClass }) => {
    
    return (
        <Fragment>
            <CardFooter className={footerClass}>
                <Btn attrBtn={{ color: "primary", className: "m-r-15", type: "submit" }} >Submit</Btn>
                <Btn attrBtn={{ color: "light", type: "submit" }} >Cancel</Btn>
            </CardFooter>
        </Fragment>
    )
}

export default FooterCard;