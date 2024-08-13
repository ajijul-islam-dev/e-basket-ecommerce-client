import React from "react";
import {Button, IconButton, Input, List, ListItem, Menu, Navbar, Typography,} from "@material-tailwind/react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";

function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (<React.Fragment>
            <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                offset={{mainAxis: 20}}
                placement="bottom"
                allowHover={true}
            ></Menu>
        </React.Fragment>);
}

function NavList() {
    return (<List className="mt-4 mb-6 p-0  md:mb-0 md:flex-row">
            <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-medium"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4">Home</ListItem>
            </Typography>
            <NavListMenu/>
            <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-medium"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4">
                    Contact Us
                </ListItem>
            </Typography>
        </List>);
}

function Nav() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
    }, []);

    return (<Navbar className="mx-auto px-4 py-2 bg-[#f15a22] md:bg-white" fullWidth>
            <div className="flex items-center justify-between text-blue-gray-900">
                <div className="flex justify-between items-center">
                    <IconButton
                        variant="text"
                        color="blue-gray"
                        className="md:hidden text-white"
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (<XMarkIcon className="h-6 w-6" strokeWidth={2}/>) : (
                            <Bars3Icon className="h-6 w-6" strokeWidth={2}/>)}
                    </IconButton>
                    <Button
                        className="md:hidden bg-transparent rounded-none shadow-none border-none"
                        size="sm"
                    >
                        Log In
                    </Button>

                    <Typography
                        as="a"
                        href="#"
                        variant="h6"
                        className="mr-4 cursor-pointer py-1.5 lg:ml-2 hidden md:block"
                    >
                        <img src="/images/logo.webp" className="w-[170px]" alt=""/>
                    </Typography>
               <div className="hidden md:block">
                   <Input className="" label="Input With Icon"
                          icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="size-6">
                              <path strokeLinecap="round" strokeLinejoin="round"
                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
                          </svg>}/>
               </div>
                </div>
                <div className="">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 text-white"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                        />
                    </svg>
                </div>
                <div className="hidden gap-2 md:flex items-center justify-center">
                    <div className="hidden md:flex items-center justify-center">

                        <NavList/>
                    </div>
                    <Button className="bg-[#f15a22] rounded-none" size="md">
                        Log In
                    </Button>
                </div>
            </div>
        </Navbar>);
}

export default Nav;
