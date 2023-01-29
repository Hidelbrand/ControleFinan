import * as C from './styles'


export const InputArea = () => {
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
                <input type="button" value={'Adicionar'}/>
            </C.Button>
        </C.Conteiner>
    )
}