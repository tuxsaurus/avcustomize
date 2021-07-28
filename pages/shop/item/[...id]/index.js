import Layout from "@/components/layout";

import { useRouter } from "next/router";

//import Tshirt from "../../prod/tshirt";
import Tshirt from "../tshirt";

function getRouteData() {
  //const router = useRouter();
  const { asPath, route, query } = useRouter();
  const { id } = query;
  //const q = query;
  console.log("router");
  //console.log(r());
  return asPath;
}

async function callExternalApi() {
  // Call an external API endpoint to get posts
  console.log("Call an external API endpoint to get posts");
  const res = await fetch("https://60005951cb21e10017af8d1d.mockapi.io/posts");
  const posts = await res.json();
  console.log(posts);

  return posts;
}

console.log("como escrever no console?");

export default function Item({ stars }) {
  const router = useRouter();

  callExternalApi();

  if (getRouteData() === "/shop/item/tshirt") {
    return (
      <>
        <Layout>
          <h1>Item id</h1>
          <h2> Camisa saindo </h2>
        </Layout>
      </>
    );
  }

  return (
    <>
      <Layout>
        <h1>Item id</h1>
        {getRouteData()}
        <div>Next stars: {stars}</div>
      </Layout>
    </>
  );
}

// This function gets called at build time
//export async function getStaticPaths() {
// Call an external API endpoint to get posts
//const res = await fetch("https://60005951cb21e10017af8d1d.mockapi.io/posts");
//const posts = await res.json();
//console.log(posts);
// https://60005951cb21e10017af8d1d.mockapi.io/posts
// Get the paths we want to pre-render based on posts
//const paths = [1];
//const paths = posts.map((post) => ({
//  params: { posts },
//}));
//https://60005951cb21e10017af8d1d.mockapi.io/:endpoint
//const paths = { params: { id: "1" } };
// We'll pre-render only these paths at build time.
// { fallback: false } means other routes should 404.
//return { paths: ["shop/item/asd"], fallback: false };
//return;
//}

//export async function getStaticProps(context) {
//  return {
//    props: { a: 333 }, // will be passed to the page component as props
//  };
//}

Item.getInitialProps = async (ctx) => {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const json = await res.json();
  return { stars: json.stargazers_count };
};
