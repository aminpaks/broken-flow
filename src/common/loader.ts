import { getInbox } from './inbox';

export const isInboxValid = (inbox: string) => getInbox() === inbox;
