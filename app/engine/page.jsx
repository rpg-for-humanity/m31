'use client';
import { useState } from "react";

// ═══ ICONS (Lucide outlined ONLY) ═══
const I={
  headphones:(s=14,c="currentColor")=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>,
  volume2:(s=14,c="currentColor")=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>,
  fileText:(s=14,c="currentColor")=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
  globe:(s=14,c="currentColor")=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  user:(s=14,c="currentColor")=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
  play:(s=14,c="currentColor")=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>,
  chevDown:(s=10,c="currentColor")=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>,
  check:(s=14,c="currentColor")=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  arrow:(s=14,c="currentColor")=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
  palette:(s=14,c="currentColor")=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill={c}/><circle cx="17.5" cy="10.5" r=".5" fill={c}/><circle cx="8.5" cy="7.5" r=".5" fill={c}/><circle cx="6.5" cy="12" r=".5" fill={c}/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>,
  heart:(s=14,c="currentColor")=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
  heartFill:(s=14,c="currentColor")=><svg width={s} height={s} viewBox="0 0 24 24" fill={c} stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
  share:(s=14,c="currentColor")=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>,
  msgCircle:(s=14,c="currentColor")=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>,
  send:(s=14,c="currentColor")=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>,
  moon:(s=14,c="currentColor")=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>,
  sun:(s=14,c="currentColor")=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>,
};

// ═══ SPEED & TONE CONFIG ═══
const SPEEDS=[
  {id:"slow",label:"Slow",rate:0.55},
  {id:"natural",label:"Natural",rate:1.0},
  {id:"fast",label:"Fast",rate:1.35},
];
const TONES=[
  {id:"polite",label:"Polite and attentive",short:"Polite",prompt:"You are a very helpful, polite barista who speaks formally, elaborates options, and uses honorifics"},
  {id:"relaxed",label:"Relaxed and friendly",short:"Relaxed",prompt:"You are a calm, relaxed barista who speaks gently and warmly with no rush"},
  {id:"direct",label:"Direct and efficient",short:"Direct",prompt:"You are a busy, efficient barista who speaks directly with minimal words"},
];

// ═══ 2 UNIVERSAL THEMES (MVP) ═══
// Premium themes saved for Creator tier ($0.99)
const TH={
  "light":{id:"light",n:"Light",bg:"#1E1E1E",p:"#3D3D3D",a:"#3D3D3D",cta:"#3D3D3D",ct:"#fff",
    cardBg:"#FFFBF5",cardTx:"#1A1A1A",speechBg:"transparent",speechTx:"#1A1A1A",transBg:"#f0edea",
    speechBorder:"#3D3D3D",hudBorder:"rgba(0,0,0,0.2)",hudTx:"#888"},
  "dark":{id:"dark",n:"Dark",bg:"#1E1E1E",p:"#FFFBF5",a:"#FFFBF5",cta:"#FFFBF5",ct:"#1A1A1A",dk:true,
    speechBorder:"rgba(255,255,255,0.2)",hudBorder:"rgba(255,255,255,0.25)",hudTx:"#a3a3a3"},
};

const LN={en:{f:"🇺🇸",s:"EN"},ko:{f:"🇰🇷",s:"KO"},es:{f:"🇪🇸",s:"ES"},fr:{f:"🇫🇷",s:"FR"}};
const NL={en:"Can I get a medium caramel macchiato with oat milk?",ko:"오트밀크 카라멜 마키아토 미디엄 사이즈 하나 주세요."};
const WB={en:{d:["Americano","Macchiato","Latte","Flat White"],sy:["None","Caramel","Vanilla","Hazelnut"],sz:["Small","Medium","Large"],m:["Oat","Skim","Whole","Half & Half"]},
  ko:{d:["아메리카노","마키아토","라떼","플랫화이트"],sy:["없음","카라멜","바닐라","헤이즐넛"],sz:["스몰","미디엄","라지"],m:["오트","스킴","홀","하프앤하프"]}};
const KAO=["(੭•̀ᴗ•̀)੭","(´・ω・`)","(੭°o°)੭","(•̀ᴗ•́)ﻭ"];

function useThemeColors(T){
  const isLight=!!T.cardBg;
  return{tx:isLight?"#1A1A1A":"#fff",mu:isLight?"#666":"#a3a3a3",
    cb:isLight?T.cardBg:"rgba(255,255,255,0.04)",
    cd:isLight?"rgba(0,0,0,0.1)":"rgba(255,255,255,0.1)",
    ob:isLight?"rgba(0,0,0,0.05)":"rgba(255,255,255,0.06)",
    cardTx:isLight?T.cardTx:"#fff",
    speechBg:isLight?"transparent":"transparent",
    speechTx:isLight?T.speechTx:"#fff",
    transBg:isLight?T.transBg:"rgba(255,251,245,0.04)",
    hudBorder:T.hudBorder,hudTx:T.hudTx,isLight};
}

export default function App(){
  const[iL,sIL]=useState("ko");const[lL,sLL]=useState("en");const[tId,sTId]=useState("light");
  const[spd,sSpd]=useState("natural");const[tone,sTone]=useState("polite");
  const[ph,sPh]=useState("onboard");
  const T=TH[tId];const tc=useThemeColors(T);
  const cx={T,tId,sTId,...tc,iL,lL,sIL,sLL,spd,sSpd,tone,sTone};
  return(
    <div style={{height:"100dvh",background:"#000",fontFamily:"system-ui,-apple-system,sans-serif",display:"flex",justifyContent:"center"}}>
    <div style={{width:"100%",maxWidth:420,height:"100%",background:T.bg,color:tc.tx,overflow:"hidden",position:"relative"}} className="app-frame">
      <style>{`@keyframes su{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
        @keyframes lp{0%{transform:scale(1)}50%{transform:scale(1.12)}100%{transform:scale(1)}}
        @keyframes wave{0%{transform:rotate(0deg)}25%{transform:rotate(5deg)}50%{transform:rotate(0deg)}75%{transform:rotate(-5deg)}100%{transform:rotate(0deg)}}
        @keyframes fi{from{opacity:0}to{opacity:1}}
        @keyframes ce{0%{opacity:1;transform:translate(0,0) rotate(0deg) scale(0.5)}40%{opacity:1;transform:translate(var(--tx),var(--ty)) rotate(360deg) scale(1.2)}100%{opacity:0;transform:translate(calc(var(--tx)*1.3),calc(var(--ty) + 50vh)) rotate(720deg) scale(0.3)}}
        *{box-sizing:border-box;margin:0;padding:0}button{cursor:pointer;border:none;font-family:inherit}
        @media(min-width:480px){.app-frame{border-radius:24px!important;margin:16px auto!important;height:calc(100% - 32px)!important}}`}</style>
      {ph==="onboard"&&<Onboard cx={cx} done={()=>sPh("intro")}/>}
      {ph==="intro"&&<Intro cx={cx} go={()=>sPh("play")}/>}
      {ph==="play"&&<Play cx={cx} done={()=>sPh("end")}/>}
      {ph==="end"&&<End cx={cx} again={()=>sPh("intro")}/>}
    </div></div>);
}

// ═══ ONBOARDING — Kokoro + Speed/Tone selectors ═══
function Onboard({cx,done}){
  const{T,spd,sSpd,tone,sTone}=cx;
  const isLight=!!T.cardBg;
  const cardBg=isLight?T.cardBg:"rgba(255,255,255,0.04)";
  const labelC=isLight?"#1A1A1A":"#d4d4d4";
  const unselBg=isLight?"rgba(0,0,0,0.06)":"rgba(255,255,255,0.06)";
  const unselC=isLight?"#555":"#a3a3a3";
  return(
    <div style={{minHeight:"100vh",background:T.bg,display:"flex",alignItems:"center",justifyContent:"center",padding:16,position:"relative"}}>
      <button onClick={done} style={{position:"absolute",top:16,right:16,fontSize:14,color:isLight?"#888":"#a3a3a3",fontWeight:600,background:"none",padding:"6px 10px"}}>Skip</button>
      <div style={{maxWidth:380,width:"100%",padding:"36px 24px 28px",borderRadius:20,textAlign:"center",
        background:cardBg,border:`1px solid ${isLight?"rgba(0,0,0,0.12)":"rgba(255,255,255,0.1)"}`,animation:"su 0.4s ease"}}>
        {/* Kokoro avatar */}
        <div style={{width:140,height:140,borderRadius:"50%",overflow:"hidden",margin:"0 auto 12px",
          border:`3px solid ${T.p}`,boxShadow:`0 0 20px ${T.p}44`,animation:"wave 2s ease-in-out infinite"}}>
          <img src="/kokoro-tooltip.png" alt="Kokoro" style={{width:"100%",height:"100%",objectFit:"cover"}}/></div>
        <h2 style={{fontSize:22,fontWeight:700,color:T.p,marginBottom:4}}>Hi! I'm Kokoro!</h2>
        <p style={{fontSize:16,color:labelC,lineHeight:1.5,marginBottom:20}}>I'll be your role-play partner.</p>

        {/* Speed selector */}
        <p style={{fontSize:16,fontWeight:600,color:labelC,marginBottom:8,textAlign:"left"}}>How fast should I talk?</p>
        <div style={{display:"flex",gap:6,marginBottom:18}}>
          {SPEEDS.map(s=>{const sel=spd===s.id;return<button key={s.id} onClick={()=>sSpd(s.id)}
            onMouseEnter={e=>{if(!sel)e.currentTarget.style.border="1.5px solid #ef4444"}}
            onMouseLeave={e=>{if(!sel)e.currentTarget.style.border="1.5px solid transparent"}}
            style={{flex:1,padding:"12px 4px",borderRadius:12,fontSize:16,fontWeight:600,textAlign:"center",
              background:sel?T.a:unselBg,
              color:sel?"#fff":unselC,
              border:`1.5px solid ${sel?T.a:"transparent"}`,transition:"all 0.15s",cursor:"pointer"}}>{s.label}</button>})}</div>

        {/* Tone selector */}
        <p style={{fontSize:16,fontWeight:600,color:labelC,marginBottom:8,textAlign:"left"}}>How should I sound?</p>
        <div style={{display:"flex",flexDirection:"column",gap:6,marginBottom:24}}>
          {TONES.map(t=>{const sel=tone===t.id;return<button key={t.id} onClick={()=>sTone(t.id)}
            onMouseEnter={e=>{if(!sel)e.currentTarget.style.border="1.5px solid #ef4444"}}
            onMouseLeave={e=>{if(!sel)e.currentTarget.style.border="1.5px solid transparent"}}
            style={{padding:"14px 14px",borderRadius:12,fontSize:16,fontWeight:600,textAlign:"left",
              background:sel?T.a:unselBg,
              color:sel?"#fff":unselC,
              border:`1.5px solid ${sel?T.a:"transparent"}`,transition:"all 0.15s",cursor:"pointer"}}>{t.label}</button>})}</div>

        <button onClick={done} style={{width:"100%",padding:"14px 0",borderRadius:999,fontSize:16,fontWeight:600,
          background:T.cta,color:T.ct}}>Continue</button>
      </div>
    </div>);
}

// ═══ LANGUAGE DROPDOWN ═══
function LangDrop({cx}){
  const{iL,lL,sIL,sLL,T,tx,cd,ob,hudBorder,hudTx}=cx;const[o,sO]=useState(false);
  return(<div style={{position:"relative"}}>
    <button onClick={()=>sO(!o)} style={{display:"flex",alignItems:"center",gap:5,padding:"6px 10px",borderRadius:999,background:ob,border:`1.5px solid ${hudBorder}`,color:tx,fontSize:13}}>
      <span style={{fontSize:16}}>{LN[iL].f}</span>
      <span style={{fontSize:12,fontWeight:600}}>{I.arrow(10,hudTx)}</span>
      <span style={{fontSize:16}}>{LN[lL].f}</span>
      {I.chevDown(12,hudTx)}</button>
    {o&&<><div style={{position:"fixed",inset:0,zIndex:50}} onClick={()=>sO(false)}/>
      <div style={{position:"absolute",left:0,top:"calc(100% + 6px)",zIndex:51,width:260,borderRadius:16,padding:16,
        background:"#1a1a1a",border:`1px solid ${cd}`,boxShadow:"0 8px 32px rgba(0,0,0,0.4)",animation:"su 0.2s ease"}}>
        <div style={{display:"flex",alignItems:"center",gap:4,marginBottom:6}}>
          {I.fileText(13,"#a3a3a3")}<span style={{fontSize:13,fontWeight:600,letterSpacing:1,textTransform:"uppercase",color:"#a3a3a3"}}>Explain in</span></div>
        <div style={{display:"flex",gap:5,marginBottom:14,flexWrap:"wrap"}}>
          {Object.entries(LN).map(([c,l])=>(<button key={c} onClick={()=>sIL(c)} style={{padding:"6px 12px",borderRadius:999,fontSize:14,fontWeight:600,
            background:c===iL?T.p:ob,color:c===iL?T.ct:tx}}>{l.f} {l.s}</button>))}</div>
        <div style={{display:"flex",alignItems:"center",gap:4,marginBottom:6}}>
          {I.headphones(13,"#a3a3a3")}<span style={{fontSize:13,fontWeight:600,letterSpacing:1,textTransform:"uppercase",color:"#a3a3a3"}}>Practice in</span></div>
        <div style={{display:"flex",gap:5,flexWrap:"wrap"}}>
          {Object.entries(LN).map(([c,l])=>(<button key={c} onClick={()=>sLL(c)} style={{padding:"6px 12px",borderRadius:999,fontSize:14,fontWeight:600,
            background:c===lL?T.p:ob,color:c===lL?T.ct:tx}}>{l.f} {l.s}</button>))}</div>
      </div></>}</div>);
}

// ═══ LIGHT/DARK TOGGLE ═══
function ThemeToggle({cx}){
  const{T,tId,sTId,hudBorder,hudTx}=cx;
  return(<button onClick={()=>sTId(tId==="light"?"dark":"light")} style={{display:"flex",alignItems:"center",gap:4,padding:"5px 10px",borderRadius:999,
    background:"transparent",border:`1.5px solid ${hudBorder}`,color:hudTx,fontSize:13,fontWeight:500}}>
    {tId==="light"?I.moon(14,hudTx):I.sun(14,hudTx)}</button>);
}

// ═══ SPEED/TONE HUD INDICATOR ═══
function SpdToneHUD({cx}){
  const{spd,tone,hudBorder,hudTx}=cx;
  const sp=SPEEDS.find(s=>s.id===spd);
  const tn=TONES.find(t=>t.id===tone);
  return <span style={{fontSize:12,fontWeight:600,padding:"6px 10px",borderRadius:999,
    border:`1.5px solid ${hudBorder}`,color:hudTx,whiteSpace:"nowrap"}}>
    {sp?.label} · {tn?.short}</span>;
}

// ═══ AVATAR (no voice picker) ═══
function Ava({cx,sz=80,speak=false}){
  const{T}=cx;
  return<div style={{position:"relative",flexShrink:0}}>
    <div style={{width:sz,height:sz,borderRadius:"50%",border:`3px solid ${speak?T.p:(T.cardBg?"rgba(0,0,0,0.12)":"rgba(255,255,255,0.2)")}`,
      overflow:"hidden",transition:"all 0.3s",boxShadow:speak?`0 0 12px ${T.p}33`:"none"}}>
      <img src="/kokoro-tooltip.png" alt="Kokoro" style={{width:"100%",height:"100%",objectFit:"cover"}}
        onError={e=>{e.target.style.display="none";e.target.parentElement.style.background=`linear-gradient(135deg,${T.p}22,${T.a}22)`;
          e.target.parentElement.style.display="flex";e.target.parentElement.style.alignItems="center";e.target.parentElement.style.justifyContent="center";}}/></div></div>;
}

// ═══ INTRO ═══
function Intro({cx,go}){
  const{T,tx,mu,cb,cd,ob,iL,lL,cardTx,isLight}=cx;
  const cTx=isLight?cardTx:tx;
  return(<div style={{height:"100dvh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:16}}>
    <div style={{width:"100%",borderRadius:16,overflow:"hidden",background:cb,border:`1px solid ${cd}`,animation:"su 0.5s ease"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"14px 20px"}}>
        <span style={{fontSize:14,fontWeight:600,letterSpacing:0.5,textTransform:"uppercase",color:isLight?cardTx:T.a}}>Coffee Outpost</span>
        <SpdToneHUD cx={cx}/></div>
      <div style={{display:"flex",flexDirection:"column",alignItems:"center",padding:"14px 0 6px"}}>
        <Ava cx={cx} sz={80}/></div>
      <div style={{padding:"0 24px 24px",textAlign:"center"}}>
        <h1 style={{fontSize:24,fontWeight:700,marginBottom:8,color:cTx}}>{lL==="ko"?"카라멜 마키아토 주문하기":"Order a Caramel Macchiato"}</h1>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginBottom:12}}>
          <span style={{fontSize:16,color:isLight?cTx:tx}}>Listen</span>
          <span style={{color:T.p,fontSize:16}}>→</span>
          <span style={{fontSize:16,color:isLight?cTx:tx}}>Type</span>
          <span style={{color:T.p,fontSize:16}}>→</span>
          <span style={{fontSize:16,color:isLight?cTx:tx}}>Speak</span></div>
        <div style={{display:"inline-flex",alignItems:"center",gap:6,padding:"5px 14px",borderRadius:999,background:isLight?"rgba(0,0,0,0.06)":ob,marginBottom:16}}>
          <span style={{fontSize:14,color:isLight?"rgba(0,0,0,0.5)":mu,fontWeight:600}}>{LN[iL].f} Explain in</span>
          <span style={{opacity:0.2}}>|</span>
          <span style={{fontSize:14,color:isLight?"rgba(0,0,0,0.5)":mu,fontWeight:600}}>{LN[lL].f} Practice in</span></div><br/>
        <button onClick={go} style={{display:"inline-flex",alignItems:"center",gap:8,padding:"16px 28px",borderRadius:999,
          fontSize:16,fontWeight:600,background:T.cta,color:T.ct}}>{I.play(16,T.ct)} Start</button>
      </div></div></div>);
}

// ═══ PLAYING ═══
function Play({cx,done}){
  const{T,tx,mu,cb,cd,ob,lL,cardTx,speechBg,speechTx,transBg,isLight}=cx;
  const wb=WB[lL]||WB.en;
  const[st,sSt]=useState("s1");const[lk,sLk]=useState({});const[sl,sSl]=useState({});
  const[toast,sToast]=useState(null);const[stx,sStx]=useState(false);
  const[conf,sConf]=useState([]);const[sOrd,sSOrd]=useState(false);const[sTp,sStp]=useState(false);const[spk,sSpk]=useState(false);
  const cr={type:3,syrup:1,size:1,milk:0};
  const cTx=isLight?cardTx:tx;
  const pick=(f,i)=>{if(lk[f])return;
    if(i===cr[f]){const n={...lk,[f]:true};sLk(n);sSl(p=>({...p,[f]:i}));
      setTimeout(()=>{if(st==="s1"&&n.type&&n.syrup)sSt("s2");
        if(st==="s2"&&n.size&&n.milk){const COLORS=["#ffd700","#e8e8e8","#90EE90","#fbbf24","#c0c0c0","#4ade80","#fef08a","#ff6b6b"];
          const c=Array.from({length:70},(_,j)=>{const a=(Math.PI*2*j)/70+(Math.random()-0.5)*0.8,d=250+Math.random()*350;
          return{id:j,tx:Math.cos(a)*d,ty:Math.sin(a)*d-50,dl:Math.random()*0.4,du:2+Math.random()*1,c:COLORS[j%COLORS.length],sh:j%3};});
          sConf(c);setTimeout(()=>sConf([]),4000);setTimeout(()=>sSOrd(true),800);}},350);
    }else sToast(KAO[Math.floor(Math.random()*KAO.length)]);};

  return(<div style={{height:"100dvh",display:"flex",flexDirection:"column",position:"relative",overflow:"hidden"}}>
    {conf.length>0&&<div style={{position:"fixed",inset:0,pointerEvents:"none",zIndex:200}}>
      {conf.map(p=><div key={p.id} style={{position:"absolute",left:"50%",top:"40%","--tx":p.tx+"px","--ty":p.ty+"px",
        animation:`ce ${p.du}s ease-out ${p.dl}s forwards`}}>{p.sh===0?
        <svg width="24" height="24" viewBox="0 0 24 24"><polygon points="12,0 15,8.5 24,8.5 17,14 19,24 12,18 5,24 7,14 0,8.5 9,8.5" fill={p.c}/></svg>:
        p.sh===1?<div style={{width:20,height:20,background:p.c,borderRadius:"50%"}}/>:
        <div style={{width:18,height:18,background:p.c,transform:"rotate(45deg)"}}/>}</div>)}</div>}

    {toast&&<><div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:99}}/>
      <div style={{position:"fixed",inset:0,zIndex:100,display:"flex",alignItems:"center",justifyContent:"center",padding:16}}>
        <div style={{background:"rgba(0,0,0,0.95)",padding:"24px 32px",borderRadius:16,textAlign:"center",border:"1.5px solid #ef4444",animation:"su 0.2s ease",minWidth:200}}>
          <p style={{fontSize:16,fontWeight:700,color:"#ef4444",marginBottom:10}}>Incorrect</p>
          <span style={{display:"block",fontSize:36,marginBottom:16,color:"#a3a3a3"}}>{toast}</span>
          <button onClick={()=>sToast(null)} style={{width:"100%",padding:"14px 0",borderRadius:999,fontSize:16,fontWeight:600,background:"#ef4444",color:"#fff"}}>Try again!</button>
        </div></div></>}

    {sOrd&&<><div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:80}}/>
      <div style={{position:"fixed",inset:0,zIndex:81,display:"flex",alignItems:"center",justifyContent:"center",padding:16}}>
        <div style={{width:"100%",maxWidth:360,borderRadius:16,background:"rgba(0,0,0,0.95)",border:`1.5px solid ${T.p}`,textAlign:"center",padding:24,animation:"su 0.3s ease"}}>
          <p style={{fontSize:20,fontWeight:700,color:T.p,marginBottom:12}}>Order Ready!</p>
          <div style={{borderRadius:12,border:`1px solid ${T.p}33`,padding:"12px 16px",marginBottom:16}}>
            <p style={{fontSize:14,fontWeight:600,color:T.p,marginBottom:4}}>Order Summary</p>
            <p style={{fontSize:16,fontWeight:600,color:"#fff"}}>{wb.sz[1]} {wb.d[1]} ({wb.m[0]}) + {wb.sy[1]}</p></div>
          <button onClick={()=>{sSOrd(false);setTimeout(()=>sStp(true),500);}} style={{width:"100%",padding:"14px 0",borderRadius:999,fontSize:16,fontWeight:600,background:T.p,color:T.ct}}>Confirm</button>
        </div></div></>}

    {sTp&&<><div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:150}}/>
      <div style={{position:"fixed",inset:0,zIndex:151,display:"flex",alignItems:"center",justifyContent:"center",padding:16}}>
        <div style={{width:"100%",maxWidth:360,borderRadius:16,padding:24,background:"rgba(0,0,0,0.95)",border:`1.5px solid ${T.p}`,animation:"su 0.3s ease"}}>
          <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:16}}>
            <div style={{width:80,height:80,borderRadius:"50%",overflow:"hidden",flexShrink:0,border:`2px solid ${T.p}44`}}>
              <img src="/kokoro-tooltip.png" alt="Kokoro" style={{width:"100%",height:"100%",objectFit:"cover"}}/></div>
            <div><p style={{fontSize:18,fontWeight:700,color:T.p,marginBottom:4}}>You earned $10!</p>
              <p style={{fontSize:16,color:"#d4d4d4",lineHeight:1.5}}>Keep earning to unlock build modes in the game world.</p></div></div>
          <button onClick={()=>{sStp(false);setTimeout(done,300);}} style={{width:"100%",padding:"14px 0",borderRadius:999,fontSize:16,fontWeight:600,background:T.cta,color:T.ct}}>Got it!</button>
        </div></div></>}

    {/* HUD: flags + toggle left, speed/tone right */}
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 16px 12px",flexShrink:0}}>
      <div style={{display:"flex",alignItems:"center",gap:6}}>
        <LangDrop cx={cx}/>
        <ThemeToggle cx={cx}/>
      </div>
      <SpdToneHUD cx={cx}/>
    </div>

    <div style={{flex:1,overflowY:"auto",padding:"0 16px 24px"}}>
      <div style={{borderRadius:16,overflow:"hidden",background:cb,border:`1px solid ${cd}`}}>
        <div style={{padding:"16px 20px",borderBottom:`1px solid ${isLight?"rgba(0,0,0,0.1)":cd}`}}>
          <p style={{fontSize:14,fontWeight:600,letterSpacing:0.5,textTransform:"uppercase",color:isLight?cardTx:T.p,marginBottom:10}}>Coffee Outpost</p>
          <div style={{display:"flex",gap:12,alignItems:"flex-start"}}>
            <Ava cx={cx} sz={80} speak={spk}/>
            <div style={{flex:1,padding:"12px 16px",borderRadius:12,background:speechBg,
              border:isLight?`1.5px solid ${T.speechBorder||T.p}`:"none"}}>
              <div style={{display:"flex",alignItems:"center",gap:5,marginBottom:6}}>
                {I.headphones(16,isLight?T.p:speechTx)}<span style={{fontSize:16,fontWeight:700,color:isLight?T.p:speechTx}}>Listen and Type</span></div>
              <p style={{fontSize:16,color:isLight?"#555":speechTx,lineHeight:1.5,opacity:isLight?1:0.8,marginBottom:12}}>Listen to Kokoro's order, then build it.</p>
              <div style={{display:"flex",gap:6}}>
                <button onClick={()=>{sSpk(true);setTimeout(()=>sSpk(false),2500);}} style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:2,
                  padding:"8px 4px",borderRadius:10,background:isLight?"rgba(0,0,0,0.06)":"#2D2D2D",border:"none",minWidth:0}}>
                  <span style={{display:"flex",alignItems:"center",gap:4}}>{I.volume2(14,isLight?"#1A1A1A":"#fff")}<span style={{fontSize:14,fontWeight:600,color:isLight?"#1A1A1A":"#fff"}}>Replay</span></span>
                  <span style={{fontSize:12,color:isLight?"#888":T.p}}>(Free)</span></button>
                <button onClick={()=>{if(!stx){sStx(true);}}} disabled={stx} style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:2,
                  padding:"8px 4px",borderRadius:10,background:stx?(isLight?`${T.p}22`:"rgba(34,197,94,0.15)"):(isLight?"rgba(0,0,0,0.06)":"#2D2D2D"),border:"none",opacity:stx?0.6:1,minWidth:0}}>
                  <span style={{display:"flex",alignItems:"center",gap:4}}>
                    {stx?I.check(14,T.p):I.fileText(14,isLight?"#1A1A1A":"#fff")}<span style={{fontSize:14,fontWeight:600,color:stx?T.p:(isLight?"#1A1A1A":"#fff")}}>{stx?"Done":"Show Text"}</span></span>
                  {!stx&&<span style={{fontSize:12,color:isLight?"#888":T.p}}>$ 10</span>}</button>
              </div></div></div>
          {stx&&<div style={{marginTop:10,padding:"10px 14px",borderRadius:10,background:isLight?transBg:`${T.p}0a`,border:isLight?`1px solid ${T.p}22`:`1px solid ${T.p}22`,animation:"su 0.3s ease"}}>
            <p style={{fontSize:13,fontWeight:600,letterSpacing:1,color:T.p,marginBottom:3}}>TRANSCRIPT</p>
            <p style={{fontSize:16,color:isLight?"#333":tx,lineHeight:1.5,opacity:0.85}}>"{NL[lL]||NL.en}"</p></div>}
        </div>
        <div style={{padding:"10px 20px 6px"}}>
          <p style={{fontSize:14,color:isLight?"rgba(0,0,0,0.5)":mu,marginBottom:6}}>Receipt preview</p>
          {Object.keys(lk).length>0&&<div style={{display:"flex",flexWrap:"wrap",gap:5,marginBottom:6}}>
            {Object.entries(sl).map(([f,i])=>{const c={type:wb.d,syrup:wb.sy,size:wb.sz,milk:wb.m};
              return<span key={f} style={{padding:"4px 10px",borderRadius:999,fontSize:14,fontWeight:600,background:T.p,color:T.ct}}>{c[f]?.[i]}</span>;})}</div>}
          <p style={{fontSize:16,fontWeight:600,color:isLight?cardTx:T.p}}>{st==="s1"?"Step 1: Select type and syrup.":"Step 2: Select size and milk."}</p></div>
        <div style={{padding:"10px 20px 20px"}}>
          {st==="s1"&&<div style={{display:"flex",gap:8}}>
            <Co l="Drink Type" o={wb.d} f="type" c={3} lk={lk} p={pick} cx={cx}/>
            <Co l="Syrup" o={wb.sy} f="syrup" c={1} lk={lk} p={pick} cx={cx}/></div>}
          {st==="s2"&&<div style={{display:"flex",gap:8,animation:"su 0.3s ease"}}>
            <Co l="Size" o={wb.sz} f="size" c={1} lk={lk} p={pick} cx={cx}/>
            <Co l="Milk" o={wb.m} f="milk" c={0} lk={lk} p={pick} cx={cx}/></div>}
        </div></div></div></div>);
}

function Co({l,o,f,c,lk,p,cx}){
  const{T,tx,ob,isLight,cardTx}=cx;
  const[h,sH]=useState(-1);const il=!!lk[f];
  const cTx=isLight?cardTx:tx;const optBg=isLight?"rgba(0,0,0,0.06)":ob;
  return<div style={{flex:1}}>
    <p style={{fontSize:14,fontWeight:700,color:isLight?cardTx:T.p,textAlign:"center",marginBottom:6}}>{l}</p>
    <div style={{display:"flex",flexDirection:"column",gap:5}}>
      {o.map((v,i)=><button key={v} onClick={()=>!il&&p(f,i)} onMouseEnter={()=>!il&&sH(i)} onMouseLeave={()=>sH(-1)}
        style={{width:"100%",padding:"14px 8px",borderRadius:12,fontSize:14,fontWeight:500,minHeight:44,textAlign:"center",
          transition:"all 0.15s",background:il&&i===c?T.cta:optBg,color:il&&i===c?T.ct:cTx,
          border:`2px solid ${h===i&&!il?"#ef4444":"transparent"}`,cursor:il?"default":"pointer",
          animation:il&&i===c?"lp 0.3s ease":"none",opacity:il&&i!==c?0.3:1}}>{v}</button>)}</div></div>;
}

// ═══ COMPLETE — with replay dropdowns ═══
const REQ_TONES=["Polite","Direct","Local dialect","Formal"];
const REQ_GOALS=["Order fast","Ask questions","Handle a mistake","Change my order"];

function End({cx,again}){
  const{T,tx,mu,cb,cd,ob,iL,lL,sIL,sLL,spd,sSpd,tone,sTone}=cx;
  const[liked,sLiked]=useState(false);
  const[showComment,sShowComment]=useState(false);const[comment,sComment]=useState("");const[sent,sSent]=useState(false);
  const[selTones,sSelTones]=useState([]);const[selGoals,sSelGoals]=useState([]);
  const toggleTag=(arr,setArr,v)=>arr.includes(v)?setArr(arr.filter(x=>x!==v)):setArr([...arr,v]);
  const hasInput=comment.trim()||selTones.length>0||selGoals.length>0;
  return(<div style={{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:16}}>
    <div style={{maxWidth:400,width:"100%",borderRadius:16,textAlign:"center",background:cb,border:`1px solid ${cd}`,padding:"28px 24px",animation:"su 0.5s ease"}}>
      <div style={{width:56,height:56,borderRadius:"50%",margin:"0 auto 14px",background:`linear-gradient(135deg,${T.p}15,${T.a}15)`,
        display:"flex",alignItems:"center",justifyContent:"center"}}>{I.check(28,T.p)}</div>
      <h1 style={{fontSize:24,fontWeight:700,marginBottom:10,color:tx}}>Keep Up the Good Work!</h1>

      {/* Available languages — crawlable SEO */}
      <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:6,marginBottom:20}}>
        {I.globe(14,mu)}
        <span style={{fontSize:13,color:mu}}>Available in: Korean, French, Spanish, English</span>
      </div>

      {/* Action Bar */}
      <div style={{display:"flex",justifyContent:"center",gap:28,padding:"14px 0",borderTop:`1px solid ${cd}`,borderBottom:`1px solid ${cd}`,marginBottom:20}}>
        <button onClick={()=>sLiked(!liked)} style={{display:"flex",flexDirection:"column",alignItems:"center",gap:4,background:"none",border:"none",cursor:"pointer"}}>
          {liked?I.heartFill(22,"#ef4444"):I.heart(22,mu)}<span style={{fontSize:12,color:liked?"#ef4444":mu}}>Save</span></button>
        <button style={{display:"flex",flexDirection:"column",alignItems:"center",gap:4,background:"none",border:"none",cursor:"pointer"}}>
          {I.share(22,mu)}<span style={{fontSize:12,color:mu}}>Share</span></button>
        <button onClick={()=>sShowComment(!showComment)} style={{display:"flex",flexDirection:"column",alignItems:"center",gap:4,background:"none",border:"none",cursor:"pointer"}}>
          {I.msgCircle(22,showComment?T.p:mu)}<span style={{fontSize:12,color:showComment?T.p:mu}}>Comment</span></button>
      </div>

      {showComment&&<div style={{animation:"su 0.3s ease",marginBottom:16}}>
        {!sent?<>
          <p style={{fontSize:14,fontWeight:600,color:tx,marginBottom:8,textAlign:"left"}}>What would you like to practice next?</p>
          <p style={{fontSize:12,fontWeight:600,color:mu,marginBottom:6,textAlign:"left",textTransform:"uppercase",letterSpacing:1}}>Tone</p>
          <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:12}}>
            {REQ_TONES.map(t=><button key={t} onClick={()=>toggleTag(selTones,sSelTones,t)}
              style={{padding:"8px 14px",borderRadius:999,fontSize:13,fontWeight:500,border:`1px solid ${cd}`,cursor:"pointer",
                background:selTones.includes(t)?T.p:"transparent",color:selTones.includes(t)?T.ct:tx,transition:"all 0.15s"}}>{t}</button>)}</div>
          <p style={{fontSize:12,fontWeight:600,color:mu,marginBottom:6,textAlign:"left",textTransform:"uppercase",letterSpacing:1}}>Goal</p>
          <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:14}}>
            {REQ_GOALS.map(g=><button key={g} onClick={()=>toggleTag(selGoals,sSelGoals,g)}
              style={{padding:"8px 14px",borderRadius:999,fontSize:13,fontWeight:500,border:`1px solid ${cd}`,cursor:"pointer",
                background:selGoals.includes(g)?T.p:"transparent",color:selGoals.includes(g)?T.ct:tx,transition:"all 0.15s"}}>{g}</button>)}</div>
          <textarea value={comment} onChange={e=>sComment(e.target.value)} placeholder="Add a note (optional)..."
            style={{width:"100%",minHeight:60,padding:12,borderRadius:12,fontSize:14,fontFamily:"inherit",
              background:ob,color:tx,border:`1px solid ${cd}`,resize:"vertical",outline:"none"}}/>
          <button onClick={()=>{if(hasInput)sSent(true)}}
            style={{marginTop:8,width:"100%",padding:"12px 0",borderRadius:999,fontSize:16,fontWeight:600,
              background:hasInput?T.cta:ob,color:hasInput?T.ct:mu,border:"none",cursor:hasInput?"pointer":"default",
              display:"flex",alignItems:"center",justifyContent:"center",gap:6,transition:"all 0.15s"}}>
            {I.send(16,hasInput?T.ct:mu)} Send</button>
        </>:<div style={{padding:"16px 0",textAlign:"center"}}>
          <p style={{fontSize:16,fontWeight:600,color:T.p,marginBottom:4}}>Thanks for your feedback!</p>
          <p style={{fontSize:14,color:mu}}>Creators will see your request.</p></div>}
      </div>}

      {/* Replay with different settings */}
      <p style={{fontSize:14,fontWeight:600,color:mu,marginBottom:10}}>Replay with different settings</p>
      <div style={{display:"flex",gap:6,marginBottom:12}}>
        {SPEEDS.map(s=><button key={s.id} onClick={()=>sSpd(s.id)}
          style={{flex:1,padding:"8px 4px",borderRadius:10,fontSize:13,fontWeight:600,
            background:spd===s.id?T.p+"22":"rgba(255,255,255,0.06)",color:spd===s.id?T.p:"#a3a3a3",
            border:`1.5px solid ${spd===s.id?T.p:"transparent"}`}}>{s.label}</button>)}</div>
      <div style={{display:"flex",gap:6,marginBottom:16}}>
        {TONES.map(t=><button key={t.id} onClick={()=>sTone(t.id)}
          style={{flex:1,padding:"8px 4px",borderRadius:10,fontSize:12,fontWeight:600,
            background:tone===t.id?T.p+"22":"rgba(255,255,255,0.06)",color:tone===t.id?T.p:"#a3a3a3",
            border:`1.5px solid ${tone===t.id?T.p:"transparent"}`}}>{t.short}</button>)}</div>

      <button onClick={again} style={{width:"100%",padding:"14px 0",borderRadius:999,fontSize:16,fontWeight:600,background:T.cta,color:T.ct,marginBottom:8}}>Replay</button>
      <button onClick={again} style={{width:"100%",padding:"14px 0",borderRadius:999,fontSize:16,fontWeight:600,background:ob,color:tx,
        display:"flex",alignItems:"center",justifyContent:"center",gap:6}}>{I.globe(16,tx)} Replay in Another Language</button>
    </div></div>);
}
