package com.example.homecare.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.homecare.models.Services;

@Repository

public interface ServicesRepo extends JpaRepository<Services, Integer> {

    void deleteByServiceType(String serviceType);

}