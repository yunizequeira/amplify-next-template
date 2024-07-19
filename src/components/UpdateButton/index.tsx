'use client'
import { generateClient } from 'aws-amplify/data';
import {UpdateService} from '@/src/utils/FetchData'
import { type Schema } from '@/amplify/data/resource'

const client = generateClient<Schema>({
    authMode: 'userPool',
});

const UpdateButton = ({id}:{id:string}) => {
    const UpdateService = async ({ id }:{ id: string} ) => {
        // 'use server';
        const { errors, data: newTodo } = await client.models.Service.update({
          id: id,
          name: "My new todo",
         description: 'Updated content',
        })
        console.log(errors, newTodo)
      };
  return (
    <button className="px-2 bg-white text-black" onClick={() => UpdateService({id:id})}>
      Update
    </button>
  )
}

export default UpdateButton
