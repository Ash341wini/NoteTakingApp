package com.notemaking.RegisterLogin.Entity;


import jakarta.persistence.*;



@Entity
@Table(name = "_user")
public class User {
    @Id
//    @Column(name = "userid", length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int userid;

//    @Column(name = "username", length = 255)
@Column( nullable = false)
    private String username;

//    @Column(name = "emailid", length = 255)
    @Column(unique = true, nullable = false)
    private String email;
//    @Column(name = "userpassword", length = 255)
@Column(nullable = false)
    private String password;

    public User(int userid, String username, String email, String password) {
        this.userid = userid;
        this.username = username;
        this.email = email;
        this.password = password;
    }

    public User(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    public User() {
    }

    public int getUserid() {
        return userid;
    }

    public void setUserid(int userid) {
        this.userid = userid;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "User{" +
                "userid=" + userid +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                '}';
    }


}
