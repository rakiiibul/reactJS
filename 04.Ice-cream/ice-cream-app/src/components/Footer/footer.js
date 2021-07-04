import React from 'react';
import Aux from '../../hoc/ux';
import classes from './footer.css';
const footer =(props)=>(
    <Aux>
    <footer>
    <div className={classes.Container}>
      <div>
        Copyright &copy;2020.
      </div>
      <div class="textRight">
        Built with <span class="red">&hearts;</span> by
        <a
          href="https://reactjs.org/docs/create-a-new-react-app.html"
          target="_blank">Create React App</a>
      </div>
    </div>
  </footer>
    </Aux>
    
);
export default footer ;