package com.example.exam_spring.model;

import javax.persistence.*;

@Entity
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String dayOfBirth;
    private boolean gender;
    private String phone;
    private String email;
    private String address;
    private boolean statuss;

    @ManyToOne()
    @JoinColumn(name = "type_id", referencedColumnName = "id")
    private CustomerType customerType;

    public Customer() {
    }

    public Customer(int id, String name, String dayOfBirth, boolean gender, String phone, String email, String address, boolean statuss, CustomerType customerType) {
        this.id = id;
        this.name = name;
        this.dayOfBirth = dayOfBirth;
        this.gender = gender;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.statuss = statuss;
        this.customerType = customerType;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDayOfBirth() {
        return dayOfBirth;
    }

    public void setDayOfBirth(String dayOfBirth) {
        this.dayOfBirth = dayOfBirth;
    }

    public boolean isGender() {
        return gender;
    }

    public void setGender(boolean gender) {
        this.gender = gender;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public boolean isStatuss() {
        return statuss;
    }

    public void setStatuss(boolean statuss) {
        this.statuss = statuss;
    }

    public CustomerType getCustomerType() {
        return customerType;
    }

    public void setCustomerType(CustomerType customerType) {
        this.customerType = customerType;
    }
}
