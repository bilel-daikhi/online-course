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
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.*;

@Component
public class LoadInitialData implements CommandLineRunner {

    public static final String PROJECTS_URL = "https://bilel-daikhi-portfolio-default-rtdb.europe-west1.firebasedatabase.app/projects.json";
    @Autowired
    private RestTemplate restTemplate;
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
    public void run(String... args) throws URISyntaxException {


        initRoles();
        createUser();
      ResponseEntity<ProjectsResponse[]> projectsList=  restTemplate.getForEntity(new URI(PROJECTS_URL),ProjectsResponse[].class);
        List<ProjectsResponse> projects=new ArrayList<>();
        if(projectsList.getStatusCode()== HttpStatus.OK)
       projects=Arrays.asList(projectsList.getBody());

        projects.forEach(projectsResponse -> {
            boolean isNew =faker.bool().bool();
            createCourse(Course.builder().name(projectsResponse.getName())
                    .image(getLandingImage(projectsResponse.getImages()).getUrl())
                    .description(projectsResponse.getDescription_en())
                    .price(Double.parseDouble(faker.commerce().price(10,100)))
                    .date(faker.date().birthday())
                    .isNew(isNew)
                    .reduction(!isNew?faker.random().nextInt(10,30) :0 )
                    .votes(faker.random().nextInt(100,300))
                    .rating(Float.parseFloat(faker.commerce().price(2.5,5)))
                    .build());
        });



//         for (int i=1;i<100;i++){
//        boolean isNew =faker.bool().bool();
//     createCategory();
//     createCourse(Course.builder().name(faker.educator().course())
//             .image("https://picsum.photos/id/"+faker.random().nextInt(1,100)+"/200/300")
//             .description(faker.lorem().paragraph(12))
//             .price(Double.parseDouble(faker.commerce().price(10,100)))
//             .date(faker.date().birthday())
//             .isNew(isNew)
//             .reduction(!isNew?faker.random().nextInt(10,30) :0 )
//             .votes(faker.random().nextInt(100,300))
//             .rating(Float.parseFloat(faker.commerce().price(1.5,5)))
//             .build());
//
//
//
//
// }
    }

    private ProjectImagesResponse getLandingImage(List<ProjectImagesResponse> images) {
        ProjectImagesResponse defaultImage = new ProjectImagesResponse();
        defaultImage.setUrl("https://demofree.sirv.com/nope-not-here.jpg");
        if(images!=null)
        for (ProjectImagesResponse image:images
             ) {
            if(image!= null&&image.getLanding()==1)
                return image;

        }
        return defaultImage;
       // return images.stream().filter(image -> image.getLanding()==1).findFirst().orElse(defaultImage);
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
    public void createCourse(Course course){

        courseRepository.save(course);
    }

    public void createCategory(){
        Category category= Category.builder()
                .name(faker.educator().university())
                .build();
        categoryRepository.save(category);
    }
}
