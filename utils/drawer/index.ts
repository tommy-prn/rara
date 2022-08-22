import {useCallback, useState} from "react";

export const useDrawer = () => {
  const [drawer, setDrawer] = useState<boolean>(false);

  const onClick = useCallback(() => {
    setDrawer(!drawer);
  }, [setDrawer, drawer]);

  return {
    drawer,
    onClick,
    setDrawer,
  };
};
