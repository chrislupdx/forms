import { postNPC, POST_NPC, POST_NPC_PENDING } from './postNPC';

jest.mock('', () => ({
  createNPC() {
    return Promise.resolve([]);
  }
}));

describe('NPC actions', () => {
  it('posts an NPC', () => {
    const NPCAction = postNPC({
      name: 'name'
    });

    expect(NPCAction).toEqual({
      type: POST_NPC,
      pendingType: POST_NPC_PENDING,
      fulfilledType: 'POST_NPC_FULFILLED',
      rejectedType: 'POST_NPC_REJECTED',
      payload: expect.any(Promise)
    });
  });
});
