# 🏋️ Fearless Lift Log

The companion workout tracker for the Fearless Strength Program.

Fearless Lift Log is a lightweight workout tracker that runs directly on your iPhone. There are no accounts, subscriptions, or servers—your workout data stays on your device, and you control your own backups.

---

## ✨ Features

- 💪 Track Monday–Saturday programmed workouts
- 🧭 Start at any station and follow the workout in circular station order
- 🎨 Distinct pastel exercise backgrounds for quick visual navigation in the gym
- 📝 Log weight, reps, bands, exercise variations, hold times, box height, hook height, difficulty, and setup notes when applicable
- ♻️ Repeat Previous Performance to quickly reuse your prior setup and performance
- 🕘 View Last Performed history for exercises, with the most recent set shown first
- 🎯 Mark any exercise/set as **Technique Focus** when form, control, tempo, range of motion, or technique is the priority
- 📊 Automatically calculate training volume, including both dumbbells and both sides for applicable unilateral exercises
- 🏆 Highlight personal records and workout accomplishments
- ⭐ View the workout Finish Screen and replay the most recent Finish Screen
- ✏️ Edit completed workouts
- 📚 Browse Workout History and the historical Exercise Index
- 🧠 Look back across historical workouts for previous exercise performance
- 🔤 Track exercise-specific options such as band colors, push-up variations, plank variations, and other programmed variations
- 📈 Use E / M / H difficulty ratings based on approximate reps remaining
- 🔒 Keep the screen awake during workouts
- 💾 Automatically save workout entries on the device while you train
- ☁️ Back up individual workouts or all app data to iCloud Drive
- ♻️ Import and restore workout history from backups
- 📱 Install on your iPhone Home Screen like a native app
- 🔄 Receive updated monthly programming when the published app/program files are updated
- 🧩 Monthly workout programming is separated from the core app beginning with v16, making future program updates safer and simpler
- 📊 Open **Progress Reports** for two views: **Monthly Progress** and **All-Time Progress**
- 📅 **Monthly Progress** follows the current program month and summarizes comparable exercise progress as the month develops
- 📈 **All-Time Progress** uses your saved workout history to show longer-term strength and performance trends
- 🧠 Progress comparisons account for more than load alone, including reps, difficulty, exercise variations, bands, assistance, and Technique Focus where applicable

---

# 🚀 Installation

## Step 1 – Create the iCloud folder structure

In **iCloud Drive**, create the following folders:

```text
Fearless Lift Log
├── Backups
├── Exercise Library
├── Exports
├── Workouts
└── Fearless-Lift-Log-Historical-Import
```

---

## Step 2 – Open the app

Using **Safari**, visit:

**https://ginaltaylor-beep.github.io/fearless-lift-log/**

---

## Step 3 – Install to your Home Screen

1. Tap **Share**
2. Tap **Add to Home Screen**
3. Tap **Add**

The app will now behave much like a native iPhone app.

---

# 📖 Using the App

## Complete a Workout

1. Select today's workout.
2. Choose your starting station.
3. Log the requested information for each exercise.
4. Rate difficulty using **E / M / H** when applicable.
5. Mark **Technique Focus** when you intentionally prioritize technique or form over load.
6. Mark each station complete.
7. Finish the workout and review your Finish Screen.

### Difficulty Guide

- **E — Easy:** about 3+ reps left
- **M — Medium:** about 2 reps left
- **H — Hard:** about 0–1 reps left

Rate difficulty by the number of reps you believe you had left—not simply by how hard the exercise felt.

### Technique Focus

Use **Technique Focus** when you intentionally adjust a set to prioritize things such as form, control, tempo, range of motion, positioning, or movement quality.

You can also use the exercise's Technique / Setup notes to record what you were working on. Technique Focus is stored with your workout history so future progress analysis can distinguish intentional technique work from a change in performance.

---

## Progress Reports

Tap **Progress Reports** from the Home Screen to choose between two training-history views.

### 📅 Monthly Progress

**Monthly Progress** analyzes the current program month and updates as workouts are completed. You can open it at any point during the month; after the final workout, it becomes the completed picture of that month’s training.

The report is designed to recognize meaningful progress without assuming that heavier weight always means better performance. Depending on the exercise and available history, it can consider load, reps, difficulty, exercise variation, band resistance or assistance, and other structured workout data.

Monthly comparisons can identify patterns such as:

- Progressed
- Progress across different rep ranges
- Maintained performance
- Different stimulus or setup
- Technique Focus
- Insufficient comparable data

Technique Focus sets remain part of workout history but are not treated as performance declines or ordinary PR comparisons.

### 📈 All-Time Progress

**All-Time Progress** looks across your complete saved workout history rather than only the current program month. It is intended to show longer-term exercise performance, repeat performances, best comparable efforts, and broader strength trends.

Related exercises can be understood as part of the same movement family while meaningful variations remain separate for direct performance comparisons. For example, barbell and dumbbell versions, incline and flat pressing, and paused or tempo variations are not treated as interchangeable loads.

The reports are generated from the workout history stored on your device, so corrections made with **Edit Workout** are reflected in future report calculations.

---

## Edit a Completed Workout

1. Open **Workout History**.
2. Select a workout.
3. Tap **Edit Workout**.
4. Make your changes.
5. Tap **Save Changes**.

---

## Back Up Your Data

After completing your first workout:

1. Tap **Back Up All Data to iCloud**
2. Choose **Save to Files**
3. Save the backup to:

```text
iCloud Drive
└── Fearless Lift Log
    └── Backups
```

Regular backups are recommended.

---

# 🔒 Privacy

Your workout history is stored only on your device.

Nothing from your workout history is uploaded to GitHub.

Your backups are saved only to your own iCloud Drive.

Your workout data is never shared unless you choose to export or share it.

---

# 🔄 Updating the App

When a new version or monthly program is published:

- Open the app.
- Refresh if needed.
- Your workout history and personal data remain on your device.

Beginning with **v16**, the app is split into two parts:

- `index.html` — the core Fearless Lift Log app and features
- `program.js` — the current monthly workout programming

This allows monthly training programs to be updated without replacing the core app code unless a new app feature is also needed.

---

# 📋 Version History

| Version | Highlights |
|---------|------------|
| **v0.7** | Added workout completion celebration |
| **v0.8** | Added Screen Wake Lock support |
| **v0.9** | Added editing of completed workouts |
| **v10** | Improved iCloud backup workflow |
| **v11** | Improved exercise background colors and station scroll landing |
| **v12** | Improved exercise color rules so adjacent exercises use different pastel backgrounds |
| **v13** | Added the new monthly program, Saturday Accessory Day, four-station workout structure, station names/icons, and expanded exercise-specific logging |
| **v14** | Improved historical exercise lookback, restored Replay Last Finish Screen, and added Monster Walk band choices |
| **v15** | Increased Last Performed font size, reversed Last Performed set order to newest-first, added Horizontal Pull Apart and Reverse Nordic band choices, added Hamstring Curl variations, added Single-Leg Plyo Step-Up box height/weight logging, and corrected Finish Screen volume math for applicable “each side” exercises |
| **v15.2** | Moved Saturday beside Friday on the Home Screen and added the E / M / H Difficulty Guide |
| **v16** | Separated monthly workout programming into `program.js` while keeping the core app in `index.html`; added Technique Focus to every exercise/set as structured workout-history data; preserved historical lookup, Last Performed, exercise-specific logging, Finish Screen/replay, editing, backup/import, and existing workout history |
| **v16.2** | Added **Progress Reports** with separate **Monthly Progress** and **All-Time Progress** views. Monthly Progress follows the current program month and evaluates comparable performances using exercise context such as load, reps, difficulty, variations, bands, assistance, and Technique Focus. All-Time Progress analyzes the complete saved workout history for longer-term performance trends and best comparable efforts. |

---

Built for the Fearless Strength Program.
