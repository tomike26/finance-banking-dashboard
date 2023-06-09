import React from 'react';
import { useState } from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Header from '../../components/Header';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';

const TransactionItem = ({ icon, title, date, cardNumber, amount, status }) => {
  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      m={3}
    >
      <Typography
        variant='p'
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
        }}
      >
        <img src={icon} alt={title} />
        {title}
      </Typography>
      <Typography variant='p'>{cardNumber}</Typography>
      <Typography variant='p'>{date}</Typography>
      <Typography variant='p'>{amount}</Typography>
      <p className={status === 'success' ? 'success' : 'pending'}>{status}</p>
    </Box>
  );
};
const StatItem = ({ icon, rating, title }) => {
  return (
    <div className='stat-item'>
      
      <img src={icon} alt={title} />
      <div>
        <h2>{rating}</h2>
        <p>{title}</p>
      </div>
    </div>
  );
};
export const recentTranscation =
  [
    {
      icon: "/images/bitcoin.jpg",
      title: "Bitcoin Transaction",
      date: "Jan 16, 2010",
      cardNumber: "****45242",
      amount: "-$853.00",
      status: "success"
    },
    {
      icon: "/images/image1.jpg",
      title: "Sent to anitonia",
      date: "Jan 16, 2010",
      cardNumber: "****87212",
      amount: "-$153.00",
      status: "pending"
    },
    {
      icon: "/images/paypal.jpg",
      title: "Withdraw Paypal",
      date: "Jan 16, 2020",
      cardNumber: "****36275",
      amount: "+$223.00",
      status: "success"
    }
  ]
export const statistics = [
  {
    icon: "/images/purple-icon.jpg",
    rating: "220k",
    title: "customers"
  },
  {
    icon: "/images/blue-icon.jpg",
    rating: "220k",
    title: "Remittance"
  },
  {
    icon: "/images/green-icon.jpg",
    rating: "220k",
    title: "Donation"
  },
  {
    icon: "/images/yellow-icon.jpg",
    rating: "220k",
    title: "watchtime"
  },
]
const Dashboard = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box>
      <Header />
      <Box className="dashboard-section">
        <Box width="25%" >
          <Box className="dashboard-card">
            <div>
              <p className='dashboard-card-details' >Name</p>
              <p className='dashboard-card-details-name' >Carla Rosser</p>
            </div>
            <Box >
              <p className='dashboard-card-number'>1200 01452 54215</p>
              <Box className='dashboard-card-profile'>
                <p>08/23</p>
                <img
                  alt="user"
                  src={`./visa.png`}
                />
              </Box>
            </Box>
          </Box>
          <div>
            <p>Send Money</p>
            <Box className="send-money-section">
              <Box display="flex" gap="10px" alignItems="center">
                <img src="/images/master-card.jpg" alt="Master Card" />
                <p>Debit</p>
              </Box>
              <Box className='select-card'>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={age}
                    onChange={handleChange}
                    label="Age"
                  >
                    <MenuItem value="">
                      <em>$10.86</em>
                    </MenuItem>
                  </Select>
                </FormControl>

              </Box>
            </Box>
          </div>
          <Box className="amount-section">
            <Box >
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <img src="/images/Profile-image.jpg" alt="Master Card" />
                <p className='amount-label' >Enter the amount</p>
              </div>
              <Box component="form"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",

                }}
                noValidate
                autoComplete="off">
                <TextField id="standard-basic"
                  sx={{
                    "& fieldset": { border: 'none' },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AttachMoneyOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                  style={{ m: 1, width: '25ch', borderColor: "none!important" }} />
                <img src="/images/country.jpg" alt="Master Card" />
              </Box>
            </Box>
          </Box>
          <Box className="profile-details">
            <Box className="profile-name">
              <img src="/images/Profile-image.jpg" alt="Master Card" />
              <p>Astrid Hayes</p>
            </Box>
            <div className="profile-icon">
              <AddIcon sx={{ fontSize: "small" }} />
            </div>
          </Box>
          <Button className='send-money-button'>
            Send Money</Button>

          <div className="quick-transfer-section">
            <p>Quick Tansfer </p>
            <Box className="quick-transfer">
              <Box display="flex" gap="10px" alignItems="center">
                <img src="/images/master-card.jpg" alt="Master Card" />
                <p>Debit</p>
              </Box>
              <Box className='select-card'>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={age}
                    onChange={handleChange}
                    label="Age"
                  >
                    <MenuItem value="">
                      <em>$10.86</em>
                    </MenuItem>
                  </Select>
                </FormControl>

              </Box>

            </Box>

            <FormControl fullWidth sx={{ m: 1 }} variant='filled' >
              <InputLabel htmlFor='outlined-adornment-password'>
                Enter your amount
              </InputLabel>
              <OutlinedInput
                id='outlined-adornment-password'
                type="text"
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      edge='end'
                    >
                      <img src='/images/quick-transfer.jpg' alt='Master Card' />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <div className='quick-more-icons'>
              <div>
                <IosShareOutlinedIcon className='more-icons' sx={{ color: "#A789FF" }} />
                <p>send</p>
              </div>
              <div>
                <IosShareOutlinedIcon className='more-icons' sx={{ color: "#83DEA4" }} />
                <p>Receive</p>
              </div>
              <div>
                <ReceiptOutlinedIcon className='more-icons' sx={{ color: "#FCE37E" }} />
                <p>Invoicing</p>
              </div>
              <div>
                <DashboardCustomizeOutlinedIcon className='more-icons' sx={{ color: "#436CFB" }} />
                <p>More</p>
              </div>
            </div>
          </div>

        </Box>
        <Box width="75%">
          <Box display="flex" gap="32px">
            <Box width="60%" >
              <p>Line Chart Section</p>
            </Box>
            <Box width="40%" pr="25px">
              <div className="recent-contact-section">
                <div>
                  <p>Recent Contacts</p>
                </div>
                <div className="recent-contact-icon">
                  <EditIcon sx={{ color: '#C1C1C1' }} />
                  <SearchOutlinedIcon sx={{ color: '#0177FB' }} />
                </div>
              </div>
              <p className='recipient-text'>18 recipients</p>
              <Stack direction="row" spacing={3} className='image-stack'>
                <img src='/images/image1.jpg' alt='contact-images' className='contact-image' />
                <img src='/images/image2.jpg' alt='contact-images' className='contact-image' />
                <img src='/images/image3.jpg' alt='contact-images' className='contact-image' />
                <img src='/images/image4.jpg' alt='contact-images' className='contact-image' />
                <img src='/images/image5.jpg' alt='contact-images' className='contact-image' />
                <ArrowForwardIosIcon sx={{ fontSize: "medium" }} className='recent-contact-forward' />
              </Stack>
              <div className='recent-contact-group'>
                <p sx={{ color: "#cccccc" }}>Group <span style={{ color: "#7D8DA6" }}>Party</span> </p>
                <div className='recent-image'>
                  <div class="group-image">
                    <div>
                      <img src="/images/image1.jpg" alt="Master Card" />
                      <img src="/images/image1.jpg" alt="Master Card" />
                      <img src="/images/image1.jpg" alt="Master Card" />
                    </div>
                    <div className='recent-contact-number'>
                      <p>+ 5</p>
                    </div>
                  </div>
                  <div>
                    <MarkChatUnreadIcon sx={{ color: '#C1C1C1' }} />
                  </div>
                </div>
                <div className='recent-image'>

                  <div style={{
                    display: "flex", gap: "40px", alignItems: 'center'
                  }}>
                    <img src="/images/image.jpg" alt="Master Card" />
                    <div className='recent-contact'>
                      <p className='recent-contact-name'>Dakota Milk</p>
                      <p className='recent-contact-amount'>$ 420.00</p>
                    </div>
                  </div>

                  <ArrowForwardIosIcon sx={{ fontSize: "medium" }} className='recent-contact-forward' />
                </div>
              </div>
            </Box>
          </Box>
          <div className='recent-transaction' >
            <div className='recent-transaction-heading' m={3}>
              <h4>Recent Transaction</h4>
              <p>View all</p>
            </div>
            {recentTranscation.map((item, i) => {
              return (
                <TransactionItem
                  key={i}
                  icon={item.icon}
                  title={item.title}
                  date={item.date}
                  cardNumber={item.cardNumber}
                  amount={item.amount}
                  status={item.status}
                />
              );
            })}
          </div>
          <Box boxShadow="0px 14.625px 80.4375px -21.9375px rgba(43, 37, 37, 0.12);" borderRadius=" 10.2375px" m={2}>
            <div className="stat-wrapper">
              <h2>Statistics</h2>
              <div className='stat'>
                {statistics.map((item, i) => {
                  return (
                    <StatItem
                      key={i}
                      icon={item.icon}
                      rating={item.rating}
                      title={item.title}
                    />
                  );
                })}
              </div>
            </div>
          </Box>
        </Box>
      </Box>

    </Box >
  )
}

export default Dashboard