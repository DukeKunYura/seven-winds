import { FC } from "react";
import { useAppSelector } from "../../redux/hooks";
import { useGetPostsQuery } from "../../api/windsApi";

export const Header: FC = () => {
  const link = useAppSelector((state) => state.master.activeLink);
  const { data: posts } = useGetPostsQuery();
  console.log(posts);

  return <div>Header{link}</div>;
};
