import { ChangeEvent, useState, useCallback } from 'react';
import classNames from 'classnames/bind';
import { BaseFileUpload } from 'components';
import { fileToBlob } from 'utils';
import styles from './FileUploadPage.module.scss';

const cx = classNames.bind(styles);

export const FileUploadPage = () => {
  const { makeFileToBlob, revokeBlobURL } = fileToBlob();
  const [blobURL, setBlobURL] = useState<string>('');

  const getFile = (file: ChangeEvent<HTMLInputElement> | any): void => {
    setBlobURL(makeFileToBlob(file));
  };

  const resetFile = useCallback(() => {
    revokeBlobURL(blobURL);
    setBlobURL('');
  }, []);

  return (
    <div className={cx('file-upload-page-wrap')}>
      <BaseFileUpload
        blobURL={blobURL}
        disabled={blobURL !== ''}
        resetFile={resetFile}
        onChange={getFile}
        fileSize={10}
        accept={'jpg,png,jpeg,svg'}
      />
      <p>{blobURL}</p>
    </div>
  );
};
