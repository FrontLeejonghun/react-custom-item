const EventEmitter = require('eventemitter3');
const eventEmitterInstance = new EventEmitter();

interface Payload {
  lastEl: Element | null;
  options?: Record<string, string>;
}

export const onScreenObserver = (payload: Payload) => {
  const intersectionOB = new IntersectionObserver(
    ([entries]) => eventEmitterInstance.emit('onScreen', entries),
    { ...payload.options },
  );

  const injectObserve = () => {
    unObserve();
    intersectionOB.observe(payload.lastEl as HTMLParagraphElement);
  };

  const unObserve = () => {
    intersectionOB.unobserve(payload.lastEl as HTMLParagraphElement);
  };

  injectObserve();

  return { eventEmitterInstance, injectObserve, unObserve };
};
