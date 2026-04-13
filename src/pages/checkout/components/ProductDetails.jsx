import axios from 'axios';
import { useState } from 'react';
import { formatMoney } from '../../../utils/money.js';

export function ProductDetails({ cartItem, loadCart }) {

    const [isUpdate, setIsUpdate] = useState(false);
    const [quantity, setQuantity] = useState(cartItem.quantity);


    const sendUpdate = async () => {
        await axios.put(`/api/cart-items/${cartItem.productId}`, {
            quantity: quantity
        });
        await loadCart();
        setIsUpdate(false);
    }

    async function update() {

        if (isUpdate == false) {
            setIsUpdate(true);
        }
        else {
            await sendUpdate();
        }
    };

    async function handlerUpdate(event) {
        if (event.key === "Enter") {
            await sendUpdate();
        }
    }


    const inputValue = (event) => {
        const value = Number(event.target.value);
        if (isNaN(value)) return;
        setQuantity(value);
    }

    const deleteProduct = async () => {
        await axios.delete(`/api/cart-items/${cartItem.productId}`);
        await loadCart();
    }

    return (
        <>
            <img className="product-image"
                src={cartItem.product.image} />

            <div className="cart-item-details">
                <div className="product-name">
                    {cartItem.product.name}
                </div>
                <div className="product-price">
                    {formatMoney(cartItem.product.priceCents)}
                </div>
                <div className="product-quantity">

                    <span>
                        Quantity:
                        <span className="quantity-label">
                            <input type="text" className="input" style={{ display: isUpdate ? 'inline-block' : 'none' }}
                                value={quantity} onChange={inputValue} onKeyDown={handlerUpdate} />
                            <span style={{ display: isUpdate ? 'none' : 'inline-block' }}>{cartItem.quantity}</span>
                        </span>
                    </span>
                    <span className="update-quantity-link link-primary" onClick={update}>
                        Update
                    </span>
                    <span className="delete-quantity-link link-primary" onClick={deleteProduct}>
                        Delete
                    </span>
                </div>
            </div>
        </>
    );
};

// Shared with OrderSummery