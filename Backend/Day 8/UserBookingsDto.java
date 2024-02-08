package com.example.homecare.dto;

import java.time.LocalDate;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class UserBookingsDto {

    private String name;
    private int phoneNumber;
    private String serviceType;
    private String description;
    private LocalDate date;
    private String duration;
    private String careBeneficiary;
    private String address;
    
}
