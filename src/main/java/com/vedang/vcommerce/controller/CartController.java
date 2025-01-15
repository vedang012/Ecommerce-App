package com.vedang.vcommerce.controller;

import com.vedang.vcommerce.model.Cart;
import com.vedang.vcommerce.model.CartItem;
import com.vedang.vcommerce.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CartController {

    @Autowired
    private CartService cartService;
    
    @PostMapping("/{cartId}/items")
    public Cart addItemToCart(@PathVariable int cartId,
                              @RequestParam int productId,
                              @RequestParam int quantity) {
        return cartService.addItemsToCart(cartId, productId, quantity);
    }

    @GetMapping("/{cartId}/getAll")
    public List<CartItem> getCart(@PathVariable int cartId) {
        return cartService.getCart(cartId).getItems();
    }
    
}
