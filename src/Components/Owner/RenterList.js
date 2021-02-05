import react, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData({props.forRentList.Phone}),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function RenterList() {
  const classes = useStyles();
  const renterNumb =9
  const [renterList, setRentList] = useState([]);
  useEffect(() => {
    fetch(`https://instarent-1st.herokuapp.com/api/users?id=${renterNumb}`)
        .then(response => response.json())
        .then(result => {
            setRentList(result)
        })
  
  }, [])

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Asset number</TableCell>
            <TableCell align="right">Renter Name</TableCell>
            <TableCell align="right">Phone</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {renterList.map((renterList) => (
            <TableRow key={renterList.id}>
              <TableCell component="th" scope="row">
                {renterList.name}
              </TableCell>
              <TableCell align="left">{renterList.id}</TableCell>
              <TableCell align="left">{renterList.FirstName} {renterList.LastName}</TableCell>
              <TableCell align="left">{renterList.Phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


