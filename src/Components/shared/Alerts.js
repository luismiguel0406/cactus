import SweetAlert from "sweetalert2";

export const confirmAlert = () => {
  return SweetAlert.fire({
    title: "Estas seguro?",
    text: "Deseas eliminar este item!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Si",
    cancelButtonText: "No",
    reverseButtons: true,
  });
};
