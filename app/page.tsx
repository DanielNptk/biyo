import { Data } from "@/shared/types";
import Feed from "./Feed"
import Filter from "./Filter"
import Nav from "./Nav"
import prisma from "@/prisma/client";

async function getProducts() {
  const res = await fetch(`${process.env.BASE_URL}/api/getProducts`, { next: {revalidate: 5} });

  if(!res.ok) {
    console.log(res);
  }
  return res.json();
}

export default async function Home() {
  const data: Data[] = await getProducts();

  return (
    <body className={`mx-10 mt-3`}>
      <Nav/>
      <Filter/>
      <Feed data={data}/>
    </body>
  )
}
