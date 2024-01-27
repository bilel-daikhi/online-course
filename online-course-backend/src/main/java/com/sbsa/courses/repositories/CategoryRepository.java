package com.sbsa.courses.repositories;

import com.sbsa.courses.entities.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category,Long> {
}
