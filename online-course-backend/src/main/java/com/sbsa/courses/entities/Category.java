package com.sbsa.courses.entities;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table
@Data
@NoArgsConstructor
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long categoryId;
    private String name;
@Builder
    public Category(long categoryId, String name) {
        this.categoryId = categoryId;
        this.name = name;
    }
}
