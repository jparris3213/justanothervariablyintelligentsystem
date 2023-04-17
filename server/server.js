//Import Utilities and other erratta 
const {lights_mainFunction, reverse_lighting} = require ("./utils/magichome_util")



//simple instruction json, this will end up being user input
/* var instruction_json = {
    name: "ready_room",
    powerstate: false
} */

var instruction_json = {
    name: "ready_room",
    powerstate: true
}

lights_mainFunction(instruction_json)
