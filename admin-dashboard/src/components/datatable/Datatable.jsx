import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";



const paginationModel = { page: 0, pageSize: 9 };

const Datatable = () => {

    const actionColumn = [
        {
            field: "action", headerName: "Action", width: 400, renderCell: () => {
                return (
                  <div className="cellAction">  
                    <div className="viewButton"> View </div>
                    <div className="deleteButton"> Delete </div>
                    </div>
                );
            },
        },
    ];
  return (
    <div className="datatable">
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