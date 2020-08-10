import React, { Component, Fragment } from 'react';
import { ExampleTemplate } from './ExampleTemplate';
import { OnUnmount } from './OnUnmount';

interface ClassExampleProps {

}

interface ClassExampleState {
  hidden: boolean;
  value: number;
}

/**
 * Prints to `stdout` with newline.
 * @param args 
 */
function log(...args: any[]) {
  console.log('%c<ClassExample />', 'color: #ff5524', ...args);
}

export class ClassExample extends Component<ClassExampleProps, ClassExampleState> {
  state: ClassExampleState = {
    hidden: false,
    value: 0,
  };

  handleIncrementClick = () => {
    this.setState((prev) => ({
      value: prev.value + 1,
    }));
    log('handleIncrementClick() => value:', this.state.value + 1);
  }

  handleResetClick = () => {
    this.setState((prev) => ({
      value: 0,
    }));
    log('handleResetClick() => value:', 0);
  }

  handleToggleClick = () => {
    this.setState((prev) => ({
      hidden: !prev.hidden,
    }));
    log('handleToggleClick() => hidden:', !this.state.hidden);
  }

  callbackWithRef = () => {
    log('callbackWithRef() => value:', this.state.value);
  }

  callbackWithoutRef = () => {
    log('callbackWithoutRef() => value:', this.state.value);
  }

  callbackWithoutRefAndDeps = () => {
    log('callbackWithoutRefAndDeps() => value:', this.state.value);
  }

  renderContent = () => {
    const { hidden, value } = this.state;

    if (hidden) {
      return (
        <button onClick={this.handleToggleClick}>
          Show
        </button>
      );
    } else {
      return (
        <Fragment>
          <OnUnmount
            callbackWithRef={this.callbackWithRef}
            callbackWithoutRef={this.callbackWithoutRef}
            callbackWithoutRefAndDeps={this.callbackWithoutRefAndDeps}
          />
          <button onClick={this.handleToggleClick}>
            Hide
          </button>
          <div>
            <strong>Value:</strong>
            {' '}
            <span>{value}</span>
          </div>
          <div className="Value-button-group">
            <button className="Value-button" onClick={this.handleIncrementClick}>
              +1
            </button>
            <button className="Value-button" onClick={this.handleResetClick}>
              Reset
            </button>
          </div>
        </Fragment>
      );
    }
  }

  render() {
    return (
      <ExampleTemplate
        heading="Class"
        description={<Fragment>"No <strong>ref</strong>" works...</Fragment>}
      >
        {this.renderContent()}
      </ExampleTemplate>
    );
  }
}
