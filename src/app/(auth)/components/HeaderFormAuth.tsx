import React, { FC } from "react";

interface HeaderFormAuthProps {
  title: string;
  subtitle: string;
}

const HeaderFormAuth: FC<HeaderFormAuthProps> = ({ title, subtitle }) => {
  return (
    <div className="title flex flex-col gap-1">
      <h1 className="font-bold text-[32px] leading-[48px]">{title}</h1>
      <p className="font-medium text-lg leading-[27px]">{subtitle}</p>
    </div>
  );
};

export default HeaderFormAuth;
