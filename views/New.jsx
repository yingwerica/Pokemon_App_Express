import React, { Component } from 'react'

const newStyle = {
    color: '#2A3990',
    backgroundImage: 'linear-gradient(to bottom left, red, yellow)',
    fontSize: '30pt',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100%',
    fontFamily: 'cursive',  
  };


const formStyle ={
    width: '80%',
    display: 'block',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignContent: 'flex-start',
    marginLeft: '35%',
    
}
const inputStyle ={
    width: '280px',
    height: '40px'
}

const buttonStyle = {
    width: '280px',
    height: '80px',
    fontFamily: 'cursive',
    fontSize: '30px',
    borderColor: 'blueviolet',
    borderWidth: '10px',
    
}

export default class New extends Component {
  render() {
    return (
    <html style={{height:'100%'}}>
        <body style={newStyle}>
            <div>
                <h1 style={{textAlign: 'center'}}>Create New Pokemon</h1>
                <form action="/pokemon" method='POST' style={formStyle}>
                    Name: <br/>
                    <input type="text" name="name" style={inputStyle}/><br/>
                    Image: <br/>
                    <input type="image/*" name="name" style={inputStyle} /><br/>
                    <p><strong>Note:</strong>Please enter the URL of the image.</p>
                    <input type="submit" name="" value="Create Pokemon" style={buttonStyle}/>
                </form>
            </div>
        </body>
    </html>

    )
  }
}
