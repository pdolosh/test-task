import clsx from "clsx";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const BaseHeader: React.FC<Props> = ({ children, className }) => {
  return (
    <div className="header__background">
      <header className={clsx(className, ["header"])}>{children}</header>
    </div>
  );
};
