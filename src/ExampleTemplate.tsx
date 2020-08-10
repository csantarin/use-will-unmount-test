import React, { FunctionComponent, ReactNode } from 'react';

interface ExampleTemplateProps {
  heading?: ReactNode;
  description?: ReactNode;
}

export const ExampleTemplate: FunctionComponent<ExampleTemplateProps> = (props) => {
  const {
    heading,
    description,
    children,
  } = props;

  return (
    <div className="App-column Example-column">
      <h1>{heading}</h1>
      <p>{description}</p>
      {children}
  	</div>
  );
};
