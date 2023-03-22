import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import WalletIcon from '@mui/icons-material/Wallet';
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import AssessmentIcon from '@mui/icons-material/Assessment';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SettingsIcon from '@mui/icons-material/Settings';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { sidebarRouteLinks } from "../../routes/sidebarRoutesLinks";
const Item = ({ title, to, icon, selected, setSelected }) => {
    return (
        <MenuItem
            active={selected === title}
            style={{
                margin: "5px 0 14px 0",
            }}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={to} />
        </MenuItem>
    );
};



const Sidebar = () => {

    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");
    const sidebarItem = [
        {
            title: "Dashboard",
            icon: < HomeOutlinedIcon />,
            to: sidebarRouteLinks.dashboard,
            selected,
            setSelected,

        },
        {
            title: "Invoices",
            icon: < ReceiptOutlinedIcon />,
            to: sidebarRouteLinks.invoices,
            selected,
            setSelected,

        },
        {
            title: "Messages",
            icon: < MapsUgcIcon />,
            to: sidebarRouteLinks.messages,
            selected,
            setSelected,

        },
        {
            title: "My Wallets",
            icon: < WalletIcon />,
            to: sidebarRouteLinks.wallets,
            selected,
            setSelected,

        },
        {
            title: "Activity",
            icon: < AssessmentIcon />,
            to: sidebarRouteLinks.activity,
            selected,
            setSelected,

        },
        {
            title: "Analytics",
            icon: < AssessmentIcon />,
            to: sidebarRouteLinks.analytics,
            selected,
            setSelected,

        },

    ]

    const sidebarBelow = [
        {
            title: "Get Help",
            icon: < InfoOutlinedIcon />,
            to: sidebarRouteLinks.Help,
            selected,
            setSelected,

        },
        {
            title: "Settings",
            icon: < SettingsIcon />,
            to: sidebarRouteLinks.settings,
            selected,
            setSelected,

        },
    ]
    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    background: "#FFFFFF",
                    borderRadius: "4px"
                },
                "& .pro-icon-wrapper": {
                    marginRight: "5px !important",
                    background: "none !important",

                },
                "& .pro-inner-item": {
                    padding: "5px 13px 5px 20px !important",
                },
                "& .pro-inner-item:hover": {
                    color: "#0177FD !important",
                },
                "& .pro-menu-item": {
                    width: "90%",
                    borderRadius: "4px"
                },
                "& .pro-menu-item.active": {
                    background: "#E5F1FF",
                    color: "#0177FD !important",
                },
                "& .pro-item-content": {
                    color: "#131635",
                },
            }}
        >
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    {/* LOGO AND MENU ICON */}
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: "10px 20px 20px 0",
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                            >
                                <Box display="flex" ml="15px" gap="15px">
                                    <img
                                        alt="logo"
                                        width="100%"
                                        height="50%"
                                        src={`./LOGO.jpg`}
                                        style={{ cursor: "pointer", borderRadius: "50%" }}
                                    />
                                    <Typography variant="p" color="black" >
                                        OpenPay
                                    </Typography>
                                </Box>

                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>
                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                        {sidebarItem.map((item, index) => {
                            return (
                                <Item
                                    key={index}
                                    title={item.title}
                                    icon={item.icon}
                                    selected={item.selected}
                                    setSelected={item.setSelected}
                                    to={item.to}
                                />
                            )
                        })}



                    </Box>
                    <Box style={{ marginTop: "400px", marginLeft: "10%" }}>
                        {sidebarBelow.map((item, index) => {
                            return (
                                <Item
                                    key={index}
                                    title={item.title}
                                    icon={item.icon}
                                    selected={item.selected}
                                    setSelected={item.setSelected}
                                    to={item.to}
                                />
                            )
                        })}

                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
};

export default Sidebar;