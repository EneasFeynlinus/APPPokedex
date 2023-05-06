const getTypeColor = type => {
  const normal = '#F5F5F5'
  return {
    normal,
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    ice: '#DEF3FD',
    water: '#DEF3FD',
    ground: '#F4E7DA',
    rock: '#D5D5D4',
    fairy: '#FCEAFF',
    poison: '#98D7A5',
    bug: '#F8D5A3',
    ghost: '#CAC0F7',
    dragon: '#97B3E6',
    psychic: '#EAEDA1',
    fighting: '#E6E0D4'
  }[type] || normal
}

const handlePageLoaded = async () => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=15&offset=0')

    if (!response.ok) {
      throw new Error('Data could not be reached.')
    }

    const { results: pokeApiResults } = await response.json()
    const promises = pokeApiResults.map(result => fetch(result.url))
    console.log(promises)
  } catch (error) {
    console.log('Algo deu erradus', error)
  }
}

handlePageLoaded()