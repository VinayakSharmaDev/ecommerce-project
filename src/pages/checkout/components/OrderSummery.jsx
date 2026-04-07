import dayjs from 'dayjs';

import { ProductDetails } from './ProductDetails';
import { DeliveryOptions } from './DeliveryOptions';

export function OrderSummery({ cart, deliveryOptions }) {
    return (
        <div className="order-summary">

            {deliveryOptions.length > 0 && cart.map(cartItem => {
                const selectedDeliveryOption = deliveryOptions
                    .find((deliveryOption) => {
                        return deliveryOption.id === cartItem.deliveryOptionId;
                    })

                return (
                    <div key={cartItem.productId} className="cart-item-container">
                        <div className="delivery-date">
                            Delivery date: {
                                dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                        </div>

                        <div className="cart-item-details-grid">
                           <ProductDetails cartItem={cartItem}/>

                            <DeliveryOptions deliveryOptions={deliveryOptions} cartItem={cartItem}/>

                        </div>
                    </div>
                );
            })}

        </div>
    );
};