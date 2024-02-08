package com.example.homecare.controller;

import org.springframework.web.bind.annotation.RestController;
import com.example.homecare.dto.UserBookingsDto;
import com.example.homecare.models.Bookings;
import com.example.homecare.service.UserBookingsApiService;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/bookdto")

public class UserBookingsApiController {

    @Autowired
    UserBookingsApiService bookingsDtoService;

    @PostMapping("/post")
    public boolean addBooking(@RequestBody Bookings bookingsDto) {
        if (bookingsDtoService.addBooking(bookingsDto)) {
            return true;
        } else {
            return false;
        }
    }

    @GetMapping("/get/{name}")
    public List<UserBookingsDto> getBookingsByName(@PathVariable String name) {
        return bookingsDtoService.getBookingsByName(name);
    }

    @PutMapping("/put/{name}")
    public boolean updateBookings(@PathVariable String name, @RequestBody UserBookingsDto bookings) {
        if (bookingsDtoService.updateBookings(name, bookings)) {
            return true;
        } else {
            return false;
        }
    }

    @DeleteMapping("/delete/{name}")
    public boolean deleteBookingByName(@PathVariable String name) {
        if (bookingsDtoService.deleteBookingByName(name)) {
            return true;
        } else {
            return false;
        }
    }
}
