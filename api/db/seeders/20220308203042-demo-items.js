'use strict';

module.exports = {
  up: async (queryInterface) =>
    queryInterface.bulkInsert(
      'Items',
      [
        {
          name: 'milk',
          costPerItem: '3.99',
          quantity: '1',
          id: '16ae0137-c734-44aa-aaaf-6bebd47dbbfe',
          createdAt: new Date(),
          updatedAt: new Date(),
          isComplete: false,
          store: 'Target',
          shoppingListId: '82ef4c74-5836-4744-8b16-a9e4e10f514b',
        },
        {
          name: 'bread',
          costPerItem: '5.99',
          quantity: '1',
          id: '591f9094-04b6-4694-ba3d-d659a3356926',
          createdAt: new Date(),
          updatedAt: new Date(),
          isComplete: false,
          store: 'Target',
          shoppingListId: '82ef4c74-5836-4744-8b16-a9e4e10f514b',
        },
        {
          name: 'eggs',
          costPerItem: '6.99',
          quantity: '1',
          id: '2a1f1a54-a933-478d-88a5-3251269bf89a',
          createdAt: new Date(),
          updatedAt: new Date(),
          isComplete: false,
          store: 'Target',
          shoppingListId: '82ef4c74-5836-4744-8b16-a9e4e10f514b',
        },
        {
          name: 'queen bed frame',
          costPerItem: '1200',
          quantity: '1',
          id: '3e128448-db07-4cf6-9893-c74d760abca0',
          createdAt: new Date(),
          updatedAt: new Date(),
          isComplete: false,
          store: 'Burrow',
          shoppingListId: '49957b19-8d9d-4b99-8d04-b2a267f6bbc7',
        },
        {
          name: 'sofa',
          costPerItem: '3500',
          quantity: '1',
          id: '8ab2ba96-9ef1-406a-adbe-cb7c28c4fa67',
          createdAt: new Date(),
          updatedAt: new Date(),
          isComplete: false,
          store: 'Burrow',
          shoppingListId: '49957b19-8d9d-4b99-8d04-b2a267f6bbc7',
        },
        {
          name: 'Peperomia Obtusifolia',
          costPerItem: '28',
          quantity: '1',
          id: 'efe9e261-6986-4a2c-8292-f83bb5b63d1b',
          createdAt: new Date(),
          updatedAt: new Date(),
          isComplete: false,
          store: 'The Sill',
          shoppingListId: '4b73aa29-56e5-4586-ba82-7ebfca54f78f',
        },
        {
          name: 'Echeveria Lola',
          costPerItem: '32',
          quantity: '1',
          id: '538c4517-2b66-4d30-9f46-e56b96c79e56',
          createdAt: new Date(),
          updatedAt: new Date(),
          isComplete: false,
          store: 'The Sill',
          shoppingListId: '4b73aa29-56e5-4586-ba82-7ebfca54f78f',
        },
        {
          name: 'Snake Plant Laurentii',
          costPerItem: '88',
          quantity: '1',
          id: 'f8f8844f-3531-4556-b2f6-43b69f0801e3',
          createdAt: new Date(),
          updatedAt: new Date(),
          isComplete: false,
          store: 'The Sill',
          shoppingListId: '4b73aa29-56e5-4586-ba82-7ebfca54f78f',
        },
        {
          name: 'Ric Rac Cactus',
          costPerItem: '44',
          quantity: '1',
          id: 'c39a4319-ea57-40ca-822b-47fa424f9998',
          createdAt: new Date(),
          updatedAt: new Date(),
          isComplete: false,
          store: 'The Sill',
          shoppingListId: '4b73aa29-56e5-4586-ba82-7ebfca54f78f',

        },
      ],
      {},
    ),
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Items', null, {});
  },
};
