package com.notemaking.RegisterLogin.Service;

import com.notemaking.RegisterLogin.DTO.LoginDTO;
import com.notemaking.RegisterLogin.DTO.UserDTO;
import com.notemaking.RegisterLogin.Entity.User;
import com.notemaking.RegisterLogin.response.LoginResponse;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Optional;

public interface UserService {


     String addUser(UserDTO userDTO);

     LoginResponse loginUser(LoginDTO loginDTO);




//    Optional<User> login(LoginDTO loginDTO);

}
