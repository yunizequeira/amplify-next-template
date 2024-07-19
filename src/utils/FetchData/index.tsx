import {cookiesClient} from '@/src/utils/amplify-utils'
export const fetchServices = async (search?:string) => {
  const {data , errors }= await cookiesClient.models.Service.list({
    selectionSet:['name','id',"image","price","description","available","time","typeService","typePrice"],
    authMode:'apiKey'
  });
  if(search){
    return data.filter((service) => service.name.toLowerCase().includes(search.toLowerCase()));
  }
  if(!errors){
    return data;
  }
  
};

export const UpdateService = async ({ id }:{ id: string} ) => {
  // 'use server';
  const { errors, data: newTodo } = await cookiesClient.models.Service.update({
    id: id,
    name: "My new todo",
   description: 'Updated content',
  })
};
