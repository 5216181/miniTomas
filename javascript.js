
Blockly.Arduino['pinmode1114'] = function(block) {
  var value_i1 = Blockly.Arduino.valueToCode(block, 'i1', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_i2 = block.getFieldValue('i2');
  // TODO: Assemble Arduino into code variable.
  var code = '\n'+
    'pinMode(' + value_i1.toString() + ',' + dropdown_i2 +');\n' 
  return code;
};


//--------------------------------------------------------------------------------
Blockly.Arduino['encodemotor'] = function(block) {
  var value_e1 = Blockly.Arduino.valueToCode(block, 'e1', Blockly.Arduino.ORDER_ATOMIC);
  var value_e2 = Blockly.Arduino.valueToCode(block, 'e2', Blockly.Arduino.ORDER_ATOMIC);
  var value_e3 = Blockly.Arduino.valueToCode(block, 'e3', Blockly.Arduino.ORDER_ATOMIC);
  var value_e4 = Blockly.Arduino.valueToCode(block, 'e4', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
  var code = ' \n' +
 'void '+value_e1.substr(1,value_e1.length-2)+'() {\n' +    // 判斷方向1
 '  if (digitalRead('+value_e3.toString()+') == HIGH) {\n' +
 '    if (digitalRead('+value_e4.toString()+') == LOW) {\n' +
 '      '+value_e2+'++;  // 順時針針\n' +
 '    } else {\n' +
 '      '+value_e2+'--;  // 逆時針\n' +
 '    }\n' +
 '  } else {\n' +
 '    if (digitalRead('+value_e4.toString()+') == LOW) {\n' +
 '      '+value_e2+'--;  // 逆時針\n' +
 '    } else {\n' +
 '      '+value_e2+'++;  // 順時針\n' +
 '    }\n' +
 '   }\n' +   
 '  }\n'; 
Blockly.Arduino.definitions_.func_encodemotor = code;
return "";
};

//--------------------------------------------------------------------------------------
Blockly.Arduino['encodemotor_type2'] = function(block) {
  var value_e2 = Blockly.Arduino.valueToCode(block, 'e2', Blockly.Arduino.ORDER_ATOMIC);
  var value_e3 = Blockly.Arduino.valueToCode(block, 'e3', Blockly.Arduino.ORDER_ATOMIC);
  var value_e4 = Blockly.Arduino.valueToCode(block, 'e4', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
 var code = '\n' +
 'void encoder_ISR() {\n' +        
 '  if (digitalRead('+value_e3.toString()+') == HIGH) {\n' +         // 判斷方向
 '    if (digitalRead('+value_e4.toString()+') == LOW) {\n' +
 '      '+value_e2+'++;  // 順時針\n' +
 '    } else {\n' +
 '      '+value_e2+'--;  // 逆時針針\n' +
 '    }\n' +
 '  } else {\n' +
 '    if (digitalRead('+value_e4.toString()+') == LOW) {\n' +
 '      '+value_e2+'--;  // 逆時針\n' +
 '    } else {\n' +
 '      '+value_e2+'++;  // 順時針\n' +
 '    }\n' +
 '  }\n' +   
 ' }\n';  
Blockly.Arduino.definitions_.func_encodemotor_type2 = code;

return 'attachInterrupt('+value_e3.toString()+', encoderISR, CHANGE);\n';
};
