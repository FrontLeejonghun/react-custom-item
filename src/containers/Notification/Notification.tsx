import classNames from 'classnames/bind';
import { notification } from 'utils';
import styles from './Notification.module.scss';

const cx = classNames.bind(styles);

export const NotificationPage = () => {
  const { isSupport, onNotification } = notification();

  return (
    <div>
      <div>노티피케이션 지원 여부 {isSupport.toString()}</div>
      <button
        className={cx('notificationON')}
        onClick={async () => {
          await onNotification({
            title: '테스트용입니다.',
          });
        }}
      >
        노티피케이션 띄우기
      </button>
      <span className={cx('description')}>버튼을 누르시면 노티피케이션 api를 호출합니다.</span>
    </div>
  );
};
