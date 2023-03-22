import { Box, IconButton, Typography } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
const Header = () => {
  return (
    <Box display='flex' justifyContent='space-between' pr={4} >
      <Typography  variant="h1" sx={{color:"black", fontSize:"1.2rem", fontWeight:"400"}}>My Card</Typography>
      <Box display="flex">
        <IconButton>
          <SearchOutlinedIcon />
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <img
          alt="user"
          width="26.48px"
          height="24px"
          src={`./userimage.jpg`}
          style={{ cursor: "pointer", borderRadius: "50%", marginTop:"8px" }}
        />
      </Box>
    </Box>
  );
};
export default Header;