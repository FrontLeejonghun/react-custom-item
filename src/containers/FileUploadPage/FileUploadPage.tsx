import { ChangeEvent } from 'react';
import classNames from 'classnames/bind';
import { BaseFileUpload } from 'components';
import styles from './FileUploadPage.module.scss';

const cx = classNames.bind(styles);

export const FileUploadPage = () => {
  const dd = (e: ChangeEvent<HTMLInputElement> | any): void => {
    let selectFiles;
    if (e.type === 'drop') selectFiles = e.dataTransfer.files;
    else selectFiles = e.target.files[0];
    if (selectFiles.length < 1) {
      for (const file in selectFiles) {
        console.log('ddd', file);
      }
    } else {
      console.log('ddd', selectFiles);
    }
  };

  return (
    <div className={cx('file-upload-page-wrap')}>
      <BaseFileUpload
        onChange={dd}
        fileSize={10}
        multiple={true}
        accept={'mp3,aac,ac3,ogg,flac,wav,avi,mp4,mov,wmv,flv,mkv,svg'}
      />
    </div>
  );
};
