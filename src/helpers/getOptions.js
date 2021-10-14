import pokemonApi from '@/api/pokemonApi';

const getPokemons = () => {
    const pokemonArr = Array.from(Array(650));

    return pokemonArr.map((_,index) => index + 1 );
}

const getOptions = async() => {

    const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5);

    const pokemons = await getPokemonNames(mixedPokemons.slice(0,4));
    return pokemons
}

const getPokemonNames = async([a,b,c,d] = []) => {
    const promiseArr = [
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`),
    ]

    const [p1,p2,p3,p4] = await Promise.all(promiseArr);

    return [
        { name: p1.data.name, id: p1.data.name },
        { name: p2.data.name, id: p2.data.name },
        { name: p3.data.name, id: p3.data.name },
        { name: p4.data.name, id: p4.data.name },
    ]

}

export default getOptions;