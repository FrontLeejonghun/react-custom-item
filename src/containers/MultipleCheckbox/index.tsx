import { useCallback, useEffect, useState } from 'react';

type CheckboxItem = {
  id: string;
  name: string;
  checked: boolean;
};

export const MultipleCheckbox = () => {
  const [checkboxArray, setCheckboxArray] = useState<CheckboxItem[]>([
    {
      id: 'a123',
      name: 'test1',
      checked: false,
    },
    {
      id: 'b123',
      name: 'test2',
      checked: false,
    },
    {
      id: 'c123',
      name: 'test3',
      checked: false,
    },
  ]);

  useEffect(() => {
    console.table(checkboxArray);
  }, [checkboxArray]);

  const handelChange = useCallback((e, value: CheckboxItem) => {
    setCheckboxArray((prev) =>
      prev.map((item) => (item.id === value.id ? { ...item, checked: e.target.checked } : item)),
    );
  }, []);

  return (
    <div>
      {checkboxArray.map((value) => (
        <div key={value.id} style={{ marginBottom: '10px' }}>
          <label htmlFor={value.id}>{value.name}</label>
          <input
            id={value.id}
            type="checkbox"
            value={value.name}
            onChange={(e) => handelChange(e, value)}
          />
          <span>{value.checked.toString()}</span>
        </div>
      ))}
    </div>
  );
};
