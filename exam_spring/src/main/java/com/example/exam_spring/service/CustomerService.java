package com.example.exam_spring.service;

import com.example.exam_spring.model.Customer;
import com.example.exam_spring.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class CustomerService implements ICustomerService{
    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public void deleteCustomer(Integer id) {
        customerRepository.deleteCustomer(id);
    }

    @Override
    public Page<Customer> findAll(Pageable pageable) {
        return customerRepository.findAll(pageable);
    }

    @Override
    public Customer save(Customer customer) {
        return null;
    }

    @Override
    public Customer findById(int id) {
        return null;
    }
}
