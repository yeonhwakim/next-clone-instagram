export default {
  title: 'User',
  name: 'user',
  type: 'document',
  fields: [
    {title: 'Username', name: 'username', type: 'string'},
    {title: 'Name', name: 'name', type: 'string'},
    {title: 'Email', name: 'email', type: 'string'},
    {title: 'Image', name: 'image', type: 'string'},
    {
      title: 'Following',
      name: 'following',
      type: 'array',
      of: {tyep: 'reference', to: {type: 'user'}},
      validation: (Rule) => Rule.unique(),
    },
    {
      title: 'Follower',
      name: 'follower',
      type: 'array',
      of: {tyep: 'reference', to: {type: 'user'}},
      validation: (Rule) => Rule.unique(),
    },
    {
      title: 'Bookmarks',
      name: 'bookmarks',
      type: 'array',
      of: {tyep: 'reference', to: {type: 'post'}},
      validation: (Rule) => Rule.unique(),
    },
  ],
}
