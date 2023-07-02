import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Paper from '@mui/material/Paper';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import LoginForm from '../login';
import { updateUserStatus } from '../../store';

export default function PopperPopupState() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [userInfos, setUserInfos] = useState();
  const [renderLocalStorage, setRenderLocalStorage] = useState();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleLogout = () => {
    localStorage.clear();
    dispatch(updateUserStatus(false));
    setRenderLocalStorage(Math.random());
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    setUserInfos(JSON.parse(localStorage.getItem('userInfos')));
  }, [renderLocalStorage, user]);

  return (

    <div>
      <Button color="secondary" onClick={handleClick} id="user-button">
        <AccountCircleIcon />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Paper style={{ padding: '15px' }}>
          {userInfos ? (
            <>
              <Typography variant="h5">
                {`Olá, ${userInfos.email}`}
              </Typography>
              <Button onClick={handleLogout} variant="contained" fullWidth>Logout</Button>
            </>
          )
            : (
              <>
                <Typography variant="h5">Realize o login</Typography>
                <LoginForm />
              </>
            )}

        </Paper>
      </Popover>
    </div>
  );
}
