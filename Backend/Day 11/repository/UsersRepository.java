package com.example.homecare.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.homecare.models.Users;

public interface UsersRepository extends JpaRepository<Users, String> {
    Optional<Users> findByEmail(String email);

	Users findByName(String userName);
}
