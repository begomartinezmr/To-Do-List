import { html, render, Component } from 'https://unpkg.com/htm/preact/standalone.module.js'

class task extends Component{

    constructor(props) {
        super(props)
        this.state = {
            input: props.input,
            old_input: props.input,
            visible: false,
            update : props.update

        }
    }

    render(){
        var taskName = this.props.input;
        if(!this.state.visible){
           return html `<button onclick=${ this.clickTask.bind(this)} > ${taskName} </button> `
        }else{
             return html `
                        <div class="editTask">
                        <img alt="pencilimage" src="pencil.png"/>
                        <input id="tarea_in" type="text" value=${taskName} />
                        </div>
                        <div class="editTask">
                        <button onclick=${ this.cancelTask.bind(this)} ><img alt="cancelimage" src="cancel.png"/> </button>
                        <button onclick=${ this.saveTask.bind(this)} > <img alt="saveimage" src="save.png"/> </button>
                        <button onclick=${ this.deleteTask.bind(this)} > <img alt="deleteimage" src="basura.png"/></button>
                        </div>
                        `
        }
    }



    cancelTask(event){
        event.preventDefault()
        this.setState({visible:false})
    }

    saveTask(event){
        event.preventDefault()
        let newTaskName = document.getElementById("tarea_in").value

        if(newTaskName !== ""){
            this.setState({
                visible: false,
                old_input:newTaskName,
                input:newTaskName
            });

            this.state.update(this.state.old_input,newTaskName,"save")


        }
    }

    deleteTask(event){
        event.preventDefault()

        this.setState({visible:false})

        this.state.update(this.state.old_input,this.state.input,"delete")


    }

    clickTask(event){
        event.preventDefault()
        this.setState({visible: (this.state.visible ? false : true) })

    }

}

export default task;
