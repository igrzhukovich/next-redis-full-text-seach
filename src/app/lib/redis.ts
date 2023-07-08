import { createClient } from 'redis';
import { Schema, Repository } from 'redis-om';

const client = createClient({ url: process.env.REDIS_URL });

async function connect() {
  if (!client.isOpen) {
    await client.connect();
  }
}

const schema = new Schema(
  'cars',
  {
    make: { type: 'string' },
    model: { type: 'string' },
    image: { type: 'string' },
    description: { type: 'text' },
  },
  {
    dataStructure: 'JSON',
  }
);

export async function createCar(data) {
  await connect();

  const repository = new Repository(schema, client);

  const id = await repository.save(data);
  return id;
}