#onScreenObserver
can use another pure js project

* **require dependencies**
  * **eventemitter3**

## How To Use in React

    useEffect(() => {

    const payload = {
        lastEl: document.querySelector('.footer'), // must be Element
        options: {}, //optional
    };

    const { eventEmitterInstance, injectObserve, unObserve } = onScreenObserver(payload);

    eventEmitterInstance.on('onScreen', (entries: IntersectionObserverEntry) => {
      if (entries.isIntersecting) {
        page = page + 1; // will be count axios calling :)
      }
    });
    }, []); 

## If You want another DOM Detect 
    injectObserve()
    //shoud update payload dom need parameter

## If You want Remover IntersectionObserver
    unObserve()

### onScreenObserver Type

* options Type
  - root: Element | Document | null;
  - rootMargin: string;
  - readonly thresholds: ReadonlyArray<number>;
  - disconnect(): void;
  - observe(target: Element): void;
  - takeRecords(): IntersectionObserverEntry[];
  - unobserve(target: Element): void;

* Payload Type
  - lastEl: Element | null;
  - options?: Record<string, string>;

You can Use For MIT License
[IntersectionObserver Document](https://developer.mozilla.org/ko/docs/Web/API/Intersection_Observer_API)
