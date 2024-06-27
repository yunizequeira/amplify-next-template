// app/page.tsx

import { revalidatePath } from "next/cache";

import {
  AuthGetCurrentUserServer,
  cookiesClient,
} from "@/src/utils/amplify-utils";

import Logout from "@/src/components/Logout";
import Login from "../components/Login";
import ShowTodo from "../components/ShowTodo";

async function App() {
  const user = await AuthGetCurrentUserServer();
  console.log(user);
  if (user) {
    return (
      <div className=" min-h-screen bg-gradient-to-r from-cyan-400 to-pink-400 flex justify-center items-center">
        <div className=" p-10 space-y-4 bg-slate-900/50 rounded-md">
          <h1>Hello, {user.signInDetails?.loginId} 👋</h1>
          {user && <Logout />}
          <form action={addTodo} className="flex flex-col gap-2">
            <label htmlFor="title">Tittle</label>
            <input
              type="text"
              name="title"
              className="h-10 rounded px-2"
              placeholder="Enter title"
            />
            <button
              type="submit"
              className="p-2 bg-black text-white rounded-md"
            >
              Add Todo
            </button>
          </form>

          <ShowTodo />
        </div>
      </div>
    );
  } else {
    return <Login />;
  }
}

async function addTodo(data: FormData) {
  "use server";
  const title = data.get("title") as string;
  await cookiesClient.models.Todo.create({
    content: title,
  });
  revalidatePath("/");
}

export default App;
