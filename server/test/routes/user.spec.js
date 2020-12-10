import supertest from 'supertest';
import { validate } from 'uuid';
import user from '../../routes/user';

it('should return created user object with valid uuid', async () => {
  const payload = {
    name: 'userA',
    email: 'lg@lgror.no',
    role: 'user',
    password: 'bestPassord123',
  };

  const response = await supertest(user)
    .post('/user/register')
    .send(payload)
    .expect(201);

  const isValidUUID = validate(response.body.id);

  expect(isValidUUID).toEqual(true);
  expect(response.body.name).toEqual(payload.name);
  expect(response.body.email).toEqual(payload.email);
  expect(response.body.role).toEqual(payload.role);
  expect(response.body.password).toEqual(payload.password);
});
