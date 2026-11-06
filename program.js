// Fearless Lift Log - November 2026
// Based on the November 2026 workbook Programming sheet (not stale day templates).
// Station 1 rack, Station 2 treadmill, Station 3 bench, Station 4 floor.
window.FEARLESS_PROGRAM = {
  version:'November 2026', month:'November 2026',
  exercises:{
    barbell_overhead_press:{name:'Barbell Overhead Press',kind:'weight',label:'Total weight',increment:2.5,multiplier:1,category:'Upper Body Push',equipment:'Barbell',target:'6',cue:'Can sub for DB \nsub for push press if needed'},
    wall_clocks:{name:'Wall Clocks',kind:'band',label:'Band color',increment:null,multiplier:0,category:'Mobility / Prehab',equipment:'Mini band',target:'3-5 each',bandOptions:['Green','Blue','Yellow','Red','Black']},
    goblet_squat:{name:'Goblet Squat',kind:'weight',label:'Goblet weight',increment:2.5,multiplier:1,category:'Lower Body Push',equipment:'Dumbbell',target:'6-8'},
    dumbbell_fly:{name:'Dumbbell Fly',kind:'weight',label:'Weight (each hand)',increment:2.5,multiplier:2,category:'Upper Body Push',equipment:'Dumbbells',target:'10-12'},
    skull_crushers:{name:'Skull Crushers',kind:'weight',label:'Weight (each hand)',increment:2.5,multiplier:2,category:'Arms',equipment:'Dumbbells',target:'8-10'},
    dumbbell_sit_up:{name:'DB Sit-Up',kind:'weight',label:'Weight held',increment:2.5,multiplier:1,category:'Core',equipment:'Dumbbell',target:'8-10'},
    push_up:{name:'Push Up',kind:'pushupVariation',label:'Reps',variationLabel:'Push-up variation',variationOptions:['Knee Push-Up','Hybrid (toes down / knees up)','Toe Push-Up'],increment:null,multiplier:0,category:'Upper Body Push',equipment:'Bodyweight',target:'5'},
    hip_cars:{name:'Hip CARs',kind:'reps',label:'Reps',increment:null,multiplier:0,category:'Mobility / Prehab',equipment:'Bodyweight',target:'1x5ea'},
    hex_bar_deadlift:{name:'Hex Bar Deadlift',kind:'weight',label:'Total weight',increment:5,multiplier:1,category:'Hinge',equipment:'Hex bar',target:'5-8'},
    dumbbell_rdl:{name:'Dumbbell RDL',kind:'weight',label:'Weight (each hand)',increment:2.5,multiplier:2,category:'Hinge',equipment:'Dumbbells',target:'8-10'},
    copenhagen_plank:{name:'Copenhagen Plank',kind:'timeVariation',variationOptions:['Knee on Bench','Calf on Bench','Ankle on Bench'],variationLabel:'Bench position (easiest to hardest)',label:'Seconds',increment:null,multiplier:0,category:'Core',equipment:'Bodyweight / bench',target:'30 sec'},
    strict_bicep_curl:{name:'Strict Curl',kind:'weight',label:'Weight (each hand)',increment:2.5,multiplier:2,category:'Arms',equipment:'Dumbbells',target:'8-10'},
    reverse_fly:{name:'Reverse Fly',kind:'weight',label:'Weight (each hand)',increment:1.25,multiplier:2,category:'Upper Body Pull',equipment:'Dumbbells',target:'10'},
    landmine_squat_push_press:{name:'Landmine Squat to Push Press',kind:'weight',label:'Landmine weight',increment:2.5,multiplier:1,category:'Power',equipment:'Landmine',target:'5'},
    seated_single_arm_cable_row:{name:'Seated Single-Arm Cable Row',kind:'weight',label:'Cable weight',increment:2.5,multiplier:1,category:'Upper Body Pull',equipment:'Cable',target:'8-10ea'},
    front_foot_elevated_split_squat:{name:'Front-Foot-Elevated Split Squat',kind:'weight',label:'Weight (each hand)',increment:2.5,multiplier:2,category:'Lower Body Push',equipment:'Dumbbells',target:'8ea'},
    bent_over_ys:{name:'Bent-Over Ys',kind:'weight',label:'Weight (each hand)',increment:2.5,multiplier:2,category:'Upper Body Pull',equipment:'Dumbbells',target:'8'},
    half_kneeling_single_arm_shoulder_press:{name:'Half-Kneeling Single-Arm Shoulder Press',kind:'weight',label:'Weight',increment:2.5,multiplier:1,category:'Upper Body Push',equipment:'Dumbbell',target:'8ea',cue:'Contralateral Press'},
    plank_rocket:{name:'Plank Rocket',kind:'reps',label:'Reps',increment:null,multiplier:0,category:'Core',equipment:'Bodyweight',target:'8-10'},
    seated_pull_up:{name:'Seated Pull-Up',kind:'pullup',label:'Hook height',increment:null,multiplier:0,category:'Upper Body Pull',equipment:'Rack / hooks (no bands)',target:'8-10',cue:'Pin elbows to waist. Adjust hook height for arm length.'},
    tricep_pushdown:{name:'Tricep Pushdown',kind:'weight',label:'Cable weight',increment:2.5,multiplier:1,category:'Arms',equipment:'Cable',target:'10-12'},
    drop_catch_row:{name:'Drop Catch Row',kind:'weight',label:'Weight (each hand)',increment:2.5,multiplier:2,category:'Upper Body Pull',equipment:'Dumbbells',target:'6ea'},
    shoulder_around_the_world:{name:'Shoulders Around the World',kind:'weight',label:'Weight (each hand)',increment:2.5,multiplier:2,category:'Upper Body Push',equipment:'Dumbbells',target:'10'},
    dumbbell_deadlift:{name:'Dumbbell Deadlift',kind:'weight',label:'Weight (each hand)',increment:2.5,multiplier:2,category:'Hinge',equipment:'Dumbbells',target:'8-10'},
    half_kneeling_rotation_swings:{name:'Half-Kneeling Rotation Swings',kind:'weight',label:'Weight',increment:2.5,multiplier:1,category:'Core',equipment:'Kettlebell / dumbbell',target:'6ea',cue:'https://www.youtube.com/watch?v=SXGPfPnn_CE'},
    back_squat:{name:'Back Squat',kind:'weight',label:'Total weight',increment:2.5,multiplier:1,category:'Lower Body Push',equipment:'Barbell',target:'5-8',cue:"No weight increase if depth isn't maintained"},
    single_leg_calf_raise:{name:'Single-Leg Calf Raise',kind:'calfVariation',variationOptions:['Up on both feet','Up on both, down on one','Single-leg raise'],label:'Weight (optional)',increment:2.5,multiplier:1,category:'Lower Body Push',equipment:'Bodyweight / optional dumbbell',target:'10ea',cue:'It doesn’t count if you are not at your max height on both feet'},
    dumbbell_bench_press:{name:'Dumbbell Bench Press',kind:'weight',label:'Weight (each hand)',increment:2.5,multiplier:2,category:'Upper Body Push',equipment:'Dumbbells / bench',target:'6-8'},
    zottman_curl:{name:'Zottman Curl',kind:'weight',label:'Weight (each hand)',increment:2.5,multiplier:2,category:'Arms',equipment:'Dumbbells',target:'10'},
    single_leg_plyo_step_up:{name:'Plyo Step Up',kind:'singleLegPlyo',label:'Weight (each hand)',increment:2.5,multiplier:2,category:'Power',equipment:'Box / dumbbells',target:'4ea'},
    lateral_step_up:{name:'Lateral Step Ups',kind:'weightBox',label:'Weight (each hand)',increment:2.5,multiplier:2,category:'Lower Body Push',equipment:'Box / dumbbells',target:'6'},
    hip_airplane:{name:'Hip Airplane',kind:'reps',label:'Reps',increment:null,multiplier:0,category:'Mobility / Prehab',equipment:'Bodyweight',target:'5ea'},
    barbell_rdl:{name:'Barbell RDL',kind:'weight',label:'Total weight',increment:2.5,multiplier:1,category:'Hinge',equipment:'Barbell',target:'6-8'},
    dumbbell_snatch:{name:'Dumbbell Snatch',kind:'weight',label:'Weight',increment:2.5,multiplier:1,category:'Power',equipment:'Dumbbell',target:'4ea'},
    dumbbell_pullover:{name:'Dumbbell Pullover',kind:'weight',label:'Weight',increment:2.5,multiplier:1,category:'Upper Body Pull',equipment:'Dumbbell',target:'10'},
    slider_reverse_lunge:{name:'Slider Reverse Lunge',kind:'weight',label:'Weight (each hand)',increment:2.5,multiplier:2,category:'Lower Body Push',equipment:'Dumbbells / slider',target:'8-10',cue:'Complete one sdie at a time'},
    banded_skater_step:{name:'Banded Skater Step',kind:'band',label:'Band color',increment:null,multiplier:0,category:'Lower Body Push',equipment:'Mini band',target:'8ea',bandOptions:['Green','Blue','Yellow','Red','Black']},
    treadmill:{name:'Treadmill',kind:'cardio',label:'Speed',increment:null,multiplier:0,category:'Conditioning',equipment:'Treadmill'}
  },
  programs:{
    Monday:{title:'Push UB',month:'November 2026',stations:{
      1:{name:'Rack',duration:'9.5 min',exercises:['barbell_overhead_press', 'wall_clocks']},
      2:{name:'Treadmill',duration:'9.5 min',exercises:['treadmill']},
      3:{name:'Bench',duration:'9.5 min',exercises:['goblet_squat', 'dumbbell_fly']},
      4:{name:'Floor',duration:'9.5 min',exercises:['skull_crushers', 'dumbbell_sit_up', 'push_up']}
    }},
    Tuesday:{title:'Pull LB',month:'November 2026',stations:{
      1:{name:'Rack',duration:'9.5 min',exercises:['hip_cars', 'hex_bar_deadlift']},
      2:{name:'Treadmill',duration:'9.5 min',exercises:['treadmill']},
      3:{name:'Bench',duration:'9.5 min',exercises:['dumbbell_rdl', 'copenhagen_plank']},
      4:{name:'Floor',duration:'9.5 min',exercises:['strict_bicep_curl', 'reverse_fly']}
    }},
    Wednesday:{title:'Accessory',month:'November 2026',stations:{
      1:{name:'Rack',duration:'9.5 min',exercises:['landmine_squat_push_press', 'seated_single_arm_cable_row']},
      2:{name:'Treadmill',duration:'9.5 min',exercises:['treadmill']},
      3:{name:'Bench',duration:'9.5 min',exercises:['front_foot_elevated_split_squat', 'bent_over_ys']},
      4:{name:'Floor',duration:'9.5 min',exercises:['half_kneeling_single_arm_shoulder_press', 'plank_rocket']}
    }},
    Thursday:{title:'Pull UB',month:'November 2026',stations:{
      1:{name:'Rack',duration:'9.5 min',exercises:['seated_pull_up', 'tricep_pushdown']},
      2:{name:'Treadmill',duration:'9.5 min',exercises:['treadmill']},
      3:{name:'Bench',duration:'9.5 min',exercises:['drop_catch_row', 'shoulder_around_the_world']},
      4:{name:'Floor',duration:'9.5 min',exercises:['dumbbell_deadlift', 'half_kneeling_rotation_swings']}
    }},
    Friday:{title:'Push LB',month:'November 2026',stations:{
      1:{name:'Rack',duration:'9.5 min',exercises:['back_squat', 'single_leg_calf_raise']},
      2:{name:'Treadmill',duration:'9.5 min',exercises:['treadmill']},
      3:{name:'Bench',duration:'9.5 min',exercises:['dumbbell_bench_press', 'zottman_curl']},
      4:{name:'Floor',duration:'9.5 min',exercises:['single_leg_plyo_step_up', 'lateral_step_up']}
    }},
    Saturday:{title:'Hinge',month:'November 2026',stations:{
      1:{name:'Rack',duration:'9.5 min',exercises:['hip_airplane', 'barbell_rdl']},
      2:{name:'Treadmill',duration:'9.5 min',exercises:['treadmill']},
      3:{name:'Bench',duration:'9.5 min',exercises:['dumbbell_snatch', 'dumbbell_pullover']},
      4:{name:'Floor',duration:'9.5 min',exercises:['slider_reverse_lunge', 'banded_skater_step']}
    }},
  }
};
