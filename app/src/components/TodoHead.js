import React from 'react'

import myContext from './context'

class TodoHead extends React.Component{
    constructor(props,context){
        super(props)
        this.state = {
            todo:'',
        }

    }
    
    render(){
        console.log('TodoHead.render',this.context)

        // 创建一个ref对象
        const myRef = React.createRef();
        return (
            <div>
                <input 
                type="text" 
                // ref={(el)=>this.input=el} 
                ref={myRef}
                id="todo" 
                value={this.state.todo} 
                onChange={(e)=>{
                    this.setState({
                        todo:e.currentTarget.value
                    })
                }} />
                <button onClick={()=>{
                    this.props.addItem(this.state.todo)
                    
                    // 清空输入框
                    this.setState({
                        todo:''
                    })
                    
                    // 自动获得焦点
                    // this.input.focus();
                    myRef.current.focus();
                    
                }}>添加</button>
            </div>
            // <myContext.Consumer>
            //     {
            //         ({add})=>(
            //             <div>
            //                 <input 
            //                 type="text" 
            //                 ref={myRef}
            //                 value={this.state.todo} 
            //                 onChange={(e)=>{
            //                     this.setState({
            //                         todo:e.currentTarget.value
            //                     })
            //                 }} />
            //                 <button onClick={()=>{
            //                     add(this.state.todo)
            //                     // 清空输入框
            //                     this.setState({
            //                         todo:''
            //                     })
                                
            //                     // 自动获得焦点
            //                     // this.input.focus();
            //                     myRef.current.focus();
                                
            //                 }}>添加</button>
            //             </div>
            //         )
            //     }
            // </myContext.Consumer>
            
        )
    }
}

TodoHead.contextType = myContext

export default TodoHead