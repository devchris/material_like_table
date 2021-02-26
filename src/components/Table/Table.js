import React, { useState } from 'react';
import { HiDownload } from 'react-icons/hi';
import classes from './Table.module.scss';
import { upcaseFirstLetter } from '../../helper/upcaseFirstLetter';
import { objectAllTrue } from '../../helper/objectAllTrue';
import { objectAllFalse } from '../../helper/objectAllFalse';
import { objectCountTrue } from '../../helper/objectCountTrue';
import Checkbox from '../Checkbox/Checkbox';
import selectedCheckboxLabel from './selectedCheckboxLabel';
import generateDownload from './generateDownload';
import StatusBadge from '../StatusBadge/StatusBadge';

/**
 * @param data An Array of Objects.
 * @param upcase An Array containing keys of the object. If set, the value will be upcased.
 * @param hasCheckbox A Boolean. Decides if Checkboxes should be shown for each row.
 */
const Table = ({ data, upcase, hasCheckbox }) => {
  const [tableData] = useState(data);
  const [selectCheckbox, setSelectCheckbox] = useState(false);
  const [checkboxValues, setCheckboxValues] = useState({});

  const handleSelectCheckboxChange = (value) => {
    if (objectAllTrue(checkboxValues) && !value && Object.keys(checkboxValues).length === tableData.length) {
      setCheckboxValues({});
      setSelectCheckbox(value);
    } else {
      const newCheckboxValues = {};
      tableData.forEach((entry) => newCheckboxValues[entry.name] = true);
      setCheckboxValues(newCheckboxValues);
      setSelectCheckbox(true);
    }
  };

  const handleCheckboxChange = (value, type) => {
    if (value) setSelectCheckbox(true);
    if (objectAllFalse({ ...checkboxValues, [type]: value })) setSelectCheckbox(false);
    setCheckboxValues({ ...checkboxValues, [type]: value });
  };

  const showIntermediate = () => {
    const checkboxValuesLength = Object.keys(checkboxValues).length;

    if (checkboxValuesLength !== tableData.length) {
      return true;
    }

    if (objectAllTrue(checkboxValues) && checkboxValuesLength === tableData.length) {
      return false;
    }

    return true;
  };

  const downloadFiles = () => {
    alert(generateDownload(tableData, checkboxValues));
  };

  const headers = (title, i) => <th key={`${title}${i}`}>{upcaseFirstLetter(title)}</th>;

  const row = (entry, keys) => (
    <tr key={entry.name} className={checkboxValues[entry.name] && classes.selected}>
      {hasCheckbox && <td><Checkbox value={checkboxValues[entry.name]} onChange={(value) => handleCheckboxChange(value, entry.name)} /></td>}
      {keys.map((key, idx) => {
        const rowData = upcase && upcase.includes(key) ? upcaseFirstLetter(entry[key]) : entry[key];
        return (
          <td key={`${entry.name}${idx}`}>
            <div className={classes.statusContainer}>
              {entry[key] === 'available' ? <div className={classes.statusContainer__badge}><StatusBadge /></div> : null}
              {rowData}
            </div>
          </td>
        );
      })}
    </tr>
  );

  const createTable = () => {
    if (!tableData || !Object.keys(tableData).length) return 'Table Data invalid';

    const keys = Object.keys(tableData[0]);

    return (
      <>
        {hasCheckbox && (
          <div className={classes['customTable-actions']}>
            <div className={classes['customTable-actions__checkbox']}>
              <Checkbox
                label={selectedCheckboxLabel(objectCountTrue(checkboxValues))}
                intermediate={showIntermediate()}
                value={selectCheckbox}
                onChange={(value) => handleSelectCheckboxChange(value)}
              />
            </div>
            {objectCountTrue(checkboxValues) ? (
              <div
                className={classes['customTable-actions__download']}
                onClick={() => downloadFiles()}
                onKeyDown={() => downloadFiles()}
                role="button"
              >
                <HiDownload />
                Download Selected
              </div>
            ) : null}
          </div>
        )}
        <table width="100%">
          <thead>
            <tr>
              {hasCheckbox && <td />}
              {keys.map((title) => headers(title))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((entry) => row(entry, keys))}
          </tbody>
        </table>
      </>
    );
  };

  return (
    <div className={classes.customTable}>
      {createTable()}
    </div>
  );
};

export default Table;
