import {
  useCallback,
  InputHTMLAttributes,
  ChangeEvent,
  forwardRef,
  useRef,
  useState,
  useEffect,
} from 'react';
import classNames from 'classnames/bind';
import styles from './BaseFileUpload.module.scss';

const cx = classNames.bind(styles);

type Props = BaseFileUploadProps & InputHTMLAttributes<HTMLInputElement>;

interface BaseFileUploadProps {
  fileSize?: number;
  autoComplete?: boolean;
  accept?: string;
  multiple: boolean;
}

export const BaseFileUpload = forwardRef<HTMLInputElement, Props>(
  ({ className, disabled, onChange, fileSize, multiple, accept, ...rest }, ref) => {
    const classes = cx('file-input', className, { disabled });
    const [files, setFiles] = useState<File[]>([]);

    const [isDragging, setIsDragging] = useState<boolean>(false);

    const dragRef = useRef<HTMLDivElement | null>(null);

    const fileSizeConvert = useCallback(
      (number?: number) => Number(`${number}0000000`),
      [fileSize],
    );

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
        let selectFiles;

        if (e.type === 'drop') selectFiles = e.dataTransfer.files;
        else selectFiles = e.target.files[0];

        if (multiple && selectFiles.length < 1) {
          for (const file of selectFiles) {
            if (checkAcceptExtension(file.name) && file.size < fileSizeConvert(fileSize)) {
              setFiles((files) => [...files, file]);
              onChange && onChange(e);
            }
          }
          return;
        }

        if (e.type === 'drop' && selectFiles.length >= 1) {
          if (
            checkAcceptExtension(selectFiles[0].name) &&
            selectFiles[0].size < fileSizeConvert(fileSize)
          ) {
            onChange && onChange(e);
          }
          return;
        }

        if (
          checkAcceptExtension(selectFiles.name) &&
          selectFiles.size < fileSizeConvert(fileSize)
        ) {
          onChange && onChange(e);
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

    return (
      <>
        <div className={cx('file-upload', { isDragging })} ref={dragRef}>
          <input
            id="fileUpload"
            className={classes}
            type="file"
            ref={ref}
            disabled={disabled}
            onChange={handleChange}
            accept={acceptFileExtension()}
            multiple={multiple}
            {...rest}
          />
          <label htmlFor="fileUpload" className={cx('file-upload-label')}>
            파일 업로드
          </label>
        </div>
      </>
    );
  },
);
