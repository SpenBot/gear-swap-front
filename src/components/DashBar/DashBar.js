
////////////// DEPENDENCIES AND MODULES /////////////////////////////
/////////////////////////////////////////////////////////////////////

import React, {Component} from 'react';






////////////// COMPONENT ////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

class DashBar extends Component {



////////////// RENDER LOGIC /////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

  render() {

    let inventoryList = this.props.user.inventory.map((thing) => {
      return (
      <ul>
        <li>ITEM: {thing.item}</li>
        <li>TYPE: {thing.type}</li>
        <li>CONDITION: {thing.condition}</li>
        <li>PRICE: ${thing.price}.00</li>
      </ul>
      )
    })


////////////// RENDER RETURN ////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

      return (
        <div className="dashbar">

          <header className="App-header">
            <p>USER: {this.props.user.username}</p>
            <img src={this.props.user.photo_url} height="100" width="100"/>
            <p>PASSWORD: {this.props.user.password}</p>
            {inventoryList}
          </header>

        </div>
      )

  }

}


////////////// EXPORT MODULE ////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

export default DashBar;





/////////////////////////////////////////////////////////////////////