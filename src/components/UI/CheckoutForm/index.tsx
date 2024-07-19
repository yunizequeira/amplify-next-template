"use client";
import { useMemo, useState } from "react";
import { useRouter ,useParams, redirect} from "next/navigation";
import { generateClient } from "aws-amplify/api";
import { DatePicker } from "@tremor/react";
import { Schema } from "@/amplify/data/resource";
// import CheckoutClient from "@/app/checkout/[id]/CheckoutClient";
import Link from "next/link";
// import axios from "axios";

const clientGenrate = generateClient<Schema>({
    authMode:'apiKey'
})
export type Props = {
  searchParams?: Record<string, string> | null | undefined;
};
export type Client ={
  name: string;
  email: string;
  phone: string;
  address: string;
  date: string;
  time: string;
  amount: number;
  destination:string
  accept:boolean
}

const CheckoutForm = () => {
    const { id } = useParams()
    // console.log(id)
    const router = useRouter();
    // console.log(router)
    const [client, setClient] = useState<Client>({name: "", email: "", phone: "", address: "", date: "", time: "", amount: 0,destination:"",accept:false} as Client);
    const [error, setError] = useState(false);
    // console.log(client)
    // console.log(error)
    
    
    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log(client)
    
      if(client.name === "" || client.email === "" || client.phone === "" || client.address === "" || client.date === "" || client.time === "" || client.accept === false){
          setError(true)
      }else{
       
         const order = await clientGenrate.models.Order.create({
            tripId:'75733a60-3284-49db-9165-7fa3924bd041',
            name: client.name,
            email: client.email,
            phone: client.phone,
            addresspickup: client.address,
            datepickup: new Date(client.date).toISOString(),
            addressdrop:"mar azul",
            // id:'846f1533-8071-4fdc-bf4a-2dc827254bf4', 
            time:client.time,
            todo:true,
         })
         console.log(order.data)
        setError(false)
        const req = await fetch(`${process.env.NEXT_PUBLIC_HOME_PAGE}/api/services/${id}` )
        const {price,name} = await req.json()
        console.log(price,name)
        // setClient({...client})
        setClient({...client,destination:name, amount: parseInt(price)})
        router.push(`/services/${id}/checkout?showpayment=true`)
        
      }
    };
  return (
    <div className="container mx-auto p-5 lg:p-20 space-y-4 text-slate-600">
    <h2 className="text-center text-4xl lg:text-6xl font-semibold text-blanco">
      Information
    </h2>
    <form className="w-full py-5 mx-auto max-w-2xl space-y-4 px-2 lg:p-10 shadow-lg rounded-md bg-blanco" onSubmit={handleSubmit}>
      {error ? <p className="text-red-500">Please fill in all the fields</p> : null}
      <div className="w-full">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          className="rounded-md bg-gray-900 border-none placeholder:text-slate-600 w-full text-blanco"
          placeholder="Full Name"
          onChange={(e) => setClient({ ...client, name: e.target.value })}
        />
      </div>
      <div className="w-full">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="rounded-md bg-gray-900 border-none placeholder:text-slate-600 w-full text-blanco"
          id="email"
          placeholder="Email"
          onChange={(e) => setClient({ ...client, email: e.target.value })}
        />
      </div>
      <div className="w-full">
        <label htmlFor="phone">Phone</label>
        <input
          type="number"
          className="rounded-md bg-gray-900 border-none placeholder:text-slate-600 w-full text-blanco"
          id="phone"
          placeholder="Phone"
          onChange={(e) => setClient({ ...client, phone: e.target.value })}
        />
      </div>
      <div className="w-full">
        <label htmlFor="pickup">Address Pickup</label>
        <input
          type="text"
          id="pickup"
          className="rounded-md bg-gray-900 border-none placeholder:text-slate-600 w-full text-blanco"
          placeholder="455 Main Street , Las Vegas, Nevada , 89000"
          onChange={(e) => setClient({ ...client, address: e.target.value })}
        />
        <p className="text-xs text-red-500 font-semibold text-end ">
          * This service is available only in Nevada.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2  items-center">
        <div>
          <label htmlFor="date">Date</label>
          <div className="w-full h-10">
            <DatePicker
              className="rounded-md bg-gray-900 border-none h-full placeholder:text-slate-600 w-full"
              id="date"
              onValueChange={(newValue) => setClient({ ...client, date: newValue ? newValue.toISOString() : "" })} // {newValue => console.log(newValue)}
            />
          </div>
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="time">Time</label>
          <input
            id="time"
            type="time"
            className="rounded-md bg-gray-900 border-none placeholder:text-slate-600  h-10 w-full text-blanco"
            onChange={(e) => setClient({ ...client, time: e.target.value })}
          />
        </div>
        <div className="w-full flex items-center gap-1">
          <input
            type="checkbox"
            id="accept"
            className="h-5 w-5"
            onChange={(e) => setClient({ ...client, accept: e.target.checked })}
          />
          <label htmlFor="accept" className="ml-2 font-semibold text-xs ">
            <Link href={"/terms"}>
            I accept the terms and conditions
            </Link>
          </label>
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="w-full bg-blue-900 hover:bg-blue-700 transition-colors duration-300 py-3 rounded-md text-lg text-white uppercase font-bold"
        >
          submit
        </button>
      </div>
    </form>
  </div>
  )
}

export default CheckoutForm
