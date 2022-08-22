import Link from "next/link";
import {SetStateAction, useCallback, Dispatch, useState, FC} from "react";
// styles

// type
interface DrawerProps {
  drawerState: boolean;
  setDrawer: Dispatch<SetStateAction<boolean>>;
}

export const Drawer: FC<DrawerProps> = (props) => {
  const {drawerState, setDrawer} = props;

  const [data] = useState<{text: string; link: string}[]>([
    {text: "selected project", link: "homepage"},
    {text: "about", link: "about"},
    {text: "contact", link: "contact-us"},
    {text: "jobs", link: "jobs"},
  ]);

  const close = useCallback(() => {
    setDrawer(false);
  }, [setDrawer]);

  return (
    <div
      className={`${
        drawerState && "w-[100vw] h-5/6"
      } justify-end absolute right-0 pr-6 cursor-default flex justify-end z-50`}
      onClick={close}
    >
      <div className="pr-6 w-fit h-fit">
        {data.map((item, index) => {
          const dummy = [...data];
          return (
            <Link href={`/${item.link}`} key={index} passHref>
              <a>
                <div
                  className={`cursor-pointer  duration-300 ${
                    drawerState ? `block ` : "hidden"
                  }`}
                >
                  <p className="text-2xl text-right leading-loose font-bold">
                    {item.text}
                  </p>
                </div>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
