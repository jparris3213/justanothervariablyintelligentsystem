//Regular Imports
const { Control, Discovery } = require("magic-home");
const fs = require("fs");
const devices = JSON.parse(fs.readFileSync(`./seeds/local_ips.json`));

//Power Control Function
const powerControl = (id, power_state) => {
  let power = power_state;
  let controller = new Control(id);
  controller
    .setPower(power_state)
    .then((success) => {})
    .catch((error) => console.log(error));
};

//Central Light Function with Room Choice Input for MagicHome Lighting Products
const lights_mainFunction = (data) => {
  //variable handling
  let device_app = devices.magic_home;
  let room = data.name;
  let powerstate = data.powerstate
  let device_list = device_app[room];

  //convert Bool to text
  const power_state_text = () => {
    if (powerstate === true ) {
      return "On"
    } else {
      return "Off"
    }
  }

  //Iterate through all lights in particular room, giving status message for each
  for (var i = 0; i < device_list.length; i++) {
    powerControl(device_list[i]["ip"], powerstate);
    console.log(`Sub-System ${device_list[i]["name"]} has been changed to Power State: ${power_state_text(powerstate)} \n -----------------`)
  }
};

module.exports = {lights_mainFunction}
