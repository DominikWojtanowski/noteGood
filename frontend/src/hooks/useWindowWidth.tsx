import { useEffect, useState } from "react";
export default function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {}, []);
}
