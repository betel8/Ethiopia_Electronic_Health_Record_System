package com.eehrs.back_end.web;

import com.eehrs.back_end.db.entity.Admin;
import com.eehrs.back_end.db.entity.TechnicalSupport;
import com.eehrs.back_end.db.entity.User;
import com.eehrs.back_end.db.repository.AdminRepostitory;
import com.eehrs.back_end.db.repository.HealthCarePersonnelRepository;
import com.eehrs.back_end.db.repository.TechnicalSupportRepository;
import com.eehrs.back_end.db.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class TechnicalSupportController {

    @Autowired
    private TechnicalSupportRepository technicalSupportRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private AdminRepostitory adminRepostitory;
    @Autowired
    private HealthCarePersonnelRepository healthCarePersonnelRepository;
    @GetMapping("/get/all/support")
    @ResponseBody
    public Iterable<TechnicalSupport> getActiveSupport(){
        return technicalSupportRepository.findAllByAnswer(null);
    }
    @PostMapping("/set/support")
    @ResponseBody
    public void setTechnicalSupport(@RequestBody TechnicalSupport technicalSupport){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (!(authentication instanceof AnonymousAuthenticationToken)) {
            String currentUserName = authentication.getName();
            technicalSupport.setFromUser(healthCarePersonnelRepository.findByEmail(currentUserName).get());
            technicalSupportRepository.save(technicalSupport);

        }
    }
    @GetMapping("/get/my/support")
    @ResponseBody
    public List<TechnicalSupport> getMyTechnicalSupport(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (!(authentication instanceof AnonymousAuthenticationToken)) {
            String currentUserName = authentication.getName();
             return technicalSupportRepository.findByFromUserAndAnswered(healthCarePersonnelRepository
                             .findByEmail(currentUserName).get(),
                    false);
        }else {
            return null;
        }

    }
    @PutMapping("/set/answer")
    @ResponseBody
    public void setAnswer(@RequestBody TechnicalSupport technicalSupport){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (!(authentication instanceof AnonymousAuthenticationToken)) {
            String currentUserName = authentication.getName();
            Admin admin=adminRepostitory.findByEmail(currentUserName).get();
            technicalSupportRepository.save(technicalSupport);
            ;
        }
    }
}
