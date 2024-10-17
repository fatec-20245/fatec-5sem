package main

import (
 "encoding/json"
 "log"
 "net/http"
)
type Tarefa struct {
 ID         int    `json:"id"`
 Descricao  string `json:"descricao"`
}
var tarefas []Tarefa
func main() {
 http.HandleFunc("/", handleRoot)
 http.HandleFunc("/tarefas", handleTarefas)
 log.Fatal(http.ListenAndServe(":8081", nil))
}
func handleRoot(w http.ResponseWriter, r *http.Request) {
 w.WriteHeader(http.StatusOK)
 w.Write([]byte("Bem-vindo à API de tarefas!"))
}
func handleTarefas(w http.ResponseWriter, r *http.Request) {
 switch r.Method {
 case http.MethodGet:
  listarTarefas(w, r)
 case http.MethodPost:
  criarTarefa(w, r)
 case http.MethodPut:
  atualizarTarefa(w, r)
 case http.MethodDelete:
  excluirTarefa(w, r)
 default:
  w.WriteHeader(http.StatusMethodNotAllowed)
  w.Write([]byte("Método não permitido"))
 }
}
func listarTarefas(w http.ResponseWriter, r *http.Request) {
 w.Header().Set("Content-Type", "application/json")
 json.NewEncoder(w).Encode(tarefas)
}
func criarTarefa(w http.ResponseWriter, r *http.Request) {
 var tarefa Tarefa
 err := json.NewDecoder(r.Body).Decode(&tarefa)
 if err != nil {
  w.WriteHeader(http.StatusBadRequest)
  return
 }
 tarefa.ID = len(tarefas) + 1
 tarefas = append(tarefas, tarefa)
 w.Header().Set("Content-Type", "application/json")
 w.WriteHeader(http.StatusCreated)
 json.NewEncoder(w).Encode(tarefa)
}
func atualizarTarefa(w http.ResponseWriter, r *http.Request) {
 // Implemente a lógica de atualização aqui
}
func excluirTarefa(w http.ResponseWriter, r *http.Request) {
 // Implemente a lógica de exclusão aqui
}