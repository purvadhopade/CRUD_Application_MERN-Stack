import React from 'react'
import {AppBar, Toolbar, styled} from '@mui/material';
import {NavLink} from 'react-router-dom';
const Header = styled(AppBar)`
background: #111111`;

const Tabs = styled(NavLink)`
font-size: 35px;
margin-right:60px;
color: inherit;
text-decoration: none;
`



const NavBar = () => {
    return (
        //Header = AppBar
        <Header position="static"> 
            <Toolbar>
                <Tabs to='/'>Code of Interview</Tabs> 
                <Tabs to='all'>All Users</Tabs>  
                <Tabs to='add'>Add Users</Tabs>

            </Toolbar>

        </Header>
      )

}

export default NavBar