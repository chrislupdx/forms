import { createAction } from 'promise-middleware-redux';
import { createNPC } from '../services/NPC';

export const [
  postNPC,
  POST_NPC,
  POST_NPC_PENDING,
  _,
  POST_NPC_ERROR
] = createAction('POST_NPC', createNPC);
