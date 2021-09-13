import React from 'react'
import TodoItem from './TodoItem'

function TodoBody({list,removeItem,completeItem}) {
    return (
        <tbody>
            {
                list.map((item,idx)=>(
                    <TodoItem 
                        key={item.id} 
                        item={item} 
                        idx={idx}
                        removeItem={removeItem}
                        completeItem={completeItem}
                    ></TodoItem>
                ))
            }
        </tbody>
    )
}

export default TodoBody