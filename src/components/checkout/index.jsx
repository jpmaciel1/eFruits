import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Paper, Button, IconButton } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { PDFDownloadLink, Document, Page, View, Text, pdf } from '@react-pdf/renderer';
import { useRouter } from 'next/navigation';
import { ItemSpecsWrapper, QuantityContainer } from './styled';
import { removeFromCart, addToCart } from '../../store';
import { CurrencyFormat } from '../../utils/formatters';

function Invoice({ cartItems, total }) {
  return (
    <Document>
      <Page>
        <View>
          <Text>Nota Fiscal</Text>
          {cartItems.map((item) => (
            <View key={item.id}>
              <Text>{item.nome}</Text>
              <Text>
                Quantidade:
                {' '}
                {item.quantity}
              </Text>
              <Text>
                {`Preço ${CurrencyFormat(item.preco)}`}
              </Text>
            </View>
          ))}
          <Text>
            {`Total: ${CurrencyFormat(total)}`}
          </Text>
        </View>
      </Page>
    </Document>
  );
}

function Checkout() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const router = useRouter();
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [pdfBlob, setPdfBlob] = useState(null);

  const calculateTotal = () =>
    cartItems.reduce((accumulator, item) => {
      const itemTotal = item.preco * item.quantity;
      return accumulator + itemTotal;
    }, 0);

  const handleRemoveOne = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleAddOne = (item) => {
    dispatch(addToCart(item));
  };
  useEffect(() => {
    const userInfos = JSON.parse(localStorage.getItem('userInfos'));
    if (!userInfos) {
      router.push('/');
    }
  }, []);

  const renderQuantityControl = (item) => (
    <QuantityContainer>
      <IconButton
        variant="contained"
        onClick={() => handleRemoveOne(item)}
        style={{ maxWidth: '20px', height: '20px' }}
      >
        <IndeterminateCheckBoxIcon />
      </IconButton>
      <Typography variant="h6">{item.quantity}</Typography>
      <IconButton
        variant="contained"
        color="primary"
        onClick={() => handleAddOne(item)}
        style={{ width: '20px', height: '20px' }}
      >
        <AddBoxIcon />
      </IconButton>
    </QuantityContainer>
  );

  const generatePDF = () => {
    setIsGeneratingPDF(true);

    const invoiceContent = (
      <Invoice cartItems={cartItems} total={calculateTotal()} />
    );

    const blobPromise = pdf(invoiceContent).toBlob();

    blobPromise.then((blob) => {
      setPdfBlob(blob);
      setIsGeneratingPDF(false);
    });
  };

  return (
    <Container maxWidth="sm" style={{ margin: '10px auto' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Checkout
      </Typography>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Resumo do pedido
            </Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              {cartItems.map((item) => {
                const valorTotal = item.preco * item.quantity;
                const valorFormatado = CurrencyFormat(valorTotal);
                return (
                  <React.Fragment key={item.id}>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={item.imagem} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={item.nome}
                        secondary={(
                          <ItemSpecsWrapper>
                            <Typography
                              sx={{ display: 'inline' }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              Valor:
                              {' '}
                              {valorFormatado}
                            </Typography>
                            {renderQuantityControl(item)}
                          </ItemSpecsWrapper>
                        )}
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </React.Fragment>
                );
              })}
            </List>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Total
            </Typography>
            <Typography>{CurrencyFormat(calculateTotal())}</Typography>
          </Grid>
          <Grid item xs={12}>
            {pdfBlob ? (
              <PDFDownloadLink
                document={(
                  <Invoice
                    cartItems={cartItems}
                    total={CurrencyFormat(calculateTotal())}
                  />
              )}
                fileName="nota_fiscal.pdf"
              >
                {({ loading }) =>
                  loading ? 'Gerando PDF...' : 'Baixe sua NF'
                }
              </PDFDownloadLink>
            ) : (
              <Button variant="contained" color="primary" fullWidth onClick={generatePDF}>
                {isGeneratingPDF ? 'Gerando PDF...' : 'Finalizar compra'}
              </Button>
            )}
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default Checkout;
