import React from "react";
import {
  Button,
  IconButton,
  Input,
  List,
  ListItem,
  Menu,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import { Bars3Icon } from "@heroicons/react/24/outline";

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      ></Menu>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="p-0  md:mb-0 md:flex-row items-center justify-center">
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">Home</ListItem>
      </Typography>
      <NavListMenu />
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
    </List>
  );
}

function Nav({ handleNavModal,handleCartModal }) {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar
      className="mx-auto px-4 py-2 bg-[#f15a22] md:bg-white fixed top-0 left-0 right-0 z-50"
      fullWidth
    >
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="flex justify-center items-center">
          <IconButton
            variant="text"
            color="blue-gray"
            className="md:hidden text-white"
            onClick={() => {
              setOpenNav(!openNav);
              handleNavModal();
            }}
          >
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
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
            <img src="/images/logo.webp" className="w-[170px]" alt="" />
          </Typography>
        </div>
        <div className="hidden md:flex w-[70%] outline-none border-none">
          <Input
            className="w-full bg-gray-"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            }
            placeholder="Search here .."
          />
        </div>
        <div className="md:hidden" onClick={()=> handleCartModal()}>
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

        <div className="hidden md:flex">
          <NavList />
          <Button className="bg-[#f15a22] rounded-none px-6 w-[100px]">
            Log In
          </Button>
        </div>
      </div>
      <div className="md:hidden w-full mx-auto mt-3">
        <Input
          className="w-full bg-white outline-none"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          }
          placeholder="Search here .."
        />
      </div>
    </Navbar>
  );
}

export default Nav;
