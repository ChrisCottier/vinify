import React from "react";

export const TextAreaInput = (props) => {
  const { label, placeHolder, value, handleChange, require, name } = props;
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <textarea
          className="textarea"
          placeholder={placeHolder}
          value={value}
          onChange={handleChange}
          required={require}
          name={name}
        ></textarea>
      </div>
    </div>
  );
};

export const SimpleInput = (props) => {
  const {
    label,
    placeHolder,
    value,
    handleChange,
    require,
    name,
    FAIconLeft,
    type,
  } = props;

  if (!FAIconLeft) {
    return (
      <div className="field">
        <label className="label">{label}</label>
        <div className="control">
          <input
            className="input"
            type={type}
            placeholder={placeHolder}
            value={value}
            onChange={handleChange}
            required={require}
            name={name}
          ></input>
        </div>
      </div>
    );
  }

  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control has-icons-left">
        <input
          className="input"
          type={type}
          placeholder={placeHolder}
          value={value}
          onChange={handleChange}
          required={require}
          name={name}
        ></input>
        <span className="icon is-small is-left">
          <i className={FAIconLeft}></i>
        </span>
      </div>
    </div>
  );
};

// export const NumberInput = (props) => {
//   const { label, placeHolder, value, handleChange, require, name } = props;
//   return (
//     <div className="field">
//       <label className="label">{label}</label>
//       <div className="control">
//         <input
//           className="input"
//           type="number"
//           placeholder={placeHolder}
//           value={value}
//           onChange={handleChange}
//           required={require}
//           name={name}
//         ></input>
//       </div>
//     </div>
//   );
// };

export const FileInput = (props) => {
  const { label, value, handleChange, require, name } = props;
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <input
          className="input"
          type="file"
          files={value}
          onChange={handleChange}
          required={require}
          name={name}
          accept=".png,.jpg"
        ></input>
      </div>
    </div>
  );
};

export const CategoryInput = (props) => {
  const { categories, label, value, handleChange, name } = props;

  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="select">
        <select value={value} onChange={handleChange} name={name}>
          {categories.map((category) => (
            <option value={category.id} key={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
