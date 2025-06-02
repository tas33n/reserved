import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Header = () => {
  return (
    <Navbar maxWidth="xl" isBordered>
      <NavbarBrand>
        <div className="flex items-center gap-2">
          <Icon icon="lucide:cube" width={24} className="text-primary" />
          <p className="font-semibold text-inherit">MaterialsLab</p>
        </div>
      </NavbarBrand>
      
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Materials
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Technology
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Documentation
          </Link>
        </NavbarItem>
      </NavbarContent>
      
      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <Link href="#" color="foreground">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button color="primary" variant="flat" radius="full" size="sm">
            Get Started
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};