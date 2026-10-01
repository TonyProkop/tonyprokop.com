/**
 * Sample training log from the mocks (generated, not real). In production this would come
 * from the Hevy API (or a CSV export) at build time / on a revalidate interval.
 * Volume = sets × reps × weight (lb). The last five weeks of `weeklyVolume` match `sessions`;
 * the earlier weeks are sample values.
 */
export type Lift = { exercise: string; sets: number; reps: number; weight: number };
export type Session = { name: string; date: string; label: string; duration: string; lifts: Lift[] };

export const sessions: Session[] = [
  {
    "name": "Push day",
    "date": "2026-09-29",
    "label": "Tue, Sep 29 · 6:10 AM",
    "duration": "58 min",
    "lifts": [
      {
        "exercise": "Bench press",
        "sets": 4,
        "reps": 8,
        "weight": 185
      },
      {
        "exercise": "Overhead press",
        "sets": 3,
        "reps": 8,
        "weight": 115
      },
      {
        "exercise": "Incline dumbbell press",
        "sets": 3,
        "reps": 10,
        "weight": 60
      },
      {
        "exercise": "Triceps pushdown",
        "sets": 3,
        "reps": 12,
        "weight": 50
      }
    ]
  },
  {
    "name": "Legs",
    "date": "2026-09-28",
    "label": "Mon, Sep 28 · 6:05 AM",
    "duration": "64 min",
    "lifts": [
      {
        "exercise": "Back squat",
        "sets": 5,
        "reps": 5,
        "weight": 275
      },
      {
        "exercise": "Romanian deadlift",
        "sets": 3,
        "reps": 8,
        "weight": 205
      },
      {
        "exercise": "Walking lunge",
        "sets": 3,
        "reps": 12,
        "weight": 50
      },
      {
        "exercise": "Leg curl",
        "sets": 3,
        "reps": 12,
        "weight": 90
      }
    ]
  },
  {
    "name": "Pull day",
    "date": "2026-09-26",
    "label": "Sat, Sep 26 · 8:30 AM",
    "duration": "55 min",
    "lifts": [
      {
        "exercise": "Deadlift",
        "sets": 3,
        "reps": 5,
        "weight": 365
      },
      {
        "exercise": "Pull-up (+lb)",
        "sets": 4,
        "reps": 8,
        "weight": 25
      },
      {
        "exercise": "Barbell row",
        "sets": 4,
        "reps": 8,
        "weight": 165
      },
      {
        "exercise": "Face pull",
        "sets": 3,
        "reps": 15,
        "weight": 40
      }
    ]
  },
  {
    "name": "Upper",
    "date": "2026-09-24",
    "label": "Thu, Sep 24 · 6:00 AM",
    "duration": "61 min",
    "lifts": [
      {
        "exercise": "Bench press",
        "sets": 5,
        "reps": 5,
        "weight": 195
      },
      {
        "exercise": "Lat pulldown",
        "sets": 3,
        "reps": 10,
        "weight": 140
      },
      {
        "exercise": "Dumbbell shoulder press",
        "sets": 3,
        "reps": 10,
        "weight": 50
      },
      {
        "exercise": "Seated cable row",
        "sets": 3,
        "reps": 12,
        "weight": 120
      }
    ]
  },
  {
    "name": "Push day",
    "date": "2026-09-22",
    "label": "Tue, Sep 22 · 6:10 AM",
    "duration": "61 min",
    "lifts": [
      {
        "exercise": "Bench press",
        "sets": 4,
        "reps": 8,
        "weight": 185
      },
      {
        "exercise": "Overhead press",
        "sets": 3,
        "reps": 8,
        "weight": 115
      },
      {
        "exercise": "Incline dumbbell press",
        "sets": 3,
        "reps": 10,
        "weight": 60
      },
      {
        "exercise": "Triceps pushdown",
        "sets": 3,
        "reps": 12,
        "weight": 50
      }
    ]
  },
  {
    "name": "Legs",
    "date": "2026-09-21",
    "label": "Mon, Sep 21 · 6:05 AM",
    "duration": "67 min",
    "lifts": [
      {
        "exercise": "Back squat",
        "sets": 5,
        "reps": 5,
        "weight": 275
      },
      {
        "exercise": "Romanian deadlift",
        "sets": 3,
        "reps": 8,
        "weight": 205
      },
      {
        "exercise": "Walking lunge",
        "sets": 3,
        "reps": 12,
        "weight": 50
      },
      {
        "exercise": "Leg curl",
        "sets": 3,
        "reps": 12,
        "weight": 90
      }
    ]
  },
  {
    "name": "Pull day",
    "date": "2026-09-19",
    "label": "Sat, Sep 19 · 8:30 AM",
    "duration": "58 min",
    "lifts": [
      {
        "exercise": "Deadlift",
        "sets": 3,
        "reps": 5,
        "weight": 365
      },
      {
        "exercise": "Pull-up (+lb)",
        "sets": 4,
        "reps": 8,
        "weight": 25
      },
      {
        "exercise": "Barbell row",
        "sets": 4,
        "reps": 8,
        "weight": 165
      },
      {
        "exercise": "Face pull",
        "sets": 3,
        "reps": 15,
        "weight": 40
      }
    ]
  },
  {
    "name": "Upper",
    "date": "2026-09-17",
    "label": "Thu, Sep 17 · 6:00 AM",
    "duration": "64 min",
    "lifts": [
      {
        "exercise": "Bench press",
        "sets": 5,
        "reps": 5,
        "weight": 195
      },
      {
        "exercise": "Lat pulldown",
        "sets": 3,
        "reps": 10,
        "weight": 140
      },
      {
        "exercise": "Dumbbell shoulder press",
        "sets": 3,
        "reps": 10,
        "weight": 50
      },
      {
        "exercise": "Seated cable row",
        "sets": 3,
        "reps": 12,
        "weight": 120
      }
    ]
  },
  {
    "name": "Push day",
    "date": "2026-09-15",
    "label": "Tue, Sep 15 · 6:10 AM",
    "duration": "56 min",
    "lifts": [
      {
        "exercise": "Bench press",
        "sets": 4,
        "reps": 8,
        "weight": 180
      },
      {
        "exercise": "Overhead press",
        "sets": 3,
        "reps": 8,
        "weight": 110
      },
      {
        "exercise": "Incline dumbbell press",
        "sets": 3,
        "reps": 10,
        "weight": 60
      },
      {
        "exercise": "Triceps pushdown",
        "sets": 3,
        "reps": 12,
        "weight": 50
      }
    ]
  },
  {
    "name": "Legs",
    "date": "2026-09-14",
    "label": "Mon, Sep 14 · 6:05 AM",
    "duration": "62 min",
    "lifts": [
      {
        "exercise": "Back squat",
        "sets": 5,
        "reps": 5,
        "weight": 270
      },
      {
        "exercise": "Romanian deadlift",
        "sets": 3,
        "reps": 8,
        "weight": 200
      },
      {
        "exercise": "Walking lunge",
        "sets": 3,
        "reps": 12,
        "weight": 50
      },
      {
        "exercise": "Leg curl",
        "sets": 3,
        "reps": 12,
        "weight": 90
      }
    ]
  },
  {
    "name": "Pull day",
    "date": "2026-09-12",
    "label": "Sat, Sep 12 · 8:30 AM",
    "duration": "53 min",
    "lifts": [
      {
        "exercise": "Deadlift",
        "sets": 3,
        "reps": 5,
        "weight": 360
      },
      {
        "exercise": "Pull-up (+lb)",
        "sets": 4,
        "reps": 8,
        "weight": 25
      },
      {
        "exercise": "Barbell row",
        "sets": 4,
        "reps": 8,
        "weight": 160
      },
      {
        "exercise": "Face pull",
        "sets": 3,
        "reps": 15,
        "weight": 40
      }
    ]
  },
  {
    "name": "Upper",
    "date": "2026-09-10",
    "label": "Thu, Sep 10 · 6:00 AM",
    "duration": "59 min",
    "lifts": [
      {
        "exercise": "Bench press",
        "sets": 5,
        "reps": 5,
        "weight": 190
      },
      {
        "exercise": "Lat pulldown",
        "sets": 3,
        "reps": 10,
        "weight": 140
      },
      {
        "exercise": "Dumbbell shoulder press",
        "sets": 3,
        "reps": 10,
        "weight": 50
      },
      {
        "exercise": "Seated cable row",
        "sets": 3,
        "reps": 12,
        "weight": 120
      }
    ]
  },
  {
    "name": "Push day",
    "date": "2026-09-08",
    "label": "Tue, Sep 8 · 6:10 AM",
    "duration": "62 min",
    "lifts": [
      {
        "exercise": "Bench press",
        "sets": 4,
        "reps": 8,
        "weight": 180
      },
      {
        "exercise": "Overhead press",
        "sets": 3,
        "reps": 8,
        "weight": 110
      },
      {
        "exercise": "Incline dumbbell press",
        "sets": 3,
        "reps": 10,
        "weight": 60
      },
      {
        "exercise": "Triceps pushdown",
        "sets": 3,
        "reps": 12,
        "weight": 50
      }
    ]
  },
  {
    "name": "Legs",
    "date": "2026-09-07",
    "label": "Mon, Sep 7 · 6:05 AM",
    "duration": "68 min",
    "lifts": [
      {
        "exercise": "Back squat",
        "sets": 5,
        "reps": 5,
        "weight": 270
      },
      {
        "exercise": "Romanian deadlift",
        "sets": 3,
        "reps": 8,
        "weight": 200
      },
      {
        "exercise": "Walking lunge",
        "sets": 3,
        "reps": 12,
        "weight": 50
      },
      {
        "exercise": "Leg curl",
        "sets": 3,
        "reps": 12,
        "weight": 90
      }
    ]
  },
  {
    "name": "Pull day",
    "date": "2026-09-05",
    "label": "Sat, Sep 5 · 8:30 AM",
    "duration": "59 min",
    "lifts": [
      {
        "exercise": "Deadlift",
        "sets": 3,
        "reps": 5,
        "weight": 360
      },
      {
        "exercise": "Pull-up (+lb)",
        "sets": 4,
        "reps": 8,
        "weight": 25
      },
      {
        "exercise": "Barbell row",
        "sets": 4,
        "reps": 8,
        "weight": 160
      },
      {
        "exercise": "Face pull",
        "sets": 3,
        "reps": 15,
        "weight": 40
      }
    ]
  },
  {
    "name": "Upper",
    "date": "2026-09-03",
    "label": "Thu, Sep 3 · 6:00 AM",
    "duration": "65 min",
    "lifts": [
      {
        "exercise": "Bench press",
        "sets": 5,
        "reps": 5,
        "weight": 190
      },
      {
        "exercise": "Lat pulldown",
        "sets": 3,
        "reps": 10,
        "weight": 140
      },
      {
        "exercise": "Dumbbell shoulder press",
        "sets": 3,
        "reps": 10,
        "weight": 50
      },
      {
        "exercise": "Seated cable row",
        "sets": 3,
        "reps": 12,
        "weight": 120
      }
    ]
  },
  {
    "name": "Push day",
    "date": "2026-09-01",
    "label": "Tue, Sep 1 · 6:10 AM",
    "duration": "57 min",
    "lifts": [
      {
        "exercise": "Bench press",
        "sets": 4,
        "reps": 8,
        "weight": 175
      },
      {
        "exercise": "Overhead press",
        "sets": 3,
        "reps": 8,
        "weight": 105
      },
      {
        "exercise": "Incline dumbbell press",
        "sets": 3,
        "reps": 10,
        "weight": 60
      },
      {
        "exercise": "Triceps pushdown",
        "sets": 3,
        "reps": 12,
        "weight": 50
      }
    ]
  },
  {
    "name": "Legs",
    "date": "2026-08-31",
    "label": "Mon, Aug 31 · 6:05 AM",
    "duration": "63 min",
    "lifts": [
      {
        "exercise": "Back squat",
        "sets": 5,
        "reps": 5,
        "weight": 265
      },
      {
        "exercise": "Romanian deadlift",
        "sets": 3,
        "reps": 8,
        "weight": 195
      },
      {
        "exercise": "Walking lunge",
        "sets": 3,
        "reps": 12,
        "weight": 50
      },
      {
        "exercise": "Leg curl",
        "sets": 3,
        "reps": 12,
        "weight": 90
      }
    ]
  }
];

export const weeklyVolume: Array<{ week: string; volume: number }> = [
  {
    "week": "Jul 13",
    "volume": 41200
  },
  {
    "week": "Jul 20",
    "volume": 45800
  },
  {
    "week": "Jul 27",
    "volume": 39400
  },
  {
    "week": "Aug 3",
    "volume": 47100
  },
  {
    "week": "Aug 10",
    "volume": 49500
  },
  {
    "week": "Aug 17",
    "volume": 30800
  },
  {
    "week": "Aug 24",
    "volume": 48900
  },
  {
    "week": "Aug 31",
    "volume": 55955
  },
  {
    "week": "Sep 7",
    "volume": 56480
  },
  {
    "week": "Sep 14",
    "volume": 56840
  },
  {
    "week": "Sep 21",
    "volume": 57365
  },
  {
    "week": "Sep 28",
    "volume": 29115
  }
];

export const personalRecords: Array<{ lift: string; weight: string; date: string }> = [
  {
    "lift": "Bench press",
    "weight": "225 lb",
    "date": "Aug 12"
  },
  {
    "lift": "Back squat",
    "weight": "315 lb",
    "date": "Sep 2"
  },
  {
    "lift": "Deadlift",
    "weight": "405 lb",
    "date": "Jul 19"
  },
  {
    "lift": "Overhead press",
    "weight": "145 lb",
    "date": "Sep 9"
  }
];

export const volumeOf = (s: Session) => s.lifts.reduce((t, l) => t + l.sets * l.reps * l.weight, 0);
