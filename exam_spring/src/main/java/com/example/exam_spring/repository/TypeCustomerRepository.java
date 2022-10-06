package com.example.exam_spring.repository;

import com.example.exam_spring.model.CustomerType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TypeCustomerRepository extends JpaRepository<CustomerType,Integer> {
    @Query(value = "select * from customer_type",nativeQuery = true)
    List<CustomerType> findAllType();
}
