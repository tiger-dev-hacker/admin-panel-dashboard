import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router";

const paginationModel = { page: 0, pageSize: 9 };

const Datatable = () => {

    const actionColumn = [
        {
            field: "action", headerName: "Action", width: 400, renderCell: () => {
                return (
                  <div className="cellAction">
                    <Link to="/users/test" style={{textDecoration: "none"}}>
                    <div className="viewButton"> View </div>
                    </Link>
                    <div className="deleteButton"> Delete </div>
                    </div>
                );
            },
        },
    ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" style={{textDecoration: "none"}} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10, 15]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </div>
  );
}

export default Datatable;