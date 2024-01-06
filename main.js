const base_api = "https://api.genderize.io"

function showResult(name, gender, probability) {
    const predictElement = document.getElementById("input-result")
    let translateGender = gender
    const percentageProbability = probability * 100 + "%"

    if (translateGender === "male") {
        translateGender = "Laki-laki"
    } else {
        translateGender = "Perempuan"
    }
    const predictText = `Hai ${name}, gender Anda adalah ${translateGender} dengan kemungkinan sebesar ${percentageProbability}`
    predictElement.textContent = predictText
}

async function Predict(event) {
    if(event.key === "Enter") {
        const firstName = event.target.value
        const queryUrl = `${base_api}/?name=${firstName}&country_id=ID`
        const response = await fetch(queryUrl)
        const result = await response.json()
        showResult(result.name, result.gender, result.probability)
    }
}