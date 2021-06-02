import * as React from "react";
//router
import { Link } from "react-router-dom";
//Redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeAstronaut } from "../../database/databaseSlice";
//Material-UI
import { DataGrid } from "@material-ui/data-grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

const Grid = () => {
  //getting all astronauts from database to render them as rows
  const astronauts = useSelector((state) => state.database);
  const dispatch = useDispatch();

  //Columns for data grid - name, lastname, birth, fullname,¨
  // superpower, buttons - edit&remove
  const columns = [
    { field: "firstName", headerName: "First name", width: 150 },
    { field: "lastName", headerName: "Last name", width: 150 },
    {
      field: "birth",
      headerName: "Date of Birth",
      sortable: false,
      type: "number",
      width: 200,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 250,
      valueGetter: (params) =>
        `${params.getValue(params.id, "firstName") || ""} ${
          params.getValue(params.id, "lastName") || ""
        }`,
    },
    {
      field: "superPower",
      headerName: "SuperPower",
      width: 200,
    },
    {
      field: "buttons",
      width: 200,
      renderCell: (params) => (
        <>
          {/* Link is actuall onClick */}
          <Link to={`/editor/${params.row.id}`}>
            <Button
              variant="contained"
              color="primary"
              size="small"
              style={{ marginLeft: 16 }}
            >
              Edit
            </Button>
          </Link>

          <Button
            variant="contained"
            color="secondary"
            size="small"
            style={{ marginLeft: 16 }}
            //remove function
            onClick={() => dispatch(removeAstronaut(params.row.id))}
          >
            Remove
          </Button>
        </>
      ),
    },
  ];

  return (
    <Paper>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid rows={astronauts} columns={columns} pageSize={5} />
      </div>
    </Paper>
  );
};
export default Grid;
