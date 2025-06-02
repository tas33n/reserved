import React from "react";
import { Link } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Footer = () => {
  return (
    <footer className="w-full py-8 px-4 mt-12 bg-content1">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Icon icon="lucide:cube" width={24} className="text-primary" />
              <span className="font-semibold text-lg">MaterialsLab</span>
            </div>
            <p className="text-foreground-500 text-sm max-w-md">
              Pioneering the future of 3D materials for digital experiences.
              Our advanced technology helps creators build immersive and realistic environments.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link color="foreground" href="#" className="text-sm">Documentation</Link></li>
              <li><Link color="foreground" href="#" className="text-sm">API Reference</Link></li>
              <li><Link color="foreground" href="#" className="text-sm">Tutorials</Link></li>
              <li><Link color="foreground" href="#" className="text-sm">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link color="foreground" href="#" className="text-sm">About Us</Link></li>
              <li><Link color="foreground" href="#" className="text-sm">Careers</Link></li>
              <li><Link color="foreground" href="#" className="text-sm">Contact</Link></li>
              <li><Link color="foreground" href="#" className="text-sm">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-center mt-12 pt-8 border-t border-divider">
          <p className="text-foreground-400 text-sm">
            © {new Date().getFullYear()} MaterialsLab. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link href="#" isExternal aria-label="Twitter">
              <Icon icon="lucide:twitter" className="text-foreground-400 hover:text-foreground" />
            </Link>
            <Link href="#" isExternal aria-label="GitHub">
              <Icon icon="lucide:github" className="text-foreground-400 hover:text-foreground" />
            </Link>
            <Link href="#" isExternal aria-label="LinkedIn">
              <Icon icon="lucide:linkedin" className="text-foreground-400 hover:text-foreground" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};