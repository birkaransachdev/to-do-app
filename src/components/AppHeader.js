import { useState, React } from 'react';
import Button, { SelectButton } from './Button';
import styles from '../styles/modules/app.module.scss';
import ToDoModel from './ToDoModel';

function AppHeader() {
  const [modelOpen, setModelOpen] = useState(true);
  return (
    <div className={styles.appHeader}>
      <Button variant="primary" onClick={() => setModelOpen(true)}>
        Add Task
      </Button>
      <SelectButton id="status">
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Complete</option>
      </SelectButton>
      <ToDoModel modelOpen={modelOpen} setModelOpen={setModelOpen} />
    </div>
  );
}

export default AppHeader;
