package com.example.homecare.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.homecare.models.Bookings;
import com.example.homecare.service.AdminBookingsApiService;

@RestController
@RequestMapping("/bookings")

public class AdminBookingsApiController {

    @Autowired
    AdminBookingsApiService service;

    @GetMapping("/get")
    public List<Bookings> read() {
        return service.getBookings();
    }

    @GetMapping("/get/{name}")
    public List<Bookings> getBookingsByName(@PathVariable String name) {
        return service.getBookingsByName(name);
    }

    @PutMapping("/put/{name}")
    public boolean updateUser(@PathVariable String name, @RequestBody Bookings bookings) {
        if (service.updateUser(name, bookings)) {

            return true;
        } 
        else {
            return false;
        }
    }

}
