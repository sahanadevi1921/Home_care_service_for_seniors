package com.example.homecare.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.homecare.models.Services;
import com.example.homecare.service.ServicesApiService;

@RestController
@RequestMapping("/service")

public class ServicesApiController {
    
    @Autowired
    ServicesApiService service;

    @PostMapping("/add")
    public boolean create(@RequestBody Services book) {
        return service.addService(book);
    }

    @GetMapping("/get")
    public List<Services> read() {
        return service.getServices();
    }

    @PutMapping("/update/{serviceType}")
    public Services update(@RequestBody Services book) {
        return service.updateService(book);
    }

    @DeleteMapping("/delete/{serviceType}")
    public boolean delete(@PathVariable String serviceType) {
        return service.deleteServiceByServiceType(serviceType);
    }
}
