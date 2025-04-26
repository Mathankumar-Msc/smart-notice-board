import { Box, Stack } from "@mui/material";
import Wether from "../Others/SidebarWetherapp";
import Clock from "../Others/Clock";
import QRCodeImage from "../assets/QR1.png";

const Sidebar = () => (
  <Stack
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    flexDirection="column"
    sx={{
      p: 2,
      borderRadius: 2,
      height: "100%",
      backgroundColor: "#282e52",
      color: "#fff",
    }}
  >
    <Wether />
    <Box>
      <img
        src={QRCodeImage}
        alt="QR Code"
        style={{ width: 300, height: 250 }}
      />
    </Box>
    <Box>
      <Clock />
    </Box>
  </Stack>
);

export default Sidebar;
