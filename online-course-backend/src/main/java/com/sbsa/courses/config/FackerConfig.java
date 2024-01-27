package com.sbsa.courses.config;

import com.github.javafaker.Faker;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

@Component
public class FackerConfig {


    @Bean
    public Faker faker(){
        return new Faker();
    }
}
