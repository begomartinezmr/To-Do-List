import { html, render, Component } from 'https://unpkg.com/htm/preact/standalone.module.js'

class addtask extends Component{

    constructor(props){
        super(props)


        this.state = {
            input : "",
            visible : false,
            update : props.update

        }
    }

    render(){
        if(this.state.visible){
            return html `
                        <button class="addButton" onclick=${ this.addTask.bind(this)} > <img alt="plusimage" src="plus.png"/> Add Task </button>
                        <div class="addnewtask">
                        <input id="task" type="text" />
                        </div>
                        <div class="addnewtask">
                        <button onclick=${ this.cancelTask.bind(this)} > <img alt="cancelimage" src="cancel.png"/> </button>
                        <button onclick=${ this.saveTask.bind(this)} > <img alt="saveimage" src="save.png"/></button>
                        </div>
                        `
        }else{
            return html `<button class="addButton" onclick=${ this.addTask.bind(this)} > Add Task </button> `
        }
    }


    saveTask(event){
        event.preventDefault()
        var taskName = document.getElementById("task").value
        this.setState({input : taskName})

        if(taskName !== ""){
            this.state.update("",taskName,"add")
            this.setState({visible:false})
        }
    }

    cancelTask(event){
        event.preventDefault()
        this.setState({visible:false})
    }

    addTask(event){
        //preventDefault is called on the event when submitting the form to prevent a browser reload/refresh
        event.preventDefault()
        this.setState({visible: (this.state.visible ? false : true) })
    }
}

export default addtask;
