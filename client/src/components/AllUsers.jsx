import { useEffect, useState } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, styled, Button } from '@mui/material';

import {getUsers, deleteUser} from '../service/api';

import { Link } from 'react-router-dom'; 

const StyledTable = styled(Table)`
width:90%;
margin:50px auto 0 auto;
`

const THead = styled(TableRow)`
background:#000000;
& >th {
  color:#fff;
}
`
const AllUsers= () => {

  const [users, setUsers] = useState([]);

  useEffect(() =>{
    getAllUsers();
  }, []); //an empty array

  const getAllUsers = async() => { 
    let response = await getUsers();
    setUsers(response.data);
   }

   const deleteUserDetails = async(id) => { 
    await deleteUser(id);
    getAllUsers();
   }

    return (
      <StyledTable>
 
    <TableHead>
      <THead>
        <TableCell>Id</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Username</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Phone</TableCell>

      </THead>
    </TableHead>
    <TableBody>
      {
        users.map((user) =>(
          <TableRow key={user._id}>
            <TableCell>{user._id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
              <Button variant="contained" style={{ marginRight:10}} component = {Link} to= {`/edit/${user._id}`}>Edit</Button>
              <Button variant="contained" color="secondary" onClick={() => deleteUserDetails(user._id)}>Delete</Button>
            </TableCell>
          </TableRow>
        )
          )
      }
    </TableBody>
    </StyledTable>
    )
  }
  
  export default AllUsers