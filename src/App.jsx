import { Box } from "@mui/material";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Mainbar from "./components/Mainbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        bgcolor: "#161e43", // Outer background
        p: 1,
        boxSizing: "border-box",
      }}
    >
      {/* Sidebar */}
      <Box
        sx={{
          width: "270px",
          height: "100%",
          // border: "2px solid black",
          borderRadius: 2,

          mr: 1,
        }}
      >
        <Sidebar />
      </Box>

      {/* Right side (Header, Main, Footer) */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        {/* Header */}
        <Box
          sx={{
            height: "110px",
            width: "100%",
            // border: "2px solid black",
            borderRadius: 2,
          }}
        >
          <Header />
        </Box>

        {/* Main */}
        <Box
          sx={{
            flex: 1,
            width: "100%",
            // border: "2px solid black",
            borderRadius: 2,
            overflowY: "auto",
            backgroundColor: "#282e52",
            color: "#fff",
          }}
        >
          <Mainbar />
        </Box>

        {/* Footer */}
        <Box
          sx={{
            height: "35px",
            width: "100%",
            // border: "2px solid black",
            borderRadius: 2,
            margin: "0",
            padding: "0",
          }}
        >
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

export default App;
