import { User } from '../interfaces/user.enum';

const users: User[] = [
  {
    id: '1',
    username: 'john_doe',
    password: '$2a$10$DC.k2LiD08mGyE.w.f1Ihek613WPTcX3kgJoXGSCt3Hk8Mkqiju5m', // hashed "password"
    favorites: [{ id: 15, title: 'Tacos au poulet' }],
  },
  {
    id: '2',
    username: 'gael',
    password: '$2a$10$DC.k2LiD08mGyE.w.f1Ihek613WPTcX3kgJoXGSCt3Hk8Mkqiju5m', // hashed "password"
    favorites: [
      { id: 32, title: "Poulet croustillant au miel" },
      { id: 43, title: "Pâtes à la bolognaise" },
    ],
  },
  {
    id: '3',
    username: 'ruix',
    password: '$2a$10$DC.k2LiD08mGyE.w.f1Ihek613WPTcX3kgJoXGSCt3Hk8Mkqiju5m', // hashed "password"
    favorites: [
      { id: 25, title: "Raviolis aux épinards et ricotta" },
      { id: 43, title: "Pâtes à la bolognaise" },
    ],
  },
  {
    id: '4',
    username: 'fufux',
    password: '$2a$10$DC.k2LiD08mGyE.w.f1Ihek613WPTcX3kgJoXGSCt3Hk8Mkqiju5m', // hashed "password"
    favorites: [
      { id: 20, title: "Gnocchis au pesto", },
      { id: 10, title: "Gâteau au chocolat" },
    ],
  }
];

export default users;