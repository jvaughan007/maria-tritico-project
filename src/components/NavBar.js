import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';


const NavBar = () => {

    return (
        <StyledNav>
            <div>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/marias-story">Maria's Story</Link>
                    </li>
                    <li>
                        <Link to="/causes">Causes</Link>
                    </li>
                    <li>
                        <Link to="/donate">Donate</Link>
                    </li>
                </ul>
            </div>
        </StyledNav>
    );
};

const StyledNav = styled.nav`

`;

export default NavBar;
