/************************* 
 * Exercise_For_Hcy *
 *************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2023.2.3.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'Exercise_for_hcy';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: false,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(WelcomeScreenRoutineBegin());
flowScheduler.add(WelcomeScreenRoutineEachFrame());
flowScheduler.add(WelcomeScreenRoutineEnd());
flowScheduler.add(InstructionRoutineBegin());
flowScheduler.add(InstructionRoutineEachFrame());
flowScheduler.add(InstructionRoutineEnd());
flowScheduler.add(BlankRoutineBegin());
flowScheduler.add(BlankRoutineEachFrame());
flowScheduler.add(BlankRoutineEnd());
flowScheduler.add(Q1RoutineBegin());
flowScheduler.add(Q1RoutineEachFrame());
flowScheduler.add(Q1RoutineEnd());
flowScheduler.add(Answer01RoutineBegin());
flowScheduler.add(Answer01RoutineEachFrame());
flowScheduler.add(Answer01RoutineEnd());
flowScheduler.add(BlankRoutineBegin());
flowScheduler.add(BlankRoutineEachFrame());
flowScheduler.add(BlankRoutineEnd());
flowScheduler.add(Q2RoutineBegin());
flowScheduler.add(Q2RoutineEachFrame());
flowScheduler.add(Q2RoutineEnd());
flowScheduler.add(Answer02RoutineBegin());
flowScheduler.add(Answer02RoutineEachFrame());
flowScheduler.add(Answer02RoutineEnd());
flowScheduler.add(GoodbyeRoutineBegin());
flowScheduler.add(GoodbyeRoutineEachFrame());
flowScheduler.add(GoodbyeRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2023.2.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var WelcomeScreenClock;
var text_welcome;
var InstructionClock;
var text_Instruction;
var key_resp_space;
var BlankClock;
var text_blank;
var Q1Clock;
var text_Q1;
var Answer01Clock;
var text_Answer01;
var key_resp_answer01;
var Q2Clock;
var text_Q2;
var Answer02Clock;
var text_answer02;
var key_resp_answer02;
var GoodbyeClock;
var text_goodbye;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "WelcomeScreen"
  WelcomeScreenClock = new util.Clock();
  text_welcome = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_welcome',
    text: '欢迎来到试验！',
    font: 'Arial Unicode MS',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Instruction"
  InstructionClock = new util.Clock();
  text_Instruction = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_Instruction',
    text: '请就问题给出你的答案\n如果倾向左边选项，按下a键\n如果倾向右边选项，按下l键\n如果你准备好了，请按下空格键',
    font: 'Arial Unicode MS',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_space = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Blank"
  BlankClock = new util.Clock();
  text_blank = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_blank',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Q1"
  Q1Clock = new util.Clock();
  text_Q1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_Q1',
    text: '你认为大众眼中的抑郁症患者是怎样的？',
    font: 'Arial Unicode MS',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Answer01"
  Answer01Clock = new util.Clock();
  text_Answer01 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_Answer01',
    text: '焦虑的        抑郁的',
    font: 'Arial Unicode MS',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_answer01 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Q2"
  Q2Clock = new util.Clock();
  text_Q2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_Q2',
    text: '你自己所认为的抑郁症患者是怎样的？',
    font: 'Arial Unicode MS',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Answer02"
  Answer02Clock = new util.Clock();
  text_answer02 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_answer02',
    text: '焦虑的       抑郁的',
    font: 'Arial Unicode MS',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_answer02 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Goodbye"
  GoodbyeClock = new util.Clock();
  text_goodbye = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_goodbye',
    text: '谢谢你的参与！',
    font: 'Arial Unicode MS',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var WelcomeScreenComponents;
function WelcomeScreenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'WelcomeScreen' ---
    t = 0;
    WelcomeScreenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('WelcomeScreen.started', globalClock.getTime());
    // keep track of which components have finished
    WelcomeScreenComponents = [];
    WelcomeScreenComponents.push(text_welcome);
    
    for (const thisComponent of WelcomeScreenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function WelcomeScreenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'WelcomeScreen' ---
    // get current time
    t = WelcomeScreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_welcome* updates
    if (t >= 0.0 && text_welcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_welcome.tStart = t;  // (not accounting for frame time here)
      text_welcome.frameNStart = frameN;  // exact frame index
      
      text_welcome.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_welcome.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_welcome.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of WelcomeScreenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function WelcomeScreenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'WelcomeScreen' ---
    for (const thisComponent of WelcomeScreenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('WelcomeScreen.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_space_allKeys;
var InstructionComponents;
function InstructionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instruction' ---
    t = 0;
    InstructionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Instruction.started', globalClock.getTime());
    key_resp_space.keys = undefined;
    key_resp_space.rt = undefined;
    _key_resp_space_allKeys = [];
    // keep track of which components have finished
    InstructionComponents = [];
    InstructionComponents.push(text_Instruction);
    InstructionComponents.push(key_resp_space);
    
    for (const thisComponent of InstructionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function InstructionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instruction' ---
    // get current time
    t = InstructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_Instruction* updates
    if (t >= 0.0 && text_Instruction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_Instruction.tStart = t;  // (not accounting for frame time here)
      text_Instruction.frameNStart = frameN;  // exact frame index
      
      text_Instruction.setAutoDraw(true);
    }
    
    
    // *key_resp_space* updates
    if (t >= 0.0 && key_resp_space.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_space.tStart = t;  // (not accounting for frame time here)
      key_resp_space.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_space.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_space.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_space.clearEvents(); });
    }
    
    if (key_resp_space.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_space.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_space_allKeys = _key_resp_space_allKeys.concat(theseKeys);
      if (_key_resp_space_allKeys.length > 0) {
        key_resp_space.keys = _key_resp_space_allKeys[_key_resp_space_allKeys.length - 1].name;  // just the last key pressed
        key_resp_space.rt = _key_resp_space_allKeys[_key_resp_space_allKeys.length - 1].rt;
        key_resp_space.duration = _key_resp_space_allKeys[_key_resp_space_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of InstructionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InstructionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instruction' ---
    for (const thisComponent of InstructionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instruction.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_space.corr, level);
    }
    psychoJS.experiment.addData('key_resp_space.keys', key_resp_space.keys);
    if (typeof key_resp_space.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_space.rt', key_resp_space.rt);
        psychoJS.experiment.addData('key_resp_space.duration', key_resp_space.duration);
        routineTimer.reset();
        }
    
    key_resp_space.stop();
    // the Routine "Instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var BlankComponents;
function BlankRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Blank' ---
    t = 0;
    BlankClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('Blank.started', globalClock.getTime());
    // keep track of which components have finished
    BlankComponents = [];
    BlankComponents.push(text_blank);
    
    for (const thisComponent of BlankComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function BlankRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Blank' ---
    // get current time
    t = BlankClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_blank* updates
    if (t >= 0.0 && text_blank.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_blank.tStart = t;  // (not accounting for frame time here)
      text_blank.frameNStart = frameN;  // exact frame index
      
      text_blank.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_blank.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_blank.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of BlankComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function BlankRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Blank' ---
    for (const thisComponent of BlankComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Blank.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Q1Components;
function Q1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Q1' ---
    t = 0;
    Q1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('Q1.started', globalClock.getTime());
    // keep track of which components have finished
    Q1Components = [];
    Q1Components.push(text_Q1);
    
    for (const thisComponent of Q1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Q1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Q1' ---
    // get current time
    t = Q1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_Q1* updates
    if (t >= 0.0 && text_Q1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_Q1.tStart = t;  // (not accounting for frame time here)
      text_Q1.frameNStart = frameN;  // exact frame index
      
      text_Q1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_Q1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_Q1.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Q1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Q1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Q1' ---
    for (const thisComponent of Q1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Q1.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_answer01_allKeys;
var Answer01Components;
function Answer01RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Answer01' ---
    t = 0;
    Answer01Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Answer01.started', globalClock.getTime());
    key_resp_answer01.keys = undefined;
    key_resp_answer01.rt = undefined;
    _key_resp_answer01_allKeys = [];
    // keep track of which components have finished
    Answer01Components = [];
    Answer01Components.push(text_Answer01);
    Answer01Components.push(key_resp_answer01);
    
    for (const thisComponent of Answer01Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Answer01RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Answer01' ---
    // get current time
    t = Answer01Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_Answer01* updates
    if (t >= 0.0 && text_Answer01.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_Answer01.tStart = t;  // (not accounting for frame time here)
      text_Answer01.frameNStart = frameN;  // exact frame index
      
      text_Answer01.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_Answer01.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_Answer01.setAutoDraw(false);
    }
    
    // *key_resp_answer01* updates
    if (t >= 0.0 && key_resp_answer01.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_answer01.tStart = t;  // (not accounting for frame time here)
      key_resp_answer01.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_answer01.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_answer01.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_answer01.clearEvents(); });
    }
    
    if (key_resp_answer01.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_answer01.getKeys({keyList: ['a', 'l'], waitRelease: false});
      _key_resp_answer01_allKeys = _key_resp_answer01_allKeys.concat(theseKeys);
      if (_key_resp_answer01_allKeys.length > 0) {
        key_resp_answer01.keys = _key_resp_answer01_allKeys[_key_resp_answer01_allKeys.length - 1].name;  // just the last key pressed
        key_resp_answer01.rt = _key_resp_answer01_allKeys[_key_resp_answer01_allKeys.length - 1].rt;
        key_resp_answer01.duration = _key_resp_answer01_allKeys[_key_resp_answer01_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Answer01Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Answer01RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Answer01' ---
    for (const thisComponent of Answer01Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Answer01.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_answer01.corr, level);
    }
    psychoJS.experiment.addData('key_resp_answer01.keys', key_resp_answer01.keys);
    if (typeof key_resp_answer01.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_answer01.rt', key_resp_answer01.rt);
        psychoJS.experiment.addData('key_resp_answer01.duration', key_resp_answer01.duration);
        routineTimer.reset();
        }
    
    key_resp_answer01.stop();
    // the Routine "Answer01" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Q2Components;
function Q2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Q2' ---
    t = 0;
    Q2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('Q2.started', globalClock.getTime());
    // keep track of which components have finished
    Q2Components = [];
    Q2Components.push(text_Q2);
    
    for (const thisComponent of Q2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Q2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Q2' ---
    // get current time
    t = Q2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_Q2* updates
    if (t >= 0.0 && text_Q2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_Q2.tStart = t;  // (not accounting for frame time here)
      text_Q2.frameNStart = frameN;  // exact frame index
      
      text_Q2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_Q2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_Q2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Q2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Q2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Q2' ---
    for (const thisComponent of Q2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Q2.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_answer02_allKeys;
var Answer02Components;
function Answer02RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Answer02' ---
    t = 0;
    Answer02Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Answer02.started', globalClock.getTime());
    key_resp_answer02.keys = undefined;
    key_resp_answer02.rt = undefined;
    _key_resp_answer02_allKeys = [];
    // keep track of which components have finished
    Answer02Components = [];
    Answer02Components.push(text_answer02);
    Answer02Components.push(key_resp_answer02);
    
    for (const thisComponent of Answer02Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Answer02RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Answer02' ---
    // get current time
    t = Answer02Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_answer02* updates
    if (t >= 0.0 && text_answer02.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_answer02.tStart = t;  // (not accounting for frame time here)
      text_answer02.frameNStart = frameN;  // exact frame index
      
      text_answer02.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_answer02.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_answer02.setAutoDraw(false);
    }
    
    // *key_resp_answer02* updates
    if (t >= 0.0 && key_resp_answer02.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_answer02.tStart = t;  // (not accounting for frame time here)
      key_resp_answer02.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_answer02.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_answer02.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_answer02.clearEvents(); });
    }
    
    if (key_resp_answer02.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_answer02.getKeys({keyList: ['a', 'l'], waitRelease: false});
      _key_resp_answer02_allKeys = _key_resp_answer02_allKeys.concat(theseKeys);
      if (_key_resp_answer02_allKeys.length > 0) {
        key_resp_answer02.keys = _key_resp_answer02_allKeys[_key_resp_answer02_allKeys.length - 1].name;  // just the last key pressed
        key_resp_answer02.rt = _key_resp_answer02_allKeys[_key_resp_answer02_allKeys.length - 1].rt;
        key_resp_answer02.duration = _key_resp_answer02_allKeys[_key_resp_answer02_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Answer02Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Answer02RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Answer02' ---
    for (const thisComponent of Answer02Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Answer02.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_answer02.corr, level);
    }
    psychoJS.experiment.addData('key_resp_answer02.keys', key_resp_answer02.keys);
    if (typeof key_resp_answer02.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_answer02.rt', key_resp_answer02.rt);
        psychoJS.experiment.addData('key_resp_answer02.duration', key_resp_answer02.duration);
        routineTimer.reset();
        }
    
    key_resp_answer02.stop();
    // the Routine "Answer02" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var GoodbyeComponents;
function GoodbyeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Goodbye' ---
    t = 0;
    GoodbyeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('Goodbye.started', globalClock.getTime());
    // keep track of which components have finished
    GoodbyeComponents = [];
    GoodbyeComponents.push(text_goodbye);
    
    for (const thisComponent of GoodbyeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function GoodbyeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Goodbye' ---
    // get current time
    t = GoodbyeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_goodbye* updates
    if (t >= 0.0 && text_goodbye.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_goodbye.tStart = t;  // (not accounting for frame time here)
      text_goodbye.frameNStart = frameN;  // exact frame index
      
      text_goodbye.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_goodbye.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_goodbye.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of GoodbyeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function GoodbyeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Goodbye' ---
    for (const thisComponent of GoodbyeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Goodbye.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
