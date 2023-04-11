import { useRouter } from "next/router";

const dynamicComponent = () => {
  const router = useRouter();
  console.log(router);
  return <div>{router.query.id}페이지입니다.</div>;
};
export default dynamicComponent;
