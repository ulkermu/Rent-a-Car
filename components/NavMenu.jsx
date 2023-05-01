import { useState } from "react";
import { Box, Menu, MenuList } from "@mui/material";
import Link from "next/link";
import { FormattedMessage } from "react-intl";
import { usePathname } from "next/navigation";

const NavMenu = () => {
  const pathname = usePathname();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const list = (anchorEl) => (
    <Box
      sx={{ width: 150 }}
      role="presentation"
      onClick={handleClose}
      onKeyDown={handleClose}
    >
      <Box
        sx={{
          display: "grid",
          gap: "5px",
          ":first-of-type": { marginTop: "5px" },
          ":last-of-type": { marginBottom: "5px" },
        }}
      >
        {[
          { id: "page.home.link", source: "/" },
          { id: "page.about.link", source: "/hakkimizda" },
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
      <Box>
        <button
          onClick={handleClick}
          className={anchorEl ? "hamburger opened" : "hamburger"}
          // onclick="this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))"
          aria-label="Main Menu"
        >
          <svg width="40" height="40" viewBox="0 0 100 100">
            <path
              className="line line1"
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path className="line line2" d="M 20,50 H 80" />
            <path
              className="line line3"
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
        </button>
        <Menu
          id="nav-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuList onClick={handleClose}>{list(anchorEl)}</MenuList>
        </Menu>
      </Box>
    </div>
  );
};

export default NavMenu;
