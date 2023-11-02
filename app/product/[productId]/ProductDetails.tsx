"use Client";

import { Rating } from "@mui/material";

interface ProductDetailsProps {
  product: any;
}
const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
    const Horizontal = ()=>{
        return <hr className="w-[30%] my-2"/>
    }
  const productRating =
    product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    product.reviews.length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>Images</div>
      <div className="flex flex-col gap-1">
        <h2 className="text-3xl font-medium">{product.name}</h2>
        <div className="flex items-center gap-2">
          <Rating value={productRating} readOnly/>
          <div>{product.reviews.length} reviews</div>
        </div>
        <Horizontal/>
        <div className="text-justify">{product.description}</div>
        <Horizontal/>
        <div>
            <span className="font-semibold">CATEGORY: </span>{product.category}
        </div>
        <div>
            <span className="font-semibold" >BRAND: </span>{product.brand}
        </div>
        <div className={product.inStock?"text-green-500":"text-red-300"}>{product.inStock?"In Stock":"Out Of Stock" }</div>
      </div>
    </div>
  );
};

export default ProductDetails;
