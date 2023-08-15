import {useState}from 'react';
import { FormGroup, FormControl,InputLabel, Input, Typography, styled ,Button} from '@mui/material';
import {addUser, getUsers} from '../service/api';
import {useNavigate} from 'react-router-dom';

const Container = styled(FormGroup)`
width:50%;
margin: 5% auto 0 auto;
// here div represents form control which is a child component formgroup that's why it is written inside formgroup with'& >'
& > div{
    margin-top: 20px;
}

`
const defaultValue = {
     name: '',
     username: '',
     email:'' ,
     phone: ''
    }
const AddUser = () => {
    const [user, setUser] = useState({defaultValue});

    const navigate = useNavigate();
    const onValueChange = (e) =>{
        setUser({...user, [e.target.name]: e.target.value});
    } 

    const addUserDetails = async() => {
        await addUser(user);
        navigate('/all');
    }
     

    return (
  <Container>
    <Typography varient="h2">Add Users</Typography>
    <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange ={(e) =>onValueChange(e)} name="name"/>
    </FormControl>
    <FormControl>
        <InputLabel>UserName</InputLabel>
        <Input onChange ={(e) =>onValueChange(e)} name="username"/>
    </FormControl>
    <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange ={(e) =>onValueChange(e)} name="email"/>
    </FormControl>
    <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange ={(e) =>onValueChange(e)} name="phone"/>
    </FormControl>
    <FormControl>
    <Button variant="contained" onClick={() => addUserDetails() }>Add Users</Button>
  </FormControl>
  </Container>

    )
  }
  
  export default AddUser