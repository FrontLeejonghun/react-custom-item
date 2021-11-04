# useScroll

## How To Use 

    // Default scrollLock Event is touchEvent 
    // If You Wanna overflow scroll lock add options type:'overflow'
    scrollLockStatus({type:'overflow',state:false}) // like this

    scrollLockStatus({state:false}) // will be scroll lock by touchEvent
    scrollLockStatus({state:true}) // will be scroll enable by touchEvent
    

## Type
     Options {
        type?: string;  // overflow | touchevent 
        state: boolean;
    }

    {type:string,state:boolean}
