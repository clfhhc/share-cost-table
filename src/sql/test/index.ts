import { connectDb } from '../utils/connection';
import { Hello } from '../entities/Hello';

const main = async () => {
  const connection = await connectDb();
  await connection.synchronize(false);
  console.log(connection);
  const hello = new Hello();
  hello.a = 10;
  hello.b = 'Hello World';

  const helloRepository = connection.getRepository(Hello);
  await helloRepository.save(hello);

  return 'yes';
};

export default main;
