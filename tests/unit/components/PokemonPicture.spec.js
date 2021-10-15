import PokemonPicture from '@/components/PokemonPicture';
import { shallowMount } from '@vue/test-utils';
describe('PokemonPicture component', () => {
  test('should to be match with snapshot', ()=> {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 1,
        showPokemon: false
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('should to show hidden image', ()=> {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 100,
        showPokemon: false
      }
    })
    const [img1,img2] = wrapper.findAll('img');
    expect(img1.exists()).toBeTruthy();
    expect(img2).toBe(undefined);
    expect(img1.attributes('src')).toContain('100');
  })

  test('should to show pokemon if showpokemon is true', ()=> {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 100,
        showPokemon: true
      }
    })
    const img1 = wrapper.find('img');
    expect(img1.exists()).toBeTruthy();
    expect(img1.classes('fade-in')).toBe(true);
  })
})