const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe:'la basse para multiplicar'
  })
  .option("l", {
    alias: "lista",
    type: "boolean",
    default:false,
    describe: 'lista la tabla de multiplicar'
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default:1,
    describe: 'contador para el ciclo for'
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene qu ser un numero";
    }
    return true;
  }).argv;


  module.exports =argv;