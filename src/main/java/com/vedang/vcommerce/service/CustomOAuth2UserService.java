package com.vedang.vcommerce.service;

import com.vedang.vcommerce.model.Cart;
import com.vedang.vcommerce.model.User;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;


@Service
public class CustomOAuth2UserService extends DefaultOAuth2UserService {

    @Autowired
    private UserService userService;

    @Autowired
    private CartService cartService;

    private String token = "";


    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2User user =  super.loadUser(userRequest);

        if (!userService.checkIfUserExists(user.getAttribute("email"))) {
            userService.saveUser(new User(user.getAttribute("name"), user.getAttribute("email")));
        }

        System.out.println("tokatoka"+userRequest.getAccessToken());
        token = userRequest.getAccessToken().getTokenValue();

        System.out.println(userRequest.getAccessToken().getTokenValue());
        System.out.println(user.getAttributes());
        return user;
    }

    public String getToken() {
        return token;
    }
}
