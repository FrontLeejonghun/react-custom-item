# useScrollLock

## How To Use 
    scrollLock() //shoud be scrollLock 
    scrollAllow() //shoud be scrollAllow
## example
    import { NextPage } from 'next';
    import { useScrollLock } from 'hooks';
    
    const Home: NextPage = () => {
    const { scrollLock, scrollAllow } = useScrollLock();
        return (
            <>
                <button onClick={scrollLock}>스크롤 락</button>
                <button onClick={scrollAllow}>스크롤 얼로우</button>
            </>
        );
    };
    
    export default Home;

## Type
    scrollLock : void
    scrollAllow : void
