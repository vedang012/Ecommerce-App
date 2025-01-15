package com.vedang.vcommerce.service;

import com.vedang.vcommerce.model.Product;
import com.vedang.vcommerce.repository.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepo productRepo;

    public List<Product> getAllProducts() {
        return productRepo.findAll();
    }

    public Product getProductById(int id) {
        return productRepo.getReferenceById(id);
    }

    public void addProduct(Product product) {
        productRepo.save(product);
    }
}
