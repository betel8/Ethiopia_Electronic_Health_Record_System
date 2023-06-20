package com.eehrs.back_end.web;

import com.eehrs.back_end.db.entity.TechnicalSupport;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TechnicalSupportController {
    @GetMapping("/get/all/support")
    @ResponseBody
    public List<TechnicalSupport> getAlland
}
