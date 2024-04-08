package com.example.demo.service;

import com.example.demo.dto.UserDto;
import com.example.demo.entity.User;
import com.example.demo.repo.UserRepo;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
@Transactional
public class UserService {
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private ModelMapper modelMapper;
    public UserDto saveUser(UserDto userDto){
        User user = userRepo.save(modelMapper.map(userDto, User.class));
        UserDto userDto1 = new UserDto();
        userDto1.setId(user.getId());
        userDto1.setName(user.getName());
        userDto1.setAddress(user.getAddress());
        return userDto1;
    }

    public List<UserDto> getAllUsers(){
        List<User>userList = userRepo.findAll();
        return modelMapper.map(userList, new TypeToken<List<UserDto>>(){}.getType());
    }

    public UserDto getUserById(Integer id){
        Optional<User>user = userRepo.findById(id);
        return modelMapper.map(user, new TypeToken<UserDto>(){}.getType());
    }

    public UserDto updateUser(UserDto userDto){
        userRepo.save(modelMapper.map(userDto, User.class));
        return userDto;
    }

    public boolean deleteUser(Integer id){
        userRepo.deleteById(id);
        return true;
    }
}
