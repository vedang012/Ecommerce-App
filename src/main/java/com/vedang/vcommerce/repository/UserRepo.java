package com.vedang.vcommerce.repository;

import com.vedang.vcommerce.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepo extends JpaRepository<User, Integer> {
    User findByEmail(String email);
}
