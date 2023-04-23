import React, { useCallback, useEffect, useState } from "react";
import {
  MenuItem,
  Select,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { CircleFlag } from "react-circle-flags";
import { langState } from "@/atom";
import { useRecoilState } from "recoil";
import Cookies from "js-cookie";
import { FormattedMessage } from "react-intl";

const theme = createTheme({
  components: {
    MuiList: {
      styleOverrides: {
        root: {
          padding: "0 !important",
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          padding: 0,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          paddingTop: "0 !important",
          paddingBottom: "0 !important",
        },
        root: {
          borderRadius: "8px",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          padding: "0 !important",
          margin: "8px",
          borderRadius: "8px",
        },
      },
    },
  },
});

const Header = React.memo(() => {
  const pathname = usePathname();
  const router = useRouter();
  const { locales } = router;
  const cookieLang = Cookies.get("lang");

  const [lang, setLang] = useRecoilState(langState);

  const handleLangChange = useCallback(
    (e) => {
      const newLang = e.target.value;
      setLang(newLang);
      Cookies.set("lang", newLang);
      router.push(router.asPath, undefined, { locale: newLang });
    },
    [router]
  );

  useEffect(() => {
    if (cookieLang !== lang) {
      setLang(cookieLang);
      router.push(`/${cookieLang}`, undefined, { shallow: true });
      console.log("cookieLang", cookieLang);
    }
  }, [setLang]);

  return (
    <ThemeProvider theme={theme}>
      <header className="header">
        <nav className="header-links">
          <Link
            className={pathname === "/" ? "header-link active" : "header-link"}
            href={"/"}
          >
            <FormattedMessage
              id="page.home.link"
              values={{ b: (title) => <b>{title}</b> }}
            />
          </Link>
          <Link
            className={
              pathname === "/hakkimizda" ||
              pathname === "/about" ||
              pathname === "/ueber-uns"
                ? "header-link active"
                : "header-link"
            }
            href={"/about"}
          >
            <FormattedMessage
              id="page.about.link"
              values={{ b: (title) => <b>{title}</b> }}
            />
          </Link>
          <Link
            className={
              pathname === "/blog" ? "header-link active" : "header-link"
            }
            href={"/blog"}
          >
            <FormattedMessage
              id="page.blog.link"
              values={{ b: (title) => <b>{title}</b> }}
            />
          </Link>
        </nav>
        <div className="header-lang">
          <Select size="small" value={lang} onChange={handleLangChange}>
            {[...locales]
              .sort((a, b) => a < b)
              .map((locale) => (
                <MenuItem value={locale} key={locale}>
                  <Link
                    style={{
                      display: "flex",
                      gap: "5px",
                      alignItems: "center",
                      margin: "8px",
                    }}
                    href={pathname}
                    locale={locale}
                  >
                    <CircleFlag
                      countryCode={locale === "en" ? "gb" : locale}
                      height="20"
                    />
                    <Typography fontSize={13}>
                      {locale === "en"
                        ? "English"
                        : locale === "de"
                        ? "Deutsch"
                        : "Türkçe"}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
          </Select>
          <Typography fontSize={20} className="header-currency-unit">
            {lang === "tr" ? "₺" : lang === "en" ? "$" : "€"}
          </Typography>
        </div>
      </header>
    </ThemeProvider>
  );
});

export default Header;
