package com.example.exam_spring.model;
import javax.persistence.*;

@Entity
public class CustomerType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String typeName;


}
