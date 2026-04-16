import axios from 'axios';
import { it, expect, describe, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Product from './Product';

vi.mock('axios');

const product = {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "images/products/athletic-cotton-socks-6-pairs.jpg",
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    rating: {
        stars: 4.5,
        count: 87
    },
    priceCents: 1090,
    keywords: ["socks", "sports", "apparel"]
};

vi.mock('axios');
const loadCart = vi.fn();

describe('Product Component', () => {
    it('display the product details correctly', () => {
        render(<Product product={product} loadCart={loadCart} />);

        expect(
            screen.getByTestId('product-image')
        ).toHaveAttribute('src', 'images/products/athletic-cotton-socks-6-pairs.jpg');

        expect(
            screen.getByText('Black and Gray Athletic Cotton Socks - 6 Pairs')
        ).toBeInTheDocument();

        expect(
            screen.getByTestId('product-rating')
        ).toHaveAttribute('src', 'images/ratings/rating-45.png');

        expect(
            screen.getByText('87')
        ).toBeInTheDocument();

        expect(
            screen.getByText('$10.90')
        ).toBeInTheDocument();


    });

    it('check if it is interactive', async () => {
        render(<Product product={product} loadCart={loadCart} />);

        const user = userEvent.setup();
        const addToCartBtn = screen.getByTestId('add-to-cart');
        await user.click(addToCartBtn);

        expect(axios.post).toHaveBeenCalledWith(
            '/api/cart-items',
            {
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 1
            }
        )
        expect(loadCart).toHaveBeenCalled();
    })
});
