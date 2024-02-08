package com.example.homecare.service;

import com.example.homecare.dto.request.LoginRequest;
import com.example.homecare.dto.request.RegisterRequest;
import com.example.homecare.dto.response.LoginResponse;
import com.example.homecare.dto.response.RegisterResponse;

public interface AuthenticationService {
    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);
}
