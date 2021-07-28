import Layout from "@/components/layout";

import { useRouter } from "next/router";

function getRouteData() {
  //const router = useRouter();
  const { asPath, route, query } = useRouter();
  const { id } = query;
  //const q = query;
  console.log("router");
  //console.log(r());
  return asPath;
}

console.log("como escrever no console?");

export default function About({ children }) {
  const router = useRouter();

  return (
    <>
      <Layout>
        <h1>Write new post</h1>
        {getRouteData()}
      </Layout>
    </>
  );
}
