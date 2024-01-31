package com.sbsa.courses.bootstrap;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ProjectImagesResponse {
    private int id;
    private String description_en;
    private String description_fr;
    private int landing;
    private String thumb;
    private String url;

}
