import React from 'react';
import PropTypes from 'prop-types';
import { updateSalutation, updateName, resetForm } from '../greeter.actions';

Editor.propTypes = {
  salutation: PropTypes.string,
  name: PropTypes.string,
  dispatch: PropTypes.func
}

export function Editor({ salutation, name, dispatch }) {


  return (
    <div className="greetForm">
      <input
        type="text"
        placeholder="salutation"
        value={salutation}
        onChange={({ target }) =>
          dispatch(updateSalutation({ salutation: target.value, name: name }))}
      />
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={({ target }) =>
          dispatch(updateName({ salutation: salutation, name: target.value }))}
      />
      <button onClick={() => dispatch(resetForm())} >reset form</button>
    </div>
  );
}

export default Editor;
