package com.vedang.vcommerce.service;

import com.vedang.vcommerce.model.CartItem;
import com.vedang.vcommerce.repository.CartItemRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartItemService {

    @Autowired
    private CartItemRepo cartItemRepo;


    public void saveCartItem(CartItem cartItem) {
        cartItemRepo.save(cartItem);
    }
}
