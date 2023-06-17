package com.eehrs.back_end.web;

import com.eehrs.back_end.db.entity.ActivityLog;
import com.eehrs.back_end.db.entity.Admin;
import com.eehrs.back_end.db.repository.ActivityLogRepository;
import com.eehrs.back_end.db.repository.AdminRepostitory;
import com.eehrs.back_end.db.repository.UserRepository;
import com.eehrs.back_end.email.EmailServiceImpl;
import jakarta.persistence.Index;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

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
    public void addAdmin(Admin admin){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (!(authentication instanceof AnonymousAuthenticationToken)) {
            String currentUserName = authentication.getName();
            System.out.printf(admin.getEmail());
           // adminRepostitory.save(admin);
            //service.temporaryPasswordEmail(doctor.getEmail(),"new password" , doctor.getPassword());
            /*activityLogRepository.save(new ActivityLog(admin.getPersonalDetail().getfName()+" "
                    +admin.getPersonalDetail().getlName()+" is added to the system",
                    "New Doctor Added",userRepository.findByEmail(currentUserName).get()));*/
        }
    }
}
