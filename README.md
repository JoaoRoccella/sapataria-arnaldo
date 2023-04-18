# Sapataria do Arnaldo
## Projeto de aula
### Programa Ford Enter de Qualificação Profissional em parceria com o SENAI-SP

Este projeto é acessível pelo link abaixo:
https://joaoroccella.github.io/sapataria-arnaldo (branch **main**)

## Comandos do Git (resumo)

Salvar seu trabalho do dia:
```
git add .
git commit -m "Descrição das alterações"
git push
```

Criar um novo branch alternando diretamente para ele:
```
git checkout -b dev
``` 

Adicionar um branch **local** ao repositório **remoto**:
```
git push --set-upstream origin dev
```

Adicionar uma tag ao commit atual:
```
git tag v0.1.0
git push --tags
```

Fazer um commit vazio:
```
git commit -m "Commit vazio" --allow-empty
```

Mesclar dois branchs (a partir do branch desatualizado):
```
git merge <nome do branch>
git push
```