# notification util

can use another pure js project

## How To Use

const { isSupport, onNotification } = notification();

isSupport : bool onNotification : void

### call Notification

* options
    - title: string;
    - actions?: NotificationAction[];
    - badge?: string; 
    - body?: string; 
    - data?: any; 
    - dir?: NotificationDirection;
    - icon?: string; 
    - image?: string;
    - lang?:string;
    - renotify?: boolean;
    - requireInteraction?:boolean; 
    - silent?: boolean; 
    - tag?: string;
    - timestamp?:DOMTimeStamp; 
    - vibrate?: VibratePattern;
    - onNotification(options);

onNotification(options)
