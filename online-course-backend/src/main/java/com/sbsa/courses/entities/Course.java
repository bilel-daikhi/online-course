package com.sbsa.courses.entities;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Entity
@Table
@Data
@NoArgsConstructor
public class Course {
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
private long id;
@NotBlank
private String name;
@Column(length = 3000)
@NotBlank
private String description;
@NotBlank
private String image;
private Date date;
@NotNullxx
private double price;
private boolean isNew=true;
private int reduction;
private int votes=0;
private float rating=0;

@Builder
    public Course(long id, String name,String image,String description,Date date,double price,boolean isNew,int reduction,int votes,float rating) {
        this.id = id;
        this.date=date;
        this.price=price;
        this.description=description;
        this.name = name;
        this.image=image;
        this.isNew=isNew;
        this.reduction=reduction;
        this.rating=rating;
        this.votes=votes;
    }
}
