import React, {useState, useEffect} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, 
         NavIcon, MobileIcon, NavMenu, 
         NavItem, NavLinks, NavBtnLink, 
         NavItemBtn  } from './NavbarElements'

import {IconContext } from 'react-icons/lib'
import { Button } from '../../globalStyles'


const Navbar = (props) => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const { currentUser } = props;

    const handleClick = () =>{
        setClick(!click)
    }

    const closeMobileMenu = () => {
        setClick(false)
    }

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton() 
    },[])

    window.addEventListener('resize', showButton);



    return (
        <>
        <IconContext.Provider value={{color: "#fff"}}>
           <Nav>
               <NavbarContainer>
                   <NavLogo to="/" onClick={closeMobileMenu}>
                       <NavIcon />
                       SHOPTYSTOP
                   </NavLogo>
                   <MobileIcon onClick={handleClick}>
                       { click ? <FaTimes /> : <FaBars />}
                   </MobileIcon>
                   <NavMenu onClick={handleClick} click={click}>
                       <NavItem>
                           <NavLinks to="/">
                               Home
                           </NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to="/services">
                               Services
                           </NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to="/products">
                               Products
                           </NavLinks>
                       </NavItem>
                       <NavItemBtn>
                           {button ? (
                               <NavBtnLink to="/registration">
                                   <Button primary>
                                       SIGN UP
                                   </Button>
                               </NavBtnLink>
                           ) : ( <>
                               { currentUser && (
                                <NavBtnLink to="/shop">
                                    <Button fontBig primary >
                                        LOG OUT
                                    </Button>
                                </NavBtnLink>
                               )}
                               {
                                   !currentUser && (
                                    <NavBtnLink to="/login">
                                        <Button fontBig primary >
                                            LOG IN
                                        </Button>
                                     </NavBtnLink>
                                )}
                            </>
                           )}
                       </NavItemBtn>
                   </NavMenu>
               </NavbarContainer>
           </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar


