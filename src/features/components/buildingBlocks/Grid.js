import * as React from "react";
//Redux
import { useSelector } from "react-redux";
//Material-UI
import { DataGrid } from "@material-ui/data-grid";
import Button from "@material-ui/core/Button";

//Columns for data grid - name, lastname, birth, fullname, superpower, buttons - edit&remove
const columns = [
  { field: "firstName", headerName: "First name", width: 150 },
  { field: "lastName", headerName: "Last name", width: 150 },
  {
    field: "birth",
    headerName: "Date of Birth",
    sortable: false,
    type: "number",
    width: 100,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 120,
    valueGetter: (params) =>
      `${params.getValue(params.id, "firstName") || ""} ${
        params.getValue(params.id, "lastName") || ""
      }`,
  },
  {
    field: "superPower",
    headerName: "SuperPower",
    width: 160,
  },
  {
    field: "buttons",
    flex: 1,
    renderCell: (params) => (
      <>
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: 16 }}
          onClick={() => console.log("pog")}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          style={{ marginLeft: 16 }}
        >
          Remove
        </Button>
      </>
    ),
  },
];

const Grid = () => {
  //getting all astronauts from database to render them as rows
  const astronauts = useSelector((state) => state.database);
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={astronauts} columns={columns} pageSize={5} />
    </div>
  );
};
export default Grid;
