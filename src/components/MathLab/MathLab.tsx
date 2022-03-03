import { useEffect } from 'react';
import styles from './MathLab.module.scss';

import PageHeader from '../PageHeader/PageHeader';

const MathLab = () => {

  const factorial = (x) => {

    // if number is 0
    if (x === 0) {
        return 1;
    }

    // if number is positive
    else {
        return x * factorial(x - 1);
    }
  }

  useEffect(() => {

  
    // EXAMPLE OF RECURSION ----- BEGINNING
    const num = 3;
  
    // calling factorial() if num is non-negative
    if (num > 0) {
        let result = factorial(num);
        console.log(`The factorial of ${num} is ${result}`);
    }

    // EXAMPLE OF RECURSION ----- END

    console.log('use effect')
    return () => {
      console.log('use effect return')
    }
  });

  return <>
    <div className={styles.MathLab} data-testid="MathLab">
      <PageHeader text="Math Lab" />
      <div className={styles.MathLabText}>
        <p>Recursion experimentation and visualisation will be here...</p>
        <a href='https://www.geeksforgeeks.org/types-of-recursions/#:~:text=Recursion%20are%20mainly%20of%20two,one%20is%20called%20indirect%20recursion.'>Good example</a>
      </div>
    </div>
  </>
}

export default MathLab;
