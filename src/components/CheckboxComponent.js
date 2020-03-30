import React, {useCallback} from 'react';

const Checkbox = props => (
 <input type="checkbox" {...props} />
)

class CheckboxComponent extends React.Component {
 state = { checked: false }
 handleCheckboxChange = event =>
   this.setState({ checked: event.target.checked })
 render() {
   return (
     <div>
       <div>
       <label>
        <p class="text-small-left">Age:</p> 
         <Checkbox
           checked={this.state.checked}
           onChange={this.handleCheckboxChange}
         />
         <span class="text-small-left">Puppy</span>
       </label>
       <label>
         <Checkbox
           checked={this.state.checked}
           onChange={this.handleCheckboxChange}
         />
         <span class="text-small-left">Adult</span>
       </label>
       <label>
         <Checkbox
           checked={this.state.checked}
           onChange={this.handleCheckboxChange}
         />
         <span class="text-small-left">Senior</span>
       </label>
       </div>
       <div>
       <label>
        <p class="text-small-left">Activity:</p> 
         <Checkbox
           checked={this.state.checked}
           onChange={this.handleCheckboxChange}
         />
         <span class="text-small-left">Couch potato</span>
       </label>
       <label>
         <Checkbox
           checked={this.state.checked}
           onChange={this.handleCheckboxChange}
         />
         <span class="text-small-left">Relatively Active</span>
       </label>
       <label>
         <Checkbox
           checked={this.state.checked}
           onChange={this.handleCheckboxChange}
         />
         <span class="text-small-left">Torpedo</span>
       </label>
       </div>
       <div>
       <label>
        <p class="text-small-left">Behaviour:</p> 
         <Checkbox
           checked={this.state.checked}
           onChange={this.handleCheckboxChange}
         />
         <span class="text-small-left">Lover</span>
       </label>
       <label>
         <Checkbox
           checked={this.state.checked}
           onChange={this.handleCheckboxChange}
         />
         <span class="text-small-left">Good with kids</span>
       </label>
       <label>
         <Checkbox
           checked={this.state.checked}
           onChange={this.handleCheckboxChange}
         />
         <span class="text-small-left">Laxy</span>
       </label>
       </div>
     </div> 
        
   ) 
 }
}

export default CheckboxComponent;