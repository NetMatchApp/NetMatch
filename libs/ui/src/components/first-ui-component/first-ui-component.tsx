import React from 'react';
import './first-ui-component.module.scss';

type Props = {
  primeraFuncion(): void
}

export const FirstUiComponent: React.FunctionComponent<Props> = ({ primeraFuncion }) => {
  return (
    <div>
      <h1>Welcome to FirstUiComponent!</h1>
      <button onClick={primeraFuncion}>
        primera funcion
      </button>
    </div>
  );
}

export default FirstUiComponent;
