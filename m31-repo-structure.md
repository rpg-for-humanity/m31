# M31 Repository Structure (Updated Feb 2026)

```
m31/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx                            # Landing page
│   ├── globals.css
│   │
│   └── engine/
│       └── page.jsx                        # ✅ v8 game engine
│
├── public/
│   │
│   ├── Audio/
│   │   ├── sfx/                            # Sound effects
│   │   │   ├── goodresult.mp3              # Correct answer chime (each correct pick)
│   │   │   ├── kokorobot-success.mp3       # "Alright, you are all set!" (R1-3 order confirmed, BEFORE confetti)
│   │   │   └── music-victory.mp3           # Grand tada fanfare (Round 5 complete, final celebration)
│   │   │
│   │   └── dialogue/
│   │       ├── en/
│   │       │   ├── kokorobot-greeting.mp3  # "Hi there, what can I get started for you today?" (Round 4 text order start)
│   │       │   ├── kokorobot-ready.mp3     # "Ready when you are, tap the mic and speak your order." (Round 5 start)
│   │       │   ├── round1-order.mp3        # Kokoro's spoken order for Round 1
│   │       │   ├── round2-order.mp3        # Kokoro's spoken order for Round 2
│   │       │   ├── ask-size.mp3
│   │       │   ├── ask-type.mp3
│   │       │   ├── coffee-confirm.mp3
│   │       │   ├── coffee-syrup.mp3
│   │       │   ├── coffee-temperature.mp3
│   │       │   ├── confirm-order.mp3
│   │       │   ├── milk-lists.mp3
│   │       │   ├── milk-preference.mp3
│   │       │   ├── notavailable.mp3
│   │       │   └── order.mp3
│   │       ├── ko/                         # 🔮 Korean TTS
│   │       └── fr/                         # 🔮 French TTS
│   │
│   ├── images/
│   │   ├── npcs/
│   │   ├── cafes/
│   │   └── branding/
│   │
│   ├── packs/                              # 🔮 Phase 2: Game logic JSON
│   ├── dialogues/                          # 🔮 Phase 2: Dialogue content JSON
│   ├── world/                              # 🔮 Phase 3: World map JSON
│   └── templates/                          # 🔮 Phase 4: Creator templates
│
├── kokoro-tooltip.png                      # Keep in root (engine refs /kokoro-tooltip.png)
├── m31.jpg
├── next.config.ts
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## Notes
- **No docs/ in M31** — confidential docs stay in M31-site under gitignored docs/
- **No background music** — removed, too loud on mobile even at 1%
- **Design specs** live in Claude conversation history + M31-site docs/

## Audio When It Plays

| Sound | File | Trigger |
|---|---|---|
| Correct chime | `sfx/goodresult.mp3` | Player picks right option |
| Order confirmed | `sfx/kokorobot-success.mp3` | R1-3 order sum confirmed → THEN confetti pops |
| Victory fanfare | `sfx/music-victory.mp3` | Round 5 complete (grand finale) |
| R4 greeting | `dialogue/en/kokorobot-greeting.mp3` | Round 4 start: "Hi there, what can I get started for you today?" |
| R5 start | `dialogue/en/kokorobot-ready.mp3` | Round 5 start: "Ready when you are, tap the mic and speak your order." |

## Celebration Flow (Round 1-3)

```
Player completes order
  → kokorobot-success.mp3 ("Alright, you are all set!")
  → 600ms
  → Confetti (70 pieces, 4s) + gold tip toast (💰 +$10, 2.5s) + goodresult.mp3
  → 1200ms
  → Order Ready modal (green #22c55e)
  → Confirm → tip detail → Got it → next round
```

## Celebration Flow (Round 5 — Final)

```
Player completes speech order
  → kokorobot-success.mp3
  → Confetti (bigger/longer) + music-victory.mp3 (grand tada)
  → Final summary: total $ earned, XP, rounds completed
  → "Check your progress in the Hub"
```
