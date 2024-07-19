// app/page.tsx

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import {
  AuthGetCurrentUserServer,
  cookiesClient,
} from "@/src/utils/amplify-utils";

import Logout from "@/src/components/Logout";
import ShowTodo from "@/src/components/ShowTodo";
import UploadImage from "@/src/components/UploadImage";
import CreateSevice from "@/src/components/Create";
import CheckoutForm from "@/src/components/UI/CheckoutForm";

async function DashboardPage() {
  const user = await AuthGetCurrentUserServer();
  console.log(user);
  if (user) {
    return (
      <div className="w-full min-h-screen bg-gradient-to-r from-cyan-400 to-pink-400 ">
        {/* <div className="min-h-screen h-screen w-full bg-red-200 relative">
          <video src="https://lvwdbucket.s3.us-east-2.amazonaws.com/moreture/moreture1.webm" autoPlay loop muted className="w-full h-full object-cover"></video>
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center"><h1 className="text-white text-4xl">Moreture</h1></div>
        </div> */}
        <div className="w-full  space-y-4">
          <div className="w-full lg:w-1/2 mx-auto p-2 lg:p-10 space-y-4 rounded-md flex flex-col justify-center items-center ">
          <h1>Hello, {user.signInDetails?.loginId} 👋</h1>
          {user && <Logout />}
          <UploadImage/>
          <CheckoutForm/>

          {/* <form action={addService} className="flex flex-col gap-2">
            <div>
              <label htmlFor="image">Image</label>
              <input
                type="text"
                name="image"
                className="h-10 rounded px-2"
                placeholder="Enter title"
              />
            </div>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="h-10 rounded px-2"
                placeholder="Enter title"
              />
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <input
                type="number"
                name="price"
                className="h-10 rounded px-2"
                placeholder="Enter title"
              />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <input
                type="text"
                name="description"
                className="h-10 rounded px-2"
                placeholder="Enter title"
              />
            </div>

            <button
              type="submit"
              className="p-2 bg-black text-white rounded-md"
            >
              Add Todo
            </button>
          </form> */}
          <CreateSevice/>

          <ShowTodo userID={user.userId} />
        </div>
        </div>
        
       
      </div>
    );
  } else {
   {redirect("/login")};
  }
}

// async function addTodo(data: FormData) {
//   "use server";
//   const title = data.get("title") as string;
//   console.log(title);
//   const todo = await cookiesClient.models.Service.create({
//     image:data.get("image") as string,
//    name: data.get("name") as string,
//     price: Number(data.get("price")),
//     description: data.get("description") as string,
//     available: true,
//   });
//   console.log(todo);
//   revalidatePath("/");
// }

export default DashboardPage;
