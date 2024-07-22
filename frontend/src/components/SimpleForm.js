import React, { useState } from 'react';

const SimpleForm = () => {
  const [rows, setRows] = useState([{ si: '', desc: '', action: '' }]);

  const handleChange = (index, event) => {
    const newRows = [...rows];
    newRows[index][event.target.name] = event.target.value;
    setRows(newRows);
  };

  const handleAddRow = () => {
    setRows([...rows, { si: '', des: '', action: '' }]);
  };

  const handleRemoveRow = (index) => {
    const newRows = [...rows];
    newRows.splice(index, 1);
    setRows(newRows);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(rows);
  };

  return (
    <div>
      <h1>CRUD Operation</h1>
      <form onSubmit={handleSubmit}>
        {rows.map((row, index) => (
          <div key={index}>
            <input
              type="text"
              name="si"
              value={row.si}
              onChange={(e) => handleChange(index, e)}
              placeholder="SI"
            />
            <input
              type="text"
              name="des"
              value={row.des}
              onChange={(e) => handleChange(index, e)}
              placeholder="Items"
            />
            <input
              type="text"
              name="action"
              value={row.action}
              onChange={(e) => handleChange(index, e)}
              placeholder="Price"
            />
            <button type="button" onClick={() => handleRemoveRow(index)}>Remove</button>
          </div>
        ))}
        <button type="button" onClick={handleAddRow}>Add Row</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SimpleForm;
