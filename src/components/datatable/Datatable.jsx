import "./datatable.scss";
import { DataGrid, GridEventListener } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Datatable = () => {
  const [data, setData] = useState(userRows);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const handleRowClick = (params) => {
    console.log("row clicked",params)
    navigate(`/users/${params.id}`)
  }
  

  return (
    <div className="datatable">
      <div className="datatableTitle">
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        //checkboxSelection
        onRowClick={handleRowClick}
      />
    </div>
  );
};

export default Datatable;
