Blockly.Blocks['max30102_infor'] = {
    init: function () {
      this.jsonInit(
        {
            "type": "max30102_infor",
            "message0": "giá trị %1",
            "args0": [
              {
                "type": "field_dropdown",
                "name": "action",
                "options": [
                  [
                    "nhịp tim(BPM)",
                    "bmp"
                  ],
                  [
                    "oxy trong máu(SPO2)",
                    "spo2"
                  ]
                ]
              }
            ],
            "output": null,
            "colour": 220,
            "tooltip": "",
            "helpUrl": ""
        }
    );
    }
};

Blockly.Python['max30102_infor'] = function(block) {
    var dropdown_action = block.getFieldValue('action');
    // TODO: Assemble Python into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
