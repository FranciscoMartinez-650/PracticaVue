import {shallowMount} from '@vue/test-utils'
import Counter from '@/components/Counter'
import { wrap } from 'module'

describe('Counter Component', () => {
    

   // test('Debe de realizar las funciones con el snapshot' ,() =>{

    //    const wrapper = shallowMount(Counter)

    //    expect(wrapper.html()).toMatchSnapshot()
    //})
    test('H2 debe de tener el valor por defecto', () =>{
    //se crea una instancia del componente
        const wrapper = shallowMount(Counter)

        expect(wrapper.find('h2').exists()).toBeTruthy()

        const h2Value = wrapper.find('h2')

        //console.log(h2Value).toBe('Counter')
    })

    test('El valor por defecto debe de ser 100 en el p', () =>{

        const wrapper = shallowMount(Counter)
        //const pValue =  wrapper.findAll('p')
        //const pTag = wrapper.findAll('p')
        const value = wrapper.find('[data-testid="counter"]').text()
        //expect(pTag[1].text()).toBe('100')
        expect(value).toBe('100')
    })

})