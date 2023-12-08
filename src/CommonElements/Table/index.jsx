import React, {
  Fragment,
  useState,
  useCallback,
  useMemo,
  useEffect,
} from "react";
import differenceBy from "lodash/differenceBy";
import { toast } from "react-toastify";
import DataTable from "react-data-table-component";

const CustomTable = ({ columns, tableData, selectableRows = false }) => {
  const [data, setData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [toggleCleared, setToggleCleared] = useState(false);
  const handleRowSelected = useCallback((state) => {
    setSelectedRows(state.selectedRows);
  }, []);

  useEffect(() => {
    setData(tableData);
  }, [tableData]);

  const contextActions = useMemo(() => {
    const handleDelete = () => {
      if (
        window.confirm(
          `Are you sure you want to delete:\r ${selectedRows.map(
            (r) => r.name
          )}?`
        )
      ) {
        setToggleCleared(!toggleCleared);
        setData(differenceBy(data, selectedRows, "name"));
        toast.success("Dato eliminado!");
      }
    };

    return (
      <button key="delete" className="btn btn-danger" onClick={handleDelete}>
        Borrar
      </button>
    );
  }, [data, selectedRows, toggleCleared]);

  return (
    <Fragment>
      <DataTable
        pagination
        className="datatables"
        data={data}
        columns={columns}
        striped={true}
        center={true}
        selectableRows={selectableRows}
        persistTableHead
        contextActions={contextActions}
        onSelectedRowsChange={handleRowSelected}
        clearSelectedRows={toggleCleared}
        highlightOnHover
      />
    </Fragment>
  );
};

export default CustomTable;
