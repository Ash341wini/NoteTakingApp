package com.notemaking.RegisterLogin.Service.Impl;

import com.notemaking.RegisterLogin.DTO.LoginDTO;
import com.notemaking.RegisterLogin.DTO.UserDTO;
import com.notemaking.RegisterLogin.Entity.User;
import com.notemaking.RegisterLogin.Repo.UsersRepo;
import com.notemaking.RegisterLogin.Service.UserService;
import com.notemaking.RegisterLogin.response.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class UserIMPL implements UserService {
    @Autowired
    private UsersRepo userRepo;


    @Override
    public String addUser(UserDTO userDTO) {
        User user = new User(
                userDTO.getUsername(),
                userDTO.getEmail(),
//                this.passwordEncoder.encode(userDTO.getPassword())
                userDTO.getPassword()
        );
        userRepo.save(user);
        return user.getUsername();
    }

//    @Override
//    public LoginResponse loginUser(LoginDTO loginDTO) {
//        return null;
//    }

//    @Override
//    public Optional<User> login(LoginDTO loginDTO) {
//        String email = loginDTO.getEmail();
//        String password = loginDTO.getPassword();
//
//        return UsersRepo.findOneByEmailAndPassword(loginDTO.getEmail(), loginDTO.getPassword());
//    }


    @Override
    public LoginResponse loginUser(LoginDTO loginDTO) {
        String msg = "";
        boolean status = false;
        Optional<User> user1 = userRepo.findByEmail(loginDTO.getEmail());


        if (user1.isPresent()) {
            String password = loginDTO.getPassword();
            var user = userRepo.findByEmail(loginDTO.getEmail()).get();
//                String encodePassword = user1.get().getPassword();
//                Boolean isPwRight = passwordEncoder.matches(password,encodePassword);


//             if(password.equals(user.getPassword())){
//             // Optional<User> user = userRepo.findOneByEmailAndPassword(loginDTO.getEmail(),encodePassword);
//             if(user.isPresent()){
//             return new LoginResponse("Login success",true);
//             }else {
//             return new LoginResponse("Login Failed",false);
//             }
//             }else {
//             return new LoginResponse("Password not Match",false);
//             }
//             }else {
//             return new LoginResponse("Email Not Exist", false);
//             }
//
////             } catch (Exception e) {
////             return new LoginResponse("Email not exits", false);
////             }
//             }
//

            if (password.equals(user.getPassword())) {
                msg = "Login Successfully";
                status = true;
            } else {
                msg = "Login Failed";
                status = false;
            }

        }

        return new LoginResponse(msg, status);


    }
}

