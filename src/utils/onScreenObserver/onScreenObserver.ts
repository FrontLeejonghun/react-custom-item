const EventEmitter = require('eventemitter3');
const eventEmitterInstance = new EventEmitter();

interface Payload {
  lastEl: Element | null;
  options?: Record<string, string>;
}

export const onScreenObserver = (payload: Payload) => {
  new IntersectionObserver(([entries]) => eventEmitterInstance.emit('onScreen', entries), {
    ...payload.options,
  }).observe(payload.lastEl as HTMLParagraphElement);

  return eventEmitterInstance;
};
