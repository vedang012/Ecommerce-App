package com.vedang.vcommerce.service;

import com.vedang.vcommerce.model.Cart;
import com.vedang.vcommerce.model.CartItem;
import com.vedang.vcommerce.model.Product;
import com.vedang.vcommerce.repository.CartItemRepo;
import com.vedang.vcommerce.repository.CartRepo;
import com.vedang.vcommerce.repository.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {

    @Autowired
    private CartRepo cartRepo;

    @Autowired
    private CartItemRepo cartItemRepo;

    @Autowired
    private ProductRepo productRepo;

    public Cart addItemsToCart(int cartId, int productId, int quantity) {

        Cart cart = cartRepo.findById(cartId).orElseThrow(() -> new RuntimeException("Cart Not Found"));
        Product product = productRepo.findById(productId).orElseThrow(() -> new RuntimeException("Product Not Found"));

        CartItem cartItem = new CartItem();
        cartItem.setCart(cart);
        cartItem.setProduct(product);
        cartItem.setQuantity(quantity);
        cartItem.setPrice(product.getPrice() * quantity);

        cart.getItems().add(cartItem);
        cartRepo.save(cart);

        updateTotalAmount(cart);

        return cart;

    }

    private void updateTotalAmount(Cart cart) {
        Double totalAmount = cart.getItems().stream()
                .mapToDouble(item -> item.getPrice())
                .sum();
        cart.setTotalAmount(totalAmount);
        cartRepo.save(cart);
    }


    public Cart getCart(int cartId) {
        return cartRepo.findById(cartId).get();
    }
}
