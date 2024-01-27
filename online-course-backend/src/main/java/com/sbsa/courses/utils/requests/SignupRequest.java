package com.sbsa.courses.utils.requests;

import com.sbsa.courses.entities.Role;
import lombok.Getter;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
public class SignupRequest {
    private String firstname;
    private String lastname;
    private String email;
    private String username;
    private String password;
    private Set<String> role = new HashSet<>();

}
