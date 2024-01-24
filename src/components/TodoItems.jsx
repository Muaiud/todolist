import './css/TodoItems.css'
// import tick from './assets/tick.png';
// import nontick from './assets/nontick.png';
// import cross from './assets/cross.jpg';
import ClearIcon from '@mui/icons-material/Clear';
import DoneIcon from '@mui/icons-material/Done';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
const TodoItems = ({ no, display, text, setTodo }) => {

    const deleteTodo = (no)=>{
        let data = JSON.parse(localStorage.getItem("todo"));
        data = data.filter((todo)=> todo !== no);
        setTodo(data)

    }

    const toggle = (no) => {
        let data = JSON.parse(localStorage.getItem("todo"));
        for (let i = 0; i < data.length;i++) {
            if (data[i].no === no) {
                if (data[i].display === "") {
                    data[i].display = "line-through";
                }
                else {
                    data[i].display = "";
                }
                break;
            }
        }
        setTodo(data);
    }

    return (
        <div className='todoitems'>
            <div className={`todoitems-container ${display}`} onClick={()=> {toggle(no)}}>
                {display === ""?<PanoramaFishEyeIcon />:<DoneIcon />}
                <div className="todoitems-text">{text}</div>
            </div>
            <ClearIcon className='todoitems-cross-icon'  onClick={()=>{deleteTodo(no)}}/>
        </div>
    )
}

export default TodoItems
