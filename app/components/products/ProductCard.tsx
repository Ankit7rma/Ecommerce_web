import formatePrice from "@/utils/formatePrice";
import { truncateText } from "@/utils/truncateText";
import Image from "next/image";

interface ProductCardProps{
    data:any
}

const ProductCard:React.FC<ProductCardProps> = ({data}) => {
    return ( 
        <div className="col-span-1
        cursor-pointer
        border-[1.2px]
        bg-slate-50
        rounded-md
        p-2
        transition
        hover:scale-105
        text-center
        text-sm
        ">
            <div className="flex flex-col items-center w-full gap-1">
                <div className="aspect-square overflow-hidden relative w-full" >
                    <Image src={data.images[0].image} fill alt="Product-Image"
                    className="object-contain w-full h-full" />
                </div>
                <div>{truncateText(data.name)}</div>
                <div></div>
                <div></div>
                <div>{formatePrice(data.price)}</div>
            </div>
        </div>
     );
}
 
export default ProductCard;
