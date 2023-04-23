import { useState } from "react";
import { Box, Drawer } from "@mui/material";
import Link from "next/link";
import { FormattedMessage } from "react-intl";
import { usePathname } from "next/navigation";

const Menu = () => {
  const pathname = usePathname();

  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 150 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box sx={{ display: "grid" }}>
        {[
          { id: "page.home.link", source: "/" },
          { id: "page.about.link", source: "/about" },
          { id: "page.blog.link", source: "/blog" },
        ].map((text, key) => (
          <Link
            key={key}
            className={
              pathname === text.source ? "header-link active" : "header-link"
            }
            href={text.source}
          >
            <FormattedMessage
              id={text.id}
              values={{ b: (title) => <b>{title}</b> }}
            />
          </Link>
        ))}
      </Box>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <Box key={anchor}>
          <div className="icons">
            <svg
              width="30"
              height="30"
              viewBox="0 0 32 42"
              xmlns="http://www.w3.org/2000/svg"
              onClick={toggleDrawer(anchor, true)}
              className={state[anchor] ? "hamburger active" : "hamburger"}
            >
              <g transform="matrix(1,0,0,1,-389.5,-264.004)">
                <g id="arrow_left2">
                  <g transform="matrix(1,0,0,1,0,5)">
                    <path
                      id="top"
                      d="M390,270L420,270L420,270C420,270 420.195,250.19 405,265C389.805,279.81 390,279.967 390,279.967"
                    />
                  </g>
                  <g transform="matrix(1,1.22465e-16,1.22465e-16,-1,0.00024296,564.935)">
                    <path
                      id="bottom"
                      d="M390,270L420,270L420,270C420,270 420.195,250.19 405,265C389.805,279.81 390,279.967 390,279.967"
                    />
                  </g>
                  <path id="middle" d="M390,284.967L420,284.967" />
                </g>
              </g>
            </svg>
          </div>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </Box>
      ))}
    </div>
  );
};

export default Menu;