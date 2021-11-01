interface NotificationOptions {
  title: string;
  actions?: NotificationAction[];
  badge?: string;
  body?: string;
  data?: any;
  dir?: NotificationDirection;
  icon?: string;
  image?: string;
  lang?: string;
  renotify?: boolean;
  requireInteraction?: boolean;
  silent?: boolean;
  tag?: string;
  timestamp?: DOMTimeStamp;
  vibrate?: VibratePattern;
}

const notification = (notificationOptions: NotificationOptions) => {
  console.log(notificationOptions);
  let isSupport = true;

  if (typeof window !== 'undefined') {
    if (window.Notification === undefined) isSupport = false;
  }

  const onNotification = async () => {
    if (Notification.permission !== 'denied') await Notification.requestPermission();

    if (Notification.permission === 'granted') new Notification(notificationOptions.title, notificationOptions);
  };
  return { isSupport, onNotification };
};

export default notification;
