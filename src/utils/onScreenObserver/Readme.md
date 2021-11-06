# onScreenObserver

* **require dependencies**
  * **eventemitter3**

## How To Use in React Project
    useEffect(() => {

    const payload = {
        lastEl: document.querySelector('.footer'), // must be Element
        options: {}, //optional
    };

    const eventEmitterInstance = onScreenObserver(payload);

    eventEmitterInstance.on('onScreen', (entries: IntersectionObserverEntry) => {
      if (entries.isIntersecting) {
        page = page + 1; // will be count axios calling :)
      }
    });
    }, []); 

## How To Use in TS Project

    const payload = {
        lastEl: document.querySelector('.footer'), // must be Element
        options: {}, //optional
    };

    const eventEmitterInstance = onScreenObserver(payload);

    eventEmitterInstance.on('onScreen', (entries: IntersectionObserverEntry) => {
      if (entries.isIntersecting) {
        page = page + 1; // will be count axios calling :)
      }
    });


## Type

    Payload {
      lastEl: Element | null,
      options?: Record<string, string>,
    }

    options = {
      root: Element | Document | null,
      rootMargin: string,
      readonly thresholds: ReadonlyArray<number>,
      disconnect(): void,
      observe(target: Element): void,
      takeRecords(): IntersectionObserverEntry[],
      unobserve(target: Element): void,
    }


You can Use For MIT License
[IntersectionObserver Document](https://developer.mozilla.org/ko/docs/Web/API/Intersection_Observer_API)
