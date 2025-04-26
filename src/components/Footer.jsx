import { Box, Typography, Stack } from "@mui/material";

const Footer = () => (
  <Stack
    sx={{
      borderRadius: 2,
      backgroundColor: " #282e52",
      color: "#fff",
      height: "100%",
      padding: 1,
    }}
    display="flex"
    alignItems="center"
    flexDirection="row"
    justifyContent="space-evenly"
  >
    <Typography
      variant="body2"
      align="center"
      sx={{
        fontFamily: "unset",
        fontWeight: "bold",
        fontSize: "14px",
      }}
    >
      R.T.Keerthana
    </Typography>
    <Typography
      variant="body2"
      align="center"
      sx={{
        fontFamily: "unset",
        fontWeight: "bold",
        fontSize: "14px",
      }}
    >
      G.Hemalatha
    </Typography>
    <Typography
      variant="body2"
      align="center"
      sx={{
        fontFamily: "unset",
        fontWeight: "bold",
        fontSize: "14px",
      }}
    >
      S.Maheshwari
    </Typography>
    <Typography
      variant="body2"
      align="center"
      sx={{
        fontFamily: "unset",
        fontWeight: "bold",
        fontSize: "14px",
      }}
    >
      M.Muneeshwari
    </Typography>
  </Stack>
);

export default Footer;
