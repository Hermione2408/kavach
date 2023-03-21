import issuesData from "./utils/db.json"
export const userColumns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'datetime', headerName: 'Date/Time', width: 200 },
  {
    field: 'location',
    headerName: 'Location',
    width: 250,
    valueGetter: (params) => params.row.location.address,
  },
  { field: 'type', headerName: 'Type', width: 150 },
  { field: 'severity', headerName: 'Severity', width: 150 },
  { field: 'vehiclesInvolved', headerName: 'Vehicles Involved', width: 200 },
  { field: 'injured', headerName: 'Injured', width: 150 },
  { field: 'fatalities', headerName: 'Fatalities', width: 150 },
  { field: 'reportedBy', headerName: 'Reported By', width: 200 },
  { field: 'additionalInfo', headerName: 'Additional Info', width: 300 },
  { field: 'createdAt', headerName: 'Created At', width: 200 },
  { field: 'updatedAt', headerName: 'Updated At', width: 200 },
];

//temporary data
export const userRows = issuesData.accidents