import { User } from "@/model/user";
import Avatar from "./Avatar";

type Props = {
  user: User;
};

export default function Sidebar({ user: { name, username, image } }: Props) {
  return (
    <>
      <div>
        {image && <Avatar imege={image} />}
        <p>{name}</p>
        <p>{username}</p>
      </div>
      <p>About ・ Help ・ Press ・ API</p>
      <p>@Copyright</p>
    </>
  );
}
