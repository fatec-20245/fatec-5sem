package com.fatec5sem.shipping.api.integrations;

import com.fatec5sem.shipping.api.controller.HealthResponse;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Objects;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class HealthControllerTest {

    @Autowired
    private TestRestTemplate testRestTemplate;

    @Test
    public void testHealthCheck() {
        ResponseEntity<HealthResponse> response = this.testRestTemplate
                .exchange("/shipping/health", HttpMethod.GET, null, HealthResponse.class);
        assert response.getStatusCode() == HttpStatus.OK;
        HealthResponse body = response.getBody();
        assert Objects.equals(Objects.requireNonNull(body).status(), "Ok");
    }


}
