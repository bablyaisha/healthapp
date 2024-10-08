import React from 'react'
import { Link } from 'react-router-dom'
import { SidebarContainer, Icon, CloseIcon,SidebarWrapper,
    SidebarMenu,SidebarLink
 } from './sidebarElements'

function Sidebar({isOpen,toggle}) {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    {/* <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="discover" onClick={toggle}>Contact Details</SidebarLink> */}
                    <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
                    <SidebarLink as={Link} to="/remove-details" onClick={toggle}>Form Details</SidebarLink>
                </SidebarMenu>
           
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
