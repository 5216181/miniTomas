
Blockly.Arduino['pinmode1114'] = function(block) {
  var value_i1 = Blockly.Arduino.valueToCode(block, 'i1', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_i2 = block.getFieldValue('i2');
  // TODO: Assemble Arduino into code variable.
  var code = '...;\n';
  return code;
};


//--------------------------------------------------------------------------------
Blockly.Arduino['encodemotor'] = function(block) {
  var value_e1 = Blockly.Arduino.valueToCode(block, 'e1', Blockly.Arduino.ORDER_ATOMIC);
  var value_e2 = Blockly.Arduino.valueToCode(block, 'e2', Blockly.Arduino.ORDER_ATOMIC);
  var value_e3 = Blockly.Arduino.valueToCode(block, 'e3', Blockly.Arduino.ORDER_ATOMIC);
  var value_e4 = Blockly.Arduino.valueToCode(block, 'e4', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
  var code = 'P3...;\n';
  return code;
};

//--------------------------------------------------------------------------------------
Blockly.Arduino['encodemotor_type2'] = function(block) {
  var value_e2 = Blockly.Arduino.valueToCode(block, 'e2', Blockly.Arduino.ORDER_ATOMIC);
  var value_e3 = Blockly.Arduino.valueToCode(block, 'e3', Blockly.Arduino.ORDER_ATOMIC);
  var value_e4 = Blockly.Arduino.valueToCode(block, 'e4', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
  var code = 'P4...;\n';
  return code;
};
