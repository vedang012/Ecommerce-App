package com.vedang.vcommerce.service;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import com.razorpay.Utils;
import org.json.JSONObject;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class RazorpayService {

    private String razorpaySignature;
    private String orderId;
    private String something;

    public Object initializeRazorpay() {
        try {
            RazorpayClient razorpayClient = new RazorpayClient("rzp_test_hJvLmQRulUZ6Wb", "1m4RoZ5hb8LZUKARekrvvw9f");

            JSONObject orderRequest = new JSONObject();
            orderRequest.put("amount", 1000); // Amount in paise (e.g., ₹500.00)
            orderRequest.put("currency", "INR");
            orderRequest.put("receipt", "orderreceiptid");

            Order order = razorpayClient.orders.create(orderRequest);

//            razorpaySignature = Utils.generateOnboardingSignature("","");
            return order.get("id");


        } catch (RazorpayException e) {
            System.out.println(e.getMessage());
            throw new RuntimeException(e);
        }
    }


    public void verify(Map<String, String> data) {
        String razorpayOrderId = data.get("razorpay_order_id");
        String razorpayPaymentId = data.get("razorpay_payment_id");
        String razorpaySignature = data.get("razorpay_signature");
    }
}
