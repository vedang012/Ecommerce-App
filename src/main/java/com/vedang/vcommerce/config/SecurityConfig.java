package com.vedang.vcommerce.config;

import com.vedang.vcommerce.service.CustomOAuth2UserService;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.ResponseEntity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.client.OAuth2AuthorizationSuccessHandler;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import java.io.IOException;
import java.util.Map;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Autowired
    CustomOAuth2UserService oAuth2UserService;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http.cors().configure(http);

        http
                .csrf(customizer -> customizer.disable())
                .authorizeHttpRequests(req -> req
                        .requestMatchers("/**").permitAll()
                        .anyRequest()
                        .authenticated())
                .formLogin(login -> login.disable())
                .oauth2Login(login -> login

                        .successHandler(new AuthenticationSuccessHandler() {
                            @Override
                            public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
                                System.out.println("success lesgcoooo");
                                response.addCookie(new Cookie("accesstoken", oAuth2UserService.getToken()));
                                response.sendRedirect("http://localhost:5173/?token="+oAuth2UserService.getToken());
                            }
                        })
                        .userInfoEndpoint(customizer -> customizer
                                .userService(oAuth2UserService)));


        return http.build();




    }

    @Bean
    public OAuth2AuthorizationSuccessHandler oAuth2LoginSuccessHandler() {
        return new OAuth2AuthorizationSuccessHandler() {
            @Override
            public void onAuthorizationSuccess(OAuth2AuthorizedClient authorizedClient, Authentication principal, Map<String, Object> attributes) {
                System.out.println("Successsss lessgooo");
                System.out.println(authorizedClient.getAccessToken());
                System.out.println(attributes);
                System.out.println(principal.getPrincipal());
            }
        };
    }

}
