const itemData = [
  {
    parentKey: 'hooks',
    itemList: [
      {
        key: 'useResize',
        redirect: 'UseResizePage',
        description: '리사이징을 하게 된다면 브라우저의 innerWidth 값을 반환 합니다.',
      },
      {
        key: 'useScroll',
        redirect: 'UseScrollPage',
        description: '함수를 호출한다면 스크롤 락이 되는 useScroll 커스텀 훅입니다.',
      },
    ],
  },
  {
    parentKey: 'utils',
    itemList: [
      {
        key: 'notification',
        description: '브라우저 노티피케이션을 실행 시켜주는 유틸입니다.',
        redirect: 'NotificationPage',
      },
      {
        key: 'onScreenObserver',
        description: '옵저버를 사용해 인피니티 스크롤을 조금 더 편하게 사용합니다.',
        redirect: 'OnScreenObserver',
      },
      {
        key: 'checkUserAgent',
        description: 'userAgent 를 확인하고, 디바이스를 참조합니다.',
        redirect: 'CheckUserAgent',
      },
    ],
  },
  {
    parentKey: 'components',
    itemList: [
      {
        key: 'fileUpload',
        redirect: 'FileUploadPage',
        description: 'FileUpload를 할수 있는 컴포넌트 입니다.',
      },
      {
        key: 'multipleCheckbox',
        redirect: 'MultipleCheckbox',
        description: 'Multiple Checkbox 할수 있는 컴포넌트 입니다.',
      },
    ],
  },
];

export default itemData;
