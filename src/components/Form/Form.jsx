import React from 'react';
import styles from './Form.modules.css'
import validation from './validation';


export default function Form(props) {

    const [userData, setUserData] = React.useState({ 
      username: '', 
      password: '' 
    });

    const [errors, setErrors] = React.useState({
      username: '', 
      password: '' 
    });

    const handleInputChange = (event) => {

      const property = event.target.name;
      const value = event.target.value;

      setUserData({ 
        ...userData, 
        [property]: value 
      });

      setErrors(
        validation({
          ...userData,
          [property] : value
          })
        )
    };

    const handleSubmit = (event) => { 
      event.preventDefault();
      props.login(userData);
    }

    return (
      <div style = {{
        borderRadius: '10px' , 
        display: 'flex' , 
        margin: 'auto' , 
        width: '50%' , 
        marginTop: '20px',
        color: 'white',
        backgroundColor: '#202020',
        padding: '25px'
        }}  >
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>
        Username: 
        </label>
        <input 
        placeholder='Username'
            type="text" 
            name="username"     
            value={userData.username} 
            onChange={handleInputChange} 
            />
          {errors.username && <p style={{ color: 'red' ,
        padding: '25px'}} >{errors.username}</p>}

      <label htmlFor='password'>
        Password: 
      </label>
        <input 
            placeholder='Password'
            type="password"     
            name="password" 
            value={userData.password} 
            onChange={handleInputChange}
            />
          {errors.password && <p style={{ color: 'red' ,
        padding: '25px'}} >{errors.password}</p>}


      <hr />
      <button type = 'submit'
      style = {{
        backgroundColor: '#FFC107',
        color: '#000000',
        fontWeight: 'bold',
        border: 'none',
        padding: '5px 10px',
        fontSize: '16px',
        cursor: 'pointer',
        }}
      >Login</button>
      </form>
      </div>
    );
}