import { useRouter } from "next/router";

export default function Posts() {
  const router = useRouter();

  return (
    <>
      <h1>Posts {router.query.id}</h1>
      <p>{router.asPath}</p>
    </>
  );
}
