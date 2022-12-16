import { faker } from '@faker-js/faker';

interface Customer {
  id: string | number;
  name: string;
  lastName: string;
  email: string;
  commission?: string | number | bigint | any;
  phone?: string | any;
  address: {
    street: string;
    city: string;
    country: string;
    number: string;
    complement?: string | null;
  },
  thumbnailUrl?: string;
}

export const customers: Customer[] = [];

export function createRandomCustomer(): Customer {
  return {
    id: faker.datatype.uuid(),
    name: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    commission: faker.finance.amount(),
    phone: faker?.phone?.number(),
    address: {
      street: faker.address.street(),
      city: faker.address.city(),
      country: faker.address.country(),
      number: faker.address.buildingNumber(),
      complement: null,
    },
    thumbnailUrl: faker.image.imageUrl(),
  };
}

Array.from({ length: 4 }).forEach(() => {
  customers.push(createRandomCustomer());
});
