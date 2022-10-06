//package com.example.exam_spring.controller;
//
//import com.example.exam_spring.model.CarHome;
//import com.example.exam_spring.model.FromArea;
//import com.example.exam_spring.model.ToArea;
//import com.example.exam_spring.service.*;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.domain.Page;
//import org.springframework.data.domain.Pageable;
//import org.springframework.data.web.PageableDefault;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//import java.util.Optional;
//
//@RestController
//@CrossOrigin("http://localhost:4200")
//public class CarHomeRestController {
//
//    @Autowired
//    private ICarHomeService carHomeService;
//
//    @Autowired
//    private IFromService fromService;
//
//    @Autowired
//    private IToAreaService toAreaService;
//
//    @GetMapping("")
//    public ResponseEntity<Page<CarHome>> findAll(
//            @PageableDefault(size = 5) Pageable pageable,
//            @RequestParam Optional<String> name
//
//    ) {
//        String key = name.orElse("");
//        if (!carHomeService.findAll(pageable).hasContent()) {
//            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//        }
//        return new ResponseEntity<>(carHomeService.findAll(pageable),HttpStatus.OK);
//    }
//
//    @GetMapping("/from")
//    public ResponseEntity<List<FromArea>> findAllFrom() {
//        List<FromArea> fromAreaList = fromService.findAll();
//        if (fromAreaList.isEmpty()) {
//            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//        }
//        return new ResponseEntity<>(fromAreaList,HttpStatus.OK);
//    }
//    @GetMapping("/to")
//    public ResponseEntity<List<ToArea>> findAllTo() {
//        List<ToArea> toAreaList = toAreaService.findall();
//
//        if (toAreaService.findall().isEmpty()) {
//            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//        }
//        return new ResponseEntity<>(toAreaList,HttpStatus.OK);
//    }
//}
//
