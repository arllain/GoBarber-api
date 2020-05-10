import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '../repositories/fakes/FakeUsersReposistory';
import CreateUserService from './CreateUserService';

describe('CreateUser', () => {
  it('should be able to create a new appointment', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const createUser = new CreateUserService(fakeUsersRepository);

    const user = await createUser.execute({
      name: 'Dev',
      email: 'dev@gmail.com',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create a new user with an existing email', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const createUser = new CreateUserService(fakeUsersRepository);

    await createUser.execute({
      name: 'Dev',
      email: 'dev@gmail.com',
      password: '123456',
    });

    expect(
      createUser.execute({
        name: 'Dev',
        email: 'dev@gmail.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
