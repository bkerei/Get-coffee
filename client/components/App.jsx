

import React from 'react'

import SearchBar from './search/searchBar'
import Map from './map/map'


export default  function App(props){

return (
    <React.Fragment>
<div class="theBackground"></div>
  <div class="gridcontainer">
  <section class="intro">
    <div class="inner">
      <div class="content">
        <h1 class="big-title">Get Coffee!!</h1>
        <br/>
        <div class="form">
          <form action="#">
            <fieldset>
              Where you at?<br/>
              <input type="text" name="location" value="Enter your location here"/><br/>
              <br/>What would you like?<br/>
              <select name="Coffee">
                <option value="Coffee">Choose Wisely...</option>
                <option value="Coffee">Flat white</option>
                <option value="Coffee">Black</option>
                <option value="Coffee">Latte</option>
                <option value="Coffee">Cappacino</option>
                <option value="Coffee">Iced Coffee</option>
                <option value="Coffee">Something fancy!</option>
                <option value="Coffee">Just Coffee, all the coffee!</option>
              </select><br/>
              <br/>Budget?<br/>
              <select name="Budget">
                <option value="Budget">Choose Wisely...</option>
                <option value="Budget">Less than $5.00</option>
                <option value="Budget">Between $5.00 - $10.00</option>
                <option value="Budget">No budget here, give me everything!</option>
              </select><br/>
              <br/>Bringing your own mug?<br/>
              <input type="radio" name="mug" value="yes" checked/> Yeah<br/>
              <input type="radio" name="mug" value="no"/> Nah<br/>
              <br/>
              <input type="submit" value="Find that coffee!"/>
            </fieldset>







            {/* <Map /> */}
          </form>
        </div>
      </div>
    </div>
  </section>
</div>

</React.Fragment>
)
}

