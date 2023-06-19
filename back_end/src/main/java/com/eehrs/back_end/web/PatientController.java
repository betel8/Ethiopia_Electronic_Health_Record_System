package com.eehrs.back_end.web;

import com.eehrs.back_end.db.entity.ActivityLog;
import com.eehrs.back_end.db.entity.HealthCarePersonnel;
import com.eehrs.back_end.db.entity.Patient;
import com.eehrs.back_end.db.repository.ActivityLogRepository;
import com.eehrs.back_end.db.repository.HealthCarePersonnelRepository;
import com.eehrs.back_end.db.repository.PatientRepository;
import com.eehrs.back_end.db.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PatientController {
    @Autowired
    private PatientRepository patientRepository;
    @Autowired
    private HealthCarePersonnelRepository healthCarePersonnelRepository;
    @Autowired
    private ActivityLogRepository activityLogRepository;
    @Autowired
    private UserRepository userRepository;


    @PostMapping("/add/patient")
    @ResponseBody
    public void addPatient(@RequestBody Patient patient){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (!(authentication instanceof AnonymousAuthenticationToken)) {
            String currentUserName = authentication.getName();
            HealthCarePersonnel healthCarePersonnel=healthCarePersonnelRepository.findByEmail(currentUserName).get();
            patient.setAddedBy(healthCarePersonnel);
            patientRepository.save(patient);
            activityLogRepository.save(new ActivityLog(patient.getfName()+" "
                    +patient.getmName()+" add for first time",
                    "New Patient Registered",userRepository.findByEmail(currentUserName).get()));
        }
    }
}
