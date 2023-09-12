'use client'
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
import logo from "../public/desync-logo-white.png";
import Image from "next/image";
import CalendlyLink from "./CalendlyButton";

export default function NavBar2() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "Services",
    "Meet the Team",
    "Get in Touch",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="py-4">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="flex justify-center sm:justify-start">
          <Link href="/">
            <Image
                src={logo}
                width={200}
                alt="desync logo"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        {/* <NavbarItem>
          <Link color="foreground" href="#">
            Services
          </Link>
        </NavbarItem> */}
        <NavbarItem >
          <Link href="/team" color="foreground">
            Meet the Team
          </Link>
    
        </NavbarItem>
        {/* <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem> */}
      </NavbarContent>
        <NavbarItem>
            <Link href="/contact">
                <div className="flex py-3 px-6 bg-blue-700 text-white rounded-full">
                    Let&apos;s Talk!
                </div>
            </Link>
        </NavbarItem>
      {/* <NavbarContent justify="end"> */}
        {/* <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem> */}
        {/* <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem> */}
      {/* </NavbarContent> */}



      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
