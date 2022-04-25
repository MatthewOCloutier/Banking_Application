
function CreateAccount(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const [disabled, setDisabled] = React.useState(false);
  const ctx = React.useContext(UserContext);  
    




  const validate = React.useCallback((field, label) => {
    
     if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''),3000)
      
      return false;
    }
   
    return true;
 },  [])


  function validPwrd(field, password){
  if (password.length < 8){
    setStatus('must be at least 8 characters');
    return false;
  } else {
    setStatus('');
  return true;
};
}
function handleCreate(){
  console.log(name,email,password);   
  if (!validate(name,     'name'))     return;
  if (!validate(email,    'email'))    return;
  if (!validate(password, 'password'), !validPwrd('password', password)) return;
  ctx.users.push({name,email,password,balance:100});
  setShow(false);
}    
function clearForm(){
  setName('');
  setEmail('');
  setPassword('');
  setShow(true);
}

// memoizing
const isFormValid = React.useCallback(() => {
 return validate(name, 'name') || validate(email, 'email') || validate(password, 'password')
}, [name, email, password])

React.useEffect(() => {
 setDisabled(!isFormValid())
}, [isFormValid])
  
 

     

 

  return (
    <Card
      bgcolor="primary"
      header="Create Account"
      status={status}
      
      body={show ? (  
              <form> 
              Name<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light" onClick={handleCreate} disabled={disabled}>Create Account</button>
              </form>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
              </>
            )}
    />
  )
}