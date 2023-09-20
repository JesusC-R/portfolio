"use client";

import { ReactNode } from "react";

interface LayoutProps {
  className?: string;
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ className, children }) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-light p-32 dark:bg-dark ${className}`}
    >
      {children}
    </div>
  );
}

export default Layout;
