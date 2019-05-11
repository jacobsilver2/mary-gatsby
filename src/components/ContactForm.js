// @ts-nocheck
import React, {useState} from 'react';
import styled from 'styled-components';

const StyledForm = styled.div`
	font: 95% ff-tisa-sans-web-pro, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 20px;
  color: grey;
	max-width: 400px;
	margin: 10px auto;
	padding: 16px;

input[type="text"],
input[type="date"],
input[type="datetime"],
input[type="email"],
input[type="number"],
input[type="search"],
input[type="time"],
input[type="url"],
textarea,
select 
{
	-webkit-transition: all 0.30s ease-in-out;
	-moz-transition: all 0.30s ease-in-out;
	-ms-transition: all 0.30s ease-in-out;
	-o-transition: all 0.30s ease-in-out;
	outline: none;
	box-sizing: border-box;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	width: 100%;
	background: #fff;
	margin-bottom: 4%;
	padding: 3%;
	color: #555;
	font: 95% ff-tisa-sans-web-pro, sans-serif;
}
input[type="text"]:focus,
input[type="date"]:focus,
input[type="datetime"]:focus,
input[type="email"]:focus,
input[type="number"]:focus,
input[type="search"]:focus,
input[type="time"]:focus,
input[type="url"]:focus,
textarea:focus,
select:focus
{
	box-shadow: 0 0 5px #43D1AF;
	padding: 3%;
}

input[type="submit"],
input[type="button"]{
	box-sizing: border-box;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	width: 100%;
	padding: 3%;
	background: black;
	color: #fff;
}
input[type="submit"]:hover,
input[type="button"]:hover{
	background: red;
}
`;

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

//   const validate = (email) => {
//     const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
//     return expression.test(String(email).toLowerCase());
// }

  function handleSubmit() {
    console.log('hi')
  }

  function handleNameChange(e) {
    const { value } = e.target;
    setName(value);
  }

  function handleEmailChange(e) {
    const {value} = e.target;
    setEmail(value);
  }

  function handleMessageChange(e) {
    const {value} = e.target;
    setMessage(value);
  }

  return (
    <StyledForm>
      <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            Name*
            <input 
              type="text"
              id="name"
              name="name"
              placeholder="Your Name..."
              required
              value={name}
              onChange={handleNameChange}
            />
          </label>
          <label>
            Email*
            <input 
              type="email"
              id="email"
              name="email"
              placeholder="Your Email Address..."
              required
              value={email}
              onChange={handleEmailChange}
            />
          </label>
          <label>
            Message*
            <textarea 
              id="message"
              name="message"
              placeholder="Your Message..."
              style={{height: '150px'}}
              required
              value={message}
              onChange={handleMessageChange}
            />
          </label>
        <input type="submit" value="Submit" />
      </form>  
    </StyledForm>
  );
}

export default ContactForm;