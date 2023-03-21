import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: "ZIM-0001",
      Country: "Zimbabwe",
      img: "https://www.worldometers.info/img/flags/zi-flag.gif",
      User: "Tafadzwa Marimbita",
      date: "1 March",
      amount: "78%",
      Region: "Victoria Falls",
      status: "Approved",
    },
    {
      id: "IND-0001",
      Country: "India",
      img: "https://www.worldometers.info/img/flags/in-flag.gif",
      User: "Hermione Dadheech",
      date: "1 March",
      amount: "24%",
      Region: "New Dehli",
      status: "Pending",
    },
    {
      id: "MOZ-0001",
      Country: "Mozambique",
      img: "https://www.worldometers.info/img/flags/mz-flag.gif",
      User: "Vasco",
      date: "1 March",
      amount: "35%",
      Region: "Maputo",
      status: "Pending",
    },
    {
      id: "NIG-0001",
      Country: "Niger",
      img: "https://www.worldometers.info/img/flags/ng-flag.gif",
      User: "Mohammed",
      date: "1 March",
      amount: "92%",
      Region: "Queens",
      status: "Approved",
    },
    {
      id: "IND-0010",
      Country: "India",
      img: "https://www.worldometers.info/img/flags/in-flag.gif",
      User: "Dipashri Kamaleshwar Shinde",
      date: "1 March",
      amount: "20%",
      Region: "Punjab",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Country</TableCell>
            <TableCell className="tableCell">User</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Statistics</TableCell>
            <TableCell className="tableCell">Region</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.Country}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.User}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.Region}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
