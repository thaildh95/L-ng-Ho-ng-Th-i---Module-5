package com.example.exam_spring.repository;

import com.example.exam_spring.model.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.RequestParam;

import javax.transaction.Transactional;

public interface CustomerRepository extends JpaRepository<Customer,Integer> {

    @Query(value = "select * from customer where  statuss = 0",nativeQuery = true)
    Page<Customer> findAll (Pageable pageable);

    @Transactional
    @Modifying
    @Query(value = "update customer  set statuss = 0 where id= :id",nativeQuery = true)
    public void deleteCustomer(@Param("id") Integer id);


    @Query(value = "detele from customer where id = :id",nativeQuery = true)
    Customer findCustomerById(@Param("id") Integer id);
}
