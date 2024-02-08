package com.example.homecare.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity

public class AdminLogin {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int adminId;
   
    @Column(unique = true,name = "email", nullable = false)
    private String email;
   
    @Column(name = "password", nullable = false)
    private String password;

    public AdminLogin(int adminId, String email, String password) {
        this.adminId = adminId;
        this.email = email;
        this.password = password;
    }

}
