
const getPuzzle = async (wordCount) => {

    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to fetch data')
    }
}


const getCurrentCountry = async () => {
    const location = await getLocation()
    return getCountry(location.country)
     
}

const getCountry = async (countryCode) => {
    const response = await fetch('//restcountries.eu/rest/v2/all')
    if (response.status === 200) {
        const data = await response.json()
        const country = data.find( (ele) => ele.alpha2Code === countryCode)
        return country.name
    } else {
        throw new Error('Unable to fetch data')
    }
}



const getLocation = async () => {
    const response = await fetch('//ipinfo.io/json?token=11a7f32639a921')
    if (response.status === 200) {
        const data = await response.json()
        return data
    } else {
        throw new Error('Unable to fetch the data')
    }
}


export { getPuzzle as default }