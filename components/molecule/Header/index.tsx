import {FC} from "react";
import Image from "next/image";
import Link from "next/link";
import {useDrawer} from "../../../utils/drawer";

// Icon
import {Logo, Plus} from "../../../assets";

// Component
import {Drawer} from "../../atom";

// Styles

// type
interface HeaderProps {}

export const Header: FC<HeaderProps> = (props) => {
  const {drawer, setDrawer, onClick} = useDrawer();

  return (
    <div className="flex w-full justify-between items-center px-12 h-24 bg-gray-70">
      <Link href={"/"} passHref>
        <a>
          <Image
            src={Logo}
            alt="logo"
            width={100}
            height={33}
            className="cursor-pointer"
          />
        </a>
      </Link>
      <Image
        src={Plus}
        alt="Drawer-button"
        width={33}
        height={33}
        className={`cursor-pointer duration-200  ${drawer && "rotate-45"}`}
        onClick={onClick}
      />

      <Drawer drawerState={drawer} setDrawer={setDrawer} />
    </div>
  );
};
