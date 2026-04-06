import { formatMoney } from '../../utils/money.js'
import dayjs from 'dayjs';

export function DeliveryOptions({ deliveryOptions, cartItem }) {
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

                return (
                         <div key={deliveryOption.id} className="delivery-option">
                        <input type="radio"
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