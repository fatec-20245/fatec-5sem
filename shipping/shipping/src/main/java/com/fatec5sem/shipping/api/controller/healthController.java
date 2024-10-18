package com.fatec5sem.shipping.api.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class healthController {
    @GetMapping("/shipping/health")
    public ResponseEntity<HealthResponse> index() {
        return ResponseEntity.ok().body(new HealthResponse("Ok"));
    }
}
