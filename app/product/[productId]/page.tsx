
interface Iparams{
    productId:string
}
const ProductPage = ({params}:{params:Iparams}) => {
    console.log("params",params)
    return (
        <div>
            ProductPage
        </div>
     );
}
 
export default ProductPage;