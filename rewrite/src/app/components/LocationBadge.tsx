import { Box, Typography, useTheme } from '@mui/material'

const LocationBadge = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#1C1D20",
        borderTopRightRadius: "100px",
        borderBottomRightRadius: "100px",
        padding: theme.spacing(2, 2, 2, 4),
        gap: theme.spacing(4),
      }}
    >
      <Typography
        sx={{
          color: "white",
        }}
      >
        Located in
        <br />
        Omaha, NE
      </Typography>
      <Box
        sx={{
          borderRadius: "100%",
          width: "60px",
          height: "60px",
          backgroundColor: "#eee",
        }}
      />
    </Box>
  )
}

export default LocationBadge
