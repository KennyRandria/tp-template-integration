import "./Axios.css"
import axios from "axios";

export default function Modal(props){
    const {data,method,setShowModal}=props;
    const formData={};
    let url="https://jsonplaceholder.typicode.com/users";
    url+=(method==="put")?("/"+data.id):("");
    const dataValues = Object.values(data);
