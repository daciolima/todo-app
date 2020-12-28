# Aplicação frontend TodoList usando Redux

**Action Creators:**
- Responsável por pegar os eventos(entradas nos campos) e preparar para o dispatch.


**Método bindActionCreators**
Esse método é do pacote Redux. Ele é responsável por pegar a action retornar o dispatch 


**Dispacher:**
Retorna um action todas as vezes que houver um event

**Reducer**
Evolui o estado, ou seja, pega o state e prepara para a exibição 


**Middleware usados**
multi = Permite criar um array com várias actions no redux
promise = Aguarda as promises das action pra só então rodar os reducers.
