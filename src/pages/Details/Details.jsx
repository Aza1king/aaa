import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import './detail.css'

const Details = ({addCart}) => {
    const params = useParams();
    const [productData, setProductData] = useState({});
    const navigate = useNavigate();

    useEffect(()=>{
        axios(`https://fakestoreapi.com/products/${params.id}`)
        .then(({data})=> setProductData(data));
    }, [])
    return (
        <section className="detail">
           <div className="container">
                <div className="row">
                    <div className="col-6">
                             <img className="detail-img" src={productData.image}alt=""/>
                    </div>
               
                    <div className="col-6">
                         <h2 className="detail-title">{productData.title}</h2>
                    <p className="ddetail-text">{productData.description}</p>
                    <br />
                    <p>category:{productData.category}</p>
                    <p>price:${productData.price}</p>
                    <br />
                    <button onClick={()=>{
                        addCart(productData)
                    }} className="detail-btn">Купить</button>
                    <button onClick={()=>{
                        navigate(-1)
                    }} className="detail-btn">Назад</button>

                    </div>
                   
                </div>
           </div>
        </section>
    );
}

export default Details;
