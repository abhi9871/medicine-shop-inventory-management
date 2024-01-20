import { Fragment } from 'react';
import Header from './components/Layout/Header';
import MedicineForm from './components/Medicine/MedicineForm';
import MedicineAvailable from './components/Medicine/MedicineAvailable';
import './App.css';

function App() {
  return (
    <Fragment>
      <Header />
      <MedicineForm />
      <MedicineAvailable />
    </Fragment>
  );
}

export default App;
