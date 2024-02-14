package com.example.homecare.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.homecare.models.Services;
import com.example.homecare.repository.ServicesRepo;

@Service

public class ServicesApiService {
    
    @Autowired
    ServicesRepo repository;

    public boolean addService(Services services) {
        repository.save(services);
        return true;
    }

    public List<Services> getServices() {
        return repository.findAll();
    }

    public boolean updateBookings(String serviceType, Services service) {

        Services existingService = repository.findServiceByServiceType(serviceType);
        if(existingService!=null)
        {
            existingService.setServiceType(service.getServiceType());
            existingService.setServiceDescription(service.getServiceDescription());
            existingService.setCharge(service.getCharge());
            existingService.setDuration(service.getDuration());
            existingService.setAvailable(service.isAvailable());
            existingService.setImage(service.getImage());
            repository.save(existingService);
            return true;
        }
        else{
            return false;
        }

    }

    public boolean deleteServiceByServiceType(String serviceType) {
        Services existingService = repository.findServiceByServiceType(serviceType);
        if (existingService != null) {
            repository.delete(existingService);
            return true;
        } 
        else {
            return false;
        }
    }
}
