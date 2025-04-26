import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, Typography, Box, Stack } from "@mui/material";
const fetchData = async () => {
  const res = await fetch(
    "https://opensheet.elk.sh/1EmCa-6FQRAMd0t4sJV7GIBFURyK3k57qTHAL_yLh0NU/Sheet1"
  );
  if (!res.ok) throw new Error("Fetch failed");
  return res.json();
};

const Mainbar = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["pollingData"],
    queryFn: fetchData,
    refetchInterval: 1000,
    refetchIntervalInBackground: true,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Box sx={{ padding: 2 }}>
      {data.map((date, index) => (
        <Stack key={index} display="flex" alignItems="center" mt={4} gap={5}>
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontWeight: "bold", marginBottom: 2, fontFamily: "unset" }}
          >
            {date.Title}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              fontSize: "1.5rem", // Increase font size
              textAlign: "center", // Justify content
              lineHeight: 1.9, // Optional: Adjust line height for better readability
              fontFamily: "unset", // Optional: Change font family
              fontWeight: "bold", // Optional: Make text bold
              color: "#fff",
            }}
          >
            {date.Description}
          </Typography>
        </Stack>
      ))}
    </Box>
  );
};

export default Mainbar;

{
  /* <Box>
{data.map((date, index) => (
  <Box
    key={index}
    sx={{
      textAlign: "center",
      marginBottom: 4,
      backgroundColor: "#f5f5f5",
      padding: 3,
      borderRadius: 2,
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
      width: "100%", // Adjust width as needed
    }}
  >
    <Typography
      variant="h4"
      component="h2"
      sx={{ fontWeight: "bold", marginBottom: 2 }}
    >
      {date.title}
    </Typography>
    <Typography variant="body1" color="text.secondary">
      {date.description}
    </Typography>
  </Box>
))}
</Box> */
}
