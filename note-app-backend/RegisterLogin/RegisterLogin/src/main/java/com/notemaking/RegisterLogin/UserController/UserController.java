package com.notemaking.RegisterLogin.UserController;

import com.notemaking.RegisterLogin.DTO.LoginDTO;
import com.notemaking.RegisterLogin.DTO.UserDTO;
import com.notemaking.RegisterLogin.Entity.User;
import com.notemaking.RegisterLogin.Service.UserService;
import com.notemaking.RegisterLogin.response.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.Random;
import java.util.UUID;

@RestController
@CrossOrigin
@Controller
@RequestMapping("api/v1/user")



public class UserController {

    @Autowired
    private UserService userService;

    Random random = new Random(1000);

    @PostMapping(path = "/save")
    public String SaveUSer(@RequestBody UserDTO userDTO) {
        String id = userService.addUser(userDTO);
        return id;
    }
    @PostMapping(path = "/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginDTO loginDTO){
        LoginResponse loginResponse = userService.loginUser(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }


//    @RequestMapping("/forgot")
//    public String openEmailForm(){
//        return "forgot email form";
//    }
    @PostMapping("/send-otp")
    public String sendOTP(@RequestParam("email") String email){
        System.out.println("Email" +email);


        int otp = random.nextInt(999999);
        System.out.println("OTP" +otp);
        return "verify_otp";
    }


//    @PostMapping("/reset-password")
//    public ResponseEntity<?> resetPassword(@RequestBody LoginDTO loginDTO) {
//        User user = userService.findByEmail(loginDTO.getEmail());
//        if (user == null) {
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User with this email does not exist.");
//        }
//
//        String token = UUID.randomUUID().toString();
//        userService.createPasswordResetTokenForUser(user, token);
//
//        String resetUrl = loginDTO.getUrl() + "?token=" + token;
//        // Send resetUrl to user's email
//
//        return ResponseEntity.ok("Reset password link sent to your email.");
//    }

//    @PostMapping("/save-password")
//    public ResponseEntity<?> savePassword(@RequestBody LoginDTO loginDTO) {
//        PasswordResetToken token = userService.loginDTO(loginDTO.getToken());
//        if (token == null) {
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid reset token.");
//        }
//
//        User user = token.getUser();
//        userService.changeUserPassword(user, savePasswordRequest.getNewPassword());
//
//        token.setUsed(true);
//        userService.savePasswordResetToken(token);
//
//        return ResponseEntity.ok("Password reset successfully.");
//    }


}
