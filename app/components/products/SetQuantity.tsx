'use client'

import { CartProductType } from "@/app/product/[productId]/ProductDetails";

interface SetQtyProps{
    cartCounter?:boolean;
    cartProduct:CartProductType;
    handleQtyIncrease:()=>void; 
    handleQtyDecrease:()=>void; 
}
const btnStyles=`
    border-[1.2px]
    border-slate-300
    px-2 rounded
`
const SetQuantity:React.FC<SetQtyProps> = ({
    cartCounter,cartProduct,handleQtyDecrease,handleQtyIncrease
}) => {
    const quantity = cartProduct.quantity;
    return ( <div className="flex gap-8 items-center">
        {cartCounter?null: <div className="font-semibold"> QUANTITY : </div>
            }
            <div className="flex gap-4 items-center">
                <button className={btnStyles} onClick={handleQtyDecrease}>-</button>
                <div>{`${quantity}`}</div>
                <button className={btnStyles} onClick={handleQtyIncrease}>+</button>
            </div>
    </div> );
}
 
export default SetQuantity;