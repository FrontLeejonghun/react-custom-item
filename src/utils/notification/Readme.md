# notification util


## How To Use

    const { isSupport, onNotification } = notification();

    isSupport // should be Boolean
    onNotification(options) // when You Wanna Call Then Call in Browser Notification API

## Type
    options {
      title: string;
      actions?: NotificationAction[];
      badge?: string;
      body?: string;
      data?: any;
      dir?: NotificationDirection;
      icon?: string;
      image?: string;
      lang?:string;
      renotify?: boolean;
      requireInteraction?:boolean;
      silent?: boolean;
      tag?: string;
      timestamp?:DOMTimeStamp;
      vibrate?: VibratePattern;
    }
  

