import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Thanh Admin',
    email: 'ngocthanh19011998@gmail.com',
    password: bcrypt.hashSync('190198', 10),
    isAdmin: true
  },
  {
    name: 'Thanh DN',
    email: 'thanh211561@nuce.edu.vn',
    password: bcrypt.hashSync('190198', 10),
  },
  {
    name: 'Thanh Fabbier',
    email: 'example@gmail.com',
    password: bcrypt.hashSync('190198', 10),
  },
]
export default users;