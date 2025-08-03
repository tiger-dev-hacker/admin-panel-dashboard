import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router";
import { useState } from "react";
const paginationModel = { page: 0, pageSize: 9 };

const Datatable = () => {
  const [data, setData] = useState(userRows); 

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id));
  }
    const actionColumn = [
        {
            field: "action", headerName: "Action", width: 400, renderCell: (params) => {
                return (
                  <div className="cellAction">
                    <Link to="/users/test" style={{textDecoration: "none"}}>
                    <div className="viewButton"> View </div>
                    </Link>
                    <div className="deleteButton" onClick={()=>handleDelete(params.row.id)}> Delete </div>
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
      <div>
      <DataGrid
        rows={data}
        className="datagrid"
        columns={userColumns.concat(actionColumn)}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10, 15]}
        checkboxSelection
        sx={{ border: 0 }}
        />
        </div>
    </div>
  );
}

export default Datatable;