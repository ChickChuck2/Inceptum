Antes de modificar o news.json 
voce tem que entender o seguinte

1° qual é a versão do jogo atualmente? obtenha a versão do jogo pelos arquivos do projeto
B:\UnityProjets\SurvivorIO

?? ONDE VER A VERSÃO? 
ProjectSettings.asset
! Se voce errou a versão, não se preocupe, apenas corrija o news.json e continue.
!!! LEMBRE-SE DE NUNCA ALTERAR MINHA VERSÃO, ISSO APENAS EU POSSO FAZER.
!!! LEMBRE-SE DE SEMPRE ADICIONAR NO news.json A VERSÃO REAL DO JOGO. NÃO CRIAR UMA NOVA

se a versão é a mesma, apenas adicione as novas coisas na mesma aba de versão, porem verifique apenas a data



Ok, dito isso
se a versão for a mesma e a mesma data você deverá adicionar os novos news no mesmo campo se ja tiver um campo com a mesma data e versão

2° se a versão for diferente e a data for diferente você deverá adicionar um novo campo com a nova versão e a nova data

3° se a versão for diferente e a data for a mesma você deverá adicionar um novo campo com a nova versão e a mesma data

4° se a versão for a mesma e a data for diferente você deverá adicionar um novo campo com a mesma versão e a nova data

dito isso, pode começar a modificar o news.json

> [!IMPORTANT]
> **REGRA DE OURO PARA AGENTES:**
> Ao verificar a versão no `ProjectSettings.asset`, procure por `bundleVersion`. 
> O valor exato encontrado lá (ex: `0.1`) DEVE ser usado no `news.json` e no site. 
> NUNCA tente inventar sub-versões (como `0.1.4`) se elas não existirem no arquivo do Unity.
> Versão do Site e Versão do Jogo são entidades distintas, mas o `news.json` deve refletir a **REALIDADE do JOGO**.

> Após a implementação, já coloque no ar!
> Faça uma verificação extra sempre;
1° Verificação de tradução / textos no website


Apos a implementação e adição prossiga para lançamento do website utilizando o comando:

> [!IMPORTANT]
npm run deploy