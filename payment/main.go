package main

import (
	"encoding/json"
	"log"
	"net/http"
)

type Pagamento struct {
	ID        int    `json:"id"`
	Descricao string `json:"descricao"`
}

var pagamentos = []Pagamento{
	{ID: 1, Descricao: "TESTE 1"},
	{ID: 2, Descricao: "TESTE"},
}

func main() {
	http.HandleFunc("/", handleRoot)
	http.HandleFunc("/payment", handlePagamentos)
	log.Fatal(http.ListenAndServe(":8081", nil))
}
func handleRoot(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	w.Write([]byte("Bem-vindo à API de pagamentos!"))
}
func handlePagamentos(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case http.MethodGet:
		listarPagamentos(w, r)
	case http.MethodPost:
		criarPagamento(w, r)
	case http.MethodPut:
		atualizarPagamento(w, r)
	case http.MethodDelete:
		excluirPagamento(w, r)
	default:
		w.WriteHeader(http.StatusMethodNotAllowed)
		w.Write([]byte("Método não permitido"))
	}
}
func listarPagamentos(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(pagamentos)
}
func criarPagamento(w http.ResponseWriter, r *http.Request) {
	var pagamento Pagamento
	err := json.NewDecoder(r.Body).Decode(&pagamento)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}
	pagamento.ID = len(pagamentos) + 1
	//	pagamento = append(pagamentos, pagamento)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(pagamento)
}
func atualizarPagamento(w http.ResponseWriter, r *http.Request) {
	// Implemente a lógica de atualização aqui
}
func excluirPagamento(w http.ResponseWriter, r *http.Request) {
	// Implemente a lógica de exclusão aqui
}
