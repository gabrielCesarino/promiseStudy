function gitUser(user){
    const promiseGit = new Promise(function(resolve, reject){

        const xhr = new XMLHttpRequest()
        xhr.open("GET", `https://api.github.com/users/${user}/repos`)
        xhr.send(null)

        xhr.onreadystatechange = function (){
            if(xhr.readyState === 4)
                if(xhr.status === 200)//200 é o código de status HTTP para *SUCESSO*
                    resolve(JSON.parse(xhr.responseText))//Retornará o valor obtido da API em caso de sucesso
                 else 
                    reject ('Erro na requisição')//Retorna o valor do reject em caso de falha.
            }
        })

        return promiseGit
    }

const btn = document.querySelector('button')

btn.addEventListener("click", function(){
    let user = document.querySelector("input").value
    gitUser(`${user}`)
        .then(function(response) {
            let cont = 0
            for(response of response){
                document.querySelector('ul').appendChild(document.createElement('li')).innerHTML = response.name
                cont++
                }
        })
        .catch(function(error){
            console.warn(error)
        })
})



