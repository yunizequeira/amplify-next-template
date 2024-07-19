// "use client";
import { data } from "@/amplify/data/resource";
import ShowTodo from "@/src/components/ShowTodo";
import { Authenticator } from "@aws-amplify/ui-react";
import { generateClient } from "aws-amplify/api";
import { list } from "aws-amplify/storage";
import { create } from "domain";
import { METHODS } from "http";
import { useEffect } from "react";
import { fetchServices } from "@/src/utils/FetchData";
import MediaCard from "@/src/components/UI/Card";

const client = generateClient();
const ListPage = async () => {
  const { data } = await fetchServices();
  console.log(data[0]);
  return (
    <div className="container mx-auto grid lg:grid-cols-4 gap-4 mt-10">
      {data.length > 0 &&
        data.map((service) => (
          <MediaCard key={service.id} data={service ? service : {}} />
        ))}
    </div>
  );
};

export default ListPage;
