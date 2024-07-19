import { revalidatePath } from "next/cache";
import { cookiesClient } from "@/src/utils/amplify-utils";
// export async function addService(data: FormData) {
//     "use server";
//     console.log(data)
//     const todo = await cookiesClient.models.Service.create({
//       image:data.get("image") as string,
//      name: data.get("name") as string,
//       price: Number(data.get("price")),
//       description: data.get("description") as string,
//       available: true,
//     });
//     console.log(todo);
//     revalidatePath("/");
//   }