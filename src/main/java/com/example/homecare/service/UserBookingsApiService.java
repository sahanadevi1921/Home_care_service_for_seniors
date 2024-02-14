// package com.example.homecare.service;

// import java.util.List;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;
// import com.example.homecare.dto.UserBookingsDto;
// import com.example.homecare.models.Bookings;
// import com.example.homecare.repository.BookingsRepo;

// @Service

// public class UserBookingsApiService {

//     @Autowired
//     private BookingsRepo bookingRepo;

//     //done by user
//     public boolean addBooking(UserBookingsDto bookingsDto) {
//         Bookings booking=new Bookings();
//         booking.setName(bookingsDto.getName());
//         booking.setPhoneNumber(bookingsDto.getPhoneNumber());
//         booking.setDate(bookingsDto.getDate());
//         booking.setServiceType(bookingsDto.getServiceType());
//         booking.setCareBeneficiary(bookingsDto.getCareBeneficiary());
//         booking.setAddress(bookingsDto.getAddress());
//         booking.setDuration(bookingsDto.getDuration());
//         booking.setDescription(bookingsDto.getDescription());
//         bookingRepo.save(booking);
//             return true;

//     }

//     //visible in user side
//     public List<Bookings> getBookingsByName(String name)
// 	{
// 		return bookingRepo.findBookingsByName(name);
//     }

//     //update by user
//     public boolean updateBookings(String name, UserBookingsDto bookings) {

//         Bookings existingUser = bookingRepo.findUserByName(name);
//         if (existingUser != null) {

//             existingUser.setAddress(bookings.getAddress());
//             existingUser.setCareBeneficiary(bookings.getCareBeneficiary());
//             existingUser.setDate(bookings.getDate());
//             existingUser.setDescription(bookings.getDescription());
//             existingUser.setDuration(bookings.getDuration());
//             existingUser.setPhoneNumber(bookings.getPhoneNumber());
//             existingUser.setServiceType(bookings.getServiceType());

//             bookingRepo.save(existingUser);
//             return true;
//         } 
//         else {
//             return false;
//         }
//     }

//     //delete by user
//     public boolean deleteBookingByName(String name) {
//         Bookings existingBooking = bookingRepo.findUserByName(name);
//         if (existingBooking != null) {
//             bookingRepo.delete(existingBooking);
//             return true;
//         } 
//         else {
//             return false;
//         }
//     }

// }
package com.example.homecare.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.homecare.dto.UserBookingsDto;
import com.example.homecare.models.Bookings;
import com.example.homecare.models.Services;
import com.example.homecare.models.Users;
import com.example.homecare.repository.BookingsRepo;
import com.example.homecare.repository.ServicesRepo;
import com.example.homecare.repository.UsersRepository;

@Service

public class UserBookingsApiService {

    @Autowired
    private BookingsRepo bookingRepo;

    @Autowired
    private UsersRepository userRepo;

    @Autowired
    private ServicesRepo servicesRepo;

    // done by user
    //@SuppressWarnings("null")
    public String addBooking(UserBookingsDto bookingsDto) {
        Bookings booking = new Bookings();
        booking.setName(bookingsDto.getName());
        booking.setPhoneNumber(bookingsDto.getPhoneNumber());
        booking.setDate(bookingsDto.getDate());
        booking.setServiceType(bookingsDto.getServiceType());
        booking.setCareBeneficiary(bookingsDto.getCareBeneficiary());
        booking.setAddress(bookingsDto.getAddress());
        booking.setDuration(bookingsDto.getDuration());
        booking.setDescription(bookingsDto.getDescription());
        Users existingUser = userRepo.findByName(bookingsDto.getName());
        Services serviceAvailable = servicesRepo.isServiceAvailable(bookingsDto.getServiceType(),true);
        
        if (existingUser == null) {
            return "Provide the registered Username";
        } 
        else if (serviceAvailable == null) {
            return "Oops!! Service Unavailable";
        } 
        else {
            bookingRepo.save(booking);
            return "Booking Confirmed";
        }

    }

    // visible in user side
    public List<Bookings> getBookingsByName(String name) {
        return bookingRepo.findBookingsByName(name);
    }

    // update by user
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
        } else {
            return false;
        }
    }

    // delete by user
    public boolean deleteBookingByName(String name) {
        Bookings existingBooking = bookingRepo.findUserByName(name);
        if (existingBooking != null) {
            bookingRepo.delete(existingBooking);
            return true;
        } else {
            return false;
        }
    }

}