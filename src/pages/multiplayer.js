import { useState, useEffect } from "react";
import firebase from "firebase/app"
import Header from "../components/Header/Header";
import TaskManager from "../components/Todolist/todo";
import { Redirect } from "react-router";

function Multiplayer() {
    // Task state has to be lifted to be at the App level
    // because Header also needs to know the task state to display
    // no. of undone tasks. It cannot be contained within TaskManager
    // as child components cannot pass props to their parent components.
    const [tasks, setTasksState] = useState([]);
    var user = firebase.auth().currentUser;
  
    function setTasks(newTasks) {
      setTasksState(newTasks);
    }
  
    useEffect(() => {
      const uid = firebase.auth().currentUser?.uid;
      const db = firebase.firestore();
      const docRef = db.collection("/tasks").doc(uid);
  
      docRef.get().then((doc) => {
        if (doc.exists) {
          setTasksState(doc.data().tasks);
        } else {
          setTasksState([]);
        }
      });
    }, []);
  
       if (!user)
       {
       return ( <Redirect to='/restricted'/>)
       }

    return (
      <>
        <Header tasks={tasks} />
        <main>
          <TaskManager tasks={tasks} setTasks={setTasks} />
        </main>
      </>
    );
}

export default Multiplayer;
