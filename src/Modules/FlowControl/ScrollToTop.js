// Source - https://stackoverflow.com/a
// Posted by Saeed Rohani, modified by community. See post 'Timeline' for change history
// Retrieved 2026-01-28, License - CC BY-SA 4.0

import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
