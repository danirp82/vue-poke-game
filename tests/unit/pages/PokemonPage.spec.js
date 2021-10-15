import PokemonPage from '@/pages/PokemonPage';
import { mount, shallowMount } from '@vue/test-utils';

import { pokemonsMock } from '../mocks/pokemons.mock';
describe('PokemonPage component', () => {
    let wrapper

  beforeEach(() => {
    wrapper = shallowMount(PokemonPage)
  })

  test('debe de hacer match con el snapshot', () => {        
    expect( wrapper.html() ).toMatchSnapshot()
  })
  test('should to call mixPokemonArr when mount component', ()=> {
    
    const mixPokemonArr = jest.spyOn(PokemonPage.methods, 'mixPokemonArr');

    shallowMount(PokemonPage)

    expect(mixPokemonArr).toHaveBeenCalled();
  })

  test('should to match with snapshot when load pokemons', () => {
        
    const wrapper = shallowMount( PokemonPage, {
        data() {
            return {
                pokemonArr: pokemonsMock(),
                pokemon: pokemonsMock()[0],
                showPokemon: false,
                showAnswer: false,
                message: ''
            }
        }
    })

    expect( wrapper.html() ).toMatchSnapshot()

})

  test('should to show PokemonPicture and PokemonOptions', () => {
    const wrapper = shallowMount( PokemonPage, {
      data() {
          return {
              pokemonArr: pokemonsMock(),
              pokemon: pokemonsMock()[0],
              showPokemon: false,
              showAnswer: false,
              message: ''
          }
      }
    })

    const picture = wrapper.find('pokemon-picture-stub')
    const options = wrapper.find('pokemon-options-stub')

    expect( picture.exists() ).toBeTruthy()
    expect( options.exists() ).toBeTruthy()

    
    expect( picture.attributes('pokemonid') ).toBe('1')
    expect( options.attributes('pokemons') ).toBeTruthy()
  })

  test('should to show PokemonPicture and PokemonOptions', () => {
    const wrapper = shallowMount( PokemonPage, {
      data() {
          return {
              pokemonArr: pokemonsMock(),
              pokemon: pokemonsMock()[0],
              showPokemon: false,
              showAnswer: false,
              message: ''
          }
      }
    })
  })

  test('should check if answer is correct', async() => {
    const wrapper = shallowMount( PokemonPage, {
      data() {
          return {
              pokemonArr: pokemonsMock(),
              pokemon: pokemonsMock()[0],
              showPokemon: false,
              showAnswer: false,
              message: ''
          }
      }
    })

    await wrapper.vm.checkAnswer(1)

    expect(wrapper.find('h2').exists()).toBeTruthy()
    expect( wrapper.vm.showPokemon ).toBe(true)
    expect( wrapper.find('h2').text() ).toBe(`Correcto, ${ pokemonsMock()[0].name }`)
  })
  
})