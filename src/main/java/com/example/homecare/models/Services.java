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

public class Services {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "serviceId", nullable = false)
    private int serviceId;
    
    @Column(name = "serviceType", nullable = false,unique=true)
    private String serviceType;
    
    @Column(name = "serviceDescription", nullable = false)
    private String serviceDescription;
    
    @Column(name = "charge", nullable = false)
    private double charge;
    
    @Column(name = "duration", nullable = false)
    private String duration;

    @Column(name = "available", nullable = false)
    private boolean available;

    @Column(name = "image", nullable = false)
    private String image;
    public Services(int serviceId, String serviceType, String serviceDescription,
            double charge, String duration,boolean available,String image) {
        this.serviceId = serviceId;
        this.serviceType = serviceType;
        this.serviceDescription = serviceDescription;
        this.charge = charge;
        this.duration = duration;
        this.available=available;
        this.image=image;
    }

}
