import React, {Fragment} from "react";

import {Outlet} from "react-router-dom";

import {Avatar} from "../components/avatar";
import {Logo} from "../components/logo";
import {BellRingIcon} from "../icons/BellRing";
import {InfoIcon} from "../icons/Info";

import {Tabs} from "./Tabs";


export const Layout: React.FC = () => {
  return (
    <Fragment>
      <div className={"bg-blueDark flex justify-between items-center py-3 px-4"}>
        <Logo />
        <div className={"flex items-center gap-3"}>
          <BellRingIcon
            size={24}
            fill={"#fff"}
            ringing={false} />
          <Avatar name={"John Smith"} />
        </div>
      </div>
      <div className={"flex justify-between items-center"}>
        <Tabs />
        <div className={"py-3 px-4"}>
          <InfoIcon size={24} />
        </div>
      </div>
      <div className={"py-3 px-4 max-w-full bg-gray3 min-h-[calc(100vh_-_2_*_48px)]"}>
        <Outlet />
      </div>
    </Fragment>
  );
};
