import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Scrol() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
}
