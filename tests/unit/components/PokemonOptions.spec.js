import PokemonOptions from '@/components/PokemonOptions';
import { shallowMount } from '@vue/test-utils';

import { pokemonsMock } from '../mocks/pokemons.mock'
describe('PokemonOptions component', () => {
    let wrapper

  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: {
        pokemons: pokemonsMock()
      }
    })
  })
  test('should to be match with snapshot', ()=> {
    expect(wrapper.html()).toMatchSnapshot()
  })
  
  test('should to show four options', ()=> {
    const elements = wrapper.findAll('li');
    expect(elements.length).toBe(4)
    expect(elements[0].text()).toBe('bulbasaur')
  })
  
  test('should to emit selection with their parameters when click', ()=> {
    const [li1,li2,li3,li4] = wrapper.findAll('li');

    li1.trigger('click');
    expect(wrapper.emitted('selectionPokemon')).toBeTruthy();
  })
})