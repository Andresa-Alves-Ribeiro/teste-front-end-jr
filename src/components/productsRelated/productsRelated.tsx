import "./productsRelated.scss";

interface ProductsRelatedProps {
    text: string;
}

export function ProductsRelated({ text }: ProductsRelatedProps) {
    return (
        <>
            <div className="products">
                <div className="title">
                    <div className="lineVetical"></div>
                    <h2>Produtos Relacionados</h2>
                    <div className="lineVetical"></div>
                </div>
                <p className="showAllProducts">{text}</p>
            </div>
        </>
    );
}
