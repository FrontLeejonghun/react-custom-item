import { useCallback, InputHTMLAttributes, ChangeEvent, useRef, useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './BaseFileUpload.module.scss';

const cx = classNames.bind(styles);

type BaseFileUploadProps = {
  fileSize?: number;
  accept?: string;
  disabled?: boolean;
  blobURL?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  resetFile: () => void;
};

type Props = BaseFileUploadProps & InputHTMLAttributes<HTMLInputElement>;

export const BaseFileUpload = ({
  disabled,
  onChange,
  fileSize,
  accept,
  blobURL,
  resetFile,
  ...rest
}: Props) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);

  const dragRef = useRef<HTMLDivElement | null>(null);

  const fileSizeConvert = useCallback((number?: number) => Number(`${number}0000000`), [fileSize]);

  const splitFileExtension = useCallback(() => accept?.split(','), []);

  const checkAcceptExtension = useCallback((fileName: string) => {
    const splitName = fileName.split('.');
    return splitFileExtension()?.includes(splitName[splitName.length - 1]);
  }, []);

  const acceptFileExtension = () => {
    return accept
      ?.split(',')
      ?.map((v: string) => `.${v}`)
      .join();
  };

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement> | any): void => {
      if (file === null) {
        let selectFiles;

        if (e.type === 'drop') selectFiles = e.dataTransfer.files[0];
        else selectFiles = e.target.files[0];

        if (
          checkAcceptExtension(selectFiles.name) &&
          selectFiles.size < fileSizeConvert(fileSize)
        ) {
          setFile(selectFiles);
          onChange && onChange(selectFiles);
        }
      }
    },
    [onChange],
  );

  const handleDragIn = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragOut = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();

    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer!.files) setIsDragging(true);
  }, []);

  const handleDrop = useCallback(
    (e: DragEvent): void => {
      e.preventDefault();
      e.stopPropagation();

      handleChange(e);
      setIsDragging(false);
    },
    [handleChange],
  );

  const initDragEvents = useCallback((): void => {
    if (dragRef.current !== null) {
      dragRef.current.addEventListener('dragenter', handleDragIn);
      dragRef.current.addEventListener('dragleave', handleDragOut);
      dragRef.current.addEventListener('dragover', handleDragOver);
      dragRef.current.addEventListener('drop', handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  const resetDragEvents = useCallback((): void => {
    if (dragRef.current !== null) {
      dragRef.current.removeEventListener('dragenter', handleDragIn);
      dragRef.current.removeEventListener('dragleave', handleDragOut);
      dragRef.current.removeEventListener('dragover', handleDragOver);
      dragRef.current.removeEventListener('drop', handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  useEffect(() => {
    initDragEvents();

    return () => resetDragEvents();
  }, [initDragEvents, resetDragEvents]);

  const reset = () => {
    resetFile();
    setFile(null);
  };
  return (
    <>
      <div
        className={cx('file-upload-wrap', { isDragging, 'is-upload': file !== null })}
        ref={dragRef}
      >
        <input
          id="fileUpload"
          type="file"
          className={cx('file-upload-input')}
          disabled={disabled}
          onChange={handleChange}
          value={''}
          accept={acceptFileExtension()}
          {...rest}
        />
        <label htmlFor="fileUpload" className={cx('file-upload-label')}>
          {file ? <span>{file.name}</span> : <span>파일을 업로드해주세요.</span>}
        </label>
      </div>
      {file && <button onClick={reset}>초기화</button>}
    </>
  );
};
