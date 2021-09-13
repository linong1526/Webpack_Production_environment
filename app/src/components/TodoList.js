import React from 'react'

import TodoHead from './TodoHead'
import TodoBody from './TodoBody'
import TodoFoot from './TodoFoot'

import myContext from './context'

class TodoList extends React.Component {
    constructor() {
        // 在类继承中，如果定义了constructor，内部必须手动调用super父类
        super();

        // 定义组件状态：state
        this.state = {
            msg: 'hello',
            users: ['laoxie', 'tiantian', 'jingjing', 'ouyang'],
            list: [{
                id: 1,
                todo: '赚他一个亿津巴布韦币',
                complete: true,
                checked: false,
                addtime: Date.now() + 3600 * 1000
            }, {
                id: 2,
                todo: '迎娶白富美，达到人生巅峰',
                complete: false,
                checked: false,
                addtime: Date.now() + 3600 * 1000 * 5
            }, {
                id: 3,
                todo: '出任CEO，达到疯癫状态',
                complete: false,
                checked: true,
                addtime: Date.now() + 3600 * 1000 * 10
            }]
        }

        // 改变this指向
        this.addItem = this.addItem.bind(this)
        this.removeItem = this.removeItem.bind(this)
        this.completeItem = this.completeItem.bind(this)
    }

    // 自定义函数：这里定义的方法会自动成为原型中的方法
    // 添加
    addItem(todo) {
        // console.log('addItem',todo,this)
        const newItem = {
            id: parseInt(Math.random() * 100000),
            todo,
            complete: false,
            checked: false,
            addtime: Date.now()
        }
        // vue: this.list.unshift()

        // 覆盖式修改
        this.setState({
            list: [newItem, ...this.state.list]
        })
    }

    removeItem(id) {
        const { list } = this.state;

        const newList = list.filter(item => item.id !== id);

        this.setState({
            list: newList
        })
    }

    completeItem(id) {
        return () => {
            const { list } = this.state;

            const newList = list.map(item => {

                if (item.id === id) {
                    item.complete = true;
                }
                return item;
            })
            console.log('newList', newList)
            this.setState({
                list: newList
            })

        }
    }
    render() {
        // console.log('TodoList=',this);
        return (
            <myContext.Provider value={{
                remove:this.removeItem,
                complete:this.completeItem,
                add:this.addItem
            }}>
                <div>
                    <TodoHead addItem={this.addItem} />
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>待办事项</th>
                                <th>添加事件</th>
                                <th>是否完成</th>
                                <th>操作</th>
                            </tr>
                        </thead>

                        <TodoBody
                            list={this.state.list}
                            removeItem={this.removeItem}
                            completeItem={this.completeItem}
                        />
                        <TodoFoot list={this.state.list}>
                            {
                                ({ list, completeList, unCompleteList }) => {
                                    return <div>
                                        total: {list.length}，complete:{completeList.length}，uncomplete:{unCompleteList.length}
                                    </div>
                                }
                            }
                        </TodoFoot>
                    </table>
                </div>
            </myContext.Provider>
        )
    }
}

export default TodoList;