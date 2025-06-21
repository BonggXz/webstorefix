import { promises as fs } from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'db.json');

async function read() {
  try {
    const data = await fs.readFile(file, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    if (err.code === 'ENOENT') {
      const init = { users: [] };
      await fs.writeFile(file, JSON.stringify(init, null, 2));
      return init;
    }
    throw err;
  }
}

async function write(data) {
  await fs.writeFile(file, JSON.stringify(data, null, 2));
}

export async function getUserByEmail(email) {
  const db = await read();
  return db.users.find(u => u.email === email);
}

export async function getUserById(id) {
  const db = await read();
  return db.users.find(u => u.id === id);
}

export async function createUser(user) {
  const db = await read();
  db.users.push(user);
  await write(db);
  return user;
}
