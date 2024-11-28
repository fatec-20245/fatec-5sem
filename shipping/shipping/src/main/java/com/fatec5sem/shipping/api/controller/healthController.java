package com.fatec5sem.shipping.api.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class healthController {
    private static final Logger log = LogManager.getLogger(healthController.class);

    @GetMapping("/shipping/health")
    public ResponseEntity<HealthResponse> index() {
        log.info("Health check");
        return ResponseEntity.ok().body(new HealthResponse("Ok"));
    }
}
