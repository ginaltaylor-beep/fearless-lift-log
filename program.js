// Fearless Lift Log monthly program data
// Update this file when a new training block is released.
// The app engine remains in index.html.

window.FEARLESS_PROGRAM = {
  version: 'August 2026',
  month: 'August 2026',
  exercises: {
 barbell_back_squat:{name:'Back Squat',kind:'weight',label:'Total weight',increment:5,multiplier:1,category:'Lower Body Push',equipment:'Barbell',target:'6–8'},
 horizontal_pull_apart:{name:'Horizontal Pull Apart',kind:'band',label:'Band color',increment:null,multiplier:0,category:'Upper Body Pull',equipment:'Band',target:'10',bandOptions:['Green','Blue','Purple']},
 pull_up_assisted:{name:'Pull Up',kind:'pullup',label:'Assistance setup and reps',increment:null,multiplier:0,category:'Upper Body Pull',equipment:'Bands',target:'5+',cue:'Substitute seated lat pulldown with handles if needed.'},
 meadow_row:{name:'Meadow Row',kind:'weight',label:'Weight',increment:2.5,multiplier:1,category:'Upper Body Pull',equipment:'Landmine',target:'8 each side'},
 slider_reverse_lunge:{name:'Slider Reverse Lunge',kind:'weight',label:'Weight (each hand)',increment:2.5,multiplier:2,category:'Lower Body Push',equipment:'Dumbbells / slider',target:'6–8 each side',cue:'Complete one side at a time.'},
 shoulder_external_rotation:{name:'Shoulder External Rotation',kind:'weight',label:'Weight / resistance',increment:2.5,multiplier:1,category:'Shoulder',equipment:'Cable / band',target:'10 each side'},
 a_frame_russian_twist:{name:'A-Frame Russian Twist',kind:'weight',label:'Weight',increment:2.5,multiplier:1,category:'Core',equipment:'External load',target:'8–10 each side'},
 high_to_low_plank:{name:'High-to-Low Plank',kind:'plankSplit',label:'Full and knee reps',increment:null,multiplier:0,category:'Core',equipment:'Bodyweight',target:'10 total'},
 monster_walks:{name:'Monster Walks',kind:'band',label:'Band color',bandOptions:['Green','Blue','Yellow','Red','Black'],increment:null,multiplier:0,category:'Lower Body Push',equipment:'Band',target:'6 forward + 6 backward'},
 back_squat:{name:'Back Squat',kind:'weight',label:'Total weight',increment:5,multiplier:1,category:'Lower Body Push',equipment:'Barbell',target:'6–8'},
 dumbbell_fly:{name:'Dumbbell Fly',kind:'weight',label:'Weight (each hand)',increment:2.5,multiplier:2,category:'Upper Body Push',equipment:'Dumbbells',target:'10–12'},
 single_arm_push_press:{name:'Single-Arm Push Press',kind:'weight',label:'Weight',increment:2.5,multiplier:1,category:'Upper Body Push',equipment:'Dumbbell / kettlebell',target:'5 each side'},
 cossack_squat:{name:'Cossack Squat',kind:'weight',label:'Weight / resistance',increment:2.5,multiplier:1,category:'Lower Body Push',equipment:'Varies',target:'5 each side'},
 half_kneeling_soleus_raise:{name:'Half-Kneeling Soleus Raise',kind:'weight',label:'Weight / resistance',increment:2.5,multiplier:1,category:'Lower Body',equipment:'Varies',target:'8 each side'},
 half_kneeling_rainbow_slam:{name:'Half-Kneeling Rainbow Slam',kind:'weight',label:'Ball weight',increment:2.5,multiplier:1,category:'Power',equipment:'Medicine ball',target:'5 each side'},
 standing_banded_cable_hip_flexion:{name:'Standing Banded Hip Flexion',kind:'band',label:'Band color',increment:null,multiplier:0,category:'Hinge',equipment:'Band',bandOptions:['Green','Blue','Purple'],target:'6 each side'},
 hip_thrust:{name:'Hip Thrust',kind:'weight',label:'Total weight',increment:5,multiplier:1,category:'Hinge',equipment:'Barbell / dumbbell',target:'8–10'},
 copenhagen_dip:{name:'Copenhagen Dip',kind:'reps',label:'Reps',increment:null,multiplier:0,category:'Core',equipment:'Bodyweight',target:'6–10 each side'},
 scap_push_up:{name:'Scap Push-Up',kind:'reps',label:'Reps',increment:null,multiplier:0,category:'Upper Body Push',equipment:'Bodyweight',target:'10'},
 pause_goblet_squat:{name:'Pause Goblet Squat',kind:'weight',label:'Weight',increment:2.5,multiplier:1,category:'Lower Body Push',equipment:'Dumbbell / kettlebell',target:'8–10',cue:'3-second pause.'},
 bent_elbow_lateral_raise:{name:'Bent-Elbow (Bro) Lateral Raise',kind:'weight',label:'Weight (each hand)',increment:2.5,multiplier:2,category:'Shoulder',equipment:'Dumbbells',target:'8–10'},
 plate_squat_overhead_press:{name:'Plate Squat to Overhead Press',kind:'weight',label:'Plate weight',increment:2.5,multiplier:1,category:'Upper Body Push',equipment:'Plate',target:'10'},
 alternating_single_leg_v_up:{name:'Alternating Single-Leg V-Up',kind:'reps',label:'Reps',increment:null,multiplier:0,category:'Core',equipment:'Bodyweight',target:'6–10 each side'},
 deadlift:{name:'Deadlift',kind:'weight',label:'Total weight',increment:5,multiplier:1,category:'Hinge',equipment:'Barbell',target:'6–8'},
 reverse_nordic:{name:'Reverse Nordic',kind:'band',label:'Band color',increment:null,multiplier:0,category:'Lower Body',equipment:'Band-assisted',bandOptions:['Orange','Green','Purple'],target:'10'},
 elevated_plank_single_arm_row:{name:'Elevated Plank with Single-Arm Row',kind:'weight',label:'Weight',increment:2.5,multiplier:1,category:'Upper Body Pull',equipment:'Dumbbell / cable',target:'8 each side'},
 concentration_curl:{name:'Concentration Curl',kind:'weight',label:'Weight',increment:2.5,multiplier:1,category:'Upper Body Pull',equipment:'Dumbbell',target:'10–12'},
 hamstring_curl:{name:'Hamstring Curl',kind:'hamstringCurl',label:'Weight / resistance',increment:5,multiplier:1,category:'Hinge',equipment:'Machine / slider',target:'10'},
 dumbbell_wood_chopper:{name:'Dumbbell Wood Chopper',kind:'weight',label:'Weight',increment:2.5,multiplier:1,category:'Core',equipment:'Dumbbell',target:'10 each side'},
 landmine_cross_body_push_press:{name:'Landmine Cross-Body Push Press',kind:'weight',label:'Total weight',increment:5,multiplier:1,category:'Upper Body Push',equipment:'Landmine',target:'6 each side'},
 cable_prayer:{name:'Cable Prayer',kind:'weight',label:'Cable weight',increment:5,multiplier:1,category:'Core',equipment:'Cable',target:'8–10'},
 cable_tricep_extension:{name:'Cable Tricep Extension',kind:'weight',label:'Cable weight',increment:5,multiplier:1,category:'Upper Body Push',equipment:'Cable',target:'8–10'},
 close_grip_dumbbell_bench_press:{name:'Close-Grip Dumbbell Bench Press',kind:'weight',label:'Weight (each hand)',increment:2.5,multiplier:2,category:'Upper Body Push',equipment:'Dumbbells',target:'8–10'},
 lyt_raise_wrist_extension:{name:'LYT Raise with Wrist Extension',kind:'reps',label:'Rounds',increment:null,multiplier:0,category:'Shoulder',equipment:'Light weights',target:'5 rounds'},
 curtsey_lunge:{name:'Curtsey Lunge',kind:'weight',label:'Weight / resistance',increment:2.5,multiplier:1,category:'Lower Body Push',equipment:'Varies',target:'6 each side',cue:'Nose over knees over toes.'},
 single_leg_plyo_step_up:{name:'Single-Leg Plyo Step-Up',kind:'singleLegPlyo',label:'Weight (each hand)',increment:2.5,multiplier:2,category:'Power',equipment:'Dumbbells / box',target:'4 each side'},
 push_up:{name:'Push Up',kind:'pushupVariation',label:'Variation and reps',increment:null,multiplier:0,category:'Upper Body Push',equipment:'Bodyweight'},
 hammer_curl:{name:'Hammer Curl',kind:'weightHold',label:'Weight (each hand)',increment:2.5,multiplier:2,category:'Upper Body Pull',equipment:'Dumbbells'}
  },
  programs: {
 Monday:{title:'Upper Body Pull',month:'August 2026',stations:{1:{name:'Rack',duration:'9.5 min',exercises:['pull_up_assisted','meadow_row']},2:{name:'Treadmill',duration:'9.5 min',exercises:['treadmill']},3:{name:'Bench',duration:'9.5 min · 4 sets',exercises:['slider_reverse_lunge','shoulder_external_rotation']},4:{name:'Floor',duration:'9.5 min',exercises:['a_frame_russian_twist','overhead_tricep_extension','high_to_low_plank']}}},
 Tuesday:{title:'Lower Body Push',month:'August 2026',stations:{1:{name:'Rack',duration:'9.5 min',exercises:['monster_walks','barbell_back_squat']},2:{name:'Treadmill',duration:'9.5 min',exercises:['treadmill']},3:{name:'Bench',duration:'9.5 min',exercises:['dumbbell_fly','single_arm_push_press']},4:{name:'Floor',duration:'9.5 min',exercises:['cossack_squat','half_kneeling_soleus_raise','half_kneeling_rainbow_slam']}}},
 Wednesday:{title:'Hinge Focus',month:'August 2026',stations:{1:{name:'Rack',duration:'9.5 min',exercises:['standing_banded_cable_hip_flexion','hip_thrust']},2:{name:'Treadmill',duration:'9.5 min',exercises:['treadmill']},3:{name:'Bench',duration:'9.5 min',exercises:['copenhagen_dip','dumbbell_rdl']},4:{name:'Floor',duration:'9.5 min',exercises:['scap_push_up','push_up','hammer_curl']}}},
 Thursday:{title:'Upper Body Push',month:'August 2026',stations:{1:{name:'Rack',duration:'9.5 min',exercises:['barbell_bench_press','horizontal_pull_apart']},2:{name:'Treadmill',duration:'9.5 min',exercises:['treadmill']},3:{name:'Bench',duration:'9.5 min',exercises:['pause_goblet_squat','bent_elbow_lateral_raise']},4:{name:'Floor',duration:'9.5 min',exercises:['plate_squat_overhead_press','alternating_single_leg_v_up']}}},
 Friday:{title:'Lower Body Pull',month:'August 2026',stations:{1:{name:'Rack',duration:'9.5 min',exercises:['deadlift','reverse_nordic']},2:{name:'Treadmill',duration:'9.5 min',exercises:['treadmill']},3:{name:'Bench',duration:'9.5 min',exercises:['elevated_plank_single_arm_row','concentration_curl']},4:{name:'Floor',duration:'9.5 min',exercises:['hamstring_curl','dumbbell_wood_chopper']}}},
 Saturday:{title:'Accessory Day',month:'August 2026',stations:{1:{name:'Rack',duration:'9.5 min',exercises:['landmine_cross_body_push_press','cable_prayer','cable_tricep_extension']},2:{name:'Treadmill',duration:'9.5 min',exercises:['treadmill']},3:{name:'Bench',duration:'9.5 min',exercises:['close_grip_dumbbell_bench_press','lyt_raise_wrist_extension']},4:{name:'Floor',duration:'9.5 min',exercises:['curtsey_lunge','single_leg_plyo_step_up']}}}
  }
};
