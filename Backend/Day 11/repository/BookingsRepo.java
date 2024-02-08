package com.example.homecare.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.homecare.models.Bookings;

@Repository

public interface BookingsRepo extends JpaRepository<Bookings, Integer> {

    public List<Bookings> findBookingsByName(String name);

    public Bookings findByName(String name);

    public Bookings findUserByName(String name);

}