package com.eehrs.back_end.web;

import com.eehrs.back_end.db.entity.ActivityLog;
import com.eehrs.back_end.db.entity.Diagnosis;
import com.eehrs.back_end.db.entity.Doctor;
import com.eehrs.back_end.db.entity.HealthCarePersonnel;
import com.eehrs.back_end.db.repository.ActivityLogRepository;
import com.eehrs.back_end.db.repository.DiagnosisRepository;
import com.eehrs.back_end.db.repository.DoctorRepository;
import com.eehrs.back_end.db.repository.HealthCarePersonnelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DiagnosisController {
    @Autowired
    private DiagnosisRepository diagnosisRepository;
    @Autowired
    private DoctorRepository doctorRepository;
    @Autowired
    private ActivityLogRepository activityLogRepository;
    @PostMapping("/add/diagnosis")
    void setDiagnosis(@RequestBody Diagnosis diagnosis){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (!(authentication instanceof AnonymousAuthenticationToken)) {
            String currentUserName = authentication.getName();
            Doctor doctor=doctorRepository.findByEmail(currentUserName).get();
            diagnosis.setDiagnosisBy(doctor);
            diagnosisRepository.save(diagnosis);

            activityLogRepository.save(new ActivityLog(patient.getfName()+" "
                    +patient.getMname()+" add for first time",
                    "New Patient Registered",userRepository.findByEmail(currentUserName).get()));
        }
    }

}
