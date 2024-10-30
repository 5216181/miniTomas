
Blockly.Arduino['encodemotor'] = function(block) {
  var value_e1 = Blockly.Arduino.valueToCode(block, 'e1', Blockly.Arduino.ORDER_ATOMIC);
  var value_e2 = Blockly.Arduino.valueToCode(block, 'e2', Blockly.Arduino.ORDER_ATOMIC);
  var value_e3 = Blockly.Arduino.valueToCode(block, 'e3', Blockly.Arduino.ORDER_ATOMIC);
  var value_e4 = Blockly.Arduino.valueToCode(block, 'e4', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
  var code = '\n';
code=code + 'volatile long '+ value_e2.substr(1,value_e2.length-2) + ' = 0\n';

code=code + 'void '+value_e1.substr(1,value_e1.length-2)+'() {\n';

// 判断方向
code=code + '  if (digitalRead('+value_e3.toString()+') == HIGH) {\n';
code=code + '    if (digitalRead('+value_e4.toString()+') == LOW) {\n';
code=code + '      '+value_e2.substr(1,value_e2.length-2)+'++;  // 顺时针旋转\n';
code=code + '    } else {\n';
code=code + '      '+value_e2.substr(1,value_e2.length-2)+'--;  // 逆时针旋转\n';
code=code + '    }\n';
code=code + '  } else {\n';
code=code + '    if (digitalRead('+value_e4.toString()+') == LOW) {\n';
code=code + '      '+value_e2.substr(1,value_e2.length-2)+'--;  // 逆时针旋转\n';
code=code + '    } else {\n';
code=code + '      '+value_e2.substr(1,value_e2.length-2)+'++;  // 顺时针旋转\n';
code=code + '    }\n';
code=code + '  }\n';

  return code;
};
