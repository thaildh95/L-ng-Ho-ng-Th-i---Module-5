package com.example.exam_spring.controller;

import com.example.exam_spring.model.Customer;
import com.example.exam_spring.model.CustomerType;
import com.example.exam_spring.service.ICustomerService;
import com.example.exam_spring.service.ICustomerType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RequestMapping(value = "customer")
@RestController
public class CustomerRestController {
    @Autowired
    private ICustomerService customerService;

    @Autowired
    private ICustomerType customerType;

    @GetMapping("")
    public ResponseEntity<Page<Customer>> findAll(
            @PageableDefault(size = 5) Pageable pageable

    ) {
        Page<Customer> customerList = customerService.findAll(pageable);
        if (!customerService.findAll(pageable).hasContent()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(customerList,HttpStatus.OK);
    }
    @GetMapping("/type")
    public ResponseEntity<List<CustomerType>> findAllType(){
        List<CustomerType> typeList = customerType.findAllType();
        if (typeList.isEmpty()){
            return  new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(typeList, HttpStatus.OK);
    }
    @PostMapping("{id}")
    public ResponseEntity<Void> deleteCustomer(@PathVariable Integer id){
        customerService.deleteCustomer(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
