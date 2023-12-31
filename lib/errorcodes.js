'use strict';

module.exports = {
  1001: {
    level: 'Customer',
    title: 'No communication betw. system controller and remote control',
    description: 'Room sensor will display error code A21/A22/A23/A24 depending on which heating circuit it controls. The Room sensor has first been installed successfully. Then the EMS bus signal has gone absent from the parent controller (display HMC300/HPC400).',
    alternatives: [
      {
        reason: 'Poor EMS connection between display and installer module.',
        action: 'Check both ends of EMS cabling between the boards.',
      },
    ],
  },
  1010: {
    level: 'Customer',
    title: 'No communication via EMS BUS connection',
    description: "The local device hasn't received its EMS token from the EMS bus master for a certain amount of time.",
    alternatives: [
      {
        reason: 'Break/disruption in EMS connection.',
        action: 'Check that accessories for the EMS bus (room control, mixing module, etc.) are properly connected.',
      },
      {
        reason: 'Interference on the EMS bus.',
        action: 'Check that the EMS bus (GND) is not in contact with the chassis. On some appliances it has happened that the 3,5 mm tele female connector attached to the BBT port of the inst.module [terminal 23,24,25] is in contact with the chassis. Then interference can enter the EMS bus via ground. Insulate the connector.',
      },
    ],
  },
  1051: {
    level: 'Customer',
    title: 'No communication with external room temp. sensor module',
    description: 'The module for external room temperature sensor has not been developed. The alarm is triggered if the installer still selects this module to control a heating circuit.',
    alternatives: [
      {
        reason: 'Incorrect setting in software. Service menu >> Set heating/cooling >> Heating circ. 1 >> Ext. room temp. sensor, shall always be set to No.',
        action: "The correct setting is made in Service menu >> Set heating/cooling >> Heating circ. 1 >> Programming unit = RC100/CR10. See room sensors' installer guide for more information.",
      },
    ],
  },
  1052: {
    level: 'Customer',
    title: 'No communication with external room temp. sensor module',
    description: 'The module for external room temperature sensor has not been developed. The alarm is triggered if the installer still selects this module to control a heating circuit.',
    alternatives: [
      {
        reason: 'Incorrect setting in software. Service menu >> Set heating/cooling >> Heating circ. 2 >> Ext. room temp. sensor, shall always be set to No.',
        action: "The correct setting is made in Service menu >> Set heating/cooling >> Heating circ. 2 >> Programming unit = RC100/CR10. See room sensors' installer guide for more information.",
      },
    ],
  },
  1053: {
    level: 'Customer',
    title: 'No communication with external room temp. sensor module',
    description: 'The module for external room temperature sensor has not been developed. The alarm is triggered if the installer still selects this module to control a heating circuit.',
    alternatives: [
      {
        reason: 'Incorrect setting in software. Service menu >> Set heating/cooling >> Heating circ. 3 >> Ext. room temp. sensor, shall always be set to No.',
        action: "The correct setting is made in Service menu >> Set heating/cooling >> Heating circ. 3 >> Programming unit = RC100/CR10. See room sensors' installer guide for more information.",
      },
    ],
  },
  1054: {
    level: 'Customer',
    title: 'No communication with external room temp. sensor module',
    description: 'The module for external room temperature sensor has not been developed. The alarm is triggered if the installer still selects this module to control a heating circuit.',
    alternatives: [
      {
        reason: 'Incorrect setting in software. Service menu >> Set heating/cooling >> Heating circ. 4 >> Ext. room temp. sensor, shall always be set to No.',
        action: "The correct setting is made in Service menu >> Set heating/cooling >> Heating circ. 4 >> Programming unit = RC100/CR10. See room sensors' installer guide for more information.",
      },
    ],
  },
  1081: {
    level: 'Customer',
    title: 'Two master prog units in the system.',
    description: 'The room sensor for heating circuit 1 has been incorrectly configured as a controller ("CO"/"SC").',
    alternatives: [
      {
        reason: 'The display unit in the indoor unit is always the controller in the system, and more than one is not allowed.',
        action: "Configure the room sensor for remote control \"Fb\". See room sensors' installation guide for more information.",
      },
    ],
  },
  1082: {
    level: 'Customer',
    title: 'Two master prog units in the system.',
    description: 'The room sensor for heating circuit 2 has been incorrectly configured as a controller ("CO"/"SC").',
    alternatives: [
      {
        reason: 'The display unit in the indoor unit is always the controller in the system, and more than one is not allowed.',
        action: "Configure the room sensor for remote control \"Fb\". See room sensors' installation guide for more information.",
      },
    ],
  },
  1083: {
    level: 'Customer',
    title: 'Two master prog units in the system.',
    description: 'The room sensor for heating circuit 3 has been incorrectly configured as a controller ("CO"/"SC").',
    alternatives: [
      {
        reason: 'The display unit in the indoor unit is always the controller in the system, and more than one is not allowed.',
        action: "Configure the room sensor for remote control \"Fb\". See room sensors' installation guide for more information.",
      },
    ],
  },
  1084: {
    level: 'Customer',
    title: 'Two master prog units in the system.',
    description: 'The room sensor for heating circuit 4 has been incorrectly configured as a controller ("CO"/"SC").',
    alternatives: [
      {
        reason: 'The display unit in the indoor unit is always the controller in the system, and more than one is not allowed.',
        action: "Configure the room sensor for remote control \"Fb\". See room sensors' installation guide for more information.",
      },
    ],
  },
  3061: {
    level: 'Customer',
    title: 'No communication with mixer module',
    description: 'A mixing module has previously been installed for heating circuit 1 and now the installer module is unable to communicate with the rooms sensor over the EMS bus.',
    alternatives: [
      {
        reason: 'Poor connection or improperly installed EMS cable between installer module and mixing module.',
        action: 'Check EMS cabling.',
      },
    ],
  },
  3062: {
    level: 'Customer',
    title: 'No communication with mixer module',
    description: 'A mixing module has previously been installed for heating circuit 2 and now the installer module is unable to communicate with the rooms sensor over the EMS bus.',
    alternatives: [
      {
        reason: 'Poor connection or improperly installed EMS cable between installer module and mixing module.',
        action: 'Check EMS cabling.',
      },
    ],
  },
  3063: {
    level: 'Customer',
    title: 'No communication with mixer module',
    description: 'A mixing module has previously been installed for heating circuit 3 and now the installer module is unable to communicate with the rooms sensor over the EMS bus.',
    alternatives: [
      {
        reason: 'Poor connection or improperly installed EMS cable between installer module and mixing module.',
        action: 'Check EMS cabling.',
      },
    ],
  },
  3064: {
    level: 'Customer',
    title: 'No communication with mixer module',
    description: 'A mixing module has previously been installed for heating circuit 4 and now the installer module is unable to communicate with the rooms sensor over the EMS bus.',
    alternatives: [
      {
        reason: 'Poor connection or improperly installed EMS cable between installer module and mixing module.',
        action: 'Check EMS cabling.',
      },
    ],
  },
  3071: {
    level: 'Customer',
    title: 'No communication with remote control',
    description: 'A room sensor has previously been installed for heating circuit 1 and now the installer module is unable to communicate with the rooms sensor over the EMS bus.',
    alternatives: [
      {
        reason: 'Poor connection or improperly installed EMS cable between installer module and room sensor.',
        action: 'Check EMS cabling.',
      },
    ],
  },
  3072: {
    level: 'Customer',
    title: 'No communication with remote control',
    description: 'A room sensor has previously been installed for heating circuit 2 and now the installer module is unable to communicate with the rooms sensor over the EMS bus.',
    alternatives: [
      {
        reason: 'Poor connection or improperly installed EMS cable between installer module and room sensor.',
        action: 'Check EMS cabling.',
      },
    ],
  },
  3073: {
    level: 'Customer',
    title: 'No communication with remote control',
    description: 'A room sensor has previously been installed for heating circuit 3 and now the installer module is unable to communicate with the rooms sensor over the EMS bus.',
    alternatives: [
      {
        reason: 'Poor connection or improperly installed EMS cable between installer module and room sensor.',
        action: 'Check EMS cabling.',
      },
    ],
  },
  3074: {
    level: 'Customer',
    title: 'No communication with remote control',
    description: 'A room sensor has previously been installed for heating circuit 4 and now the installer module is unable to communicate with the rooms sensor over the EMS bus.',
    alternatives: [
      {
        reason: 'Poor connection or improperly installed EMS cable between installer module and room sensor.',
        action: 'Check EMS cabling.',
      },
    ],
  },
  3091: {
    level: 'Customer',
    title: 'A61 on room sensor. Room temperature sensor faulty',
    description: 'The thermistor inside the room sensor for heating circuit 1 is defective. EMS communication is working.',
    alternatives: [
      {
        reason: 'Broken room sensor.',
        action: 'The room sensor must be replaced.',
      },
    ],
  },
  3092: {
    level: 'Customer',
    title: 'A62 on room sensor. Room temperature sensor faulty',
    description: 'The thermistor inside the room sensor for heating circuit 2 is defective. EMS communication is working.',
    alternatives: [
      {
        reason: 'Broken room sensor.',
        action: 'The room sensor must be replaced.',
      },
    ],
  },
  3093: {
    level: 'Customer',
    title: 'A63 on room sensor. Room temperature sensor faulty',
    description: 'The thermistor inside the room sensor for heating circuit 3 is defective. EMS communication is working.',
    alternatives: [
      {
        reason: 'Broken room sensor.',
        action: 'The room sensor must be replaced.',
      },
    ],
  },
  3094: {
    level: 'Customer',
    title: 'A64 on room sensor. Room temperature sensor faulty',
    description: 'The thermistor inside the room sensor for heating circuit 4 is defective. EMS communication is working.',
    alternatives: [
      {
        reason: 'Broken room sensor.',
        action: 'The room sensor must be replaced.',
      },
    ],
  },
  3121: {
    level: 'Installer',
    title: 'A32 on Circuit 1',
    description: 'Connection terminal MC15 and MC16 not equipped with bridge or temperature limiter',
    alternatives: [
      {
        reason: 'Broken bridge or temperature sensor.',
        action: 'The sensor must be replaced or bridged.',
      },
    ],
  },
  3122: {
    level: 'Installer',
    title: 'A32 on Circuit 2',
    description: 'Connection terminal MC15 and MC16 not equipped with bridge or temperature limiter',
    alternatives: [
      {
        reason: 'Broken bridge or temperature sensor.',
        action: 'The sensor must be replaced or bridged.',
      },
    ],
  },
  3123: {
    level: 'Installer',
    title: 'A32 on Circuit 3',
    description: 'Connection terminal MC15 and MC16 not equipped with bridge or temperature limiter',
    alternatives: [
      {
        reason: 'Broken bridge or temperature sensor.',
        action: 'The sensor must be replaced or bridged.',
      },
    ],
  },
  5201: {
    level: 'Installer',
    title: 'Warning Outside temp. sensor T1 open circuit',
    description: 'Warning if the resistance of the outdoor sensor T1 > 179 kOhm (corresponding to a temperature < -50\u00b0C).',
    alternatives: [
      {
        reason: 'Outdoor sensor T1 has not been installed.',
        action: 'Install outdoor sensor.',
      },
      {
        reason: 'Break on signal cable between installer module and sensor.',
        action: 'Check signal cable and connection to installer module.',
      },
    ],
  },
  5202: {
    level: 'Installer',
    title: 'Warning Outdoor temp. sensor T1 short circuit',
    description: 'Warning if the resistance of the outdoor sensor T1 < 824 Ohm (corresponding to a temperature > 70\u00b0C).',
    alternatives: [
      {
        reason: 'Outdoor sensor T1/signal cable shorted.',
        action: 'Check signal cable.',
      },
    ],
  },
  5203: {
    level: 'Customer',
    title: 'Alarm Z1 Temperature too high on compressor control system',
    description: 'Internal high temperature protection in inverter. Alarm if 3 warnings (code 5302) are triggered witin 3 hours, or if the temperature continuously exceeds 80\u00b0C for 30 minutes.',
    alternatives: [
      {
        reason: 'See warning 5302.',
        action: 'See warning 5302.',
      },
      {
        reason: 'Defective inverter.',
        action: 'Replace inverter.',
      },
    ],
  },
  5204: {
    level: 'Installer',
    title: 'Warning Z1 Flow temperature sensor T0 open circuit',
    description: 'Warning if the resistance of flow sensor T0 > 30 kOhm (<0\u00b0C).',
    alternatives: [
      {
        reason: 'Break on signal cable between installer module and sensor.',
        action: 'Check signal cable and screw terminal on installer module.',
      },
    ],
  },
  5205: {
    level: 'Installer',
    title: 'Warning Z1 Flow temperature sensor T0 short circuit',
    description: 'Warning if the resistance of flow sensor T0 < 500 Ohm (>110\u00b0C).',
    alternatives: [
      {
        reason: 'Flow sensor T0/signal cable shorted.',
        action: 'Check signal cable.',
      },
    ],
  },
  5206: {
    level: 'Customer',
    title: 'Alarm Z1 Flow temperature sensor T0 failure',
    description: 'Alarm if 3 warnings are registered withing 3 hours, or if the circuit for flow sensor T0 is continuously shorted/broken for 30 minutes.',
    alternatives: [
      {
        reason: 'See possible causes for the warnings 5204 and 5205.',
        action: 'Se possible actions for the warnings 5204 and 5205.',
      },
      {
        reason: 'Flow sensor T0 value is out of range (> 30 kOhm or < 500 Ohm).',
        action: 'Measure the resistance of the temperature sensor. If the value is out of range the signal cable may have a break or short. Replace signal cable or sensor T0 if necessary.',
      },
      {
        reason: 'Defective installer module.',
        action: 'If sensor T0 measures the correct value, and the same warning (5204/5205) remains when the sensor is connected, replace the installer module.',
      },
    ],
  },
  5207: {
    level: 'Installer',
    title: 'Warning Temperature sensor TC1 open circuit',
    description: 'Warning if open circuit (>179 kOhm) on sensor TC1 after 3 registered errors within 2 hours.',
    alternatives: [
      {
        reason: 'Screw terminal on installer module not properly tightened.',
        action: 'Check screw terminal for TC1.',
      },
      {
        reason: 'Heat carrier outlet sensor TC1/signal cable open circuit.',
        action: 'With TC1 disconnected from installer module, compare measured Ohm value with sensor table in documentation. Replace sensor if necessary.',
      },
      {
        reason: 'Defective installer module.',
        action: 'Replace installer module.',
      },
    ],
  },
  5208: {
    level: 'Installer',
    title: 'Warning Temperature sensor TC1 short circuit',
    description: 'Warning short circuit (<3900 Ohm) on sensor TC1, if 3 registered errors within 2 hours.',
    alternatives: [
      {
        reason: 'Heat carrier outlet sensor TC1/signal cable shorted.',
        action: 'With TC1 disconnected from installer module, compare measured Ohm value with sensor table in documentation. Repair sensor cable or replace sensor if necessary.',
      },
      {
        reason: 'Defective installer module.',
        action: 'Replace installer module.',
      },
    ],
  },
  5209: {
    level: 'Customer',
    title: 'Alarm Temperature sensor TC1 fault',
    description: 'Alarm after 3 errors within 3 hours, or 15 minutes of continuously broken/shorted cicuit for sensor TC1.',
    alternatives: [
      {
        reason: 'Se possible causes for alarm code 5207, 5208.',
        action: 'See actions for alarm codes 5207, 5209.',
      },
    ],
  },
  5213: {
    level: 'Installer',
    title: 'Warning Z1 Inlet temp. sensor TC0 open circuit',
    description: 'Warning if the resistance of heat carrier return-sensor TC0 > 30 kOhm (<0\u00b0C).',
    alternatives: [
      {
        reason: 'Screw terminal in installer module, for heat carrier return sensor TC1, not properly tightened.',
        action: 'Check screw terminal for TC1.',
      },
      {
        reason: 'Heat carrier return sensor TC0/signal cable broken.',
        action: 'With sensor disconnected from the installer board, measure the Ohm value and compare it to table value in documentation. Repair cable or replace sensor if necessary.',
      },
      {
        reason: 'Defective installer module.',
        action: 'Replace installer module.',
      },
    ],
  },
  5214: {
    level: 'Installer',
    title: 'Warning Z1 Inlet temp. sensor TC0 short circuit',
    description: 'Warning if the resistance of heat carrier return-sensor TC0 < 500 Ohm (>110\u00b0C).',
    alternatives: [
      {
        reason: 'Heat carrier return sensor TC0/signal cable shorted.',
        action: 'With sensor TC0 disconnected from the installer board, measure the resistance and compare it to sensor table in documentation. Replace sensor if necessary.',
      },
      {
        reason: 'Defective installer board.',
        action: 'Replace installer board.',
      },
    ],
  },
  5215: {
    level: 'Customer',
    title: 'Alarm Z1 Inlet temperature sensor TC0 fault',
    description: 'Alarm if 3 warnings are registered within 3 hours, or if the circuit for sensor TC0 is continuously broken/shorted for 15 minutes.',
    alternatives: [
      {
        reason: 'See possible causes for alarm codes 5213, 5214.',
        action: 'See possible actions for alarm codes 5213, 5214.',
      },
    ],
  },
  5234: {
    level: 'Installer',
    title: 'Warning Pool temp. sensor TP1 open circuit',
    description: 'Warning for interruption of the circuit (>179 kOhm) on sensor TP1, after 3 faults within 2 hours.',
    alternatives: [
      {
        reason: 'Pool temperature sensor TP1/signal cable interruption.',
        action: 'Measure resistance of sensor TP1/signal cable, and compare value to sensor table in documentation. TP1 needs to disconnected from the I/O modulen during measurement. Repair cable or replace sensor if necessary.',
      },
      {
        reason: 'Screw terminal for sensor TP1 is not properly tightened.',
        action: 'Tighten screws.',
      },
      {
        reason: 'Defective I/O module.',
        action: 'Replace I/O module.',
      },
    ],
  },
  5235: {
    level: 'Installer',
    title: 'Warning Pool temp. sensor TP1 short circuit',
    description: 'Warning if circuit for pool temperature sensor TP1 is shorted. Warning is triggered if three detected faults within 2 hours.',
    alternatives: [
      {
        reason: 'Pool temperature sensor TP1/signal cable shorted.',
        action: 'Measure resistance of sensor TP1/signal cable, and compare value to sensor table in documentation. TP1 needs to disconnected from the I/O modulen during measurement. Repair cable or replace sensor if necessary.',
      },
      {
        reason: 'Defective I/O module.',
        action: 'Replace I/O module.',
      },
    ],
  },
  5236: {
    level: 'Customer',
    title: 'Alarm Pooltemperature sensor TP1 fault',
    description: 'Alarm if 3 errors within 3 hours, or if circuit for pool temperature sensor TP1 is broken/shorted continuously for 15 minutes.',
    alternatives: [
      {
        reason: 'Se possible causes for codes 5234, 5235.',
        action: 'Se trouble-shooting advice for codes 5234, 5235.',
      },
    ],
  },
  5237: {
    level: 'Installer',
    title: 'Warning DHW temp. sensor TW1 open circuit',
    description: 'Warning if the resistance for hot water sensor TW1 > 30 kOhm (<0\u00b0C). [IVT] Warning if the resistance for hot water sensor TW1 > 36 kOhm (<0\u00b0C). [Bosch]',
    alternatives: [
      {
        reason: 'Screw terminal for TW1 on installer module not properly tightened.',
        action: 'Check screw terminal.',
      },
      {
        reason: 'Sensor TW1 or signal cable is broken.',
        action: 'With the sensor disconnected from the installer board, meausre and compare the resistance to sensor table in documentation. Repair cable or replace sensor if necessary.',
      },
      {
        reason: 'Defective installer board.',
        action: 'Replace installer board.',
      },
    ],
  },
  5239: {
    level: 'Customer',
    title: 'Alarm DHW temp. sens. TW1 fault',
    description: 'Alarm is triggered if 3 warnings have been registered within 3 hours, or if the circuit for sensor TW1 is continuously broken/shorted for 15 minutes.',
    alternatives: [
      {
        reason: 'Se possible causes for warning codes 5237 and 5238.',
        action: 'See possible actions for warning codes 5237 and 5238.',
      },
    ],
  },
  5246: {
    level: 'Customer',
    title: 'Alarm Z1 Electr.boost.heater E2 high li. saf. cut-out or press.reg. triggered',
    description: 'The alarm circuit has two guards connected in series: The overheating protector for the electrical heater is triggered. The pressure guard MC1 for the heating system is triggered due to pressure < 0,5 bar. Either of these two can cause the alarm.',
    alternatives: [
      {
        reason: 'Low system pressure. Air in the heating system.',
        action: 'De-air heating system according to instruction in the installer guide. Refill heating system.',
      },
      {
        reason: 'Clogged filterball SC1 on return pipe.',
        action: 'Clean filter ball SC1.',
      },
      {
        reason: 'Bad circulation in the heating carrier/heating system.',
        action: 'Check adjustment valves/thermostats for heating system.',
      },
      {
        reason: 'Fuse F1 is broken.',
        action: 'Replace fuse F1.',
      },
      {
        reason: 'Defective system pressure guard MC1.',
        action: 'Replace system pressure guard.',
      },
      {
        reason: 'Defective overheating protector.',
        action: 'Verify breaking temperature (96\u00b0C) for the overheating protector.',
      },
      {
        reason: 'Defective installer module, PWM signal for the circulation pump missing.',
        action: 'Disconnect PWM signal from terminal 40,41 on installer module. The speed of the circulation pump should increase to 100%.',
      },
      {
        reason: 'Fuse F50 on installer module is broken.',
        action: 'Replace fuse F50.',
      },
      {
        reason: '230 V supply missing on installer module.',
        action: 'Ensure that supply voltage is 230 V on installer module.',
      },
      {
        reason: 'Defective installer module.',
        action: 'Replace installer module.',
      },
      {
        reason: 'Defective circulation pump.',
        action: 'Replace circulation pump.',
      },
      {
        reason: 'Contactor for electrical heater has got jammed in closed (active) position.',
        action: 'Check / replace contactor.',
      },
    ],
  },
  5252: {
    level: 'Installer',
    title: 'Warning Z1 Restr. in flow rate btw. outdoor and ind. unit (check strainer)',
    description: 'Warning when the heat carrier delta >13K in heating mode, or >7K in cooling mode.',
    alternatives: [
      {
        reason: 'Bad circulation in the heating carrier/heating system.',
        action: 'Check adjustment valves/thermostats for heating system.',
      },
    ],
  },
  5265: {
    level: 'Installer',
    title: 'Warning Z1 PCB disconnected',
    description: 'Bad connection or interference on CANbus between heat pump and indoor unit.',
    alternatives: [
      {
        reason: 'Bad CANbus connections on installer board (indoor unit) or I/O board (outdoor unit).',
        action: 'Check CANbus connections on installer board and I/O board.',
      },
      {
        reason: 'Open circuit/break on CANbus cable between indoor and outdoor unit.',
        action: 'Replace CANbus cable.',
      },
      {
        reason: 'Incorrect type of CANbus cable. Read printed documentation for further info.',
        action: 'Change to proper type of cable.',
      },
      {
        reason: 'CANbus cable is placed together with power supply to heat pump. Interference can be generated by electromagnetic induction.',
        action: 'Separate CANbus and power supply by at least 100 mm.',
      },
      {
        reason: 'Incorrect earthing of CANbus cable.',
        action: 'Remove/connect cable shield to/from earth.',
      },
    ],
  },
  5266: {
    level: 'Customer',
    title: 'Alarm Z1 PCB disconnected',
    description: 'Alarm after 3 warnings within 3 hours, or continuous disruption in 15 minutes.',
    alternatives: [
      {
        reason: 'See possible causes for warning 5265.',
        action: 'See actions for alarm 5265.',
      },
    ],
  },
  5269: {
    level: 'Customer',
    title: 'Alarm Z1 Additional electric heater EE too high temperature',
    description: 'Alarm when sensor TC1>87\u00b0C. The alarm is automatically acknowledged/reset when TC1<80\u00b0C.',
    alternatives: [
      {
        reason: 'Dirt in filter ball SC1 on return line.',
        action: 'Clear system filter/filter ball SC1.',
      },
      {
        reason: 'Poor circulation in heat transfer system/heating system.',
        action: 'Check adjustment valves/thermostats for heating system. Ensure adequate flow.',
      },
      {
        reason: 'Defective TC1 sensor.',
        action: 'With TC1 disconnected from the installer module, compare its measured value to sensor table in documentation. Replace sensor TC1 if necessary.',
      },
    ],
  },
  5271: {
    level: 'Customer',
    title: 'Alarm Heating circuit 1 high flow temperature',
    description: 'Alarm when sensor T0 > "Max. flow temperature" set point value + 5 degrees, for 10 seconds. The alarm is blocked for 5 minutes after a DHW cycle.',
    alternatives: [
      {
        reason: 'Defective T0 sensor.',
        action: 'With sensor disconnected from the installer board, compare sensor resistans to table values for T0 found in the documentation.',
      },
      {
        reason: 'Low flow in heating system.',
        action: 'Clean filter ball on return pipe. Check adjustment valves and thermostats for the heating system.',
      },
      {
        reason: 'The system is in heating mode but the diverter valve has not switched over to DHW.',
        action: 'Check that 230 V is available on terminal 53 (VW1) during DHW mode. If 230 V during DHW mode, replace the motor/cable for the diverter valve. If voltage is missing during DHW mode, replace the installer module.',
      },
    ],
  },
  5272: {
    level: 'Customer',
    title: 'Alarm External heater EM is not operational',
    description: 'Alarm for external additional heater/overheating protector. Alarm is triggered if 230 V is detected on terminal 64 on installer module.',
    alternatives: [
      {
        reason: 'See possible causes for alarm 5246.',
        action: 'Se actions for alarm 5246.',
      },
      {
        reason: 'Tripped fuse at distrubution box.',
        action: 'Replace/reset fuses at distribution box.',
      },
    ],
  },
  5273: {
    level: 'Customer',
    title: 'Alarm Z1 Phase monitoring',
    description: 'Alarm if phase is missing. Only applicable for 3-phase models. 1-phase: If L1 is missing the indoor unit shuts down. If L3 is missing the heat pump shuts down.',
    alternatives: [
      {
        reason: 'Tripped fuse in indoor unit (tower).',
        action: 'Reset fuse in indoor unit.',
      },
      {
        reason: 'Phase/phases missing on terminals for supply voltage in heat pump.',
        action: 'Check that all phases are properly connected and that each one carries voltage.',
      },
      {
        reason: 'Phase/phases missing on terminals for supply voltage on EMI filter in the inverter.',
        action: 'Check that all phases are available on terminals for EMI filter.',
      },
      {
        reason: 'If voltage is present on all phases connected to the EMI filter, and alarm remains, the inverter is broken.',
        action: 'Replace inverter.',
      },
    ],
  },
  5275: {
    level: 'Customer',
    title: 'Alarm Electric anode is out of order',
    description: 'Alarm if voltage > 1 V DC on terminal 45, 46 on installer module, for longer than 6 hours.',
    alternatives: [
      {
        reason: 'LED on electrical anode board is lit red.',
        action: 'Check connection/cable on terminal X2, and electrical anode rod in cylinder.',
      },
      {
        reason: 'Check that the LED is lit green on the electrical anode board.',
        action: 'If LED is lit green, check that voltage exceeds 1 V DC on terminal 45, 46 on installer module.',
      },
      {
        reason: 'If voltage > 1V DC on terminal 45,46, the installer module is defective.',
        action: 'Replace installer module.',
      },
      {
        reason: 'Green LED on electrical anode board is not turned on.',
        action: 'Ensure that 230V is available on terminal X1 on electrical anode board.',
      },
      {
        reason: 'If 230 V is available on terminal X1If green LED on electrical anode board is turned off, the board is broken.',
        action: 'Replace electrical anode board.',
      },
    ],
  },
  5276: {
    level: 'Customer',
    title: 'Alarm Z1 Pressure in brine circuit too low',
    description: 'Alarm if the circuit for pressure guard, external input I1-I2-I3-I4, is broken.',
    alternatives: [
      {
        reason: 'Pressure is below chosen limit.',
        action: 'Check the pressure of cold carrier.',
      },
    ],
  },
  5284: {
    level: 'Installer',
    title: 'Warning Last thermal disinfection failed',
    description: 'The domestic hot water temperature, sensor TW1, has not reached 65\u00b0C within 180 minutes.',
    alternatives: [
      {
        reason: 'Water is continuously tapped from the cylinder.',
        action: 'Stop such continuous usage or change (prolong) the time for thermal disinfection.',
      },
      {
        reason: 'The electrical heaters output power is set too low in relation to hot water volume.',
        action: 'If the fuse requires the heater to run at limited power, you may need to allow a longer time for thermal disinfection. The time can be adjusted under [Service menu >> DHW >> Max. time].',
      },
      {
        reason: 'Hot water sensor is misplaced, or have come loose from the cylinder.',
        action: 'Put the hot water sensor in the correct position.',
      },
      {
        reason: 'Air in the heating coil.',
        action: 'De-air the heating coil.',
      },
      {
        reason: 'If using hot water circulation, too big losses from the pipes.',
        action: 'Make sure that circulation pipes are properly insulated.',
      },
      {
        reason: 'Incorrect reading from temperature sensor TW1.',
        action: 'With sensor disconnected from the installer module, measure its resistance and compare it to table value in documentation. Replace if necessary.',
      },
      {
        reason: 'Incorrectly connected pipes to hot water system.',
        action: 'Fix any pipe connection issues.',
      },
    ],
  },
  5285: {
    level: 'Installer',
    title: 'Warning Risk of frost in heat. sys.',
    description: 'Varning om T0 (framledning), TC3 (v\u00e4rmeb\u00e4rare ut) eller TC0 (v\u00e4rmeb\u00e4rare retur) < 5\u00b0C i 10 minuter. N\u00e4r varningen triggas startar tillg\u00e4ngliga v\u00e4rmek\u00e4llor och alla shuntventiler \u00f6ppnar f\u00f6r att v\u00e4rma systemet. \u00c5terst\u00e4llning sker n\u00e4r ovan n\u00e4mnda givare > 25\u00b0C.',
    alternatives: [
      {
        reason: 'Defective sensor.',
        action: 'Check the different sensors and compare Ohmvalues to table values in documentation. Replace sensor if sensor if necessary.',
      },
      {
        reason: 'Supply voltage (230 V) is missing for circulation pump PC0.',
        action: 'Check that 230V is available on terminal PC0 (51, N) on the installation module. If not, also check that the fuse on the installation module is OK.',
      },
      {
        reason: 'PWM signal for circulation pump PC0 is missing.',
        action: 'Disconnect PWM signal from terminal 40,41 on the installation module. The speed of the circulation pump shall increase to max. If this does not happen, replace the circulation pump.',
      },
      {
        reason: 'Defective installation module (does not provide 230V for PC0 despite the fuse beeing OK, or that the PWM-signal is not working).',
        action: 'Replace installation module.',
      },
    ],
  },
  5298: {
    level: 'Installer',
    title: 'Warning Z1 High pressure alarm JR1',
    description: 'Warning if JR1 > 67\u00b0C (Pe=44 bar).',
    alternatives: [
      {
        reason: 'Dirt in system filter/filterball valve SC1.',
        action: 'Clean the filter.',
      },
      {
        reason: 'Poor circulation in heat transfer system/heating system.',
        action: 'Ensure sufficient flow.',
      },
      {
        reason: 'Air in heat transfer system/heating system.',
        action: 'Vent the heating system in accordance with instructions in installation manual. Fill up with water.',
      },
      {
        reason: 'Defective sensor TC3, TC0 or T0.',
        action: 'With sensors disconnected from installer module, measure the resistance of the sensors. Read out values from sensor table in documentation and compare them to actual temperatures. Replace any defective sensor.',
      },
      {
        reason: 'Diverter valve VW1 does not shift from hot water production to heating.',
        action: 'Check VW1 position. A=hot water, B=heating system.',
      },
      {
        reason: 'Defective installer module, bad control signal for diverter valve.',
        action: 'Check that terminal 53 on installer module provides 230V in hot water mode only.',
      },
      {
        reason: 'Defective installer module, PWM signal missing for circulation pump PC0.',
        action: 'Disconnect the PWM signal from terminal 40, 41 on the installer module. The speed of the pump should increase to 100%. If not, replace the circulation pump.',
      },
      {
        reason: 'Defective installer module, supply voltage, 230 V, missing from circulation pump PC0.',
        action: 'Measure voltage on terminal 51-N. If no voltage, replace installer module.',
      },
    ],
  },
  5299: {
    level: 'Customer',
    title: 'Alarm Z1 High pressure alarm JR1',
    description: 'Alarm if JR1 > 67\u00b0C (Pe=44 bar) 3 times within 2 hours.',
    alternatives: [
      {
        reason: 'See possible causes for warning 5298.',
        action: 'Se actions for warning 5298.',
      },
    ],
  },
  5302: {
    level: 'Installer',
    title: 'Warning Z1 Too high temperature on compressor driver',
    description: 'Internal high temperature protection in inverter. Warning is triggered if temperature exceeds 80\u00b0C.',
    alternatives: [
      {
        reason: 'Poor heat transfer to cooling coil.',
        action: 'Check screw mountings for cooling coil.',
      },
    ],
  },
  5310: {
    level: 'Installer',
    title: 'Warning Z1 Too high discharge gas temperature',
    description: 'Warning if hot gas temperature TR6 > maximum temperature (90 or 115\u00b0C) for more than 60 seconds.',
    alternatives: [
      {
        reason: 'Suction gas overheating too high. The suction gas overheating is calculated through TR5 - JR0, and controls the position of the electronic expansion valve. Therefore correct readings from these sensors are important.',
        action: 'Compare read value from sensor TR5 with value of external thermometer. Connect manometer to refrigerant circuit and measure low pressure. Compare evaporating tempeature value to read value from JR0.',
      },
      {
        reason: 'If neither JR0 or TR5 are bad, a possible cause could be that the electronic expansion valve is not regulating properly.',
        action: 'Use magnet to manuall change position of the EEV during operation. This to ensure that the valve has not seized.',
      },
    ],
  },
  5311: {
    level: 'Customer',
    title: 'Alarm Z1 Too high discharge gas temperature',
    description: 'Alarm after 3 warnings within 3 hours (TR6 > 90 or 115\u00b0C), or if warning is continuously active for more than 30 minutes.',
    alternatives: [
      {
        reason: 'See possible causes for warning 5310.',
        action: 'See possible actions for warning 5310.',
      },
    ],
  },
  5314: {
    level: 'Installer',
    title: 'Warning Z1 Disch. gas temp. sensor TR6 open circuit',
    description: 'Broken circuit (> 364 kOhm) for sensor TR6.',
    alternatives: [
      {
        reason: 'Broken circuit for discharge gas temperature sensor TR6.',
        action: 'Check resistance of sensor TR6 and signal cable and compare to table value in documentation. Measurement is done with sensor disconnected from I/O-module. Replace sensor if necessary.',
      },
      {
        reason: 'Defective I/O module.',
        action: 'If signal cable is intact and the resistance of sensor TR6 is correct in relation to temperature, replace I/O module.',
      },
    ],
  },
  5315: {
    level: 'Installer',
    title: 'Warning Z1 Disch. gas temp. sensor TR6 short circuit',
    description: 'Shorted circuit (< 350 kOhm) for sensor TR6, for more than 1 minute.',
    alternatives: [
      {
        reason: 'Discharge gas temperature sensor TR6 or signal cable is shorted.',
        action: 'Check resistance of sensor TR6 and signal cable and compare to table value in documentation. Measurement is done with sensor disconnected from I/O module. Repair cable or replace sensor if necessary.',
      },
      {
        reason: 'Defective I/O module.',
        action: 'Replace I/O module.',
      },
    ],
  },
  5316: {
    level: 'Customer',
    title: 'Alarm Z1 Discharge gas temp. sensor TR6 fault',
    description: 'Alarm if any of the warnings 5314 or 5315 has been triggered 3 times within 2 hours, or if any of the warnings have been active for more than 15 minutes.',
    alternatives: [
      {
        reason: 'Se possible causes for warning codes 5314, 5315.',
        action: 'See actions for warning codes 5314, 5315.',
      },
    ],
  },
  5320: {
    level: 'Installer',
    title: 'Warning Temperature sensor TC3 open circuit',
    description: 'Broken circuit (> 390 kOhm) for sensor TC3 (heat carrier out).',
    alternatives: [
      {
        reason: 'Broken sensor TC3/signal cable.',
        action: 'With sensor disconnected from I/O module, measure resistance of sensor/signal cable and compare to table values in documentation.',
      },
      {
        reason: 'Connector not properly seated in I/O module.',
        action: 'Check connector.',
      },
      {
        reason: 'Broken sensor TC3/signal cable.',
        action: 'Replace sensor TC3.',
      },
      {
        reason: 'Defective I/O module.',
        action: 'Replace I/O module.',
      },
    ],
  },
  5321: {
    level: 'Installer',
    title: 'Warning Temperature sensor TC3 short circuit',
    description: 'Shorted circuit (< 350 kOhm) for sensor TC3 (heat carrier out).',
    alternatives: [
      {
        reason: 'Sensor TC3/signal cable is shorted.',
        action: 'With sensor disconnected from I/O module, measure the resistance of sensor and signal cable. Compare to table values in documentation. Repair signal cable or replace sensor.',
      },
      {
        reason: 'Defective I/O module.',
        action: 'Replace I/O module.',
      },
    ],
  },
  5322: {
    level: 'Customer',
    title: 'Alarm Temperature sensor TC3 fault',
    description: 'Alarm if any of the warning codes 5320 and 5321 are registered 3 times within 3 hours, or if TC3 circuit is continuously broken/shorted for 15 minutes.',
    alternatives: [
      {
        reason: 'See possible causes for warning codes 5320, 5321.',
        action: 'See actions for warning codes 5320, 5321.',
      },
    ],
  },
  5330: {
    level: 'Installer',
    title: 'Warning Z1 Communication fault to compressor driver',
    description: 'Warning if more than 20% of data sent to the inverter returns with errors (bad reply or no reply).',
    alternatives: [
      {
        reason: 'Supply voltage missing in outdoor unit.',
        action: 'Check 230/400 V connections in both indoor and outdoor unit.',
      },
      {
        reason: 'Interference on MODbus.',
        action: 'Check MODbus cable/connection terminals between I/O module and inverter.',
      },
      {
        reason: 'Incorrect CANbus connection between indoor and outdoor unit.',
        action: 'Check connections and cable routing. A 100 mm gap between supply voltage cables and CANbus cables are needed to avoid interference.',
      },
    ],
  },
  5331: {
    level: 'Customer',
    title: 'Alarm Z1 Communication fault to compressor control system',
    description: 'Alarm if comunication is missing, or more than 30% of data sent to inverter returns with errors (incorrect reply or no reply at all).',
    alternatives: [
      {
        reason: 'Supply voltage missing in outdoor unit.',
        action: 'Check 230V/400V connections in IDU and ODU.',
      },
      {
        reason: 'Incorrect program selection (P-selector on I/O-module (outdoor unit). The meaning of P=4 and P=6 have become mixed up i some manuals.',
        action: 'Compare P-selection with settinf defined in manual. The following information is correct. P=4: HP 13 kW 3N~ P=6: HP 13 kW 1N~',
      },
      {
        reason: 'Interference on MODbus.',
        action: 'Check MODbus cable/connection terminals between I/O module and inverter.',
      },
      {
        reason: 'Improper routing of CANbus cable between indoor and outdoor unit.',
        action: 'Check cabling and routing. CANbus should be separated from supply voltage cables by at least 100 mm, to avoid interference.',
      },
      {
        reason: 'Defective I/O module.',
        action: 'Check that 12V DC is available on MODbus terminal (31, 34) on I/O module. If 12V DC missing, replace I/O module.',
      },
      {
        reason: 'Defective inverter.',
        action: 'Replace inverter.',
      },
    ],
  },
  5347: {
    level: 'Installer',
    title: 'Warning Z1 Undervoltage at power supply',
    description: 'Warning if incoming AC voltage to inverter < 165 V during 10 s, or if voltage < 180 V during 0.5 s. Warning is automatically reset after 2 minutes if incoming AC voltage > 190 V.',
    alternatives: [
      {
        reason: 'Bad connection in mains voltage to either indoor or outdoor unit.',
        action: 'Check supply voltage.',
      },
      {
        reason: 'Low incoming mains voltage to indoor our outdoor unit.',
        action: 'If repeated warnings, contact the electricity supplier.',
      },
      {
        reason: 'Low incoming mains voltage to installer module.',
        action: 'If repeated warnings, contact the electricity supplier.',
      },
    ],
  },
  5350: {
    level: 'Installer',
    title: 'Warning Z1 Driving failure on compressor',
    description: 'Warning compressor motor (synchronous motor) not synchronous after 5 failed start attempts.',
    alternatives: [
      {
        reason: 'Bad cabling conncetion between inverter and compressor.',
        action: 'Check cabling/connections between inverter and compressor.',
      },
      {
        reason: 'Oil/liquid in compressor during start attempt.',
        action: 'Bad reading from compressor sensor TR1.',
      },
      {
        reason: 'Bad temperature reading from compressor sensor TR1.',
        action: 'Compare value of TR1 with value measured by external thermometer.',
      },
      {
        reason: 'Improper setting of rotary encoders on the I/O module.',
        action: "Check that the A- and P-selectors (rotary encoders) are set according to the wiring diagram. It's a good idea to double-check these settings if the I/O module has previously been replaced.",
      },
    ],
  },
  5351: {
    level: 'Customer',
    title: 'Alarm Z1 Driving failure on compressor',
    description: 'Alarm if 3 warnings are registered within 3 hours, or if the warning is active for 30 minutes. The alarm is automatically reset after 4 minutes if the condition is no longer fulfilled.',
    alternatives: [
      {
        reason: 'Se possible causes for warning code 5350.',
        action: 'See possible actions for warning code 5350.',
      },
    ],
  },
  5354: {
    level: 'Installer',
    title: 'Warning Z1 Overcurrent on the compressor',
    description: 'Warning if the inverter registeres an overcurrent >42 A DC to compressor, for more than 20 microseconds. Warning is automatically reset after 4 minutes if the condition is not fulfilled.',
    alternatives: [
      {
        reason: 'Broken/shorted cabling between the inverter and compressor.',
        action: 'Check cabling between inverter and compressor.',
      },
    ],
  },
  5355: {
    level: 'Customer',
    title: 'Alarm Z1 Overcurrent on the compressor',
    description: 'Alarm after if 3 warnings are registered within 3 hours, or if the warning is active for 30 minutes.',
    alternatives: [
      {
        reason: 'See possible causes for warning code 5354.',
        action: 'See possible actions for warning code 5354.',
      },
      {
        reason: 'Defective inverter.',
        action: 'Replace inverter.',
      },
      {
        reason: 'Electrical fault in compressor.',
        action: 'Measure the resistance between windings and earth. If resistance < 10 kOhm, replace the compressor.',
      },
    ],
  },
  5362: {
    level: 'Customer',
    title: 'Info Z1 overvoltage',
    description: 'Info if supply voltage to heat pump >400 V for more than 30 seconds. Automatically reset after 4 minutes if voltage drops below 380 V.',
    alternatives: [
      {
        reason: 'Too high incoming voltage to heat pump.',
        action: 'Check main fuses with regard to poor contact.',
      },
      {
        reason: 'Too high incoming mains voltage.',
        action: 'If repeated warnings, contact the electricity supplier.',
      },
    ],
  },
  5366: {
    level: 'Installer',
    title: 'Warning Z1 Low superheat of refrigerant',
    description: 'Warning if suction gas overheating < 2 degreees and the discharge gas overheating < 20 degrees.',
    alternatives: [
      {
        reason: 'Motor not correctly mounted on electronc expansion valve.',
        action: 'Check motor.',
      },
      {
        reason: 'Check that the electronic expansion valves open/close in the correct order.',
        action: 'Activate test outdoor unit.',
      },
      {
        reason: 'Defective expansion valve motor.',
        action: 'Measure the resistance between the gray cable and orange, red, yellow and black cables. 46 kOhm = OK. If broken or shorted circuit, replace motor.',
      },
      {
        reason: 'Expansion valve VR1 opens too much/gets stuck in open position.',
        action: 'If repeated warnings, replace the expansion valve.',
      },
    ],
  },
  5367: {
    level: 'Customer',
    title: 'Alarm Z1 Superheat of refrigerant too low',
    description: 'Alarm if 3 warnings are registered within 3 hours, or if the warning is active for 30 minutes.',
    alternatives: [
      {
        reason: 'See possible causes for warning code 5366.',
        action: 'See possible actions for warning code 5366.',
      },
    ],
  },
  5374: {
    level: 'Installer',
    title: 'Warning Z1 Risk of frost in condenser',
    description: 'Warning if TC3 < 5\u00b0C. Warning is automatically reset when TC3 and TC1 > 7\u00b0C.',
    alternatives: [
      {
        reason: 'Insuffient or no circulation in heat transfer system/heating system.',
        action: 'Check adjustment valves/radiator thermostats.',
      },
      {
        reason: 'Dirt in system filter/filterball valve SC1.',
        action: 'Clean the filter.',
      },
      {
        reason: 'Air in heat transfer system/heating system.',
        action: 'De-air the heating system in accordance with instructions in installation manual. Fill up with water.',
      },
      {
        reason: 'Defective TC3 sensor (heat carrier out).',
        action: 'Compare sensor reading in display to actual temperature. Replace sensor if necessary.',
      },
      {
        reason: 'Defective installer module, PWM-signal for circulation pump PC0 missing.',
        action: 'Disconnect PWM signal from terminal 36,37 on I/O module. The speed of the the circulation pump should increase to 100%.',
      },
      {
        reason: 'Defective I/O module, 230 V supply missing for circulation pump.',
        action: 'Check that 230 V is available on terminal 51,N on installer module.',
      },
      {
        reason: 'Defective installer module.',
        action: 'Replace installer module.',
      },
      {
        reason: 'Defective circulation pump.',
        action: 'Replace circulation pump.',
      },
    ],
  },
  5375: {
    level: 'Customer',
    title: 'Alarm Z1 Risk of frost in condenser',
    description: 'Alarm if 3 warnings are registered within 3 hours, or if the warning is active for 30 minutes.',
    alternatives: [
      {
        reason: 'See possible causes for warning code 5374.',
        action: 'See possible actions for warning code 5374.',
      },
    ],
  },
  5387: {
    level: 'Customer',
    title: 'Alarm Z1 PFC compressor driver overheat',
    description: "Warning if internal temperature sensor in the inverter's PFC module > 80\u00b0C for 10 seconds.",
    alternatives: [
      {
        reason: 'Poor heat transfer to cooling coil.',
        action: 'Check screw mountings for cooling coil.',
      },
      {
        reason: 'If repeated alarms, the inverter is likely defective.',
        action: 'Replace inverter.',
      },
    ],
  },
  5394: {
    level: 'Installer',
    title: 'Warning Z1 Internal compressor driver fault 1',
    description: 'Warning if inverter registers over-current > 42 A DC to compressor, for more than 20 microseconds. Warning is automatically reset after 4 minutes if condition is no longer fulfilled.',
    alternatives: [
      {
        reason: 'Break/interruption or short-circuit in cabling between inverter and compressor.',
        action: 'Check cabling between inverter and compressor.',
      },
    ],
  },
  5395: {
    level: 'Customer',
    title: 'Alarm Z1 Internal compressor driver fault 1',
    description: 'Alarm if 3 warnings (code 5394) are registered within 3 hours, or if the warning is continuously active for 30 minutes.',
    alternatives: [
      {
        reason: 'See possible causes for warning code 5394.',
        action: 'See possible actions for warning code 5394.',
      },
      {
        reason: "Incorrect setting on rotary encoder/selector P on the heat pump's I/O module. The meaning of P=4 and P=6 has been accidently swapped in some manuals.",
        action: 'Compare P-selection with setting defined in manual. The following information is correct. P=4: HP 13 kW 3N~ P=6: HP 13 kW 1N~',
      },
      {
        reason: 'Electrical fault in compressor.',
        action: 'Measure the resistance between the compressor windings and earth. If resistance < 10 kOhm, replace the compressor.',
      },
      {
        reason: 'Defective inverter.',
        action: 'Replace inverter.',
      },
    ],
  },
  5414: {
    level: 'Installer',
    title: 'Warning Z1 Condensate sensor heating mode TR3 open circuit',
    description: 'Warning if circuit for sensor TR3 is broken (> 179 kOhm).',
    alternatives: [
      {
        reason: 'Screw terminal on I/O-module for sensor TR3 has not been tightened properly.',
        action: 'Check screw terminal.',
      },
      {
        reason: 'Sensor TR3/signal cable is broken.',
        action: 'With sensor disconnected from I/O module, measure resistance of sensor and compare it to table values in documentation. If broken, replace sensor.',
      },
      {
        reason: 'Defective I/O module.',
        action: 'If the sensor measures correctly but the same warning code persists, replace the I/O module.',
      },
    ],
  },
  5416: {
    level: 'Customer',
    title: 'Alarm Z1 Condensate sensor heating mode TR3 fault',
    description: 'Alarm if any of the warning codes 5414 or 5415 are registrered 3 times within 2 hours, or if sensor TR3 is continuously broken/shorted for 15 minutes.',
    alternatives: [
      {
        reason: 'See possible causes for warning codes 5414, 5415.',
        action: 'See possible actions for warning codes 5414, 5415.',
      },
    ],
  },
  5420: {
    level: 'Installer',
    title: 'Warning Z1 Condensate sensor cooling mode TR4 open circuit',
    description: 'Warning if circuit for sensor TR4 is broken (> 170 kOhm).',
    alternatives: [
      {
        reason: 'Screw terminal on I/O module, for sensor TR4, is not properly tightened.',
        action: 'Check screw terminal of I/O module.',
      },
      {
        reason: 'Broken sensor TR4/signal cable.',
        action: 'With sensor disconnected from I/O module, measure its reistance. If broken, replace sensor.',
      },
      {
        reason: 'Defective I/O module.',
        action: 'If the sensor measures correctly but the same warning code persists, replace the I/O module.',
      },
    ],
  },
  5421: {
    level: 'Installer',
    title: 'Warning Z1 Condensate sensor cooling mode TR4 short circuit',
    description: 'Warning if circuit for sensor TR4 is shorted.',
    alternatives: [
      {
        reason: 'Sensor TR4/signal cable broken.',
        action: 'With sensor disconnected from I/O module, measure its reistance. If shorted, replace sensor.',
      },
      {
        reason: 'Defective I/O module.',
        action: 'If the sensor measures correctly but the same warning code persists, replace the I/O module.',
      },
    ],
  },
  5422: {
    level: 'Customer',
    title: 'Alarm Z1 Condensate sensor cooling mode TR4 fault',
    description: 'Alarm is triggered if any of the warning codes 5420, 5421, are registered 3 times within 2 hours, or if circuit for sensor TR4 is continuously broken/shorted for 15 minutes.',
    alternatives: [
      {
        reason: 'See possible causes for warning codes 5420, 5421.',
        action: 'See possible actions for warning codes 5420, 5421.',
      },
    ],
  },
  5426: {
    level: 'Installer',
    title: 'Warning Z1 Suction gas temperature sensor TR5 open circuit',
    description: 'Warning if circuit for sensor TR5 is broken (> 179 kOhm).',
    alternatives: [
      {
        reason: 'Screw terminal on I/O module, for sensor TR5, not properly tightened.',
        action: 'Check screw terminal on I/O module.',
      },
      {
        reason: 'Sensor TR5/signal cable broken.',
        action: 'With sensor disconnected from I/O module, measure its reistance. If broken, replace sensor.',
      },
      {
        reason: 'Defective I/O module.',
        action: 'If the sensor measures correctly but the same warning code persists, replace the I/O module.',
      },
    ],
  },
  5427: {
    level: 'Installer',
    title: 'Warning Z1 Suction gas temperature sensor TR5 short circuit',
    description: 'Warning if circuit for sensor TR5 is shorted (< 390 Ohm).',
    alternatives: [
      {
        reason: 'Sensor TR5/signal cable shorted.',
        action: 'With the sensor disconnected from I/O module, measure its resistance. If shorted, replace sensor.',
      },
      {
        reason: 'Defective I/O module.',
        action: 'If the sensor measures correctly but the same warning code persists, replace the I/O module.',
      },
    ],
  },
  5428: {
    level: 'Customer',
    title: 'Alarm Z1 Suction gas temperature sensor TR5 fault',
    description: 'Alarm if any of the warning codes 5426, 5427 are registered 3 times within 2 hours, or if circuit for sensor TR5 is continuously broken/shorted for 15 minutes.',
    alternatives: [
      {
        reason: 'See possible causes for warning codes 5426, 5427.',
        action: 'See possible actions for warning codes 5426, 5427.',
      },
    ],
  },
  5432: {
    level: 'Installer',
    title: 'Warning Z1 Low pressure sensor JR0 open circuit',
    description: 'Warning if voltage < 0,5 V DC on terminal 17 on I/O module.',
    alternatives: [
      {
        reason: 'Poor connection in cabling/terminal 17,19 on I/O module.',
        action: 'Check cabling and terminal connections 17, 19 on I/O module.',
      },
      {
        reason: 'Defective I/O module.',
        action: 'Check that 5V DC is available between terminal 19 and 17, when the pressure sensor is disconnected. If voltage is missing, the I/O module is defective and needs to be replaced.',
      },
      {
        reason: 'Pressure sensor JR0 is defective.',
        action: 'If voltage between terminal 19 and 17 is 5 V DC, the pressure sensor is likely broken. Replace pressure sensor',
      },
    ],
  },
  5434: {
    level: 'Customer',
    title: 'Alarm Z1 Low pressure sensor JR0 fault',
    description: 'Alarm if warning 5432 is registered 3 times within 15 minutes, or if the circuit is continuosly broken for 15 minutes.',
    alternatives: [
      {
        reason: 'See possible causes for warning code 5432.',
        action: 'See possible actions for warning code 5432.',
      },
    ],
  },
  5438: {
    level: 'Installer',
    title: 'Warning Z1 High pressure sensor JR1 open circuit',
    description: 'Warning if voltage < 0,5 V DC on terminal 16 on I/O module.',
    alternatives: [
      {
        reason: 'Poor connection in cabling/terminal 16,18 on I/O module.',
        action: 'Check cabling and terminal connections 16, 18 on I/O module.',
      },
      {
        reason: 'Defective I/O module.',
        action: 'Check that 5V DC is available between terminal 18 and 16, when the pressure sensor is disconnected. If voltage is missing, the I/O module is defective and needs to be replaced.',
      },
      {
        reason: 'Pressure sensor JR1 is defective.',
        action: 'If voltage between terminal 18 and 16 is 5 V DC, the pressure sensor is likely broken. Replace pressure sensor.',
      },
    ],
  },
  5440: {
    level: 'Customer',
    title: 'Alarm Z1 High pressure sensor JR1 fault',
    description: 'Alarm if warning 5438 is registered 3 times within 2 hours, or if circuit for pressure sensor JR1 is continuously broken for 15 minutes.',
    alternatives: [
      {
        reason: 'See possible causes for warning code 5438.',
        action: 'See possible actions for warning code 5438.',
      },
    ],
  },
  5446: {
    level: 'Installer',
    title: 'Alarm Z1 Flow and return between indoor and outdoor unit mixed up',
    description: 'Alarm if (TC3 \u2013 1) < TC0, and JR1 > (TC3 + 7), for more than 30 seconds. (Where TC3 is heat carrier flow, TC0 is heat carrier return, JR1 is high pressure sensor (condensation temperature.)',
    alternatives: [
      {
        reason: 'Hoses for flow and return between the heat pump and indoor unit have been mixed up.',
        action: 'Install hoses on the right connections.',
      },
      {
        reason: 'Defective sensor TC3 or TC0.',
        action: 'Check placement of sensors. Compare displayed temperatures for TC3 and TC0 with an external thermometer on these positions. Replace sensor(s) if deviations are found.',
      },
    ],
  },
  5448: {
    level: 'Installer',
    title: 'Alarm Z1 Lack of refrigerant',
    description: 'Alarm after 20 minutes if the electronic expansion valve VR0 has opened 20% more than calculated value.',
    alternatives: [
      {
        reason: 'Too little refrigerant in heat pump.',
        action: 'Check refrigerant filling. Note! Activate the function \u201devacuation/fill\u201d function when evacuating or filling refrigerant.',
      },
      {
        reason: 'Possible leak in refrigerant circuit.',
        action: 'Check/repair leak.',
      },
    ],
  },
  5451: {
    level: 'Customer',
    title: 'Warning: Insufficient flow during de-icing',
    description: 'Usually due to insufficient circulation in the heat pump',
    alternatives: [
      {
        reason: 'Insufficient circulation',
        action: 'Open thermostats in the heating system.',
      },
      {
        reason: 'Clogged particle filter',
        action: 'Clean the particle filter in the heating system.',
      },
    ],
  },
  5452: {
    level: 'Customer',
    title: 'Warning Z1 Internal compressor control system fault',
    description: 'Alarm for internal fault in inverter.',
    alternatives: [
      {
        reason: 'Defective inverter.',
        action: 'Replace inverter.',
      },
    ],
  },
  5453: {
    level: 'Customer',
    title: 'Warning Z1 No power supply to outdoor unit',
    description: 'Warning if incoming AC voltage to inverter < 165 V for 10 seconds. Warning is automatically reset after 2 minutes if the incoming AC voltage > 190 V.',
    alternatives: [
      {
        reason: 'Low or no voltage to outdoor unit.',
        action: 'Check main fuses with regards to poor contact and blown fuses.',
      },
      {
        reason: 'Low incoming mains voltage.',
        action: 'With repeated warnings, contact the electricity supplier.',
      },
    ],
  },
  5463: {
    level: 'Customer',
    title: 'Alarm Z1 Defrost failure. Clean outdoor unit',
    description: 'Alarm if timer for defrost exceeds 800 seconds 3 times, or if a the need to defrost has occured 3 times within minimal time, in heating mode.',
    alternatives: [
      {
        reason: 'Evaporator clogged with ice.',
        action: 'Gently melt the ice with hot water..',
      },
      {
        reason: 'The heat pump is overfilled.',
        action: 'Empty heat pump and fill according to information on type plate.',
      },
      {
        reason: 'Too low temperature on heating system.',
        action: 'Open more thermostats in heating system.',
      },
      {
        reason: 'Dirt in system filter/filterball SC1.',
        action: 'Clean system filter/filterball SC1.',
      },
    ],
  },
  5500: {
    level: 'Customer',
    title: 'Warning Underfloor heating temp. Limiter has tripped',
    description: 'Alarm if the external input 1-3 on I/O module is closed, depending on selection.',
    alternatives: [
      {
        reason: 'Protective thermostat for underfloor heating has been tripped.',
        action: 'Reset thermostat, adjust heat curve if necessary.',
      },
    ],
  },
  5501: {
    level: 'Customer',
    title: 'JR0 Larm Rengör värmepumpen Z2',
    alternatives: [
      {
        sreason: 'Upprepat PL1 larm i värmedrift.',
        action: 'Rengör dropplåten i värmepump Z2.',
      },
    ],
  },
  5502: {
    level: 'Customer',
    title: 'Elvärmaren i droppskålen i värmepump Z2 ur funktion',
    alternatives: [
      {
        reason: 'Givare TA4 går ej över 5 °C vid avfrostning.',
        action: 'Kontrollera funktion av elvärmare och givare i värmepump Z2. Byt felaktig komponent.',
      },
    ],
  },
  5503: {
    level: 'Installer',
    title: 'Warning Connection problem with the power guard',
    description: 'Communication between installer module and power guard is missing for 30 seconds.',
    alternatives: [
      {
        reason: 'Incorrect cabling/connections.',
        action: 'Check cabling/connections.',
      },
      {
        reason: 'Poor connection in CANbus connections on installer module or power guard.',
        action: 'Check CANbus connections on installer module and power guard.',
      },
      {
        reason: 'Interruption/break on CANbus cable between installer module and power guard.',
        action: 'Replace CANbus cable.',
      },
      {
        reason: 'Incorrect type of CANbus cable.',
        action: 'Replace to correct type of CANbus cable. Check documentation for more information.',
      },
      {
        reason: 'CANbus cable installed together with/close to supply voltage to heat pump.',
        action: 'Separate CANbus and power cables by at least 100 mm to prevent interference.',
      },
    ],
  },
  5504: {
    level: 'Customer',
    title: 'Alarm Connection problem with the power guard',
    description: 'Alarm if warning 5503 is registered 3 times within 3 hours, or if the warning is active for 30 minutes.',
    alternatives: [
      {
        reason: 'See possible causes for warning code 5503.',
        action: 'See possible actions for warning code 5503.',
      },
    ],
  },
  5505: {
    level: 'Customer',
    title: 'Elvärmaren i droppskålen i värmepump Z1 ur funktion',
    alternatives: [
      {
        reason: 'Givare TA4 går ej över 5 °C vid avfrostning.',
        action: 'Kontrollera funktion av elvärmare och givare i värmepump Z1. Byt felaktig komponent.',
      },
    ],
  },
  5506: {
    level: 'Installer',
    title: 'Alarm Z1 Compressor does not start',
    description: 'Alarm if the compressor has not started within 2 minutes after a start signal has been sent.',
    alternatives: [
      {
        reason: 'Temporary malfunction in inverter.',
        action: 'Break power to heat pump and turn it on again.',
      },
      {
        reason: 'Internal error in inverter.',
        action: 'Replace inverter.',
      },
    ],
  },
  5507: {
    level: 'Installer',
    title: 'Warning Z1 MR1 High pressure warn.',
    description: 'The circuit for the high pressure guard MR1 is broken for more than 3 seconds. The compressor stops.',
    alternatives: [
      {
        reason: 'Defective pressure guard, i.e. broken circuit even though the current pressure is below the limit.',
        action: 'Replace pressure guard if it triggers too early. Normal breaking pressure is 44 bar (R410A).',
      },
      {
        reason: 'Break or poor connection in cabling between MR1 and inverter.',
        action: 'Check cabling/connections between MR1 and inverter.',
      },
      {
        reason: 'Break or poor connection in cabling between MR1 and inverter.',
        action: 'Make sure that the high pressure guard is connected.',
      },
    ],
  },
  5508: {
    level: 'Customer',
    title: 'Alarm Z1 MR1 High pressure alarm',
    description: 'Alarm if warning 5507 is registrered 2 times within 3 hours.',
    alternatives: [
      {
        reason: 'See possible causes for warning code 5507 above.',
        action: 'See possible actions for warning code 5507 above.',
      },
    ],
  },
  5509: {
    level: 'Customer',
    title: 'MR1 högtryckslarm B i värmepump Z2',
    alternatives: [
      {
        reason: 'Högt tryck i köldmediekretsen.',
        action: 'Kontrollera värmekurva och varmvatteninställningar.',
      },
    ],
  },
  5510: {
    level: 'Customer',
    title: 'MR1 högtryckslarm A i värmepump Z2',
    alternatives: [
      {
        reason: 'Högt tryck i köldmediekretsen. 3 varningar inom 3 timmar eller om varningen är aktiv mer än 30 minuter.',
        action: 'Kontrollera värmekurva och varmvatteninställningar.',
      },
    ],
  },
  5511: {
    level: 'Customer',
    title: 'Fel Kompressordriver installerad i värmepump Z1',
    alternatives: [
      {
        reason: 'Driver och kompressormodell stämmer ej överrens.',
        action: 'Kontakta service.',
      },
    ],
  },
  5512: {
    level: 'Installer',
    title: 'Warning Z1 Condensation temp. Outside control range',
    description: 'Warning if temperature of JR1 > the currently allowed envelope, for more than 30 seconds.',
    alternatives: [
      {
        reason: 'Too low evaporating temperature in relation to condensation temperature.',
        action: 'The most likely cause is low outdoor temperature. See diagram, chapter 4 of installer guide.',
      },
    ],
  },
  5513: {
    level: 'Customer',
    title: 'Alarm Z1 Condensation temperature too high',
    description: 'Alarm if 3 warnings (code 5512) are registered within 3 hours, or warning active for 30 minutes.',
    alternatives: [
      {
        reason: 'Too low evaporating temperature in relation to condensation temperature.',
        action: 'The most likely cause is low outdoor temperature. See diagram, chapter 4 of installer guide.',
      },
      {
        reason: 'Too high flow or too low delta on heating system.',
        action: 'Adjust temperature/flow.',
      },
    ],
  },
  5514: {
    level: 'Installer',
    title: 'Warning Z1 Evap. Pressure on JR0 too low',
    description: 'Warning if temperature of JR0 < the currently allowed envelope (-27\u00b0C) for more than 30 seconds.',
    alternatives: [
      {
        reason: 'Blocked or low air flow through air heat exchanger of heat pump.',
        action: 'Ensure sufficient air flow through air heat exchanger.',
      },
      {
        reason: 'Defective fan.',
        action: 'Activate test for outdoor unit.',
      },
      {
        reason: '230 V supply voltage missing from fan.',
        action: 'Check if 230 V voltage is available on output PL3, terminal 32 (78, N)',
      },
      {
        reason: '0-10 V control signal missing for fan.',
        action: 'Check 0-10V voltage on output PL3 PWM, terminal 20 (20, 26) using test function for outdoor unit.',
      },
      {
        reason: 'Defective fan.',
        action: 'If voltages are available in accordance with above and the fan is still not running, replace the fan.',
      },
      {
        reason: 'One of the expansion valves has got stuck in its closed position.',
        action: 'Check control cables to expansion valves. Run test cycle for outdoor unit and check that the expansion valves are opening.',
      },
      {
        reason: 'Defective I/O module.',
        action: 'If any of the voltages are missing, in accordance with above, replace the I/O module.',
      },
    ],
  },
  5515: {
    level: 'Customer',
    title: 'Alarm Z1 Evap. Pressure on JR0 too low',
    description: 'Alarm if 3 warnings (code 5514) are registered within 3 hours, or if warning is active for 30 minutes.',
    alternatives: [
      {
        reason: 'See possible causes for warning code 5514.',
        action: 'See possible actions for warning code 5514.',
      },
    ],
  },
  5517: {
    level: 'Customer',
    title: 'Fel Kompressordriver installerad i värmepump Z2',
    alternatives: [
      {
        reason: 'Driver och kompressormodell stämmer ej överrens.',
        action: 'Kontakta service.',
      },
    ],
  },
  5518: {
    level: 'Customer',
    title: 'Kondenseringstemperaturen utanför envelopen i värmepump Z2',
    alternatives: [
      {
        reason: 'Temperaturen på givare PH1 överstiger gränsvärdet i 30 sekunder.',
        action: 'Kontrollera värmekurva och varmvatteninställningar.',
      },
    ],
  },
  5519: {
    level: 'Customer',
    title: 'För hög kondensering i värmepump Z2',
    alternatives: [
      {
        reason: '3 varningar inom 3 timmar eller om varningen är aktiv mer än 30 minuter.',
        action: 'Kontrollera värmekurva och varmvatteninställningar.',
      },
    ],
  },
  5520: {
    level: 'Customer',
    title: 'Lågtrycksvarning JR0 i värmepump Z2',
    alternatives: [
      {
        reason: 'Om temperaturen på givare PL1 understiger gränsvärdet i 30 sekunder.',
        action: 'Kontrollera inställning för lägsta utetemperatur.',
      },
    ],
  },
  5521: {
    level: 'Customer',
    title: 'Larm låg förångning JR0 i värmepump Z2',
    alternatives: [
      {
        reason: '3 varningar inom 3 timmar eller om varningen är aktiv mer än 30 minuter.',
        action: 'Kontrollera inställning för lägsta utetemperatur.',
      },
    ],
  },
  5522: {
    level: 'Installer',
    title: 'Alarm Wrong combination of indoor and outdoor units.',
    description: 'Setting of rotary encoder on installer board does not match the installed heat pump.',
    alternatives: [
      {
        reason: 'Non matching combination of heat pump and indoor unit.',
        action: 'Check combination.',
      },
      {
        reason: "If I/O module has been replaced, it's possible that rotary encoder has not been set up correctly on the new I/O module.",
        action: 'Compare setting with rotary encoder of old I/O module. If that is not available the information can be found in the installer guide.',
      },
      {
        reason: 'When replacing installer module, the rotary encoder has not been set up properly on the new board.',
        action: 'Check setting of the rotary encoder, compare it to old board.',
      },
    ],
  },
  5523: {
    level: 'Installer',
    title: 'Warning Z1 Internal compressor driver warning 3',
    description: 'Warning if incoming AC current > 31 A, 6 times. The warning is automatically reset after 4 minutes if the condition is no longer fulfilled.',
    alternatives: [
      {
        reason: 'Internal error in inverter.',
        action: 'Temporary malfunction. Await possible alarm in customer level (code 5524), until applying further actions..',
      },
    ],
  },
  5524: {
    level: 'Customer',
    title: 'Alarm Z1 Internal compressor driver error 3',
    description: 'Alarm if warning 5524 is registered 3 times within 3 hours, or if the warning is active for 30 minutes.',
    alternatives: [
      {
        reason: 'Internal error in inverter.',
        action: 'Replace inverter.',
      },
    ],
  },
  5526: {
    level: 'Customer',
    title: 'Larm värmepump Z2. defr. Rengör värmepumpens utedel',
    alternatives: [
      {
        reason: 'Mer än 3 defrost starter på minimum värmetid.',
        action: 'Rengör värmepmpens dropplåt. Kontrollera avfrostningsfunktionen.',
      },
    ],
  },
  5527: {
    level: 'Customer',
    title: 'Alarm Z1 Too much refrigerant in cooling circuit',
    description: 'Alarm if JR1 > (TC3 + 5\u00b0C) and subcooling > set point value. Both conditions needs to be fulfilled for more than 5 minutes during hot water production.',
    alternatives: [
      {
        reason: 'Heat pump overfilled.',
        action: 'Evacuate heat pump and refill with quantity specifed on type plate.',
      },
    ],
  },
  5528: {
    level: 'Customer',
    title: 'Varning värmepump Z2. Kompressorgivare TR1 avbrott',
    alternatives: [
      {
        reason: 'Efter ett antal detekterade fel aktiveras underhållsinstruktion',
        action: 'Mät upp givare och byt ut felaktig komponent.',
      },
    ],
  },
  5529: {
    level: 'Customer',
    title: 'Varning värmepump Z2. Kompressorgivare TR1 kortsluten',
    alternatives: [
      {
        reason: 'Efter ett antal detekterade fel aktiveras underhållsinstruktion',
        action: 'Mät upp givare och byt ut felaktig komponent.',
      },
    ],
  },
  5530: {
    level: 'Customer',
    title: 'Larm värmepump Z2. Kompressorgivare TR1 trasig',
    alternatives: [
      {
        reason: 'Efter ett antal detekterade varningar 5531 och 5532 aktiveras larmet.',
        action: 'Mät upp givare och byt ut felaktig komponent.',
      },
    ],
  },
  5531: {
    level: 'Installer',
    title: 'Warning Z1 Compr. temperature sensor TR1 open circuit',
    description: 'Warning if circuit for sensor TR1 is broken (> 364 kOhm), for more than 2 hours.',
    alternatives: [
      {
        reason: 'Screw terminal for compressor sensor TR1, on I/O module, not properly tightened.',
        action: 'Check screw terminal.',
      },
      {
        reason: 'Broken compressor sensor TR1/signal cable.',
        action: 'Replace compressor sensor TR1.',
      },
      {
        reason: 'Defective I/O module.',
        action: 'Replace I/O module.',
      },
    ],
  },
  5532: {
    level: 'Installer',
    title: 'Warning Z1 Compr. temperature sensor TR1 short circuit',
    description: 'Warning if circuit for sensor TR1 is broken (<350 Ohm).',
    alternatives: [
      {
        reason: 'Compressor sensor TR1/signal cable is shorted.',
        action: 'With sensor disconnected from I/O module, measure resistance of sensor. If shorted, replace sensor.',
      },
      {
        reason: 'Defective I/O module.',
        action: 'Replace I/O module.',
      },
    ],
  },
  5533: {
    level: 'Customer',
    title: 'Alarm Z1 Compressor temperature sensor TR1 failure',
    description: 'Alarm if any of the warnings 5531, 5532, are registered 3 times within 3 hours, or if circuit is continuously broken/shorted for 15 minutes.',
    alternatives: [
      {
        reason: 'See possible causes for warning codes 5531, 5532.',
        action: 'See possible actions for warning codes 5531, 5532.',
      },
    ],
  },
  5534: {
    level: 'Customer',
    title: 'Varning värmepump Z2 temperaturgivare TA4 avbrott',
    alternatives: [
      {
        reason: 'Efter ett antal detekterade fel aktiveras underhållsinstruktion',
        action: 'Mät upp givare och byt ut felaktig komponent.',
      },
    ],
  },
  5535: {
    level: 'Customer',
    title: 'Varning värmepump Z2 temperaturgivare TA4 kortsluten',
    alternatives: [
      {
        reason: 'Efter ett antal detekterade fel aktiveras underhållsinstruktion',
        action: 'Mät upp givare och byt ut felaktig komponent.',
      },
    ],
  },
  5536: {
    level: 'Customer',
    title: 'Larm värmepump Z2 temperaturgivare TA4 trasig',
    alternatives: [
      {
        reason: 'Efter ett antal detekterade varningar 5534 och 5535 aktiveras larmet.',
        action: 'Mät upp givare och byt ut felaktig komponent.',
      },
    ],
  },
  5537: {
    level: 'Customer',
    title: 'Slangar mellan innedel och värmepump Z2 är växlade',
    alternatives: [
      {
        reason: 'Aktiveras om temperaturen på givare T7 är inom 1K från T9 och PH1 är mer än 10K högre än T7 under värme eller varmvattenproduction.',
        action: 'Växla slangarna till värmepumpen.',
      },
    ],
  },
  5538: {
    level: 'Customer',
    title: 'Varning värmepump Z1. temperaturgivare TA4 avbrott',
    alternatives: [
      {
        reason: 'Efter ett antal detekterade fel aktiveras underhållsinstruktion',
        action: 'Mät upp givare och byt ut felaktig komponent.',
      },
    ],
  },
  5539: {
    level: 'Customer',
    title: 'Varning värmepump Z1. temperaturgivare TA4 kortsluten',
    alternatives: [
      {
        reason: 'Efter ett antal detekterade fel aktiveras underhållsinstruktion',
        action: 'Mät upp givare och byt ut felaktig komponent.',
      },
    ],
  },
  5540: {
    level: 'Customer',
    title: 'Larm värmepump Z1. temperaturgivare TA4 trasig',
    alternatives: [
      {
        reason: 'Efter ett antal detekterade varningar 5538 och 5539 aktiveras larmet.',
        action: 'Mät upp givare och byt ut felaktig komponent.',
      },
    ],
  },
  5541: {
    level: 'Customer',
    title: 'Alarm Pool board communication failure',
    description: 'No communication between installer module and pool board for 90 seconds.',
    alternatives: [
      {
        reason: 'Poor connection in CANbus connections on installer module or pool module.',
        action: 'Check CANbus connections on installer module and pool module.',
      },
      {
        reason: 'Break on CANbus cable between installer module and pool module.',
        action: 'Replace CANbus cable between installer module and pool module.',
      },
      {
        reason: 'Improper type of CANbus cable.',
        action: 'Change to the correct type of cable. More information can be found in the installer guide.',
      },
      {
        reason: 'CANbus cable installed together with/close to supply voltage to heat pump.',
        action: 'Separate CANbus and power cables by at least 100 mm to prevent interference.',
      },
      {
        reason: 'Improper earthing of CANbus cable.',
        action: 'Disconnect/connect cable shield from/to earth.',
      },
    ],
  },
  5543: {
    level: 'Installer',
    title: 'Warning Z1 Overheating temperature is excessive',
    description: 'Suction gas overheating (TR5 - JR0) exceeds 10 degrees for more than 10 minutes, where TR5 is the suction gas temp and JR0 is the low pressure sensor.',
    alternatives: [
      {
        reason: 'Incorrect reading from suction gas temperature sensor TR5.',
        action: 'Measure the temperature with an external thermometer. If the value presented in the display does not match the measured valye, replace the sensor.',
      },
      {
        reason: 'Incorrect reading from low pressure sensor JR0.',
        action: 'Connect manometer check the pressure on the low pressure side. Replace the low pressure sensor if the values do not match.',
      },
      {
        reason: 'Poor connection of control signal cables for expansion valve.',
        action: 'Check that the cabling is properly attached in both ends.',
      },
      {
        reason: 'Lack of refrigerant or defective expansion valve.',
        action: "A suction gas overheating below 6 degrees for 10 minutes, can be a sign of shortage, but the symptoms can also be caused by an expansion valve that doesn't open properly. Contact local service department for guidance.",
      },
    ],
  },
  5545: {
    level: 'Customer',
    title: 'Alarm Z1 Both brine temp. Sensors TB0 and TB1 are defective',
    description: 'Alarm after 3 registered errors within 2 hours, or 15 minutes of broken/shorted circuit for sensor TB0 and TB1.',
    alternatives: [
      {
        reason: 'Screw terminals for sensors not properly tightened on I/O module.',
        action: 'Check screw terminals on I/O module.',
      },
      {
        reason: 'Brine sensor TB0 and TB1 / signal cables broken.',
        action: 'Replace sensors TB0, TB1 / repair signal cable(s).',
      },
      {
        reason: 'Defective I/O module.',
        action: 'Replace I/O module.',
      },
    ],
  },
  5547: {
    level: 'Installer',
    title: 'Warning Z1 Brine inlet temperature at TB0 is too low',
    description: 'Warning if TB0 < -6\u00b0C (for borehole) or +2\u00b0C (for groundwater)',
    alternatives: [
      {
        reason: 'Incorrect reading from sensor TB0.',
        action: 'Compare sensor reading to actual temperature. Replace sensor if there is a deviation.',
      },
    ],
  },
  5549: {
    level: 'Customer',
    title: 'Alarm Z1 Brine inlet temperature at TB0 is too low',
    description: 'Alarm if TB0 < -6\u00b0C (for borehole) or +2\u00b0C (for groundwater)',
    alternatives: [
      {
        reason: 'Incorrect reading from sensor TB0.',
        action: 'Compare sensor reading to actual temperature. Replace sensor if there is a deviation.',
      },
    ],
  },
  5551: {
    level: 'Installer',
    title: 'Warning Z1 Brine outlet temperature at TB1 is too low',
    description: 'Warning if TB1 < -6\u00b0C (for borehole) or +2\u00b0C (for groundwater)',
    alternatives: [
      {
        reason: 'Incorrect reading from sensor TB1.',
        action: 'Compare sensor reading to actual temperature. Replace sensor if there is a deviation.',
      },
    ],
  },
  5553: {
    level: 'Customer',
    title: 'Alarm Z1 Brine outlet temperature at TB1 is too low',
    description: 'Alarm if TB1 < -6\u00b0C (for borehole) or +2\u00b0C (for groundwater)',
    alternatives: [
      {
        reason: 'Incorrect reading from sensor TB1.',
        action: 'Compare sensor reading to actual temperature. Replace sensor if there is a deviation.',
      },
    ],
  },
  5555: {
    level: 'Installer',
    title: 'Warning Z1 Brine inlet temperature at TB0 is too high',
    description: 'Warning if TB0 > 30\u00b0C for 15 seconds. The compressor stops.',
    alternatives: [
      {
        reason: 'Incorrect reading from sensor TB0.',
        action: 'Compare sensor reading to actual temperature. Replace sensor if there is a deviation.',
      },
    ],
  },
  5557: {
    level: 'Customer',
    title: 'Alarm Z1 Brine inlet temperature at TB0 is too high',
    description: 'Alarm if TB0 > 30\u00b0C for 15 seconds. The compressor stops.',
    alternatives: [
      {
        reason: 'Incorrect reading from sensor TB0.',
        action: 'Compare sensor reading to actual temperature. Replace sensor if there is a deviation.',
      },
    ],
  },
  5559: {
    level: 'Installer',
    title: 'Warning Z1 Brine outlet temperature at TB1 is too high',
    description: 'Warning if TB1 > 30\u00b0C for 15 seconds. The compressor stops.',
    alternatives: [
      {
        reason: 'Incorrect reading from sensor TB0.',
        action: 'Compare sensor reading to actual temperature. Replace sensor if there is a deviation.',
      },
    ],
  },
  5561: {
    level: 'Customer',
    title: 'Alarm Z1 Brine outlet temperature at TB1 is too high',
    description: 'Alarm if TB1 > 30\u00b0C for 15 seconds. The compressor stops.',
    alternatives: [
      {
        reason: 'Incorrect reading from sensor TB0.',
        action: 'Compare sensor reading to actual temperature. Replace sensor if there is a deviation.',
      },
    ],
  },
  5563: {
    level: 'Installer',
    title: 'Warning Z1 High temp. Difference between TB0 and TB1',
    description: 'Warning if delta between TB0 and TB1 > 10 degrees K and TB1 must be < 10\u00b0C.',
    alternatives: [
      {
        reason: 'System filter/filterball is clogged.',
        action: 'Check filter. Clean if necessary.',
      },
      {
        reason: 'Air in brine system.',
        action: 'De-air brine system according to instruction in manual.',
      },
      {
        reason: 'Brine circulation pump PB3 is defective.',
        action: 'Test brine pump PB3 using manual operation from the display.',
      },
      {
        reason: 'Bad reading from brine sensor TB0/TB1.',
        action: 'Compare displayed values to actual temperatures measured with an external thermometer. Replace sensor(s) if deviation(s) found.',
      },
    ],
  },
  5565: {
    level: 'Customer',
    title: 'Alarm Z1 High temperature difference between TB0 and TB1',
    description: 'Alarm if delta between TB0 and TB1 > 10K and TB1 must be < 10\u00b0C. Alarm if 3 stops within 2 hours.',
    alternatives: [
      {
        reason: 'System filter/filterball is clogged.',
        action: 'Check filter. Clean if necessary.',
      },
      {
        reason: 'Air in brine system.',
        action: 'De-air brine system according to instruction in manual.',
      },
      {
        reason: 'Brine circulation pump PB3 is defective.',
        action: 'Test brine pump PB3 using manual operation from the display.',
      },
      {
        reason: 'Bad reading from TB0/TB1.',
        action: 'Compare displayed values to actual temperatures measured with an external thermometer. Replace sensor(s) if deviation(s) found.',
      },
    ],
  },
  5567: {
    level: 'Installer',
    title: 'Warning Z1 Brine pump failure',
    description: 'Warning if SSM I/O module, terminal 74-75 circuit is broken.',
    alternatives: [
      {
        reason: 'System filter/filterball is clogged.',
        action: 'Check filter. Clean if necessary.',
      },
      {
        reason: 'Air in brine system.',
        action: 'De-air brine system according to instruction in manual.',
      },
      {
        reason: 'Brine circulation pump PB3 is defective.',
        action: 'Test brine pump PB3 using manual operation from the display.',
      },
    ],
  },
  5569: {
    level: 'Customer',
    title: 'Alarm Z1 Brine pump failure',
    description: 'Alarm if SSM input is open for more than 3 minutes. I/O module terminal 74-75.',
    alternatives: [
      {
        reason: 'System filter/filterball is clogged.',
        action: 'Check filter. Clean if necessary.',
      },
      {
        reason: 'Air in brine system.',
        action: 'De-air brine system according to instruction in manual.',
      },
      {
        reason: 'Brine circulation pump PB3 is defective.',
        action: 'Test brine pump PB3 using manual operation from the display.',
      },
    ],
  },
  5571: {
    level: 'Installer',
    title: 'Warning Z1 Brine inlet temperature sensor TB0 short-circuit',
    description: 'Warning if circuit for sensor TB0 is shorted (< 390 Ohm).',
    alternatives: [
      {
        reason: 'Circuit for brine in sensor TB0 is broken.',
        action: 'With sensor disconnected from I/O module, measure resistance of sensor. If shorted, replace sensor.',
      },
      {
        reason: 'Screw terminal for sensor TB0 on I/O module not properly tightened.',
        action: 'Check screw terminal.',
      },
      {
        reason: 'Defective I/O module.',
        action: 'Replace I/O module.',
      },
    ],
  },
  5573: {
    level: 'Installer',
    title: 'Warning Z1 Brine inlet temperature sensor TB0 open circuit',
    description: 'Warning if circuit for sensor TB0 is broken (> 179 kOhm).',
    alternatives: [
      {
        reason: 'Brine in sensor TB0/signal cable broken.',
        action: 'With sensor disconnected from I/O module, measure resistance of sensor. If broken, replace sensor or repair signal cable..',
      },
      {
        reason: 'Screw terminal for brine sensor TB0 not properly tightened.',
        action: 'Check screw terminal.',
      },
      {
        reason: 'Defective I/O module.',
        action: ' Replace I/O module.',
      },
    ],
  },
  5575: {
    level: 'Customer',
    title: 'Alarm Z1 Brine inlet temperature sensor TB0 failure',
    description: 'Alarm if any of the warning codes 5571, 5573, are registered 3 times within 2 hours, or circuit for sensor TB0 is continuously broken/shorted for 15 minutes.',
    alternatives: [
      {
        reason: 'See possible causes for warning codes 5571, 5573.',
        action: 'See possible actions for warning codes5571, 5573.',
      },
    ],
  },
  5577: {
    level: 'Installer',
    title: 'Warning Z1 Brine outlet temperature sensor TB1 short-circuit',
    description: 'Warning if circuit for sensor TB1 is shorted (< 390 Ohm).',
    alternatives: [
      {
        reason: 'Brine out sensor TB1/signal cable is shorted.',
        action: 'With sensor disconnected from I/O module, measure resistance of sensor. If shorted, replace sensor or repair signal cable.',
      },
      {
        reason: 'Screw terminal for brine sensor TB1 not properly tightened.',
        action: 'Check screw terminal on I/O module.',
      },
      {
        reason: 'Defective I/O module.',
        action: 'Replace I/O module.',
      },
    ],
  },
  5579: {
    level: 'Installer',
    title: 'Warning Z1 Brine outlet temperature sensor TB1 open circuit',
    description: 'Warning if circuit for sensor TB1 is shorted (> 179 kOhm).',
    alternatives: [
      {
        reason: 'Brine out sensor TB1/signal cable is broken.',
        action: 'With sensor disconnected from I/O module, measure resistance of sensor. If broken, replace sensor or repair signal cable.',
      },
      {
        reason: 'Screw terminal for brine sensor TB1 not properly tightened.',
        action: 'Check screw terminal on I/O module.',
      },
      {
        reason: 'Defective I/O module.',
        action: 'Replace I/O module.',
      },
    ],
  },
  5581: {
    level: 'Customer',
    title: 'Warning Z1 Brine outlet temperature sensor TB1 failure',
    description: 'Alarm if any of the warning codes 5577, 5579, are registered three times within 2 hours, or if circuit for TB1 is continuously broken/shorted for 15 minutes.',
    alternatives: [
      {
        reason: 'See possible causes for warning codes 5577, 5579.',
        action: 'See possible actions for warning codes 5577, 5579.',
      },
    ],
  },
  5585: {
    level: 'Customer',
    title: 'Alarm Z1 Low pressure sensor detect. problems in brine circuit',
    description: 'Alarm i JR0 indicated low pressure, after 3 warnings within 3 hours. (Note! Only active in cooling mode.)',
    alternatives: [
      {
        reason: 'See possible causes for warning code 5567.',
        action: 'See possible actions for warning code 5567.',
      },
    ],
  },
  5596: {
    level: 'Customer',
    title: 'Reminder that the customer needs to clean the air filter.',
    description: 'Occurs monthly',
    alternatives: [
      {
        reason: 'Air filter needs cleaning',
        action: 'Clean the air filter',
      },
    ],
  },
  5666: {
    level: 'Customer',
    title: 'Low indoors temperature or low airflow',
    description: 'Minimum exit air flow and temperature are not correlated',
    alternatives: [
      {
        reason: 'Air filter is dirty',
        action: 'Clean the air filter',
      },
      {
        reason: 'Air filter is clean, but evaporation pressure is too low',
        action: 'Contact your installer',
      },
    ],
  },
  5667: {
    level: 'Customer',
    title: 'Low indoors temperature or low airflow',
    description: 'Minimum exit air flow and temperature are not correlated',
    alternatives: [
      {
        reason: 'Air filter is dirty',
        action: 'Clean the air filter',
      },
      {
        reason: 'Air filter is clean, but evaporation pressure is too low',
        action: 'Contact your installer',
      },
    ],
  },
};
