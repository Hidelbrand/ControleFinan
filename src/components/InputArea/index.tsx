import * as C from './styles'
import { Item } from '../../types/Item'

type Props = {
    onAdd: (item: Item) => void;
}


export const InputArea = ({onAdd}: Props) => {

    const handleAddEvent = () => {
        let newItem: Item = {
            date: new Date(2021, 9, 27),
            category: 'food',
            title: 'Item de teste',
            value: 250.00
        }
        onAdd(newItem);
    }

    return (
        <C.Conteiner>
            <C.DataInput>
                <label htmlFor="">Data</label>
                <input type="date" />
            </C.DataInput>
            <C.CategoriaInput>
                <label htmlFor="category">Categoria</label>
                <select name="categorys" id="">
                    <option value="">Alimentação</option>
                    <option value="">Salário</option>
                    <option value="">Aluguel</option>
                </select>
            </C.CategoriaInput>
            <C.TitleInput>
                <label htmlFor="">Título</label>
                <input type="text" />
            </C.TitleInput>
            <C.ValueInput>
                <label htmlFor="">Valor</label>
                <input type="" />
            </C.ValueInput>
            <C.Button>
                Adicionar
            </C.Button>
        </C.Conteiner>
    )
}