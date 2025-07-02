import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from "@mui/material";
import type { Product } from "../../app/models/product";
import { Link } from "react-router-dom"

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <Card
      elevation={3}
      sx={{
        width: 280,
        borderRadius: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: 6
        }
      }}
    >
      <CardMedia
        sx={{
          height: 200,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16
        }}
        image={`https://localhost:5001${product.pictureUrl}`}
        title={product.name}
      />
      <CardContent>
        <Typography
          gutterBottom
          sx={{ textTransform: "uppercase", fontWeight: 500 }}
          variant="subtitle2"
        >
          {product.name}
        </Typography>
        <Typography variant="h6" sx={{ color: "secondary.main" }}>
          ${(product.price / 100).toFixed(2)}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between", px: 2, pb: 2 }}>
        <Button size="small" variant="outlined">Add to cart</Button>
        <Button size="small" variant="contained" component={Link} to={`/catalog/${product.id}`}>View</Button>
      </CardActions>
    </Card>
  );
}
