//Import Utilities and other erratta 
const {lights_mainFunction, reverse_lighting} = require ("./utils/magichome_util")



//Instructional json variable for testing, Options: Name: ready_room, ten_forward, main_bridge.  powerstate is a Boolean
var instruction_json = {
    name: "ready_room",
    powerstate: true
}

lights_mainFunction(instruction_json)
