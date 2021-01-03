import React, {useState, useEffect} from 'react';
import { connect, useSelector } from 'react-redux';
import { FaBars, FaTimes } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, 
         NavIcon, MobileIcon, NavMenu, 
         NavItem, NavLinks, NavBtnLink, 
         NavItemBtn, UserId  } from './NavbarElements'

import {IconContext } from 'react-icons/lib'
import { Button } from '../../globalStyles'

//import auth from firebase utils
import { auth } from './../../firebase/firebaseUtils'

const mapState = ({ user }) => ({
    currentUser: user.currentUser
});



const Navbar = (props) => {
    const { currentUser } = props;

    // const { currentUser } = useSelector(mapState);

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () =>{
        setClick(!click)
    }

    const closeMobileMenu = () => {
        setClick(false)
    }

    //show diff button on screen resize
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

    //end of show diff button on screen resize

    return (
        <>
        <IconContext.Provider value={{color: "#fff"}}>
           <Nav>
               <NavbarContainer>
                   <NavLogo to="/" onClick={closeMobileMenu}>
                       <NavIcon />
                       Store
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
                           <NavLinks to="/products">
                               Products
                           </NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to="/registration">
                               SIGN UP
                           </NavLinks>
                       </NavItem>
                       <NavItem>
                       { currentUser && (
                                <NavLinks to="/">
                                    <div 
                                        onClick={() => auth.signOut()}>
                                        LOG OUT
                                    </div>
                                </NavLinks>
                               )}
                               {
                                   !currentUser && (
                                    <NavLinks to="/login">
                                        <>
                                            LOG IN
                                        </>
                                     </NavLinks>
                                )}
                       </NavItem>
                       <NavItem>
                               { currentUser && (<UserId >Welcome <br /> { currentUser.displayName }</UserId>) }
                       </NavItem>
                       {/* <NavItemBtn>
                           {button ? (
                               <>
                               {
                                   currentUser ? (
                                    <NavBtnLink to="/registration">
                                    <Button primary>
                                        SIGN UP
                                    </Button>
                                    </NavBtnLink>
                                   ) : (
                                    <NavBtnLink to="/">
                                        <Button fontBig primary 
                                            onClick={() => auth.signOut()}>
                                            LOG OUT
                                        </Button>
                                    </NavBtnLink>
                                   )
                               }
                               </>
                           ) : ( <>
                               
                            </>
                           )}
                       </NavItemBtn> */}
                   </NavMenu>
               </NavbarContainer>
           </Nav>
        </IconContext.Provider>
        </>
    )
}

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
});

const mapDispatchToProps = () => {

}
export default connect(mapStateToProps, null)(Navbar)


