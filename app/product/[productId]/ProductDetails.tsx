"use client";


import SetColor from "@/app/components/products/SetColor";
import SetQuantity from "@/app/components/products/SetQuantity";
import { Rating } from "@mui/material";
import { useCallback, useState } from "react";

interface ProductDetailsProps {
  product: any;
}
export type CartProductType = {
  id: String;
  name: String;
  description: String;
  category: String;
  brand: String;
  selectedImg: SelectedImgType;
  quantity: Number;
  price: Number;
};
export type SelectedImgType = {
  color: string;
  colorCode: string;
  image: string;
};
const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  "useStrict"
  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: product.id,
    name: product.name,
    description: product.description,
    category: product.category,
    brand: product.brand,
    selectedImg: { ...product.images[0] },
    quantity: 1,
    price: product.price,
  });

  const Horizontal = () => {
    return <hr className="w-[30%] my-2" />;
  };
  const productRating =
    product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    product.reviews.length;

  const handleColorSelect = useCallback(
    (value: SelectedImgType) => {
      setCartProduct((prev) => {
        return { ...prev, selectedImg: value };
      });
    },
    [cartProduct.selectedImg]
  );

  const handleQtyDecrease = useCallback(() => {
    if (cartProduct.quantity===1)return null
    setCartProduct((prev) => {
      return { ...prev, quantity: prev.quantity - 1 };
    });
  }, [cartProduct]);
  const handleQtyIncrease = useCallback(() => {
    if (cartProduct.quantity===20)return null

    setCartProduct((prev) => {
      return { ...prev, quantity: prev.quantity + 1 };
    });
  }, [cartProduct]);
  return (
    
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>Images</div>
      <div className="flex flex-col gap-1">
        <h2 className="text-3xl font-medium">{product.name}</h2>
        <div className="flex items-center gap-2">
          <Rating value={productRating} readOnly />
          <div>{product.reviews.length} reviews</div>
        </div>
        <Horizontal />
        <div className="text-justify">{product.description}</div>
        <Horizontal />
        <div>
          <span className="font-semibold">CATEGORY: </span>
          {product.category}
        </div>
        <div>
          <span className="font-semibold">BRAND: </span>
          {product.brand}
        </div>
        <div className={product.inStock ? "text-green-500" : "text-red-300"}>
          {product.inStock ? "In Stock" : "Out Of Stock"}
        </div>
        <Horizontal />
        <SetColor
          images={product.images}
          cartProduct={cartProduct}
          handleColorSelect={handleColorSelect}
        />
        <Horizontal />
        <SetQuantity
          cartProduct={cartProduct}
          cartCounter={false}
          handleQtyDecrease={handleQtyDecrease}
          handleQtyIncrease={handleQtyIncrease}
        />
        <Horizontal />
        <div>
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
