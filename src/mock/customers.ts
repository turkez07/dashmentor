import { faker } from '@faker-js/faker';

interface Customer {
  id: string | number;
  name: string;
  lastName: string;
  email: string;
  status?: string;
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
    status: 'Active',
    phone: faker?.phone?.number,
    address: {
      street: faker.address.street(),
      city: faker.address.city(),
      country: faker.address.country(),
      number: faker.address.buildingNumber(),
      complement: null,
    },
    thumbnailUrl: faker.internet.avatar(),
  };
}

Array.from({ length: 4 }).forEach(() => {
  customers.push(createRandomCustomer());
});
