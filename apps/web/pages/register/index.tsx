import './index.module.css';

/* eslint-disable-next-line */
export interface RegisterProps {}

export function Register(props: RegisterProps) {
  return (
    <div id='register-card'>
      <div id='register-card-content'>

        <div id='register-card-title'>
          <h1>Register</h1>
          <div id='register-card-title-underline'></div>
        </div>

        <div id='register-card-form'>
          <form method="post" className='register-form'>

            <label htmlFor="user-name">name</label>
            <input id='user-name' className='form-content' type="text" name='name' required />

            <label htmlFor="user-company">company</label>
            <input id='user-company' className='form-content' type="text" name='company' />

            <label htmlFor="user-position">position</label>
            <input id='user-position' className='form-content' type="text" name='position' />

          </form>
        </div>
        
      </div>
    </div>
  );
}

export default Register;
