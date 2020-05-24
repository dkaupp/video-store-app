import React from "react";

const Select = ({ name, label, error, options, value: dataValue, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor="genre">{label}</label>
      <select value={dataValue} {...rest} className="form-control" name={name}>
        <option value=""></option>
        {options.map((o) => (
          <option key={o._id} id={o.name} value={o._id}>
            {o.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
