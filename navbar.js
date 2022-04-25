function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">BadBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#/CreateAccount/" data-toggle="tooltip" title="Create New Account">Create Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/login/" data-toggle="tooltip" title="Login To Existing Account">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/deposit/" data-toggle="tooltip" title="Make A Deposit">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/withdraw/" data-toggle="tooltip" title="Withdraw Funds">Withdraw</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/balance/" data-toggle="tooltip" title="Check Balance">Balance</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/alldata/" data-toggle="tooltip" title="Manage Data">AllData</a>
          </li>   
                 
        </ul>
      </div>
    </nav>
    </>
  );
}