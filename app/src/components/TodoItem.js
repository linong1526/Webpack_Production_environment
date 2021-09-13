import React from 'react'
import myContext from './context'
console.log('myContext',myContext)

function TodoItem({item,idx,removeItem,completeItem}) {
    
    return (
        // <tr>
        //     <td>{idx+1}</td>
        //     <td>{item.todo}</td>
        //     <td>{item.addtime}</td>
        //     <td>{item.complete ? '是' : '否'}</td>
        //     <td>
        //         <button onClick={completeItem(item.id)}>完成</button>    
        //         <button onClick={removeItem.bind(null,item.id)}>删除</button>
        //     </td>
        // </tr>
        <myContext.Consumer>
        {
            ({remove,complete})=>{
                return (
                    <tr>
                        <td>{idx+1}</td>
                        <td>{item.todo}</td>
                        <td>{item.addtime}</td>
                        <td>{item.complete ? '是' : '否'}</td>
                        <td>
                            <button onClick={complete(item.id)}>完成</button>    
                            <button onClick={remove.bind(null,item.id)}>删除</button>
                        </td>
                    </tr>
                )
            }
        }
        </myContext.Consumer>
    )
}


export default TodoItem