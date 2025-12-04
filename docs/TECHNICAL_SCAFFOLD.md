**Technical Scaffold - M31 (RPG for Humanity)**

A foundational architecture plan for the MVP, the long-term engine, and the creator ecosystem.

**1. Purpose of This Document**

This scaffold defines:
  - how M31 will be built technically
  - the structure of the client, backend, and creator SDK
  - the architecture supporting dialogue missions, culture capsules, and behavioral capsules
  - future-proofing for a Robolox-like creator marketplace

**2. Architectural Principles & Design Philosophy**

These principles guide long-term engineering decisions and ensure the platform can scale to millions of players and creators. 

  **Web-Native First:**	
  - Description: MVP ships on the web via Next.js + Vercel	
  - Justification: Global accessibility, no app store friction, fastest MVP timeline

  **Decoupled Engine:**	
  - Description: Core logic (SLM, Capsules, Vocabulary) is independent of the visual client	
  - Justification: Enables creator tools, modular scalability, future marketplace

  **Data as Source of Truth:**	
  - Description: All game content (missions, capsules, vocab) lives in the database (Supabase)	
  - Justification: Supports moderation, rapid updates, Social Poll Reveal

  **Language Integrity:**	
  - Description: System accepts non-English Kokorobot lines and STT for mastery	
  - Justification: Critical for realistic, culturally grounded language learning

## 3. High-Level Product Architecture

M31 World Client

├── Player Experience (PX)  
│   ├── Dialogue Missions (SLM Loop)  
│   ├── 6-Step Mastery Flow
│   ├── Vocabulary Border Battles
│   ├── Myth Lab (Cultural Capsules)
│   ├── Behavior Lab (Social Capsules)
│   └── Habitat Building
│
├── Creator Experience (CX)
│   ├── Dialogue Builder
│   ├── Capsule Builder (Myth + Behavior)
│   ├── Upload & Moderation Flow
│   └── Marketplace (future)
│
└── Platform Engine
    ├── Structured Language Mastery (SLM) Engine
    ├── Dialogue Tree Engine
    ├── Capsule Engine
    ├── Progression System
    └── Safety & Moderation Engine (Legal & Compliance)

**4. Technology Stack (MVP)**
  
  **Frontend (Game Client)**
  - Description: Next.js Phaser / React-Phaser, OpenAI API, STT module
  - Rationale: Fastest MVP, low cost, global web-native accessibility

  **Backend/Database**
  - Description: Supbase (Postgres, Auth, Edge Functions, Storage)
  - Rationale: Ideal for rapid iteration and live content updates

  **Deployment**
  - Description: Vercel (frontend), Supabase(backend)
  - Rationale: Modern JAMstack, optimized CI/CD and caching
    
**5. Core Systems: Boundaries & Data Flow**

These act as implicit API contracts for all future developers

  **5.1 Structured Language Mastery (SLM) Engine**
   
   **Purpose:** Orchestrates recognition → inference → reaction → path unlocking.
   **Boundary**
      - Input: Player input (English/non-English language), Kokorobot's current non-English line
      - Output: Next Kokorobot line, hint, gesture, or correction
      - Core Logic: Match player inference against the 10 valid dialogue paths

   **Success Condition:**
        Unlocking all required dialogue paths to complete a micro-scenario (e.g., "Order a Coffee").

  **5.2 Dialogue Mission Engine (Mastery Flow Orchestrator)**
   
   **Purpose:** Handles mission structure + post-completion learning steps
   **Boundary**
    - Input: Mission Completion Signal
    - Output: Corrected dialogue sets, fill-in-the-blank exercises, written quiz, speaking prompts

   **Additional Requirements:**
        - Interfaces with STT for prounciation checks
        - Maintains player state through all 6 mastery steps
   
  **5.3 Capsule Engine (Myth + Behavior Labs)**
   
   **Purpose:** Stores, serves, and aggregates data for:
      - cultural insight capsules
      - behavioral insight capsules
      - Social Poll Reveal
   **Boundary**
    - Input: Player choice or freedom text
    - Output: Official insight + global poll percentage

   **Core Logic** 
   - Record player interpretation
   - Aggregates global responses
   - Returns poll results in real time

 **5.4 Vocabulary Engine (M31 Border Battles)**
   **Purpose:** Triggered when players defeat "alien shadows."
   **Boundary**
    - Input: Alien defeated
    - Output: A vocabulary unit (word, phrase, or sentence) + meaning

   **Supports Learning Cycle:** **Repetition → Recognition → Association → Memory** 

**5.5 Player Progression System**
    Tracks:
    - missions completed
    - dialogue sets mastered
    - vocabulary unlocked
    - Earth Investment coins earned
    - habitats unlocked
    - items acquired

    Stored in progression tables for simplicity

  **6. Roadmap**
    
    Phase 1: MVP 
      - SLM Loop core engine
      - Coffee ordering mission
      - Border Battle vocabulary feature
      - 3 Myth Lab capsules
      - Player profile + Earth Investment
      - Basic habitat visuals
      - Private testing

    Phase 2: Creator Tools Alpha
      - Dialogue Builder
      - Capsule Builder
      - JSON upload for missions/capsules
      - Moderation + safety layer

    Phase 3: Ppen Creator Ecosystem
      - Creater marketplace
      - Habitat item shops
      - Premium Kokorobot skins
      - Shared user-created worlds

  **7. Security & Safety**
      
      - All user-generated content undergoes moderation
      - Prohibited:
        - harmful or traumatic scenarios
        - political conflicts
        - sensitive real-world events
      - Combination of AI pre-filtering + human review
      - Capsule templates ensure emotionally safe, non-political language

  **8. Future Engine Upgrade**
      
      - Unity + WebGL adaptation
      - Cross-play: web+mobile
      - Full creator revenue sharing
      - Customizable Kokorobot AI personalities
      - Multi-world interoperability

  **9. Safety & Moderation Engine (Platform-Level Security Layer)**
  
  A core system that governs what content is allowed into the platform, ensuring all dialogue sets, capsules, and player-  generated responses align with the mission of cultural intelligence, emotional safety, and responsible learning. 

  **Purpose:**
  
  To prevent misuse of RPG for Humanity's creator ecosystem - such as manipulative scripts, explicit content, political indocrtrination, or psychological harmful scenarios - while preserving creativity and cultural expression.

  **Scope:**
  
  The Safety & Moderation Engine validates content at three levels:
  **1. Creator Submissions (Dialogue Sets + Capsules)**
    - Pre-publication scanning
    - Risk scoring for harmful themes
    - Automatic rejection of disallowed patterns
    - Human-review fallback for edge cases
  **2. In-Game Player Inputs (Inference Responses)**
    - Toxicity detection
    - Sexual/violent language filtering
    - Redirected to safe-error responses (e.g., "Let's keep it friendly.")
  **3. Marketplace Assets (future)**
    - Habitat descriptions
    - Character personalities
    - Conversation pack metadata

  **Moderation Pipeline**
  
  Each submission flows through:
  **1. Ai Safety Filters**
     - Kanguage model classifier
     - Rule-based keyword checks
     - Patterh detection (grooming pattterns, manipulation, coercive scripts)
  
  **2. Validation Ruleset**
     ❌ No sexual, explicit, or NSFW content
     
     ❌ No abusive or coercive psychological scripts
     
     ❌ No real-world political persuasion
     
     ❌ No trauma exploitation
     
     ❌ No hateful or discriminatory speech
     
      ✔ Cultural nuance (allowed)
      
      ✔ Mild humor, etiquette, tradition explanations (allowed)
      
  **3. Approval Workflow**
      
      - Pending → Approved → Rejected → Needs Revision
      - Creators receive feedback on failed submissions
      - System logs all decisions for auditability
      
 

