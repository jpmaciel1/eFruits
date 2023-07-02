import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@mui/material/Fade';
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
  useEffect(() => {
    setUserInfos(JSON.parse(localStorage.getItem('userInfos')));
  }, [renderLocalStorage, user]);

  const handleLogout = () => {
    localStorage.clear();
    dispatch(updateUserStatus(false));
    setRenderLocalStorage(Math.random());
  };

  return (
    <PopupState variant="popper" popupId="demo-popup-popper">
      {(popupState) => (
        <div>
          <Button color="secondary" {...bindToggle(popupState)} id="user-button">
            <AccountCircleIcon />
          </Button>
          <Popper {...bindPopper(popupState)} transition>
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
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
              </Fade>
            )}
          </Popper>
        </div>
      )}
    </PopupState>
  );
}
