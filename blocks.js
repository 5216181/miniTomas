Blockly.Blocks['encodemotor_type2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("AB相編碼馬達");
    this.appendValueInput("e2")
        .setCheck(null)
        .appendField("回傳變數名稱");
    this.appendValueInput("e3")
        .setCheck("Number")
        .appendField("Pin1");
    this.appendValueInput("e4")
        .setCheck("Number")
        .appendField("Pin2");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
/*
Blockly.Blocks['encodemotor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("編碼馬達");
    this.appendValueInput("e1")
        .setCheck("String")
        .appendField("函式名稱");
    this.appendValueInput("e2")
        .setCheck("String")
        .appendField("回傳值名稱");
    this.appendValueInput("e3")
        .setCheck("Number")
        .appendField("腳位一");
    this.appendValueInput("e4")
        .setCheck("Number")
        .appendField("腳位二");
    this.setInputsInline(true);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
*/
