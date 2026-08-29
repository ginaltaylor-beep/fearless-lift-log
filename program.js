// Fearless Lift Log monthly program data
// September 2026 training block
// Station convention: Station 1 = rack/barbell for free-weight movements;
// Stations 3 and 4 may use dumbbells unless the program explicitly specifies otherwise.
// The app engine remains in index.html.

window.FEARLESS_PROGRAM = {
  version: 'September 2026',
  month: 'September 2026',
  exercises: {
    // Monday — Push LB
    barbell_back_squat:{name:'Back Squat',kind:'weight',label:'Total weight',increment:5,multiplier:1,category:'Lower Body Push',equipment:'Barbell',target:'6–8'},
    banded_open_the_gate:{name:'Banded Open the Gate',kind:'band',label:'Band color',increment:null,multiplier:0,category:'Mobility / Prehab',equipment:'Mini band',bandOptions:['Green','Blue','Yellow','Red','Black'],target:'5 each side',cue:'Keep pelvis pointing forward and knee horizontally abducting. May be used as active recovery.'},
    walking_lunges:{name:'Walking Lunges',kind:'weight',label:'Weight (each hand)',increment:2.5,multiplier:2,category:'Lower Body Push',equipment:'Dumbbells',target:'8 each side'},
    incline_dumbbell_bench_press:{name:'Incline Dumbbell Bench Press',kind:'weight',label:'Weight (each hand)',increment:2.5,multiplier:2,category:'Upper Body Push',equipment:'Dumbbells / incline bench',target:'8–10',cue:'Incline bench set to 30°.'},
    skull_crushers:{name:'Skull Crushers',kind:'weight',label:'Weight (each hand)',increment:1.25,multiplier:2,category:'Arms',equipment:'Dumbbells',target:'10–12'},
    side_plank_hip_abduction:{name:'Side Plank with Hip Abduction',kind:'reps',label:'Reps',increment:null,multiplier:0,category:'Core',equipment:'Bodyweight',target:'10 each side',cue:'Modified option: from knee, top leg slightly kicked backward so shoulder to ankle makes a straight line. Progression: full side plank with leg lift.'},

    // Tuesday — Hinge
    barbell_romanian_deadlift:{name:'BB RDL',kind:'weight',label:'Total weight',increment:5,multiplier:1,category:'Hinge',equipment:'Barbell',target:'8–10',cue:'Safety arms at 5. Handles out, cables at chest height.'},
    pallof_press_rotation:{name:'Pallof Press with Rotation',kind:'weight',label:'Cable weight',increment:5,multiplier:1,category:'Core',equipment:'Cable',target:'6 each direction',cue:'Rotate toward the rack.'},
    dumbbell_pullover:{name:'Dumbbell Pullover',kind:'weight',label:'One dumbbell total',increment:2.5,multiplier:1,category:'Upper Body Pull',equipment:'Dumbbell / bench',target:'10–12'},
    rope_slams:{name:'Rope Slams',kind:'reps',label:'Reps',increment:null,multiplier:0,category:'Power',equipment:'Battle rope',target:'12'},
    dumbbell_bent_over_row:{name:'Bent Over Row',kind:'weight',label:'Weight (each hand)',increment:2.5,multiplier:2,category:'Upper Body Pull',equipment:'Dumbbells',target:'6–8',cue:'Top-down row.'},
    dumbbell_sumo_squat:{name:'Dumbbell Sumo Squat',kind:'weight',label:'Dumbbell weight',increment:2.5,multiplier:1,category:'Lower Body Push',equipment:'Dumbbell',target:'8–10'},

    // Wednesday — Push UB
    barbell_bench_press:{name:'Bench Press',kind:'weight',label:'Total weight',increment:2.5,multiplier:1,category:'Upper Body Push',equipment:'Barbell',target:'6–8',cue:'Bench press setup: hooks at 12, flat benches.'},
    single_leg_calf_raise:{name:'Single-Leg Calf Raise',kind:'weight',label:'External weight',increment:2.5,multiplier:1,category:'Lower Body',equipment:'Dumbbell / bodyweight',target:'8–10 each side',cue:'Calf raises can be the rest for the bench press. Cue to use dumbbell.'},
    incline_dumbbell_fly:{name:'Incline Dumbbell Fly',kind:'weight',label:'Weight (each hand)',increment:1.25,multiplier:2,category:'Upper Body Push',equipment:'Dumbbells / incline bench',target:'8–10',cue:'Incline bench set to 45°.'},
    strict_bicep_curl:{name:'Strict Bicep Curl',kind:'weight',label:'Weight (each hand)',increment:1.25,multiplier:2,category:'Arms',equipment:'Dumbbells',target:'12–15'},
    dumbbell_squat_push_press:{name:'Squat Push Press',kind:'weight',label:'Weight (each hand)',increment:2.5,multiplier:2,category:'Power',equipment:'Dumbbells',target:'6',cue:'Full squat. Power.'},
    slider_crunches:{name:'Slider Crunches',kind:'reps',label:'Reps',increment:null,multiplier:0,category:'Core',equipment:'Sliders',target:'10–15'},

    // Thursday — Pull LB
    deadlift:{name:'Deadlift',kind:'weight',label:'Total weight',increment:5,multiplier:1,category:'Hinge',equipment:'Barbell',target:'6–8',cue:'Deadlift setup: safety arms at 5. Rope attachment, cables set at shoulder height.'},
    seated_high_to_low_row:{name:'Seated High to Low Row',kind:'weight',label:'Cable weight',increment:5,multiplier:1,category:'Upper Body Pull',equipment:'Cable',target:'12–15'},
    bulgarian_split_squat:{name:'Bulgarian Split Squat',kind:'weight',label:'One dumbbell',increment:2.5,multiplier:1,category:'Lower Body Push',equipment:'Dumbbell / bench',target:'8–10 each side',cue:'Staggered benches. Hold 1 dumbbell in the hand opposite the working leg.'},
    banded_side_steps:{name:'Banded Side Steps',kind:'band',label:'Band color',increment:null,multiplier:0,category:'Lower Body Push',equipment:'Mini band',bandOptions:['Green','Blue','Yellow','Red','Black'],target:'2 × 10 steps each direction',cue:'Band around feet. Toes point forward.'},
    dead_bug_slam_ball:{name:'Dead Bug with Slam Ball',kind:'weight',label:'Ball weight',increment:2.5,multiplier:1,category:'Core',equipment:'Slam ball',target:'8–10 each side',cue:'Same-side arm and leg hold the ball; complete all reps on one side, then the other.'},
    kettlebell_swing:{name:'KB Swing',kind:'weight',label:'Kettlebell weight',increment:5,multiplier:1,category:'Hinge',equipment:'Kettlebell',target:'10'},

    // Friday — Accessory
    overhead_tricep_extension:{name:'Overhead Tricep Extensions',kind:'weight',label:'One dumbbell total',increment:2.5,multiplier:1,category:'Arms',equipment:'Dumbbell',target:'12–15',cue:'Rope attachment, cables set at top.'},
    power_push_up_assisted:{name:'Power Push-Up',kind:'band',label:'Band color',increment:null,multiplier:0,category:'Power',equipment:'Long resistance band',bandOptions:['Red','Orange','Blue','Green','Purple'],target:'5–8',cue:'Assisted with long resistance band. Safety arms set to 2; long bands out. Knee pads (black) out.'},
    wall_sit:{name:'Wall Sit',kind:'time',label:'Seconds',increment:null,multiplier:0,category:'Lower Body Push',equipment:'Bodyweight',target:'Work to 45 sec'},
    seated_shoulder_press:{name:'Seated Shoulder Press',kind:'weight',label:'Weight (each hand)',increment:1.25,multiplier:2,category:'Upper Body Push',equipment:'Dumbbells / incline bench',target:'8–10',cue:'Incline benches set upright.'},
    lateral_raise:{name:'Lateral Raise',kind:'weight',label:'Weight (each hand)',increment:1.25,multiplier:2,category:'Upper Body Push',equipment:'Dumbbells',target:'8–10'},
    single_leg_sit_to_stand:{name:'Single-Leg Sit to Stand',kind:'reps',label:'Reps',increment:null,multiplier:0,category:'Lower Body Push',equipment:'Bench / bodyweight',target:'6–8 each side'},
    bicep_21s:{name:'Bicep 21s',kind:'weight',label:'Weight (each hand)',increment:1.25,multiplier:2,category:'Arms',equipment:'Dumbbells',target:'21s'},

    // Saturday — Pull UB
    half_kneeling_single_arm_lat_pulldown:{name:'Half-Kneeling SA Lat Pulldown',kind:'weight',label:'Cable weight',increment:5,multiplier:1,category:'Upper Body Pull',equipment:'Cable',target:'10–12 each side',cue:'Handle attachment, cable set to top.'},
    trx_y:{name:'TRX Y',kind:'reps',label:'Reps',increment:null,multiplier:0,category:'Upper Body Pull',equipment:'TRX',target:'6–8',cue:'TRX straps out. Option: TRX T if Y is too upper-trap dominant.'},
    three_point_row:{name:'3-Point Row',kind:'weight',label:'Weight (each hand)',increment:2.5,multiplier:1,category:'Upper Body Pull',equipment:'Dumbbell / bench',target:'4–6 each side',cue:'Feet parallel, core engaged.'},
    single_arm_overhead_march:{name:'Overhead March',kind:'weight',label:'Weight',increment:2.5,multiplier:1,category:'Carry',equipment:'Dumbbell',target:'10 marches total each side'},
    kickstand_rdl:{name:'Kickstand RDL',kind:'weight',label:'Weight (each hand)',increment:2.5,multiplier:2,category:'Hinge',equipment:'Dumbbells',target:'8–10 each side'},
    dumbbell_sit_up:{name:'DB Sit-Up',kind:'weight',label:'One dumbbell total',increment:2.5,multiplier:1,category:'Core',equipment:'Dumbbell',target:'8–12'},

    treadmill:{name:'Treadmill',kind:'cardio',label:'Speed',increment:null,multiplier:0,category:'Conditioning',equipment:'Treadmill'}
  },
  programs: {
    Monday:{title:'Push LB',month:'September 2026',stations:{
      1:{name:'Rack',duration:'9.5 min',exercises:['barbell_back_squat','banded_open_the_gate']},
      2:{name:'Treadmill',duration:'9.5 min',exercises:['treadmill']},
      3:{name:'Bench',duration:'9.5 min · 4 sets',exercises:['walking_lunges','incline_dumbbell_bench_press']},
      4:{name:'Floor',duration:'9.5 min',exercises:['skull_crushers','side_plank_hip_abduction']}
    }},
    Tuesday:{title:'Hinge',month:'September 2026',stations:{
      1:{name:'Rack',duration:'9.5 min',exercises:['barbell_romanian_deadlift','pallof_press_rotation']},
      2:{name:'Treadmill',duration:'9.5 min',exercises:['treadmill']},
      3:{name:'Bench',duration:'9.5 min',exercises:['dumbbell_pullover','rope_slams']},
      4:{name:'Floor',duration:'9.5 min',exercises:['dumbbell_bent_over_row','dumbbell_sumo_squat']}
    }},
    Wednesday:{title:'Push UB',month:'September 2026',stations:{
      1:{name:'Rack',duration:'9.5 min',exercises:['barbell_bench_press','single_leg_calf_raise']},
      2:{name:'Treadmill',duration:'9.5 min',exercises:['treadmill']},
      3:{name:'Bench',duration:'9.5 min',exercises:['incline_dumbbell_fly','strict_bicep_curl']},
      4:{name:'Floor',duration:'9.5 min',exercises:['dumbbell_squat_push_press','slider_crunches']}
    }},
    Thursday:{title:'Pull LB',month:'September 2026',stations:{
      1:{name:'Rack',duration:'9.5 min',exercises:['deadlift','seated_high_to_low_row']},
      2:{name:'Treadmill',duration:'9.5 min',exercises:['treadmill']},
      3:{name:'Bench',duration:'9.5 min',exercises:['bulgarian_split_squat','banded_side_steps']},
      4:{name:'Floor',duration:'9.5 min',exercises:['dead_bug_slam_ball','kettlebell_swing']}
    }},
    Friday:{title:'Accessory',month:'September 2026',stations:{
      1:{name:'Rack',duration:'9.5 min',exercises:['overhead_tricep_extension','power_push_up_assisted','wall_sit']},
      2:{name:'Treadmill',duration:'9.5 min',exercises:['treadmill']},
      3:{name:'Bench',duration:'9.5 min',exercises:['seated_shoulder_press','lateral_raise']},
      4:{name:'Floor',duration:'9.5 min',exercises:['single_leg_sit_to_stand','bicep_21s']}
    }},
    Saturday:{title:'Pull UB',month:'September 2026',stations:{
      1:{name:'Rack',duration:'9.5 min',exercises:['half_kneeling_single_arm_lat_pulldown','trx_y']},
      2:{name:'Treadmill',duration:'9.5 min',exercises:['treadmill']},
      3:{name:'Bench',duration:'9.5 min',exercises:['three_point_row','single_arm_overhead_march']},
      4:{name:'Floor',duration:'9.5 min',exercises:['kickstand_rdl','dumbbell_sit_up']}
    }}
  }
};
