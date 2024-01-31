package com.sbsa.courses.bootstrap;

import lombok.*;

import java.util.List;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ProjectsResponse {
    private int id;
    private String client;
    private String description_en;
    private String description_fr;
    private String developers;
    private String[] functionalities_en;
    private String[] functionalities_fr;
    private String[] icons;
    private List<ProjectImagesResponse> images;
    private String[] languages;
    private String name;
    private String[] project_type;
    private String subName_en;
    private String subName_fr;
    private String time;

}
