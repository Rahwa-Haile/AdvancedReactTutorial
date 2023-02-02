import React from 'react'
import ErrorExample from './tutorial/1-useState/1-error-example';
import UseStateBasics from './tutorial/1-useState/2-useState-basics';
import UseStateArray from './tutorial/1-useState/3-useState-array';
import UseStateObject from './tutorial/1-useState/4-useState-object';
import UseStateCounter from './tutorial/1-useState/5-useState-counter';
import UseEffectBasics from './tutorial/2-useEffect/1-useEffect-basics';
import UseEffectCleanup from './tutorial/2-useEffect/2-useEffect-cleanup';
import UseEffectFetchData from './tutorial/2-useEffect/3-useEffect-fetch-data';
import MultipleReturns from './tutorial/3-conditionalRendering/1-multiple-returns';
import ShortCircuit from './tutorial/3-conditionalRendering/2-short-circuit';
import ShowHide from './tutorial/3-conditionalRendering/3-show-hide';
import ControlledInputs from './tutorial/4-forms/1-controlled-inputs'
import MultipleInputs from './tutorial/4-forms/2-multiple-inputs';

const App = () => {
  return (
    <div className="container">
      <MultipleInputs/>
    </div>
  );
}

export default App