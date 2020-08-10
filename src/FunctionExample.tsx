import React, { Fragment, useState } from 'react';
import { ExampleTemplate } from './ExampleTemplate';
import { OnUnmount } from './OnUnmount';

/**
 * Prints to `stdout` with newline.
 * @param args 
 */
function log(...args: any[]) {
  console.log('%c<FunctionExample />', 'color: #8824ff', ...args);
}

export const FunctionExample = () => {
  const [ hidden, setHidden ] = useState(false);
  const [ value, setValue ] = useState(0);

  const handleIncrementClick = () => {
    setValue((value) => value + 1);
    log('handleIncrementClick() => value:', value + 1);
  };

  const handleResetClick = () => {
    setValue(0);
    log('handleResetClick() => value:', 0);
  };

  const handleToggleClick = () => {
    setHidden((hidden) => !hidden);
    log('handleToggleClick() => hidden:', !hidden);
  };

  const callbackWithRef = () => {
    log('callbackWithRef() => value:', value);
  };

  const callbackWithoutRef = () => {
    log('callbackWithoutRef() => value:', value);
  };

  const callbackWithoutRefAndDeps = () => {
    log('callbackWithoutRefAndDeps() => value:', value);
  };

  const renderContent = (hidden: boolean = false) => {
    if (hidden) {
      return (
        <button onClick={handleToggleClick}>
          Show
        </button>
      );
    } else {
      return (
        <Fragment>
          <OnUnmount
            callbackWithRef={callbackWithRef}
            callbackWithoutRef={callbackWithoutRef}
            callbackWithoutRefAndDeps={callbackWithoutRefAndDeps}
          />
          <button onClick={handleToggleClick}>
            Hide
          </button>
          <div>
            <strong>Value:</strong>
            {' '}
            <span>{value}</span>
          </div>
          <div className="Value-button-group">
            <button className="Value-button" onClick={handleIncrementClick}>
              +1
            </button>
            <button className="Value-button" onClick={handleResetClick}>
              Reset
            </button>
          </div>
        </Fragment>
      );
    }
  };

  return (
    <ExampleTemplate
      heading="Function"
      description="...but here, it doesn't."
    >
      {renderContent(hidden)}
    </ExampleTemplate>
  );
};
