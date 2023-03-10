import React, { useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import Button from './Button';
import styles from '../styles/modules/model.module.scss';

function ToDoModel({ modelOpen, setModelOpen }) {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('incomplete');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, status });
  };
  return (
    <div>
      {modelOpen && (
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div
              className={styles.closeButton}
              onClick={() => setModelOpen(false)}
              onKeyDown={() => setModelOpen(false)}
              tabIndex={0}
              role="button"
            >
              <MdOutlineClose />
            </div>
            <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
              <h1 className={styles.formTitle}> Add Task</h1>
              <label htmlFor="title">
                Title
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>
              <label htmlFor="status">
                Status
                <select
                  name="status"
                  id=""
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="incomplete"> Incomplete </option>
                  <option value="complete"> Complete </option>
                </select>
              </label>
              <div className={styles.buttonContainer}>
                <Button type="submit" variant="primary">
                  Add Task
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => setModelOpen(false)}
                  onKeyDown={() => setModelOpen(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ToDoModel;
