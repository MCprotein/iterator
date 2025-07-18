import { delay } from './4-1.delay';

function getRandomValue<T>(a: T, b: T): T {
  const randomIndex = Math.floor(Math.random() * 2);
  return randomIndex === 0 ? a : b;
}

type User = {
  name: string;
};

function getFriends(): Promise<User[]> {
  return delay(getRandomValue(60, 6_000), [
    { name: 'Marty' },
    { name: 'Michael' },
    { name: 'Sarah' }
  ]);
}

async function main() {
  const result = await Promise.race([getFriends(), delay(5000, 'timeout')]);

  if (result === 'timeout') {
    console.log('현재 네트워크 환경이 좋지 않습니다.');
  } else {
    const friends = result as User[];
    console.log(
      '친구 목록 렌더링: ',
      friends.map(({ name }) => `<li>${name}</li>`)
    );
  }
}

main();
