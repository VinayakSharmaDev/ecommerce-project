import axios from 'axios';
import dayjs from 'dayjs';
import { formatMoney } from '../../../utils/money.js'

export function DeliveryOptions({ deliveryOptions, cartItem, loadCart }) {

    return (
        <div className="delivery-options">
            <div className="delivery-options-title">
                Choose a delivery option:
            </div>

            {deliveryOptions.map(deliveryOption => {

                let price = "Free Shipping";
                if (deliveryOption.priceCents > 0) {
                    price = `${formatMoney(deliveryOption.priceCents)} - Shipping`;
                }

                const updateDelivery = async () => {
                    await axios.put(`/api/cart-items/${cartItem.productId}`, {
                        deliveryOptionId: deliveryOption.id
                    });
                    await loadCart();
                }

                return (
                    <div key={deliveryOption.id} className="delivery-option" onClick={updateDelivery}>
                        <input type="radio" onChange={() => { }}
                            checked={deliveryOption.id === cartItem.deliveryOptionId}
                            className="delivery-option-input"
                            name={`delivery-option-${cartItem.productId}`} />
                        <div>
                            <div className="delivery-option-date">
                                {dayjs(deliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM DD')}
                            </div>
                            <div className="delivery-option-price">
                                {price}
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    );
}; 