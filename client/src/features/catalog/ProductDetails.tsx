import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Button, Table, Grid, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from "@mui/material";
import type { Product } from "../../app/models/product";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch(`https://localhost:5001/api/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.log(error))
  }, [id]);

  if (!product) return <div>Loading...</div>

  const productDetails = [
    { label: 'Name', value: product.name },
    { label: 'Description', value: product.description },
    { label: 'Type', value: product.type },
    { label: 'Author', value: product.author },
    { label: 'Quantity in stock', value: product.quantityInStock },
  ]

  return (
    <Grid container spacing={6} maxWidth='lg' sx={{ mx: 'auto' }}>
      <Grid size={6}>
          <img
          src={`https://localhost:5001${product.pictureUrl}`}
          alt={product.name}
          style={{ width: '100%', borderRadius: '12px' }}
        />
      </Grid>
      <Grid size={6}>
        <Typography variant="h3" sx={{ mb: 2 }} >{product.name}</Typography>
        <Typography variant="h4" color='secondary'>${(product.price / 100).toFixed(2)}</Typography>
        <TableContainer>
          <Table sx={{
            '& td': {fontSize: '1rem'}
          }}>
            <TableBody>
              {productDetails.map((detail, index) => (
                <TableRow key={index}>
                  <TableCell sx={{fontWeight: 'bold'}}>{detail.label}</TableCell>
                  <TableCell>{detail.value}</TableCell>
                </TableRow>
              ))}

            </TableBody>
          </Table>
        </TableContainer>
        <Grid container spacing={2} marginTop={3}>
          <Grid size={6}>
            <TextField
              variant="outlined"
              type="number"
              label='Quantity in basket'
              fullWidth
              defaultValue={1}
            />
          </Grid>
          <Grid size={6}>
            <Button
              sx={{height: '55px'}}
              color="primary"
              size="large"
              variant="contained"
              fullWidth
            >
              Add to Basket
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}