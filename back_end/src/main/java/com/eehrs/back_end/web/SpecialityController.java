package com.eehrs.back_end.web;

import com.eehrs.back_end.db.entity.*;
import com.eehrs.back_end.db.repository.ActivityLogRepository;
import com.eehrs.back_end.db.repository.HealthCarePersonnelRepository;
import com.eehrs.back_end.db.repository.SpecialityRepository;
import com.eehrs.back_end.db.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SpecialityController {
    @Autowired
    private SpecialityRepository specialityRepository;
    @Autowired
    private HealthCarePersonnelRepository healthCarePersonnelRepository;
    @Autowired
    private ActivityLogRepository activityLogRepository;
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/set/speciality")
    @ResponseBody
    public void setSpeciality(@RequestBody Speciality speciality, @RequestParam String user){
        AcademicDetail academicDetail=healthCarePersonnelRepository.findByEmail(user).get().getAcademicDetail();;
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (!(authentication instanceof AnonymousAuthenticationToken)) {
            String currentUserName = authentication.getName();
            speciality.setAcademicDetail(academicDetail);
            specialityRepository.save(speciality);
            HealthCarePersonnel healthCarePersonnel=healthCarePersonnelRepository.findByEmail(user).get();
            activityLogRepository.save(new ActivityLog(healthCarePersonnel.getPersonalDetail().getfName()+" "
                    +healthCarePersonnel.getPersonalDetail().getlName()+" included new speciality",
                    "New Speciality Added",userRepository.findByEmail(currentUserName).get()));

        }
    }
    @GetMapping("/get/speciality")
    @ResponseBody
    private Iterable<Speciality> getSpeciality(@RequestParam String email){
        AcademicDetail academicDetail=userRepository.findByEmail(email).get().getAcademicDetail();
        return specialityRepository.findByAcademicDetail(academicDetail);
    }

}
