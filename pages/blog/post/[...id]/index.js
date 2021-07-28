import Layout from "@/components/layout";

import { useRouter } from "next/router";

//const router = useRouter();

//function r() {
//  const router = useRouter();
//  return router;
//}

//const query = () => useRouter().query;
//const { asPath, route, query } = useRouter();

export default function PostID({ children }) {
  console.log("router");
  //console.log(r());
  //const q = query;
  //const router = useRouter();
  const { asPath, route, query } = useRouter();
  const { id } = query;
  return (
    <>
      <Layout>
        <h1>Post id</h1>
        <ul>
          <li>{asPath}</li>
          <li>{route}</li>
          <li>{id}</li>
        </ul>
      </Layout>
    </>
  );
}
