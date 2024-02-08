package com.example.homecare.service;

import java.util.Collections;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.homecare.dto.UserBookingsDto;
import com.example.homecare.models.Bookings;
import com.example.homecare.repository.BookingsRepo;

@Service

public class UserBookingsApiService {

    @Autowired
    private BookingsRepo bookingRepo;

    private UserBookingsDto convertEntityToDto(Bookings bookings) {

        UserBookingsDto bookingsDto = new UserBookingsDto();

        bookingsDto.setName(bookings.getName());
        bookingsDto.setAddress(bookings.getAddress());
        bookingsDto.setCareBeneficiary(bookings.getCareBeneficiary());
        bookingsDto.setDate(bookings.getDate());
        bookingsDto.setDescription(bookings.getDescription());
        bookingsDto.setDuration(bookings.getDuration());
        bookingsDto.setPhoneNumber(bookings.getPhoneNumber());
        bookingsDto.setServiceType(bookings.getServiceType());
        return bookingsDto;
    }

    //done by user
    public boolean addBooking(Bookings bookingsDto) {

        bookingRepo.save(bookingsDto);
            return true;

    }

    //visible in user side
    public List<UserBookingsDto> getBookingsByName(String name) {

        Bookings existingUser = bookingRepo.findUserByName(name);
        if (existingUser != null) {
            return Collections.singletonList(convertEntityToDto(existingUser));
        } 
        else {
            return Collections.emptyList();
        }
    }

    //update by user
    public boolean updateBookings(String name, UserBookingsDto bookings) {

        Bookings existingUser = bookingRepo.findUserByName(name);
        if (existingUser != null) {

            existingUser.setAddress(bookings.getAddress());
            existingUser.setCareBeneficiary(bookings.getCareBeneficiary());
            existingUser.setDate(bookings.getDate());
            existingUser.setDescription(bookings.getDescription());
            existingUser.setDuration(bookings.getDuration());
            existingUser.setPhoneNumber(bookings.getPhoneNumber());
            existingUser.setServiceType(bookings.getServiceType());

            bookingRepo.save(existingUser);
            return true;
        } 
        else {
            return false;
        }
    }

    //delete by user
    public boolean deleteBookingByName(String name) {
        Bookings existingBooking = bookingRepo.findUserByName(name);
        if (existingBooking != null) {
            bookingRepo.delete(existingBooking);
            return true;
        } 
        else {
            return false;
        }
    }

}
