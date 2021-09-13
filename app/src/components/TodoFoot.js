import React from 'react'

function TodoFoot(props) {
    const { list, renderContent, children } = props;
    const completeList = list.filter(item => item.complete)
    const unCompleteList = list.filter(item => !item.complete)
    return (
        <tfoot>
            <tr>
                <td colSpan="5">
                    {
                        children({ list, completeList, unCompleteList })
                    }
                </td>
            </tr>
        </tfoot>
    )
}


export default TodoFoot