import './index.module.scss';
import { FirstUiComponent } from '@net-match/ui';
/* eslint-disable-next-line */
export interface HolaProps {}

export function Hola(props: HolaProps) {

  const primeraFuncion = () => console.log("hoola");
  return (
      < FirstUiComponent primeraFuncion={primeraFuncion}/>    
  );
}

export default Hola;
