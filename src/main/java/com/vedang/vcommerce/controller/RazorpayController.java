package com.vedang.vcommerce.controller;

import com.vedang.vcommerce.service.RazorpayService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class RazorpayController {

    @Autowired
    RazorpayService service;

    @GetMapping("/razorpay")
    public Object start() {
        return service.initializeRazorpay();
    }

    @PostMapping
    public void verify(@RequestBody Map<String, String> data) {
        service.verify(data);
    }
}
