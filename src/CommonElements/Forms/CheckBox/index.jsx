import React from 'react'
import { Input, Label, Media } from 'reactstrap'

const CustomCheckBox = ({checkState, setCheckState}) => {
  return (
    <Media body className="text-end icon-state">
    <Label className="switch m-r-10">
      <Input
        type="checkbox"
        defaultChecked={checkState}
        onClick={() => setCheckState(!checkState)}
      />
      <span className="switch-state"></span>
    </Label>
  </Media>
  )
}

export default CustomCheckBox