import { faker } from '@faker-js/faker';

interface MentorShips {
  id: string | number;
  name: string;
  releaseDate: any;
  commission?: string | number | bigint | any;
}

export const mentorships: MentorShips[] = [];

export function createRandomMentorship(): MentorShips {
  return {
    id: faker.datatype.uuid(),
    name: faker.name.firstName(),
    releaseDate: faker.date.future(),
    commission: faker.finance.amount(),
  };
}

Array.from({ length: 4 }).forEach(() => {
  mentorships.push(createRandomMentorship());
});
