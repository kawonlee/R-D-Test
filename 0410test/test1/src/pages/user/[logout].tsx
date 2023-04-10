import { useRouter } from "next/router";

const logoutComponent = () => {
  const router = useRouter();
  return <div>{router.query.logout}페이지입니다.</div>;
};
export default logoutComponent;
