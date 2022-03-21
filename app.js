let getJokesButton = document.querySelector('.get-jokes');


const getJokes = (event) => {
    let numberOfJokes = document.querySelector('input[type="number"]').value;

    // Create XML object
    const xhr = new XMLHttpRequest();

    // GET data from API
    xhr.open('GET', 
    `http://api.icndb.com/jokes/random/${numberOfJokes}`,
     true)


    // Work with data
    xhr.onload = () => {
        const jokesJSON = JSON.parse(xhr.responseText)
        let output = ''
        
        if (jokesJSON.type === 'success'){
            jokesJSON.value.forEach((joke) => {
                output += `<li>${joke.joke}</li>`
            })
        }
        else{
            output += `<li>Something went wrong</li>`
        }

        document.querySelector('.jokes').innerHTML = output
        
    }
     
    // Send the request
    xhr.send()

    event.preventDefault()
}

getJokesButton.addEventListener("click", getJokes)