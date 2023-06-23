package com.eehrs.back_end.web;

import com.eehrs.back_end.db.entity.*;
import com.eehrs.back_end.db.repository.ActivityLogRepository;
import com.eehrs.back_end.db.repository.HCPRepository;
import com.eehrs.back_end.db.repository.HealthCarePersonnelRepository;
import com.eehrs.back_end.db.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
public class HCPController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private HCPRepository hcpRepository;
    @Autowired
    private ActivityLogRepository activityLogRepository;
    @Autowired
    private HealthCarePersonnelRepository healthCarePersonnelRepository;
    @PostMapping("/add/hcp")
    @ResponseBody
    public void addHcp(@RequestBody HCP newHcp){

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (!(authentication instanceof AnonymousAuthenticationToken)) {
            String currentUserName = authentication.getName();
            hcpRepository.save(newHcp);
            activityLogRepository.save(new ActivityLog(newHcp.getCompanyName(),
                    "New HCP Added",userRepository.findByEmail(currentUserName).get()));
        }
    }
    @GetMapping("/search/HCP/remove")
    @ResponseBody
    public Iterable<HCP> searchDoctorRemove(@RequestParam String value){
        return hcpRepository.findByCompanyNameStartsWith(value);
    }
    @PutMapping("/hire/employee")
    @ResponseBody
    public void hireEmployee(@RequestParam String value){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (!(authentication instanceof AnonymousAuthenticationToken)) {
            String currentUserName = authentication.getName();
            HealthCarePersonnel user =healthCarePersonnelRepository.findByEmail(value).get();
            user.setWorks(hcpRepository.findByOwner(currentUserName));

            healthCarePersonnelRepository.save(user);
            activityLogRepository.save(new ActivityLog("You hired "+user.getPersonalDetail().getfName()+" "
                    +user.getPersonalDetail().getlName(),
                    "New Employee Hired",userRepository.findByEmail(currentUserName).get()));
        }
    }
    @GetMapping("/search/employee")
    @ResponseBody
    public Iterable<HealthCarePersonnel> getEmployee(@RequestParam String value ){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if(value==""){
            if (!(authentication instanceof AnonymousAuthenticationToken)) {
                String currentUserName = authentication.getName();
                HCP hcp=hcpRepository.findByOwner(currentUserName);
                return healthCarePersonnelRepository.findByWorks(hcp);
            }else{
                return null;
            }
        }else {
           return healthCarePersonnelRepository.findByWorksAndEmailStartsWith(null,value);
        }
    }
    @PutMapping("/fire/employee")
    @ResponseBody
    public void fireEmployee(@RequestParam String value){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (!(authentication instanceof AnonymousAuthenticationToken)) {
            String currentUserName = authentication.getName();
            HealthCarePersonnel healthCarePersonnel=healthCarePersonnelRepository
                    .findByEmail(value).get();
            healthCarePersonnel.setWorks(null);
            activityLogRepository.save(new ActivityLog("You Fired "+
                    healthCarePersonnel.getPersonalDetail().getfName()+" "
                    +healthCarePersonnel.getPersonalDetail().getlName(),
                    "Employee Get fired",userRepository.findByEmail(currentUserName).get()));
            healthCarePersonnelRepository.save(healthCarePersonnel);
        }

    }
}
