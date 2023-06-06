import React from 'react'
import "@Assets/css/productDetailsShow.css";
import { dataProduct } from '../api/datadraw';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaTruck } from 'react-icons/fa';
function ProductDetailsShow() {
    const [product, setProduct] = useState();
    const [varindex, setVarindex] = useState(0);
    const [variantSelected, setVariantSelected] = useState(false);
    const { id } = useParams();
    const handleChangeVarIndex = (index, item) => {
        setVarindex(index)
        setVariantSelected(item)
    }
    useEffect(() => {
        console.log('variant:', variantSelected);
    }, [variantSelected])
    const findProduct = (id) => {
        const res = dataProduct.products.filter(i => i.id == id)
        console.log('res', res);
        if (res.length > 0) {
            setProduct(res[[0]])
        }
    }
    useEffect(() => {
        console.log('id', id);
        findProduct(id)
    }, [id]);
    return (
        <div className='container'>
            <div className="contain-pic">
                <div className='imgs'>
                    {!product ?
                        <h2>Not found product!</h2>
                        :
                        <img src={product.variants[varindex].url}></img>
                    }
                </div>
                <div className="smav">
                    {product?.variants.map((item, index) => (
                        <div className={`smav-item ${item.id === variantSelected.id ? "active" : ""}`} >
                            <img checked={item.id === variantSelected.id} onClick={() => handleChangeVarIndex(index, item)} src={item.urlSmall} alt="" />
                        </div>
                    ))}
                </div>
            </div>
            <div className="title-info">
                <FaTruck className='icon' />
                <div className='title'> Miễn phí vận chuyển toàn quốc</div>
                <div className='info'>
                    <div className='choice2'>Lựa chọn màu và xem địa chỉ còn hàng</div>
                    <div className='input'>
                        {product?.variants.map((item, index) => (
                            <div className={`select-label2 ${item.id === variantSelected.id ? "active" : ""}`}>
                                <input checked={item.id === variantSelected.id} onClick={() => handleChangeVarIndex(index, item)} type='radio' name='c'></input>
                                {item.name}
                                <p>{item.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='Btn'>
                    <button className='btn-1'>Mua Ngay</button>
                    <button className='btn-2'>Them Gio Hang</button>
                </div>
                <div className='price'>
                    {!product ?
                        <h2>Not found product!</h2>
                        :
                        <p>{product?.price}</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductDetailsShow
