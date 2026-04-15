/senior-frontend

Atualize os cards de planos no arquivo app/components/Plans.tsx para exibir as atividades incluídas em cada plano. Use estas informações fixas como fallback enquanto a API do 1UP PLUS não retorna:

1. 1UP PLUS - ANUAL (RECORRENTE + RENOVAÇÃO AUTOMATICA)
   - Badge: "MAIS VANTAJOSO"
   - Tag: "Recorrente"
   - Atividades: Ilimitado: 1UP RUN, 1UP VERAO, AULÃO, AULÃO BENEFICENTE, AULÃO DIA DOS PAIS, AULÃO FERIADO, CORE AND MACHINE, CROSSFIT, DOMINGUEIRA, ENDURANCE DAY, FUN FRIDAY, MURPH, NADO LIVRE, SUADEIRA, UP BARBELL, UP GYMNASTICS, UP MOBILITY, UP-X
   - Valor: R$450/mês | R$5.400,00 em 12x
   - Duração: 12 meses

2. CROSSFIT ILIMITADO - ANUAL (RECORRENTE)
   - Badge: "MAIS VANTAJOSO"
   - Tag: "Recorrente"
   - Valor: R$280/mês | R$3.360,00 em 12x
   - Duração: 12 meses

3. CROSSFIT 3x SEMANA ANUAL (RECORRENTE)
   - Tag: "Recorrente"
   - Valor: R$230/mês | R$2.760,00 em 12x
   - Duração: 12 meses

Quando a API retornar os dados do plano, use os dados da API. Caso contrário use os dados acima como fallback. Mostre as atividades em formato de lista compacta dentro do card.