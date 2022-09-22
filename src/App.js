import './App.css';

function App(){
    return(
        <div>
        <div className="menu-30">
          <a href="#" className="a-menu-30 div-hover">
            <img src="https://www.w3schools.com/images/w3schools.png" style={{width: '60%'}} />
          </a>
          <a href="#" className="a-menu-30  div-black">
            New Message
            <i className=" margin-left fa fa-pencil" />
          </a>
          <a href="#" className="a-menu-30  div-red div-hover">
            <i className="fa fa-inbox margin-right" />
            Inbox (3)
          </a>
          <div className="content-menu-30">
            <a href="#" className="a-content-menu-30">
              <div className="div-a-content-30">
                <img className="margin-right" src="https://www.w3schools.com/w3images/avatar3.png" style={{width: '15%'}} />
                <span className="opacity ">Borge Refsnes</span>
                <h4>Subject: Remember Me</h4>
                <p>Hello, i just wanted to let you know that i'll be home at...</p>
              </div>
            </a>
            <a style={{background: '#fff'}} href="#" className="a-content-menu-30 hover-d">
              <div className="div-a-content-30">
                <img className="margin-right" src="https://www.w3schools.com/w3images/avatar3.png" style={{width: '15%'}} />
                <span className="opacity ">Borge Refsnes</span>
                <p>Hello, i just wanted to let you know that i'll be home at...</p>
              </div>
            </a>
            <a style={{background: '#fff'}} href="#" className="a-content-menu-30 hover-d">
              <div className="div-a-content-30">
                <img className="margin-right" src="https://www.w3schools.com/w3images/avatar3.png" style={{width: '15%'}} />
                <span className="opacity ">Borge Refsnes</span>
                <h4>welcome!</h4>
              </div>
            </a>
          </div>
          <a style={{color: '#000'}} href="#" className="a-menu-30 div-hover"><i className="fa fa-paper-plane margin-right" />
            sent</a>
          <a style={{color: '#000'}} href="#" className="a-menu-30 div-hover"><i className="fa fa-hourglass-end margin-right" />
            Drafts</a>
          <a style={{color: '#000'}} href="#" className="a-menu-30 div-hover"><i className="fa fa-trash margin-right" /> Trash</a>
          ufytfu
        </div>
        <div className="menu-70">
          <div className="content-menu-70">
            <br />
            <img className src="https://www.w3schools.com/w3images/avatar3.png" style={{width: '20%'}} />
            <h3 className="opacity">Subject: Remember Me</h3>
            <h2><i className="fa fa-clock-o" /> From Borge Refsnes, Sep 27, 2015.</h2>
            <button className="button-70 div-hover">Reply
              <i className="margin-left fa fa-mail-reply" />
            </button>
            <button className="button-70 div-hover">
              Forward
              <i className="margin-left fa fa-arrow-right" />
            </button>
            <hr />
            <p>Hello, i just wanted to let you know that i'll be home at lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur
              sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
              ut aliquip ex ea commodo consequat.
            </p>
            <p>Best Regards, <br />Borge Refsnes</p>
          </div>
        </div>
      </div>
    )
}
export default App;