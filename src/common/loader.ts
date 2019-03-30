import { getInbox, getOutbox } from './inbox';

export const isInboxValid = (inbox: string) => getInbox() === inbox;

export const isOutboxValid = (outbox: string) => getOutbox() === outbox;
