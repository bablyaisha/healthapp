import React from 'react'
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
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="discover" onClick={toggle}>Contact Details</SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
          
                </SidebarMenu>
           
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
