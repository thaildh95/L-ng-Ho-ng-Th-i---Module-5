package com.example.exam_spring.service;

import com.example.exam_spring.model.CustomerType;
import com.example.exam_spring.repository.TypeCustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerTypeService implements ICustomerType{
    @Autowired
    private TypeCustomerRepository typeCustomerRepository;

    @Override
    public List<CustomerType> findAllType() {
        return typeCustomerRepository.findAllType();
    }
}
