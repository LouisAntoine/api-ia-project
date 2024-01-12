import { NextApiRequest, NextApiResponse } from 'next';
import { compare, hash } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../interfaces/user.enum';
import users from '../data/users';

const SECRET_KEY = 'your-secret-key'; // Change this to a strong secret key

const hashPassword = async (password: string): Promise<string> => {
  const hashedPassword = await hash(password, 10);
  return hashedPassword;
};

const generateToken = (userId: string): string => {
  return jwt.sign({ userId }, SECRET_KEY, { expiresIn: '1h' });
};

const findUserByUsername = (username: string): User | undefined => {
  return users.find((user) => user.username === username);
};

export const authenticateUser = async (username: string, password: string): Promise<User | null> => {
  const user = findUserByUsername(username);

  if (!user) {
    console.error('User not found');
    return null; // User not found
  }

  const passwordMatch = await compare(password, user.password);

  if (!passwordMatch) {
    console.error('Incorrect password');
    return null; // Incorrect password
  }

  return user;
};

let loggedIn = false;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { action, username, password, recipeId, ratings } = req.body;

    switch (action) {
      case 'login':
        const user = await authenticateUser(username, password);

        if (user) {
          loggedIn = true;
          localStorage.setItem('user', JSON.stringify(user));
          const token = generateToken(user.id);
          console.log('User logged in');
          res.status(200).json({ success: true, token, user });
        } else {
          res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
        break;

      case 'logout':
        loggedIn = false;
        res.status(200).json({ success: true });
        break;

      case 'addToFavorites':
        if (loggedIn) {
          const authorizationHeaderFav = req.headers.authorization;

          if (authorizationHeaderFav) {
            const { userId } = jwt.verify(authorizationHeaderFav as string, SECRET_KEY) as { userId: string };
            const currentUser = users.find((user) => user.id === userId);

            if (currentUser) {
              currentUser.favorites.push(recipeId);

              res.status(200).json({ success: true });
            } else {
              res.status(401).json({ success: false, message: 'User not found' });
            }
          } else {
            res.status(401).json({ success: false, message: 'Authorization header missing' });
          }
        } else {
          res.status(401).json({ success: false, message: 'User not logged in' });
        }

        break;

      default:
        res.status(400).json({ success: false, message: 'Invalid action' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
};
