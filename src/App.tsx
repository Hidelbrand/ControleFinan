import { useState, useEffect } from 'react';
import * as C from './Appstyled'
import { Item } from './types/Item';
import { Category } from './types/Category';
import { categories } from './data/categorys';
import { items } from './data/items';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';
import { InputArea } from './components/InputArea';


const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [incone, setIncon] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(()=>{
    let inconCount = 0;
    let expenseCount = 0;

    for(let i in filteredList) {
      if(categories[filteredList[i].category].expense) {
         expenseCount += filteredList[i].value;
      } else {
        inconCount += filteredList[i].value;
      }
    }
    setIncon(inconCount);
    setExpense( expenseCount);

  },[filteredList]);

  const handleManthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        
        <InfoArea 
          currentMonth={currentMonth}
          onMonthChange={handleManthChange}
          income={incone}
          expense={expense}
        />

        <InputArea onAdd={handleAddItem}/>

        <TableArea list={filteredList}/>

      </C.Body>
    </C.Container>
  )
}
export default App;
