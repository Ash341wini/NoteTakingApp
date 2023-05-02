package com.notemaking.RegisterLogin.Repo;


import com.notemaking.RegisterLogin.DTO.LoginDTO;
import com.notemaking.RegisterLogin.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Repository
@EnableJpaRepositories
public interface UsersRepo extends JpaRepository<User, Integer> {


//     User user = new User();
//    Optional<User> findOneUser(LoginDTO loginDTO);

//    static Optional<User> findOneByEmailAndPassword(String email, String password) {
//        user.setEmail(email);
//        user.setPassword(password);
//        return Optional.of(user);
//    }

//    Optional<User> findOneByEmailAndPassword(LoginDTO loginDTO);

    Optional<User> findOneByEmailAndPassword(String email, String password);
    Optional<User> findByEmail(String email);
}
