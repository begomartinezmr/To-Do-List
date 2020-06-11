import { html, render, Component } from 'https://unpkg.com/htm/preact/standalone.module.js'
import task from './task.js'

class showtasks extends Component{
    render(){
        var taskList = this.props.showtasks.map( (taskName)=> (
            html `
                <${task}
                    input=${taskName}
                    update=${this.props.update.bind(this)}/>
            `
        ))
        return taskList;
    }

}

export default showtasks;
