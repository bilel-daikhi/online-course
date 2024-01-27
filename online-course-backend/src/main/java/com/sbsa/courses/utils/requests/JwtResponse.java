package com.sbsa.courses.utils.requests;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
@Setter
@Getter
public class JwtResponse {

    private long id;
    private String jwt;
    private String username;
    private String email;
    private List<String> roles=new ArrayList<>();
    @Builder
    JwtResponse(String jwt,long id,String username,String email,List<String> roles){
        this.jwt=jwt;
        this.id=id;
        this.email=email;
        this.roles=roles;
        this.username=username;
    }
}
