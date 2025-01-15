package com.vedang.vcommerce.service;

import com.vedang.vcommerce.model.User;
import com.vedang.vcommerce.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {


    @Autowired
    private UserRepo userRepo;

    public UserService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    public boolean checkIfUserExists(String email) {
        return userRepo.findByEmail(email) != null;
    }

    public void saveUser(User user) {
        userRepo.save(user);
    }

    public User getUserByEmail(String email) {
        return userRepo.findByEmail(email);
    }
}
