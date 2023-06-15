package com.eehrs.back_end.web;

import com.eehrs.back_end.db.entity.Admin;
import com.eehrs.back_end.db.repository.AdminRepostitory;
import jakarta.persistence.Index;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Iterator;
import java.util.List;

@RestController
public class AdminController {
    @Autowired
    AdminRepostitory adminRepostitory;
    @GetMapping("/admin/activity/search")
    @ResponseBody
    Iterable<Admin> adminActivitySearch(@RequestParam String value){
        if(value==""){
            return adminRepostitory.findAll();
        }else{
            return adminRepostitory.findByEmailStartsWith(value);
        }

    }
}
