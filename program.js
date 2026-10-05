// Fearless Lift Log monthly program data
// October 2026 training block
// Source of truth: October 2026 workbook, Programming sheet.
// Station convention: Station 1 = rack/barbell for free-weight movements;
// Stations 3 and 4 may use dumbbells unless the program explicitly specifies otherwise.
// The app engine remains in index.html.

window.FEARLESS_PROGRAM = {
  version: 'October 2026',
  month: 'October 2026',
  exercises: {
    // Monday - Hinge
    single_leg_landmine_rdl:{name:'Single-Leg Landmine RDL',kind:'weight',label:'Landmine weight',increment:5,multiplier:1,category:'Hinge',equipment:'Landmine',target:'6 each side'},
    cable_prayer:{name:'Cable Prayer',kind:'weight',label:'Cable weight',increment:5,multiplier:1,category:'Core',equipment:'Cable',target:'10-12'},
    dumbbell_hip_thrust:{name:'Dumbbell Hip Thrust',kind:'weight',label:'One dumbbell total',increment:2.5,multiplier:1,category:'Hinge',equipment:'Dumbbell / bench',target:'12',cue:'Trainer note: may use a KAS glute bridge variation.'},
    heels_elevated_goblet_squat:{name:'Heels-Elevated Goblet Squat',kind:'weight',label:'Goblet weight',increment:2.5,multiplier:1,category:'Lower Body Push',equipment:'Dumbbell / squat wedge',target:'8'},
    half_kneeling_windmill:{name:'1/2 Kneeling Windmill',kind:'weight',label:'Weight',increment:2.5,multiplier:1,category:'Mobility / Prehab',equipment:'Dumbbell / kettlebell',target:'6 each side'},
    hammer_curl:{name:'Hammer Curl',kind:'weight',label:'Weight (each hand)',increment:1.25,multiplier:2,category:'Arms',equipment:'Dumbbells',target:'10-12'},

    // Tuesday - Push UB
    incline_barbell_bench_press:{name:'Incline Barbell Bench Press',kind:'weight',label:'Total weight',increment:2.5,multiplier:1,category:'Upper Body Push',equipment:'Barbell / incline bench',target:'4-6'},
    horizontal_pull_apart:{name:'Horizontal Pull Apart',kind:'band',label:'Band color',increment:null,multiplier:0,category:'Upper Body Pull',equipment:'Resistance band',bandOptions:['Green','Blue','Orange','Red','Purple'],target:'8',cue:'Choose an appropriate resistance band and return it after the station.'},
    alternating_seated_shoulder_press:{name:'Alternating Seated Shoulder Press',kind:'weight',label:'Weight (each hand)',increment:1.25,multiplier:2,category:'Upper Body Push',equipment:'Dumbbells',target:'6-8 each side'},
    reverse_fly:{name:'Reverse Fly',kind:'weight',label:'Weight (each hand)',increment:1.25,multiplier:2,category:'Upper Body Pull',equipment:'Dumbbells',target:'8-10'},
    slide_lateral_lunge:{name:'Slider Lateral Lunge',kind:'weight',label:'Weight / load',increment:2.5,multiplier:1,category:'Lower Body Push',equipment:'Dumbbell / slider',target:'8 each side',cue:'Complete one side at a time.'},
    single_arm_overhead_march:{name:'Overhead March',kind:'weight',label:'Weight',increment:2.5,multiplier:1,category:'Carry',equipment:'Dumbbell',target:'10 total'},

    // Wednesday - Pull LB
    hex_bar_deadlift:{name:'Hex Bar Deadlift',kind:'weight',label:'Total weight',increment:5,multiplier:1,category:'Hinge',equipment:'Hex bar',target:'4-6'},
    seated_broad_jump:{name:'Seated Broad Jump',kind:'weight',label:'External weight',increment:2.5,multiplier:1,category:'Power',equipment:'Bodyweight / optional external load',target:'3'},
    bird_dog_row:{name:'Bird Dog Row',kind:'weight',label:'Weight',increment:2.5,multiplier:1,category:'Upper Body Pull',equipment:'Dumbbell / bench',target:'8-10 each side'},
    dumbbell_rdl:{name:'Dumbbell RDL',kind:'weight',label:'Weight (each hand)',increment:2.5,multiplier:2,category:'Hinge',equipment:'Dumbbells',target:'6-8'},
    push_up:{name:'Push Up',kind:'pushupVariation',label:'Reps',variationLabel:'Push-up variation',variationOptions:['Knee Push-Up','Hybrid (toes down / knees up)','Toe Push-Up'],increment:null,multiplier:0,category:'Upper Body Push',equipment:'Bodyweight',target:'5-8'},
    dumbbell_upright_row:{name:'Dumbbell Upright Row',kind:'weight',label:'Weight (each hand)',increment:1.25,multiplier:2,category:'Upper Body Pull',equipment:'Dumbbells',target:'10'},
    overhead_tricep_extension:{name:'Overhead Tricep Extension',kind:'weight',label:'One dumbbell total',increment:2.5,multiplier:1,category:'Arms',equipment:'Dumbbell',target:'10'},

    // Thursday - Accessory
    hanging_hollow_hold:{name:'Hanging Hollow Hold',kind:'time',label:'Seconds',increment:null,multiplier:0,category:'Core',equipment:'Bodyweight / optional long-band assistance',target:'30 sec',cue:'Long power bands may be used for assistance. Record band setup in Technique / setup if used.'},
    single_arm_landmine_push_press:{name:'Single-Arm Landmine Push Press',kind:'weight',label:'Landmine weight',increment:5,multiplier:1,category:'Upper Body Push',equipment:'Landmine',target:'6 each side'},
    single_arm_front_rack_squat:{name:'Single-Arm Front Rack Squat',kind:'weight',label:'Weight',increment:2.5,multiplier:1,category:'Lower Body Push',equipment:'Dumbbell / kettlebell',target:'5 each side'},
    lateral_raise:{name:'Lateral Raise',kind:'weight',label:'Weight (each hand)',increment:1.25,multiplier:2,category:'Upper Body Push',equipment:'Dumbbells',target:'10-12'},
    slider_hamstring_curl:{name:'Slider Hamstring Curl',kind:'hamstringCurl',label:'External weight (optional)',increment:2.5,multiplier:1,category:'Hinge',equipment:'Sliders / box',target:'10',cue:'Use the Full / Hip Drop / Hybrid selector. If box height matters for the setup, record it in Technique / setup.'},
    split_stance_kettlebell_swing:{name:'Split-Stance KB Swing',kind:'weight',label:'Kettlebell weight',increment:5,multiplier:1,category:'Hinge',equipment:'Kettlebell',target:'5 each side',cue:'Regress to a standard KB swing if the swing pattern is new.'},

    // Friday - Pull UB
    barbell_bent_over_row_underhand:{name:'Barbell Bent Over Row - Underhand Grip',kind:'weight',label:'Total weight',increment:5,multiplier:1,category:'Upper Body Pull',equipment:'Barbell',target:'8, 6, 4, 4',cue:'Use an underhand grip.'},
    cable_angel:{name:'Cable Angel',kind:'weight',label:'Cable weight',increment:5,multiplier:1,category:'Upper Body Pull',equipment:'Cable',target:'5 each side'},
    dumbbell_reverse_lunge:{name:'Dumbbell Reverse Lunge',kind:'weight',label:'Weight (each hand)',increment:2.5,multiplier:2,category:'Lower Body Push',equipment:'Dumbbells',target:'6 each side',cue:'Optional heel float for an added calf challenge.'},
    incline_bench_bicep_curl:{name:'Incline Bench Bicep Curl',kind:'weight',label:'Weight (each hand)',increment:1.25,multiplier:2,category:'Arms',equipment:'Dumbbells / incline bench',target:'8-10'},
    staggered_stance_three_point_row:{name:'Staggered-Stance 3-Point Row',kind:'weight',label:'Weight',increment:2.5,multiplier:1,category:'Upper Body Pull',equipment:'Dumbbell / bench',target:'6 each side'},
    side_plank_shoulder_external_rotation:{name:'Side Plank with Shoulder External Rotation',kind:'weight',label:'Weight',increment:1.25,multiplier:1,category:'Core',equipment:'Dumbbell / bodyweight',target:'8-10 each side'},

    // Saturday - Push LB
    front_squat:{name:'Front Squat',kind:'weight',label:'Total weight',increment:5,multiplier:1,category:'Lower Body Push',equipment:'Barbell',target:'6-8'},
    standing_banded_cable_hip_flexion:{name:'Standing Banded Hip Flexion',kind:'band',label:'Band color',increment:null,multiplier:0,category:'Hinge',equipment:'Small resistance band',bandOptions:['Green','Blue','Yellow','Red','Black'],target:'5 each side'},
    dumbbell_bench_press:{name:'Dumbbell Bench Press',kind:'weight',label:'Weight (each hand)',increment:2.5,multiplier:2,category:'Upper Body Push',equipment:'Dumbbells / bench',target:'8-10'},
    tricep_dips:{name:'Tricep Dips',kind:'reps',label:'Reps',increment:null,multiplier:0,category:'Arms',equipment:'Bodyweight / bench',target:'8-10'},
    curtsey_step_up:{name:'Curtsey Step-Up',kind:'weight',label:'Weight / load',increment:2.5,multiplier:1,category:'Lower Body Push',equipment:'Dumbbell / box',target:'6-8 each side',cue:'Complete both movements on one side before switching sides.'},
    half_kneeling_rainbow_slam:{name:'Rainbow Slams',kind:'weight',label:'Ball weight',increment:2.5,multiplier:1,category:'Power',equipment:'Medicine / slam ball',target:'3 each side - 6 total',cue:'Complete both movements on one side before switching sides.'},

    treadmill:{name:'Treadmill',kind:'cardio',label:'Speed',increment:null,multiplier:0,category:'Conditioning',equipment:'Treadmill'}
  },
  programs: {
    Monday:{title:'Hinge',month:'October 2026',stations:{
      1:{name:'Rack',duration:'9.5 min',exercises:['single_leg_landmine_rdl','cable_prayer']},
      2:{name:'Treadmill',duration:'9.5 min',exercises:['treadmill']},
      3:{name:'Bench',duration:'9.5 min',exercises:['dumbbell_hip_thrust','heels_elevated_goblet_squat']},
      4:{name:'Floor',duration:'9.5 min',exercises:['half_kneeling_windmill','hammer_curl']}
    }},
    Tuesday:{title:'Push UB',month:'October 2026',stations:{
      1:{name:'Rack',duration:'9.5 min',exercises:['incline_barbell_bench_press','horizontal_pull_apart']},
      2:{name:'Treadmill',duration:'9.5 min',exercises:['treadmill']},
      3:{name:'Bench',duration:'9.5 min',exercises:['alternating_seated_shoulder_press','reverse_fly']},
      4:{name:'Floor',duration:'9.5 min',exercises:['slide_lateral_lunge','single_arm_overhead_march']}
    }},
    Wednesday:{title:'Pull LB',month:'October 2026',stations:{
      1:{name:'Rack',duration:'9.5 min',exercises:['hex_bar_deadlift','seated_broad_jump']},
      2:{name:'Treadmill',duration:'9.5 min',exercises:['treadmill']},
      3:{name:'Bench',duration:'9.5 min',exercises:['bird_dog_row','dumbbell_rdl']},
      4:{name:'Floor',duration:'9.5 min',exercises:['push_up','dumbbell_upright_row','overhead_tricep_extension']}
    }},
    Thursday:{title:'Accessory',month:'October 2026',stations:{
      1:{name:'Rack',duration:'9.5 min',exercises:['hanging_hollow_hold','single_arm_landmine_push_press']},
      2:{name:'Treadmill',duration:'9.5 min',exercises:['treadmill']},
      3:{name:'Bench',duration:'9.5 min',exercises:['single_arm_front_rack_squat','lateral_raise']},
      4:{name:'Floor',duration:'9.5 min',exercises:['slider_hamstring_curl','split_stance_kettlebell_swing']}
    }},
    Friday:{title:'Pull UB',month:'October 2026',stations:{
      1:{name:'Rack',duration:'9.5 min',exercises:['barbell_bent_over_row_underhand','cable_angel']},
      2:{name:'Treadmill',duration:'9.5 min',exercises:['treadmill']},
      3:{name:'Bench',duration:'9.5 min',exercises:['dumbbell_reverse_lunge','incline_bench_bicep_curl']},
      4:{name:'Floor',duration:'9.5 min',exercises:['staggered_stance_three_point_row','side_plank_shoulder_external_rotation']}
    }},
    Saturday:{title:'Push LB',month:'October 2026',stations:{
      1:{name:'Rack',duration:'9.5 min',exercises:['front_squat','standing_banded_cable_hip_flexion']},
      2:{name:'Treadmill',duration:'9.5 min',exercises:['treadmill']},
      3:{name:'Bench',duration:'9.5 min',exercises:['dumbbell_bench_press','tricep_dips']},
      4:{name:'Floor',duration:'9.5 min',exercises:['curtsey_step_up','half_kneeling_rainbow_slam']}
    }}
  }
};
