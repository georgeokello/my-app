import react from 'react';
import { 
    Nav, 
    NavLogo, 
    NavbarContainer,
    MobileIcon,
    NavBarMenu,
    NavItems,
    NavLinks,
    NavBarLink,
    NavBtn
     } from './NavBarElements';
import {FaBars} from 'react-icons/fa'

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        Logo
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavBarMenu>
                    <NavItems>
                            <NavLinks to='about' >Home</NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks to='about' >About</NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks to='discover' >Services</NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks to='contact' >Contact</NavLinks>
                        </NavItems>
                    </NavBarMenu>
                    {/* <NavBtn>
                        <NavBarLink to="/signin" >Sign In</NavBarLink>
                    </NavBtn> */}
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;