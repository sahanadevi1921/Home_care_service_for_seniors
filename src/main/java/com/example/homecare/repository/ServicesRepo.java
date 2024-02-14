package com.example.homecare.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.example.homecare.models.Services;

@Repository

public interface ServicesRepo extends JpaRepository<Services, Integer> {

    void deleteServiceByServiceType(String serviceType);

    @Query("SELECT s FROM Services s WHERE s.serviceType = :serviceType AND s.available = :available")
    Services isServiceAvailable(String serviceType,boolean available);

    Services findServiceByServiceType(String serviceType);

}