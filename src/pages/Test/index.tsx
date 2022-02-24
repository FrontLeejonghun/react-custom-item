import { useCallback, useEffect, useRef, useState } from 'react';
import { uniqBy } from 'lodash';

type keyword = {
  keyword: string;
};

const Test = () => {
  const [value, selectValue] = useState<keyword>({ keyword: '' });
  const dragRef = useRef<HTMLDivElement | null>(null);
  const [keywordList, setKeywordList] = useState<keyword[]>([]);

  const handleSelection = () => {
    const text = window.getSelection();
    if (text) {
      selectValue({
        keyword: text.toString(),
      });
    }
  };

  const handleDrag = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback(
    (e: DragEvent): void => {
      e.preventDefault();
      e.stopPropagation();

      setKeywordList((prev) => uniqBy([...prev, value], 'keyword'));
    },
    [handleSelection],
  );

  const deleteItem = (item: keyword) => {
    setKeywordList((prev) => [...prev.filter((value) => value.keyword !== item.keyword)]);
  };

  useEffect(() => {
    console.log(keywordList);
  }, [keywordList]);

  const initEvents = useCallback((): void => {
    if (dragRef.current !== null) {
      dragRef.current.addEventListener('dragenter', handleDrag);
      dragRef.current.addEventListener('dragleave', handleDrag);
      dragRef.current.addEventListener('dragover', handleDrag);
      dragRef.current.addEventListener('drop', handleDrop);
    }
  }, [handleDrag, handleDrop]);

  const resetEvents = useCallback((): void => {
    if (dragRef.current !== null) {
      dragRef.current.removeEventListener('dragenter', handleDrag);
      dragRef.current.removeEventListener('dragleave', handleDrag);
      dragRef.current.removeEventListener('dragover', handleDrag);
      dragRef.current.removeEventListener('drop', handleDrop);
    }
  }, [handleDrag, handleDrop]);

  useEffect(() => {
    initEvents();
    document.addEventListener('selectionchange', handleSelection);

    return () => {
      resetEvents();
      document.removeEventListener('selectionchange', handleSelection);
    };
  }, [initEvents, resetEvents]);

  return (
    <div>
      <div suppressContentEditableWarning={true} contentEditable={true}>
        오늘은 이런 테스트를 해볼거에요 재미가 없어요 돈 많이 벌고 싶어요
      </div>

      <div className={'dasdasds'} draggable>
        {value.keyword}
      </div>

      <div ref={dragRef} className={'result'}>
        {keywordList.map((item, index) => (
          <div key={index} style={{ border: '1px solid #000', margin: 10 }}>
            {item.keyword}
            <button onClick={() => deleteItem(item)}>dd</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Test;
