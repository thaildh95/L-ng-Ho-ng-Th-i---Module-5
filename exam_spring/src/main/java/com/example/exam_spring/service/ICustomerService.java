package com.example.exam_spring.service;

import com.example.exam_spring.model.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ICustomerService {
    Page<Customer> findAll(Pageable pageable);
    Customer save(Customer customer);
    Customer findById(int id);
    public void deleteCustomer(Integer id);
}
