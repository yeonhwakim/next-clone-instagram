import { client } from "./sanity";

type OAuthUser = {
  id: string;
  name: string;
  email: string;
  username: string;
  image?: string | null;
};

export async function addUser({ id, name, username, email, image }: OAuthUser) {
  return client.createIfNotExists({
    _id: id,
    _type: "user",
    name,
    username,
    email,
    image,
    following: [],
    followers: [],
    bookmarks: [],
  });
}

export async function getUserByUsername(username: string) {
  return client.fetch(
    `*[_type == "user" && username == "${username}"][0]{
      ...,
      "id": _id,
      following[]->{username, image},
      followers[]->{username, image},
      "bookmarks":bookmarks[]->_id
    }`
  );
}
