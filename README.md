# SBSA Online Courses

This React and Spring Boot web application combines a secure authentication mechanism using JWT tokens with online course management.
This project offers a brief journey into the react and spring boot capabilities.
![Screenshot of a home page.](/images/home.png)

## Features

Public users can access a dynamic and interactive list of online courses, featuring details such as course title, price and description.
![Screenshot of a register page.](/images/courses.png)

### User Authentication

The application provides a secure authentication experience using JWT (JSON Web Tokens). Users can register, log in, and manage courses.
![Screenshot of a register page.](/images/register.png)

Upon successful authentication, the frontend receives a JWT (JSON Web Token) from the backend (Spring boot endpoints). This token is securely stored in the browser, and subsequent requests to the backend include this token for authentication.

![Screenshot of a login page.](/images/login.png)

### Protected Routes

Certain routes and functionalities are protected and require user authentication. Unauthorized users are redirected to the login page.
User needs to login in order to create new course.

![Screenshot of a courses page.](/images/courses-with-auth.png)

Authorized users, with jwt token, can create new courses, update existing ones, and delete courses. These operations are carried out securely by communicating with the backend.

![Screenshot of a edit page.](/images/new-course.png)

![Screenshot of a edit page.](/images/edit-course.png)

### you can run `mvn spring-boot:run` to run the backend and `npm start` to run the frontend and explore this project

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
