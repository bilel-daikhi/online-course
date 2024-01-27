package com.sbsa.courses.bootstrap;

import com.github.javafaker.Faker;
import com.sbsa.courses.entities.*;
import com.sbsa.courses.repositories.CategoryRepository;
import com.sbsa.courses.repositories.CourseRepository;
import com.sbsa.courses.repositories.RoleRepository;
import com.sbsa.courses.repositories.UserRepository;
import com.sbsa.courses.services.UserDetailsImpl;
import com.sbsa.courses.services.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

@Component
public class LoadInitialData implements CommandLineRunner {


    @Autowired
    private Faker faker;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private CourseRepository courseRepository;
    @Autowired
    PasswordEncoder encoder;
    @Override
    public void run(String... args) {

        initRoles();
        createUser();
 for (int i=1;i<100;i++){

     createCategory();
     createCourse();

 }
    }



    public void createUser(){


        User user = User.builder().lastname("Daikhi").firstname("Bilel")
                .username("bilel.daikhi").email("bilel.daikhi@gmail.com").password( encoder.encode("bilel.daikhi")).build();
        Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
        Set<Role> roles = new HashSet<>();
        roles.add(adminRole);
        user.setRoles(roles);
        userRepository.save(user);
    }


public void initRoles(){
    Role ROLE_USER=new Role(ERole.ROLE_USER);
    Role ROLE_MODERATOR=new Role(ERole.ROLE_MODERATOR);
    Role ROLE_ADMIN=new Role(ERole.ROLE_ADMIN);


    roleRepository.saveAll(Arrays.asList(ROLE_USER,ROLE_ADMIN,ROLE_MODERATOR));
}
    public void createCourse(){
        boolean isNew =faker.bool().bool();


        Course course= Course.builder().name(faker.educator().course())
                .image("https://picsum.photos/id/"+faker.random().nextInt(1,100)+"/200/300")
                .description(faker.lorem().paragraph(12))
                .price(Double.parseDouble(faker.commerce().price(10,100)))
                .date(faker.date().birthday())
                .isNew(isNew)
                .reduction(!isNew?faker.random().nextInt(10,30) :0 )
                .votes(faker.random().nextInt(100,300))
                .rating(Float.parseFloat(faker.commerce().price(1.5,5)))
                 .build();
        courseRepository.save(course);
    }

    public void createCategory(){
        Category category= Category.builder()
                .name(faker.educator().university())
                .build();
        categoryRepository.save(category);
    }
}
