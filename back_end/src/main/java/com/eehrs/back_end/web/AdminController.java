package com.eehrs.back_end.web;

import com.eehrs.back_end.db.entity.ActivityLog;
import com.eehrs.back_end.db.entity.Admin;
import com.eehrs.back_end.db.entity.Doctor;
import com.eehrs.back_end.db.repository.ActivityLogRepository;
import com.eehrs.back_end.db.repository.AdminRepostitory;
import com.eehrs.back_end.db.repository.UserRepository;
import com.eehrs.back_end.email.EmailServiceImpl;
import jakarta.persistence.Index;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Base64;
import java.util.Iterator;
import java.util.List;

@RestController
public class AdminController {
    @Autowired
    private AdminRepostitory adminRepostitory;
    @Autowired
    private EmailServiceImpl service;

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ActivityLogRepository activityLogRepository;
    @GetMapping("/admin/activity/search")
    @ResponseBody
    Iterable<Admin> adminActivitySearch(@RequestParam String value){
        if(value==""){
            return adminRepostitory.findAll();
        }else{
            return adminRepostitory.findByEmailStartsWith(value);
        }

    }
    @PostMapping("/add/admin")
    @ResponseBody
    public void addAdmin(@RequestBody Admin admin){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (!(authentication instanceof AnonymousAuthenticationToken)) {
            String currentUserName = authentication.getName();
            service.temporaryPasswordEmail("betel.ameha@gmail.com","new password" ,admin.generateSecurePassword());
            adminRepostitory.save(admin);
            activityLogRepository.save(new ActivityLog(admin.getPersonalDetail().getfName()+" "
                    +admin.getPersonalDetail().getlName()+" is added to the system",
                    "New Admin Added",userRepository.findByEmail(currentUserName).get()));
        }
    }
    @GetMapping("/search/Admin/remove")
    @ResponseBody
    public Iterable<Admin> searchDoctorRemove(@RequestParam String value){
        return adminRepostitory.findByEmailStartsWith(value);
    }
}
