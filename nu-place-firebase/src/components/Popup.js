import './Popup.css'

const cooldown_time = 1000;

function ms( number ) {
    return number * 1000;
}

function Popup(props) {

  return (props.trigger) ? (
    <div className = "wrapper">
      <div className = "popup">
        <div className = "popup-inner-window">
          { props.children }
        </div>
      </div>
      <div className = "random-number">
        { setTimeout(props.setTrigger, ms(cooldown_time), false) }
      </div>
    </div>
  ) : ""
}

export default Popup

/*

return (props.trigger) ? (
    <div className = "wrapper">
      <div className = "popup">
        <div className = "popup-inner-window">
          { props.children }
        </div>
      </div>
    { setTimeout(props.setTrigger, ms(cooldown_time), false) }
    </div>
  ) : ""
*/