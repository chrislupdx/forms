import { post } from './request';


export const createNPC = npc => post('api/v1/NPC', npc);