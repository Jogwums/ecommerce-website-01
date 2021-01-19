import React, {useState, useEffect} from 'react';
import { connect, useSelector } from 'react-redux';
import { FaBars, FaTimes } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, 
         NavIcon, MobileIcon, NavMenu, 
         NavItem, NavLinks, NavBtnLink, 
         NavItemBtn, UserId, CartItem, CartLogo  } from './NavbarElements'

import {IconContext } from 'react-icons/lib'
// import { Button } from '../../globalStyles'

import { selectCartItemsCount } from '../../redux/Cart/cartSelectors'
//import auth from firebase utils
import { auth } from './../../firebase/firebaseUtils'

const mapState = (state) => ({
    currentUser: state.user.currentUser,
    cartItemCount: state.cartData.count,
    totalNumCartItems: selectCartItemsCount(state)
});



const Navbar = (props) => {
    // const { currentUser, cartItemCount } = props;

    const { currentUser, totalNumCartItems } = useSelector(mapState);

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
                   <div>
                    <NavItem hideLG>
                            { currentUser && (<NavLinks to="/cart">
                                    <NavItemBtn> 
                                        <CartItem>
                                            <CartLogo /> {totalNumCartItems}
                                        </CartItem>
                                    </NavItemBtn>
                                    </NavLinks>)}
                                
                        </NavItem>
                    <MobileIcon onClick={handleClick}>
                        { click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                   </div>
                   <NavMenu onClick={handleClick} click={click}>
                       <NavItem>
                           <NavLinks to="/">
                               Home
                           </NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to="/product">
                               Products
                           </NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to="/registration">
                               SIGN UP
                           </NavLinks>
                       </NavItem>
                       <NavItem button >
                       { currentUser && (
                           <NavItem>
                                <NavLinks to="/"
                                   
                                        onClick={() => auth.signOut()}>
                                        LOG OUT
                                    
                                </NavLinks>
                            </NavItem>
                               )}
                               {
                                   !currentUser && ( <NavItem>
                                    <NavLinks to="/login">
                                        <>
                                            LOG IN
                                        </>
                                     </NavLinks>
                                    </NavItem>
                                )}
                       </NavItem>
                       <NavItem>
                           { currentUser && (<NavLinks to="/cart">
                                <NavItemBtn> 
                                    <CartItem>
                                        <CartLogo /> {totalNumCartItems}
                                    </CartItem>
                                </NavItemBtn>
                                </NavLinks>)}
                            
                               { currentUser && (<NavLinks>
                               <UserId>
                                   Welcome <br /> { currentUser.displayName }
                               </UserId>
                               </NavLinks>)}
                        </NavItem>
                   </NavMenu>
               </NavbarContainer>
           </Nav>
        </IconContext.Provider>
        </>
    )
}


export default (Navbar)


