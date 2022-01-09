import React from "react";
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SidebarWrapper, SideBtnWrap } from "./SidebarElements";


const Sidebar = ({ isOpen, toggle }) => {
    return(
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle} > 
                <Icon onClick={toggle}>
                    <CloseIcon>X</CloseIcon>
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to="about" >About</SidebarLink>
                    </SidebarMenu>
                    <SidebarMenu>
                        <SidebarLink to="about" >Discover</SidebarLink>
                    </SidebarMenu>
                    <SidebarMenu>
                        <SidebarLink to="about" >Contact</SidebarLink>
                    </SidebarMenu>
                    <SidebarMenu>
                        <SidebarLink to="about" >Sign up</SidebarLink>
                    </SidebarMenu>
                </SidebarWrapper>
                <SideBtnWrap>
                    <SidebarRoute to="/signin" >Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarContainer>
        </>
    )
}


export default Sidebar