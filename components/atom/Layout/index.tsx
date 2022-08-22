import {ReactNode, FC} from "react";
import Image from "next/image";
import Link from "next/link";

// Icon
import {Logo, Plus} from "../../../assets";

// styles

// type
interface LayoutProps {
  containerStyle?: string;
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = (props) => {
  const {containerStyle, children} = props;

  return <div className={containerStyle}>{children}</div>;
};
