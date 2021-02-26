import React, { useEffect, useState } from 'react';
import classes from './Checkbox.module.scss';

const Checkbox = ({ intermediate, label, value = false, onChange }) => {
  const [checkboxValue, setCheckboxValue] = useState(value);

  useEffect(() => {
    setCheckboxValue(value);
  }, [value]);

  const handleChange = (event) => {
    onChange(event.target.checked);
  };

  return (
    <label className={classes.checkbox}>
      <input type="checkbox" checked={checkboxValue} onChange={(event) => handleChange(event)} />
      <span className={[classes.checkmark, intermediate && classes.intermediate].join(' ')} />
      {label}
    </label>
  );
};

export default Checkbox;
