package com.example.homecare.models;

import java.time.LocalDate;
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

public class Bookings {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "bookingId", nullable = false)
    private int bookingId;

    @Column(name = "name", nullable = false,unique = true)
    private String name;

    @Column(name = "phoneNumber", nullable = false)
    private int phoneNumber;

    @Column(name = "serviceType", nullable = false)
    private String serviceType;
    
    @Column(name = "description", nullable = true)
    private String description;
    
    @Column(name = "date", nullable = false)
    private LocalDate date;
    
    @Column(name = "duration", nullable = false)
    private String duration;
    
    @Column(name = "careBeneficiary", nullable = true)
    private String careBeneficiary;
    
    @Column(name = "address", nullable = false)
    private String address;

    @Column(name = "status",columnDefinition = "varchar(255) default 'pending'")
    private String status;

    public Bookings(int bookingId, String name, int phoneNumber, String serviceType, String description, LocalDate date,
            String duration, String careBeneficiary, String address, String status) {
        this.bookingId = bookingId;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.serviceType = serviceType;
        this.description = description;
        this.date = date;
        this.duration = duration;
        this.careBeneficiary = careBeneficiary;
        this.address = address;
        this.status = status;
    }
    
}
