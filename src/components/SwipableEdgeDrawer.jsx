import * as React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import RouteCard from './RouteCard';
import { Stack } from '@mui/material';

const drawerBleeding = 56;

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor:
    theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

const a = {
  address: "934 TAMPINES STREET 91, 12-11 S520934",
  name: "Daisuke Nakamura",
  id: "NLSGD23318057",
  timeslot: "9AM-10PM"
}
const b = {
  address: "915 TAMPINES STREET 91, 04-43 S520915",
  name: "Xue Chun",
  id: "NLSGD23483368",
  timeslot: "9AM-10PM"
}
const c = {
  address: "934 TAMPINES STREET 91, 13-35 S520934",
  name: "Kor Johnlim",
  id: "NLXSG20522184",
  timeslot: "9AM-10PM"
}
const d = {
  address: "937 TAMPINES STREET 93, 07-32 S520934",
  name: "Marvie B",
  id: "NLSGCN00675585",
  timeslot: "9AM-10PM"
}
const e = {
  address: "934 TAMPINES STREET 91, 05-25 S520934",
  name: "Eugene Yap",
  id: "NLSGCN00677262",
  timeslot: "9AM-10PM"
}
const f = {
  address: "915 TAMPINES STREET 91, 04-43 S520915",
  name: "Kelvin Gan",
  id: "NLXSG20528308",
  timeslot: "9AM-10PM"
}
const g = {
  address: "923 TAMPINES STREET 85, 03-43 S520916",
  name: "Chu Siew Hooi",
  id: "SHPS733109744",
  timeslot: "9AM-10PM"
}
const h = {
  address: "925 TAMPINES STREET 72, 09-52 S520916",
  name: "Sakshee",
  id: "NLXSG20527026",
  timeslot: "9AM-10PM"
}

function SwipeableEdgeDrawer(props) {
  const { window } = props;
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // This is used only for the example
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: 'visible',
          },
        }}
      />
      <Box sx={{ textAlign: 'center', pt: 1 }}>
        <Button onClick={toggleDrawer(true)}>Open</Button>
      </Box>
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: 'absolute',
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          <Typography sx={{ p: 2, color: 'text.secondary' }}>51 results</Typography>
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: '100%',
            overflow: 'auto',
          }}
        >
          {/* <Skeleton variant="rectangular" height="100%" /> */}
          <Stack spacing={1.5}>
                <RouteCard details = {a}/>
                <RouteCard details = {b}/>
                <RouteCard details = {c}/>
                <RouteCard details = {d}/>
                <RouteCard details = {e}/>
                <RouteCard details = {f}/>
                <RouteCard details = {g}/>
                <RouteCard details = {h}/>
            </Stack>
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}

SwipeableEdgeDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default SwipeableEdgeDrawer;