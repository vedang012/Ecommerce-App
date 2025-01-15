package com.vedang.vcommerce.controller;

import com.vedang.vcommerce.model.Product;
import com.vedang.vcommerce.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/products")
    public List<Product> getAllProducts(){
        return productService.getAllProducts();
    }

    @GetMapping("/products/{id}")
    public Product getProduct(@PathVariable int id){
        return productService.getProductById(id);
    }

    @PostMapping("/new-product")
    public void addProduct(@RequestBody Product product){
        productService.addProduct(product);
    }



}
