package com.example.homecare.service;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.homecare.dto.UserDto;
import com.example.homecare.models.Users;
import com.example.homecare.repository.UsersRepository;

@Service
public class UserApiService {
	
	@Autowired
	UsersRepository repo;
	
	private UserDto convertEntityToDto(Users users)
	{
		UserDto udto=new UserDto();
		udto.setEmail(users.getEmail());
		udto.setMobileNumber(users.getMobileNumber());
		udto.setName(users.getName());
		return udto;
	}
	
	public List<UserDto> getAllUsers()
	{
		return repo.findAll()
				.stream()
				.map(this::convertEntityToDto)
				.collect(Collectors.toList());
	}
	
	public List<UserDto> getUserByUserName(String name){
        Users existingUser=repo.findByName(name);
        if(existingUser!=null){
            return Collections.singletonList(convertEntityToDto(existingUser));
        }
        else{
            return Collections.emptyList();
        }
    }

    public boolean updateUser(String name, Users userReg) {
        Users existingUser = repo.findByName(name);
        if (existingUser != null) {
            existingUser.setEmail(userReg.getEmail());
            existingUser.setMobileNumber(userReg.getMobileNumber());
            repo.save(existingUser);
            return true;
        } 
        else {
            return false;
        }
    }
}
