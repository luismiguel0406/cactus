import React, { Fragment, useState, useCallback, useMemo } from "react";
//import differenceBy from "lodash/differenceBy";
import { toast } from "react-toastify";
import DataTable from "react-data-table-component";
import { Col, InputGroup, Row } from "reactstrap";

const CustomTable = ({ columns, tableData = [], selectableRows = false }) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [toggleCleared, setToggleCleared] = useState(false);
  const [searchCriteria, setSearchCriteria] = useState("");

  const handleRowSelected = useCallback((state) => {
    setSelectedRows(state.selectedRows);
  }, []);

  const handleSearch = (e) => {
    setSearchCriteria(e.target.value);
  };

  const filteredData = tableData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchCriteria.toLowerCase()) ||
      item.document.toLowerCase().includes(searchCriteria.toLowerCase())
  );
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
        // setData(differenceBy(data, selectedRows, "name"));
        toast.success("Dato eliminado!");
      }
    };

    return (
      <button key="delete" className="btn btn-danger" onClick={handleDelete}>
        Borrar
      </button>
    );
  }, [selectedRows, toggleCleared]);
  const customStyles = {
    headCells: {
      style: {
        color: "white",
        backgroundColor: "#24695c",
      },
    },
  };
  return (
    <Fragment>
      <Row>
        <Col xs="12" sm={{ offset: 8, size: 4 }}>
          <InputGroup>
            <input
              id="input"
              type="text"
              name="input"
              value={searchCriteria}
              onChange={handleSearch}
              style={{ border: "1px solid green" }}
              className={`form-control`}
              placeholder="Busca por nombre / razon social o documento."
            />
            <button
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <i className="fa fa-search"></i>
            </button>
          </InputGroup>
        </Col>
      </Row>
      <br />
      <Row>
        <Col sm="12">
          <DataTable
            data={filteredData}
            className="datatables animate__animated animate__fadeIn"
            columns={columns}
            striped={true}
            center={true}
            selectableRows={selectableRows}
            contextActions={contextActions}
            onSelectedRowsChange={handleRowSelected}
            clearSelectedRows={toggleCleared}
            customStyles={customStyles}
            highlightOnHover
            persistTableHead
            pagination
          />
        </Col>
      </Row>
    </Fragment>
  );
};

export default CustomTable;
