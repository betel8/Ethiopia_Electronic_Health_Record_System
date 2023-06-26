package com.eehrs.back_end.web;

import com.eehrs.back_end.db.entity.*;
import com.eehrs.back_end.db.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
public class DiagnosisController {

    @Autowired
    private DiagnosisRepository diagnosisRepository;
    @Autowired
    private DoctorRepository doctorRepository;
    @Autowired
    private ActivityLogRepository activityLogRepository;
    @Autowired
    private PatientRepository patientRepository;
    @Autowired
    private UserRepository userRepository;
    @PostMapping("/add/diagnosis")
    @ResponseBody
    public void setDiagnosis(@RequestBody Diagnosis diagnosis, @RequestParam Long id){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (!(authentication instanceof AnonymousAuthenticationToken)) {
            String currentUserName = authentication.getName();
            Doctor doctor=doctorRepository.findByEmail(currentUserName).get();
            diagnosis.setDiagnosisBy(doctor);
            Patient patient=patientRepository.findById(id).get();
            diagnosis.setOfPatient(patient);
            diagnosisRepository.save(diagnosis);
            activityLogRepository.save(new ActivityLog(patient.getfName()+" "
                    +patient.getMname()+" has been diagnosis",
                    "New Diagnosis Record Added",userRepository.findByEmail(currentUserName).get()));
        }
    }
    @GetMapping("/get/diagnosis")
    @ResponseBody
    public Iterable<Diagnosis> getDiagnosis(@RequestParam Long id){
        return null;
    }

}
