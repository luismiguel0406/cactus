export const isTwoDecimalPlaces  = (value)=>{
   if (!/^\d+(\.\d{1,2})?$/.test(value)){
    throw new Error('El campo solo puede tener dos números luego del punto decimal.')
   }
}