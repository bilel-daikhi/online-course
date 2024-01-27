package com.sbsa.courses.controllers;

import com.sbsa.courses.entities.Course;
import com.sbsa.courses.repositories.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

//@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path = "/api/v1/courses")
public class CourseController {
    @Autowired
    private CourseRepository courseRepository;

    @GetMapping
    public ResponseEntity<Map<String, Object>> getAllCourses(@RequestParam(defaultValue = "0") int page,
                                                             @RequestParam(defaultValue = "12") int size){
        Pageable paging = PageRequest.of(page, size);
        Page<Course> coursesPage=courseRepository.findAll(paging);
        Map<String, Object> response = new HashMap<>();
        List<Course> courses = coursesPage.getContent();
        response.put("courses", courses);
        response.put("currentPage", coursesPage.getNumber());
        response.put("totalItems", coursesPage.getTotalElements());
        response.put("totalPages", coursesPage.getTotalPages());
        return ResponseEntity.ok(response);
    }
    @GetMapping("{id}")
    public Course getCourse(@PathVariable(name = "id") long id){
        return courseRepository.findById(id).get();
    }
    @PatchMapping("{id}")
    public Course updateCourse(@PathVariable(name = "id") long id,@Valid @RequestBody Course course){
        System.out.println("id: "+id);
        System.out.println("course to patch: "+course.toString());
        course.setId(id);
        return courseRepository.save(course);
    }
    @PostMapping
    public Course createCourse(@Valid @RequestBody Course course){
        System.out.println("create course  ");
        return courseRepository.save(course);
    }

    @DeleteMapping("{id}")
    public void deleteCourse(@PathVariable(name = "id") long id){

          courseRepository.deleteById(id);
    }
}
