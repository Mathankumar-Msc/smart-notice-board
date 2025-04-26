import { Box, Typography } from "@mui/material";
import Logo from "../assets/Logo.png"; // Adjust the path to your logo image
import NAAC from "../assets/NAAC.png"; // Adjust the path to your NAAC image

const Header = () => (
  <Box
    sx={{
      p: 1,
      borderRadius: 2,
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: " #d0e7f9",
      color: "#37474f",
      gap: 2,
    }}
  >
    {/* Logo */}
    <Box
      component="img"
      src={Logo}
      alt="College Logo"
      sx={{
        width: 120,
        height: 90,
      }}
    />

    {/* College Name */}
    <Box>
      <Typography variant="h5" fontWeight="bold">
        <Box component="span" color="red">
          M.P.N
        </Box>
        <Box component="span" color="blue">
          ACHIMUTHU{" "}
        </Box>
        <Box component="span" color="red">
          M.J
        </Box>
        <Box component="span" color="blue">
          AGANATHAN{" "}
        </Box>
        <Box component="span" color="red">
          E
        </Box>
        <Box component="span" color="blue">
          NGINEERING{" "}
        </Box>
        <Box component="span" color="red">
          C
        </Box>
        <Box component="span" color="blue">
          OLLEGE
        </Box>
      </Typography>

      <Typography
        variant="body2"
        sx={{ mt: 1, fontWeight: "bold" }}
        color="textSecondary"
      >
        Electronics and Communication Engineering(2021-2025)
      </Typography>
    </Box>

    <Box
      component="img"
      src={NAAC}
      alt="College Logo"
      sx={{
        width: 120,
        height: 90,
      }}
    />
  </Box>
);

export default Header;

// import { Box, Typography } from "@mui/material";

// const Header = () => (
//   <Box
//     sx={{
//       p: 1,
//       borderRadius: 2,
//       textAlign: "center",
//     }}
//   >
//     {/* College Name */}
//     <Typography variant="h5" fontWeight="bold">
//       <Box component="span" color="red">
//         M.P.N
//       </Box>
//       <Box component="span" color="blue">
//         ACHIMUTHU{" "}
//       </Box>
//       <Box component="span" color="red">
//         M.J
//       </Box>
//       <Box component="span" color="blue">
//         AGANATHAN{" "}
//       </Box>
//       <Box component="span" color="red">
//         E
//       </Box>
//       <Box component="span" color="blue">
//         NGINEERING{" "}
//       </Box>
//       <Box component="span" color="red">
//         C
//       </Box>
//       <Box component="span" color="blue">
//         OLLEGE
//       </Box>
//     </Typography>

//     <Typography variant="body2" sx={{ mt: 1 }} color="textSecondary">
//       Electronics and Communication Engineering(2021-2025)
//     </Typography>

//     {/* <Typography
//       variant="body2"
//       sx={{ fontWeight: "bold", color: "blue", mt: 0.5 }}
//     >
//       Accredited by NAAC
//     </Typography>

//     <Typography variant="body2" sx={{ mt: 1 }}>
//       Sudhanandhen Kalvi Nagar, Chennimalai, Erode - 638 112, Tamilnadu.
//     </Typography> */}
//   </Box>
// );

// export default Header;
