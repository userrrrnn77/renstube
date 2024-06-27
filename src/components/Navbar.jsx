import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={isMobile ? 35 : 45} />
        {!isMobile && (
          <span
            style={{ color: "white", fontWeight: "bold", marginLeft: "10px" }}
          >
            RensTube
          </span>
        )}
      </Link>
      <SearchBar isMobile={isMobile} />
      {!isMobile && (
        <img
          src="https://lh3.googleusercontent.com/a/ACg8ocIqUSueICg5Lw_KqA11Yv5jWPohKos4Wq5HT2PgduZmF4ucotIx=s192-c-rg-br100"
          style={{ borderRadius: "50%" }}
          height={35}
          alt="profile"
        />
      )}
    </Stack>
  );
};

export default Navbar;
