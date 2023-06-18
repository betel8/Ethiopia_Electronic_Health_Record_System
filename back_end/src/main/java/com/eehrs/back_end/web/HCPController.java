package com.eehrs.back_end.web;

import com.eehrs.back_end.db.entity.ActivityLog;
import com.eehrs.back_end.db.entity.Doctor;
import com.eehrs.back_end.db.entity.HCP;
import com.eehrs.back_end.db.repository.ActivityLogRepository;
import com.eehrs.back_end.db.repository.HCPRepository;
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
}
