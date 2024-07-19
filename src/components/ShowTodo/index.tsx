"use client";
import { Schema } from "@/amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { useEffect, useMemo, useState } from "react";

const client = generateClient<Schema>({
  authMode: "userPool",
});

const ShowTodo = ({userID}:{userID:string}) => {
  const [todos, setTodos] = useState<Array<Schema["Service"]["type"]>>([]);


  async function listTodos() {
    // client.models.Service.observeQuery().subscribe({
    //   next: (data) =>  setTodos([...data.items]),
    // });
    const {data} = await client.models.Service.list()
    console.log(data)
    setTodos(data)
  }

  useEffect(() => {
    listTodos();
  }, []);
  

  const deleteTodo = async (id: string) => {
    console.log("delete", id);
    await client.models.Service.delete({ id });
  };
  
  return (
    <div>
      {todos  .map((todo) => (
        <div key={todo.id} onClick={() => deleteTodo(todo.id)}>
          {todo.name},{todo.owner}
        </div>
      ))}
    </div>
  );
};

export default ShowTodo; 
