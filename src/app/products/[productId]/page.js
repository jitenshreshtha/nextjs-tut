function Eachproduct({ params }) {
    const { productId } = params;
    return (
        <h3>This is individual product with product Id as {productId}</h3>
    )
}

export default Eachproduct;