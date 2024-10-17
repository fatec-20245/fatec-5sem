package main

import (
	"bytes"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"testing"
)

func TestPaymentHandler(t *testing.T) {
	tests := []struct {
		name           string
		requestBody    PaymentRequest
		expectedStatus int
		expectedMsg    string
	}{
		{
			name: "Pagamento válido",
			requestBody: PaymentRequest{
				CardNumber: "1234567812345678",
				Amount:     50.0,
				Balance:    100.0,
			},
			expectedStatus: http.StatusOK,
			expectedMsg:    "Pagamento aprovado",
		},
		{
			name: "Número de cartão inválido",
			requestBody: PaymentRequest{
				CardNumber: "1234",
				Amount:     50.0,
				Balance:    100.0,
			},
			expectedStatus: http.StatusBadRequest,
			expectedMsg:    "Número de cartão inválido",
		},
		{
			name: "Valor de pagamento inválido",
			requestBody: PaymentRequest{
				CardNumber: "1234567812345678",
				Amount:     -10.0,
				Balance:    100.0,
			},
			expectedStatus: http.StatusBadRequest,
			expectedMsg:    "Valor de pagamento inválido",
		},
		{
			name: "Saldo insuficiente",
			requestBody: PaymentRequest{
				CardNumber: "1234567812345678",
				Amount:     150.0,
				Balance:    100.0,
			},
			expectedStatus: http.StatusBadRequest,
			expectedMsg:    "Saldo insuficiente",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			// Converte a requisição para JSON
			reqBody, _ := json.Marshal(tt.requestBody)
			req := httptest.NewRequest(http.MethodPost, "/validate-payment", bytes.NewReader(reqBody))
			req.Header.Set("Content-Type", "application/json")

			// Cria um ResponseRecorder para capturar a resposta
			rr := httptest.NewRecorder()
			handler := http.HandlerFunc(PaymentHandler)

			// Executa a requisição simulada
			handler.ServeHTTP(rr, req)

			// Verifica o status da resposta
			if rr.Code != tt.expectedStatus {
				t.Errorf("esperado status %v, obtido %v", tt.expectedStatus, rr.Code)
			}

			// Verifica o corpo da resposta
			var resp PaymentResponse
			if err := json.NewDecoder(rr.Body).Decode(&resp); err == nil {
				if resp.Message != tt.expectedMsg {
					t.Errorf("esperada mensagem %q, obtida %q", tt.expectedMsg, resp.Message)
				}
			}
		})
	}
}
