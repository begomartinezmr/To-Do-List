import { html, render, Component } from 'https://unpkg.com/htm/preact/standalone.module.js'
import task from "./task.js"
import addtask from "./addtask.js"
import showtasks from "./showtasks.js"


class Principal extends Component {

    constructor(props){
        super(props)

        this.state = {
            taskList : []
        }

        //LocalStorage
        //JSON.stringify([]): converts a JavaScript object or value to a JSON string.
        if(localStorage.getItem("tasks")===null) localStorage.setItem("tasks", JSON.stringify([]))
            this.state.taskList = JSON.parse(localStorage.getItem("tasks"))

    }

    update(old_value, new_value, action){
        let tasks = this.state.taskList
        switch(action){
            case "add":
                tasks.push(new_value)
            break;
            case "save":
                if ( tasks.indexOf(old_value)>=0) tasks[tasks.indexOf(old_value)] = new_value

            break;
            case "delete":
            //The splice() method adds/removes items to/from an array, and returns the removed item(s).
                if ( tasks.indexOf(old_value)>=0) tasks.splice( tasks.indexOf(old_value), 1 );

            break;

        }
        localStorage.setItem("tasks",JSON.stringify(tasks))
        this.setState({taskList: tasks})
    }

    render(){

        return html`
        <header>
            <h1 class="center"><img alt="testimage1" src="test.png"/> To-Do List <img  alt="testimage2" src="test.png"/></h1>

        </header>
        <body>
            <div class="container">
            <div class="superior">
                <${addtask} update=${this.update.bind(this)}/>
            </div>
            <div class="inferior">
                <${showtasks}
                    showtasks=${this.state.taskList}
                    update=${this.update.bind(this)}
                    />
            </div>
            </div>
        </body>`
    }
}


render(html`<${Principal} />`, document.body)
