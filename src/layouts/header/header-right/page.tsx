"use client";
import { RightNavMenuItem, currencyDropDownData, languageDropDownData } from "@/constant/menu";
import { Fragment, useState } from "react";
import Link from "next/link";
import Currency from "./currency";
import Language from "./language";
import { IHeaderRightProps } from "./header-right";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const HeaderRight: React.FC<IHeaderRightProps> = ({ userBgClass }) => {
   const [dropdownOpen, setDropdownOpen] = useState(false);

   const toggle = () => setDropdownOpen((prevState) => !prevState);
  const [settingIcon, setSettingIcon] = useState(false)
  return (
    <ul className="header-right">
      {RightNavMenuItem.map((value, i) => (
        <Fragment key={i}>
          {value.title === "currency" && <Currency value={value} />}
          {value.title === "language" && <Language value={value} />}
          {value.title === "user" && (
            <li className={`${userBgClass && userBgClass}`}>
              <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle tag="div">
                  {" "}
                  <i className="fas fa-user"></i>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>Options</DropdownItem>
                  <DropdownItem><Link href="/pages/other-pages/user-dashboard"> My Dashboard</Link></DropdownItem>
                 
                  <DropdownItem divider />
               
                  <DropdownItem>Logout</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              {/* <Link href="/pages/other-pages/user-dashboard">
                <i className="fas fa-user"></i>
              </Link> */}
            </li>
          )}
          {value.title === "setting" && (
            <li className="setting">
              <a href="#js" onClick={() => setSettingIcon(!settingIcon)}>
                <i className="fas fa-cog" />
              </a>
              <ul className={`setting-open ${settingIcon ? "show " : ""} `}>
                <Currency value={currencyDropDownData} />
                <Language value={languageDropDownData} />
              </ul>
            </li>
          )}
        </Fragment>
      ))}
    </ul>
  );
};

export default HeaderRight;
