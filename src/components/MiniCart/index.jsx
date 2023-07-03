import React, { useEffect, useState } from 'react';
import { Typography, Button, Drawer, Box, Tooltip } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import CartList from '../cartList';
import { Main } from './styled';

export default function MiniCart() {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const [userInfos, setUserInfos] = useState();
  const router = useRouter();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const handleGoToCheckout = () => {
    setState({ ...state, right: false });
    router.push('/checkout');
  };

  useEffect(() => {
    setUserInfos(JSON.parse(localStorage.getItem('userInfos')));
  }, [user]);

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {cart.length === 0 ? (
        <Typography variant="h5">O carrinho está vazio.</Typography>
      ) : (
        <Main>
          <Tooltip title={!userInfos ? 'Você precisa logar para finalizar a compra' : ''} placement="left">
            <CartList onClick={(event) => event.stopPropagation()} />
            <Button
              variant="contained"
              onClick={handleGoToCheckout}
              fullWidth
              id="go-to-checkout"
              disabled={!userInfos}
            >
              Finalizar Compra
            </Button>
          </Tooltip>
        </Main>
      )}
    </Box>
  );

  return (
    <div>
      <React.Fragment key="right">
        <Button onClick={toggleDrawer('right', true)} id="mini-cart"><ShoppingCartIcon color="primary" /></Button>
        <Drawer
          anchor="right"
          open={state.right}
          onClose={toggleDrawer('right', false)}
        >
          {list('right')}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
