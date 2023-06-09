import React, { useCallback, useEffect } from "react";
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
import { langState } from "../atom";
import { useRecoilState } from "recoil";
import Cookies from "js-cookie";
import NavMenu from "./NavMenu";

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
      setLang(cookieLang === undefined ? "tr" : cookieLang);
      router.push(`/${cookieLang === undefined ? "" : cookieLang}`, undefined, {
        shallow: true,
      });
    }
  }, [setLang]);

  return (
    <ThemeProvider theme={theme}>
      <header className="header">
        <div className="header-container">
          <Link style={{ display: "flex", alignItems: "center" }} href={"/"}>
            <img
              style={{ height: 50, borderRadius: 8 }}
              src="/static/logo.png"
              alt="Rental Car"
              loading="lazy"
            />
          </Link>
          <div className="header-lang">
            <Select
              className="lang-select"
              size="small"
              value={lang}
              onChange={handleLangChange}
            >
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
                      <Typography className="lang-text" fontSize={13}>
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
            <NavMenu />
          </div>
        </div>
      </header>
    </ThemeProvider>
  );
});

export default Header;
