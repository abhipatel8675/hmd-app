export type Block =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; variant: "gold" | "red" | "green"; label: string; text: string }
  | { type: "pullquote"; text: string; cite?: string }
  | {
      type: "stat";
      items: { number: string; sup?: string; label: string }[];
    }
  | {
      type: "table";
      caption?: string;
      headers: string[];
      rows: string[][];
      footer?: string;
    }
  | { type: "sectionRule"; label?: string }
  | { type: "references"; items: string[] };

export type Article = {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  tags: string[];
  coverGradient: string;
  coverAccent: string;
  blocks: Block[];
};

export const articles: Article[] = [
  {
    slug: "aortic-stenosis",
    title: "Hello",
    subtitle:
      "Narrowing of the aortic valve orifice that obstructs left ventricular outflow — from calcific degeneration to TAVR, a complete clinical review.",
    excerpt:
      "The most common valvular heart disease in older adults — recognition, staging, and the modern intervention pathway from SAVR to TAVR.",
    author: "HMD Clinical Review",
    authorRole: "HMD Faculty · Cardiology",
    date: "Apr 22, 2026",
    readTime: "18 min read",
    tags: ["Cardiology", "Valvular Disease", "Clinical Review"],
    coverGradient: "linear-gradient(135deg, #0A1628 0%, #112240 55%, #1a3260 100%)",
    coverAccent: "#C9A84C",
    blocks: [
      { type: "h2", text: "Background" },
      {
        type: "p",
        text: "Aortic stenosis (AS) is the narrowing of the aortic valve orifice, obstructing blood flow from the left ventricle into the aorta during systole. This results in increased left ventricular pressure, concentric hypertrophy, and eventually left ventricular dysfunction. If untreated, AS can lead to syncope, angina, heart failure, and sudden cardiac death.",
      },
      { type: "h3", text: "Classification / Types" },
      { type: "p", text: "By Etiology:" },
      {
        type: "ul",
        items: [
          "Calcific (Degenerative) AS: Most common in the elderly due to progressive calcium deposition on a trileaflet valve.",
          "Bicuspid Aortic Valve (Congenital): Predisposes to early calcification and stenosis; often presents before age 65.",
          "Rheumatic AS: Rare in high-income countries; commissural fusion from rheumatic fever.",
          "Radiation-Induced AS: Post mediastinal radiation leading to fibrosis and calcification.",
        ],
      },
      { type: "p", text: "By Severity (Based on Echocardiographic Criteria)." },

      { type: "h3", text: "Epidemiology" },
      {
        type: "ul",
        items: [
          "Sex: More common in males (especially bicuspid valve).",
          "Age: Degenerative AS typically manifests >65 years old.",
          "Geography: Degenerative AS common in high-income countries; rheumatic causes still present in low- and middle-income regions.",
          "Comorbidities: Often coexists with hypertension, coronary artery disease, and diabetes.",
        ],
      },
      {
        type: "stat",
        items: [
          { number: "2", sup: "–7%", label: "Prevalence of severe AS in adults older than 65 years" },
          { number: "50", sup: "%", label: "Two-year mortality for untreated symptomatic severe AS" },
          { number: "80", sup: "%", label: "Of AS cases in high-income countries are calcific degenerative" },
        ],
      },
      {
        type: "callout",
        variant: "gold",
        label: "Clinical Context",
        text: "The onset of symptoms — angina, syncope, or heart failure — marks a critical inflection point. Median survival without intervention falls to 2–5 years from symptom onset, making timely referral for SAVR or TAVR evaluation essential.",
      },

      { type: "h3", text: "Pathophysiology" },
      {
        type: "p",
        text: "Progressive outflow obstruction raises left ventricular systolic pressure, driving concentric hypertrophy to preserve wall stress. Over time, the hypertrophied ventricle develops diastolic dysfunction, subendocardial ischemia, and — late in the disease — systolic failure. Fixed cardiac output explains the classical triad of exertional angina, syncope, and dyspnea.",
      },

      { type: "h2", text: "Etiology" },
      {
        type: "ul",
        items: [
          "Calcific degeneration of a normal or bicuspid valve",
          "Congenital bicuspid aortic valve",
          "Rheumatic heart disease",
          "Prior chest radiation",
          "Rare: systemic conditions (e.g., Paget disease, end-stage renal disease with hyperparathyroidism)",
        ],
      },
      { type: "h3", text: "Risk Factors" },
      {
        type: "ul",
        items: [
          "Age >65 years",
          "Congenital bicuspid aortic valve",
          "Rheumatic fever history",
          "Male sex",
          "Hyperlipidemia",
          "Smoking",
          "Hypertension",
          "Chronic kidney disease",
        ],
      },

      { type: "h2", text: "Clinical Presentation" },
      { type: "h3", text: "History (Symptoms)" },
      {
        type: "p",
        text: "Often asymptomatic until severe. The classic triad, when symptomatic:",
      },
      {
        type: "ul",
        items: [
          "Angina: Due to increased myocardial oxygen demand and decreased perfusion.",
          "Syncope: Especially on exertion from fixed cardiac output.",
          "Dyspnea / heart failure symptoms: From elevated LVEDP and pulmonary congestion.",
        ],
      },
      { type: "p", text: "Other symptoms:" },
      {
        type: "ul",
        items: [
          "Fatigue",
          "Dizziness",
          "Decreased exercise tolerance",
          "Sudden cardiac death (rare, advanced cases)",
        ],
      },
      { type: "h3", text: "Physical Exam (Signs)" },
      { type: "p", text: "Vital Signs:" },
      {
        type: "ul",
        items: [
          "Narrow pulse pressure",
          "Delayed and diminished carotid upstroke (pulsus parvus et tardus)",
        ],
      },
      { type: "p", text: "Cardiac Exam:" },
      {
        type: "ul",
        items: [
          "Harsh crescendo-decrescendo systolic murmur at the right upper sternal border, radiating to the carotids",
          "S4 gallop (due to a stiff LV)",
          "Soft or absent A2 (delayed aortic valve closure)",
          "Paradoxical splitting of S2",
        ],
      },
      { type: "p", text: "Pulmonary: rales in advanced heart failure." },
      {
        type: "p",
        text: "Peripheral: cool extremities and low-output signs; peripheral edema late in the course.",
      },

      { type: "h2", text: "Differential Diagnosis" },
      {
        type: "ul",
        items: [
          "Hypertrophic obstructive cardiomyopathy (HOCM)",
          "Subaortic stenosis",
          "Mitral regurgitation",
          "Aortic sclerosis (no obstruction)",
          "Pulmonary embolism (if presenting with syncope)",
          "Anemia (if exertional symptoms are out of proportion)",
        ],
      },

      { type: "h2", text: "Diagnostic Testing" },
      { type: "h3", text: "Initial Tests" },
      {
        type: "ul",
        items: [
          "Transthoracic Echocardiogram (TTE): determines severity (valve area, gradients, velocity); assesses LV function, wall thickness, and aortic root.",
          "Electrocardiogram (ECG): LV hypertrophy, left atrial enlargement, possible conduction abnormalities (e.g., LBBB).",
          "Chest X-ray: post-stenotic dilation of the ascending aorta; pulmonary congestion in decompensated heart failure.",
          "BNP / NT-proBNP: elevated in symptomatic or decompensated patients.",
          "Cardiac CT (calcium scoring): when echo is inconclusive, particularly for valve morphology.",
          "Cardiac catheterization: confirms severity if noninvasive data is conflicting; assesses coronary anatomy preoperatively.",
        ],
      },
      {
        type: "table",
        caption: "Table 1 — Echocardiographic Staging of Aortic Stenosis (ACC/AHA)",
        headers: ["Severity", "Peak Velocity (m/s)", "Mean Gradient (mmHg)", "Valve Area (cm²)"],
        rows: [
          ["Mild", "2.6 – 2.9", "< 20", "> 1.5"],
          ["Moderate", "3.0 – 3.9", "20 – 39", "1.0 – 1.5"],
          ["Severe", "≥ 4.0", "≥ 40", "< 1.0"],
          ["Very Severe", "≥ 5.0", "≥ 60", "< 0.6"],
        ],
        footer: "Staging should integrate symptoms, LV function, and valve morphology — not peak velocity alone.",
      },
      {
        type: "pullquote",
        text: "Symptomatic severe aortic stenosis is a surgical disease. Medical therapy is supportive at best — the only intervention that alters the natural history is mechanical relief of obstruction.",
        cite: "— 2020 ACC/AHA Valvular Heart Disease Guideline",
      },

      { type: "h2", text: "Treatment" },
      { type: "h3", text: "Medical Management" },
      {
        type: "p",
        text: "There is no medical therapy proven to halt disease progression; management focuses on symptom control and timely intervention.",
      },
      {
        type: "ul",
        items: [
          "Diuretics for pulmonary congestion (use cautiously to avoid hypotension).",
          "Beta-blockers or ACE inhibitors for comorbid conditions (e.g., hypertension, CAD) — use cautiously in severe AS.",
          "Statins for concomitant atherosclerotic disease (not shown to slow AS progression).",
        ],
      },
      { type: "h3", text: "Interventional / Surgical" },
      {
        type: "ol",
        items: [
          "<strong>Surgical Aortic Valve Replacement (SAVR)</strong> — symptomatic severe AS, asymptomatic with EF <50%, or at the time of other cardiac surgery.",
          "<strong>Transcatheter Aortic Valve Replacement (TAVR)</strong> — severe symptomatic AS in high-risk or inoperable candidates; increasingly used in intermediate- and low-risk patients.",
          "<strong>Balloon Aortic Valvuloplasty</strong> — temporary measure in select non-surgical patients (e.g., bridge to TAVR).",
        ],
      },
      {
        type: "callout",
        variant: "green",
        label: "Practice Point",
        text: "In patients aged 65–80 with severe symptomatic AS and suitable femoral access, TAVR has achieved non-inferiority (and in several cohorts, superiority) to SAVR for all-cause mortality at 5 years — making heart-team review the standard.",
      },
      {
        type: "callout",
        variant: "red",
        label: "Safety Warning",
        text: "Avoid aggressive preload or afterload reduction in severe AS — nitrates, vasodilators, and high-dose diuretics can precipitate syncope or cardiogenic shock. Cardiac output is fixed across the stenotic valve.",
      },

      { type: "h2", text: "Consults" },
      {
        type: "ul",
        items: [
          "Cardiology: all moderate to severe AS, or symptomatic patients.",
          "Cardiothoracic Surgery: for SAVR evaluation.",
          "Interventional Cardiology: for TAVR eligibility.",
          "Anesthesiology: pre-op evaluation if surgery planned.",
          "Primary Care: comorbidity optimization.",
        ],
      },

      { type: "h2", text: "Patient Education, Screening, Vaccines" },
      {
        type: "ul",
        items: [
          "Educate on symptoms that warrant urgent evaluation: syncope, worsening dyspnea, chest pain.",
          "Emphasize regular follow-up and imaging.",
          "Avoid strenuous activity in symptomatic patients.",
          "Limit salt intake if volume overload is present.",
          "Maintain good dental hygiene to reduce endocarditis risk.",
        ],
      },
      { type: "p", text: "Vaccinations:" },
      {
        type: "ul",
        items: [
          "Annual influenza vaccine",
          "Pneumococcal vaccination",
          "COVID-19 vaccination",
        ],
      },

      { type: "h2", text: "Follow-Up" },
      { type: "p", text: "Echocardiography cadence:" },
      {
        type: "ul",
        items: [
          "Mild AS: every 3–5 years",
          "Moderate AS: every 1–2 years",
          "Severe AS: every 6–12 months (or sooner if symptomatic)",
        ],
      },
      {
        type: "ul",
        items: [
          "Monitor for symptom development (dyspnea, angina, syncope).",
          "Assess LV function and new conduction abnormalities.",
          "Reevaluate for valve intervention as disease progresses.",
          "Optimize cardiovascular risk factors (BP, lipids, diabetes).",
        ],
      },
      { type: "sectionRule", label: "References" },
      {
        type: "references",
        items: [
          "Otto CM, et al. 2020 ACC/AHA Guideline for the Management of Patients With Valvular Heart Disease. <em>Circulation.</em> 2021;143:e72–e227.",
          "Leon MB, et al. Transcatheter or Surgical Aortic-Valve Replacement in Intermediate-Risk Patients (PARTNER 2). <em>NEJM.</em> 2016;374:1609–1620.",
          "Mack MJ, et al. Transcatheter Aortic-Valve Replacement in Low-Risk Patients (PARTNER 3). <em>NEJM.</em> 2019;380:1695–1705.",
          "Popma JJ, et al. Transcatheter Aortic-Valve Replacement with a Self-Expanding Valve in Low-Risk Patients (Evolut Low Risk). <em>NEJM.</em> 2019;380:1706–1715.",
        ],
      },
    ],
  },

  {
    slug: "mitral-regurgitation",
    title: "Mitral Regurgitation: An Evidence-Based Approach",
    subtitle:
      "Retrograde flow from the left ventricle into the left atrium during systole — from myxomatous degeneration to MitraClip, the complete workup.",
    excerpt:
      "Primary versus secondary MR, acute versus chronic — how the etiology dictates the therapy, and when to refer for repair.",
    author: "HMD Clinical Review",
    authorRole: "HMD Faculty · Cardiology",
    date: "Apr 22, 2026",
    readTime: "16 min read",
    tags: ["Cardiology", "Valvular Disease", "Clinical Review"],
    coverGradient: "linear-gradient(135deg, #060f1e 0%, #0A1628 60%, #1A3D3D 100%)",
    coverAccent: "#E2C070",
    blocks: [
      { type: "h2", text: "Background" },
      {
        type: "p",
        text: "Mitral regurgitation (MR) is the retrograde flow of blood from the left ventricle into the left atrium during systole due to incompetent closure of the mitral valve. This volume overload increases left atrial and pulmonary pressures, eventually leading to left ventricular dilation, atrial fibrillation, pulmonary hypertension, and heart failure if untreated.",
      },
      { type: "h3", text: "Classification / Types" },
      { type: "p", text: "By Etiology:" },
      {
        type: "ul",
        items: [
          "Primary (Degenerative) MR: intrinsic valve disease (e.g., myxomatous degeneration, mitral valve prolapse, rheumatic disease, endocarditis).",
          "Secondary (Functional) MR: result of LV dilation or papillary muscle dysfunction, seen in ischemic or dilated cardiomyopathy.",
        ],
      },
      { type: "p", text: "By Onset:" },
      {
        type: "ul",
        items: [
          "Acute MR: sudden onset, often due to papillary muscle rupture (MI), endocarditis, or trauma.",
          "Chronic MR: progressive valve degeneration or functional remodeling over time.",
        ],
      },
      { type: "p", text: "By Severity (based on echocardiographic criteria):" },
      {
        type: "ul",
        items: [
          "Mild",
          "Moderate",
          "Severe (quantified using regurgitant volume, effective regurgitant orifice area, and vena contracta width)",
        ],
      },

      { type: "h3", text: "Epidemiology" },
      {
        type: "ul",
        items: [
          "Sex: myxomatous degeneration more common in women; ischemic MR more common in men.",
          "Age: prevalence increases with age due to degenerative changes.",
          "Geography: degenerative MR more common in high-income countries; rheumatic MR in low- and middle-income countries.",
          "Comorbidities: often associated with hypertension, coronary artery disease, or heart failure.",
        ],
      },

      { type: "h3", text: "Pathophysiology" },
      {
        type: "p",
        text: "Incompetent leaflet coaptation allows LV blood to regurgitate into the low-pressure left atrium during systole. In chronic MR, the LV dilates eccentrically to accommodate the volume load, masking systolic dysfunction until late. Acute MR produces a non-compliant LA, rapid pressure transmission, pulmonary edema, and often cardiogenic shock.",
      },

      { type: "h2", text: "Etiology" },
      { type: "h3", text: "Causes" },
      {
        type: "ul",
        items: [
          "Myxomatous valve degeneration (e.g., mitral valve prolapse)",
          "Rheumatic heart disease",
          "Infective endocarditis",
          "Ischemic heart disease (papillary muscle rupture / dysfunction)",
          "Cardiomyopathy (dilated or hypertrophic)",
          "Congenital anomalies (e.g., cleft mitral valve)",
          "Mitral annular calcification",
          "Chest trauma or radiation",
        ],
      },
      { type: "h3", text: "Risk Factors" },
      {
        type: "ul",
        items: [
          "Age >60 years",
          "Coronary artery disease or prior MI",
          "Rheumatic fever history",
          "Connective tissue disorders (e.g., Marfan, Ehlers-Danlos)",
          "Atrial fibrillation",
          "Endocarditis",
        ],
      },

      { type: "h2", text: "Clinical Presentation" },
      { type: "h3", text: "History (Symptoms)" },
      {
        type: "ul",
        items: [
          "Fatigue and reduced exercise tolerance",
          "Dyspnea on exertion, orthopnea, PND",
          "Palpitations (especially with atrial fibrillation)",
          "Signs of heart failure in advanced disease",
          "Acute MR: sudden onset dyspnea, pulmonary edema, hypotension",
        ],
      },
      { type: "h3", text: "Physical Exam (Signs)" },
      { type: "p", text: "Vital Signs:" },
      {
        type: "ul",
        items: ["Tachycardia", "Hypotension (in acute MR)"],
      },
      { type: "p", text: "Cardiac Exam:" },
      {
        type: "ul",
        items: [
          "Holosystolic murmur best heard at the apex, radiating to the axilla",
          "S3 gallop (suggests volume overload)",
          "Displaced hyperdynamic apical impulse (chronic severe MR)",
        ],
      },
      { type: "p", text: "Pulmonary:" },
      {
        type: "ul",
        items: [
          "Rales or crackles with pulmonary edema",
          "Possible signs of pulmonary hypertension in chronic MR",
        ],
      },
      { type: "p", text: "Peripheral:" },
      {
        type: "ul",
        items: [
          "Peripheral edema (in right-sided heart failure)",
          "Elevated JVP (advanced disease)",
        ],
      },

      { type: "h2", text: "Differential Diagnosis" },
      {
        type: "ul",
        items: [
          "Mitral stenosis",
          "Aortic regurgitation",
          "Tricuspid regurgitation",
          "Heart failure with preserved / reduced EF",
          "Cardiomyopathy (dilated, hypertrophic)",
          "Atrial septal defect",
          "Constrictive pericarditis",
        ],
      },

      { type: "h2", text: "Diagnostic Testing" },
      { type: "h3", text: "Initial Tests" },
      {
        type: "ul",
        items: [
          "Transthoracic Echocardiogram (TTE): confirms MR severity; assesses valve morphology, regurgitant volume, LV function; measures LA and LV size.",
          "Transesophageal Echocardiogram (TEE): superior for valve visualization, especially in endocarditis or surgical planning.",
          "Electrocardiogram (ECG): atrial fibrillation, LA enlargement, or LV hypertrophy.",
          "Chest X-ray: left atrial and ventricular enlargement; pulmonary vascular congestion.",
          "BNP / NT-proBNP: elevated in decompensated MR with heart failure.",
          "Cardiac MRI: precise quantification of regurgitant volume and chamber size.",
          "Cardiac catheterization: coronary anatomy pre-surgery; assess hemodynamics in unclear cases.",
        ],
      },

      { type: "h2", text: "Treatment" },
      { type: "h3", text: "Medical Management" },
      { type: "p", text: "Heart failure management:" },
      {
        type: "ul",
        items: [
          "Diuretics for volume overload",
          "Afterload reducers (ACE inhibitors, ARBs) in functional MR",
          "Beta-blockers in chronic MR with LV dysfunction",
        ],
      },
      { type: "p", text: "Rate control and anticoagulation:" },
      {
        type: "ul",
        items: [
          "Beta-blockers, calcium channel blockers, or digoxin for atrial fibrillation",
          "Anticoagulation (warfarin) in atrial fibrillation, prior embolism, or left atrial thrombus",
        ],
      },
      { type: "p", text: "Endocarditis prophylaxis: not routine unless prior endocarditis or prosthetic valve." },
      { type: "h3", text: "Interventional / Surgical" },
      {
        type: "ul",
        items: [
          "Surgical Mitral Valve Repair or Replacement: severe symptomatic MR; asymptomatic severe MR with LV EF ≤60% or LV end-systolic dimension >40 mm. Valve repair is preferred over replacement when feasible.",
          "Transcatheter Mitral Valve Repair (e.g., MitraClip): select high-risk surgical patients with severe symptomatic MR; more commonly used in functional MR.",
        ],
      },

      { type: "h2", text: "Consults" },
      {
        type: "ul",
        items: [
          "Cardiology: all moderate to severe MR or symptomatic patients.",
          "Cardiothoracic Surgery: evaluation for mitral valve surgery.",
          "Interventional Cardiology: for transcatheter interventions.",
          "Electrophysiology: recurrent or symptomatic atrial fibrillation.",
          "Infectious Disease: if endocarditis is suspected.",
          "Primary Care / Internal Medicine: chronic disease optimization.",
        ],
      },

      { type: "h2", text: "Patient Education, Screening, Vaccines" },
      {
        type: "ul",
        items: [
          "Importance of adherence to medications and follow-up",
          "Monitor for worsening heart failure (e.g., dyspnea, edema)",
          "Weight tracking to detect fluid retention",
          "Limit sodium intake if volume overload is present",
          "Avoid excessive physical exertion in symptomatic patients",
        ],
      },
      { type: "p", text: "Vaccinations: influenza annually, pneumococcal, COVID-19." },

      { type: "h2", text: "Follow-Up" },
      {
        type: "ul",
        items: [
          "Regular TTE: annually for asymptomatic severe MR; every 6–12 months if LV size/function changes.",
          "Monitor for development of atrial fibrillation.",
          "Assess progression of symptoms and candidacy for intervention.",
          "Optimize management of comorbid conditions (hypertension, CAD).",
          "Reinforce education on warning signs and when to seek care.",
        ],
      },
    ],
  },

  {
    slug: "mitral-stenosis",
    title: "Mitral Stenosis: An Evidence-Based Approach",
    subtitle:
      "Narrowing of the mitral valve orifice impeding diastolic flow — still primarily rheumatic worldwide. From auscultation to balloon valvotomy.",
    excerpt:
      "A valvular disease of the developing world and an aging-population problem in high-income settings — how to recognize and treat it.",
    author: "HMD Clinical Review",
    authorRole: "HMD Faculty · Cardiology",
    date: "Apr 22, 2026",
    readTime: "15 min read",
    tags: ["Cardiology", "Valvular Disease", "Clinical Review"],
    coverGradient: "linear-gradient(135deg, #0A1628 0%, #1a3260 70%, #112240 100%)",
    coverAccent: "#C9A84C",
    blocks: [
      { type: "h2", text: "Background" },
      {
        type: "p",
        text: "Mitral stenosis (MS) is a narrowing of the mitral valve orifice that impedes blood flow from the left atrium to the left ventricle during diastole. This obstruction results in increased left atrial pressure, pulmonary venous congestion, and ultimately right heart strain. Over time, it can lead to atrial fibrillation, thromboembolic events, pulmonary hypertension, and right-sided heart failure.",
      },
      { type: "h3", text: "Classification / Types" },
      { type: "p", text: "By Etiology:" },
      {
        type: "ul",
        items: [
          "Rheumatic Mitral Stenosis: most common; characterized by leaflet thickening, commissural fusion, and chordal shortening.",
          "Congenital Mitral Stenosis: rare; includes parachute mitral valve or supravalvular mitral ring.",
          "Degenerative / Calcific MS: seen in the elderly; primarily involves annular calcification.",
          "Radiation-induced MS: occurs years after chest radiation.",
        ],
      },
      { type: "p", text: "By Severity (based on mitral valve area on echo):" },
      {
        type: "ul",
        items: [
          "Mild: >1.5 cm²",
          "Moderate: 1.0–1.5 cm²",
          "Severe: <1.0 cm²",
        ],
      },

      { type: "h3", text: "Epidemiology" },
      {
        type: "ul",
        items: [
          "Sex: more common in females (2:1 ratio).",
          "Age: rheumatic MS typically manifests decades after initial infection (30–50 years old).",
          "Region: high prevalence in developing countries due to untreated streptococcal infections.",
          "Socioeconomic status: higher in lower-income populations with limited healthcare access and rheumatic fever prevention.",
        ],
      },

      { type: "h3", text: "Pathophysiology" },
      {
        type: "p",
        text: "Restricted mitral leaflet opening raises left atrial pressure to maintain diastolic filling. The elevated LA pressure propagates backward into the pulmonary venous circulation, producing dyspnea, orthopnea, and — in advanced disease — pulmonary hypertension, right ventricular strain, and right-sided heart failure. LA dilation predisposes to atrial fibrillation and thromboembolism.",
      },

      { type: "h2", text: "Etiology" },
      { type: "h3", text: "Causes" },
      {
        type: "ul",
        items: [
          "Rheumatic heart disease (most common globally)",
          "Congenital valve malformations",
          "Mitral annular calcification (elderly)",
          "Infective endocarditis with fibrosis",
          "Chest radiation therapy (late complication)",
          "Rarely: systemic diseases (e.g., lupus, carcinoid syndrome)",
        ],
      },
      { type: "h3", text: "Risk Factors" },
      {
        type: "ul",
        items: [
          "History of rheumatic fever",
          "Recurrent streptococcal pharyngitis",
          "Untreated bacterial infections in childhood",
          "Female sex",
          "Living in endemic regions",
          "History of chest irradiation",
        ],
      },

      { type: "h2", text: "Clinical Presentation" },
      { type: "h3", text: "History (Symptoms)" },
      {
        type: "ul",
        items: [
          "Progressive exertional dyspnea",
          "Orthopnea and paroxysmal nocturnal dyspnea (PND)",
          "Hemoptysis (pulmonary venous hypertension or rupture)",
          "Fatigue and decreased exercise tolerance",
          "Palpitations (often from atrial fibrillation)",
          "Thromboembolic events (e.g., stroke)",
          "In pregnancy: marked worsening due to increased blood volume",
        ],
      },
      { type: "h3", text: "Physical Exam (Signs)" },
      { type: "p", text: "Vital Signs:" },
      {
        type: "ul",
        items: [
          "Irregularly irregular pulse (atrial fibrillation)",
          "Possible signs of low cardiac output in advanced stages",
        ],
      },
      { type: "p", text: "Cardiac Exam:" },
      {
        type: "ul",
        items: [
          "Opening snap after S2, best heard at the apex",
          "Low-pitched diastolic rumbling murmur best at apex with bell, left lateral decubitus position",
          "Loud S1 (if valve is still pliable)",
          "Signs of pulmonary hypertension (loud P2, right ventricular heave)",
        ],
      },
      { type: "p", text: "Pulmonary:" },
      {
        type: "ul",
        items: [
          "Crackles (pulmonary edema)",
          "Wheezing (\"cardiac asthma\")",
        ],
      },
      { type: "p", text: "Peripheral:" },
      {
        type: "ul",
        items: [
          "Peripheral edema (late finding)",
          "Elevated jugular venous pressure (with right heart failure)",
          "Ascites (advanced cases)",
        ],
      },

      { type: "h2", text: "Differential Diagnosis" },
      {
        type: "ul",
        items: [
          "Pulmonary hypertension (primary or secondary)",
          "Mitral regurgitation",
          "Atrial myxoma",
          "Constrictive pericarditis",
          "Heart failure with preserved ejection fraction (HFpEF)",
          "Tricuspid stenosis",
          "COPD / asthma",
          "Pulmonary embolism",
        ],
      },

      { type: "h2", text: "Diagnostic Testing" },
      { type: "h3", text: "Initial Tests" },
      {
        type: "ul",
        items: [
          "Echocardiography (TTE): valve area estimation; mean gradient >5 mmHg suggests significant MS; LA enlargement and pulmonary pressures; presence of thrombus (TEE).",
          "Electrocardiogram (ECG): atrial fibrillation, left atrial enlargement (P mitrale).",
          "Chest X-ray: left atrial enlargement (straightened left heart border), pulmonary venous congestion, Kerley B lines.",
          "BNP / NT-proBNP: may be elevated with heart failure symptoms.",
          "Cardiac MRI / CT: when echo is inconclusive or for surgical planning.",
          "Cardiac catheterization: measures pulmonary artery pressure, confirms severity; required pre-op to assess coronary anatomy if surgery is planned.",
        ],
      },

      { type: "h2", text: "Treatment" },
      { type: "h3", text: "Medical Management" },
      { type: "p", text: "Symptom relief:" },
      {
        type: "ul",
        items: [
          "Diuretics for pulmonary congestion",
          "Beta-blockers or nondihydropyridine calcium channel blockers for heart rate control",
          "Digoxin in atrial fibrillation",
        ],
      },
      { type: "p", text: "Anticoagulation:" },
      {
        type: "ul",
        items: [
          "All patients with MS and atrial fibrillation (warfarin preferred)",
          "Consider in large left atrium (>55 mm) or left atrial thrombus",
        ],
      },
      {
        type: "p",
        text: "Infective endocarditis prophylaxis: not routinely recommended unless prior endocarditis or prosthetic valves.",
      },
      { type: "h3", text: "Interventional / Surgical" },
      {
        type: "ul",
        items: [
          "Percutaneous Mitral Balloon Valvotomy (PMBV): first-line for symptomatic severe rheumatic MS with favorable valve morphology (Wilkins score ≤8); contraindicated with left atrial thrombus or moderate/severe MR.",
          "Mitral Valve Replacement (MVR): non-pliable valves, coexisting MR, or when PMBV is contraindicated.",
          "Surgical Repair (rare): feasible in select congenital cases.",
        ],
      },

      { type: "h2", text: "Consults" },
      {
        type: "ul",
        items: [
          "Cardiology: all moderate to severe cases",
          "Interventional Cardiology: for PMBV consideration",
          "Cardiothoracic Surgery: for MVR",
          "Infectious Disease: if endocarditis is suspected",
          "Obstetrics (high-risk): pregnant patients with MS",
          "Neurology: if stroke or TIA from embolism",
        ],
      },

      { type: "h2", text: "Patient Education, Screening, Vaccines" },
      {
        type: "ul",
        items: [
          "Emphasize medication adherence",
          "Teach signs of worsening heart failure or atrial fibrillation",
          "Daily weight monitoring for fluid retention",
          "Avoid exertion in severe cases until evaluated",
          "Dental hygiene to prevent endocarditis",
          "Vaccines: annual influenza, pneumococcal, and COVID-19",
        ],
      },

      { type: "h2", text: "Follow-Up" },
      {
        type: "ul",
        items: [
          "Regular echocardiograms (every 1–2 years if moderate/severe)",
          "Monitor for development of atrial fibrillation and thromboembolic complications",
          "Optimize rate control and anticoagulation",
          "Reassess candidacy for intervention if symptoms progress",
          "Monitor functional status and quality of life",
        ],
      },
    ],
  },

  {
    slug: "tricuspid-regurgitation",
    title: "Tricuspid Regurgitation: An Evidence-Based Approach",
    subtitle:
      "Retrograde flow from right ventricle to right atrium during systole — once ignored, increasingly recognized as an independent driver of mortality.",
    excerpt:
      "Functional versus primary TR, the emerging transcatheter options, and why chronic right-sided congestion is no longer a diagnosis of exclusion.",
    author: "HMD Clinical Review",
    authorRole: "HMD Faculty · Cardiology",
    date: "Apr 22, 2026",
    readTime: "17 min read",
    tags: ["Cardiology", "Valvular Disease", "Clinical Review"],
    coverGradient: "linear-gradient(135deg, #060f1e 0%, #112240 50%, #0A1628 100%)",
    coverAccent: "#E2C070",
    blocks: [
      { type: "h2", text: "Background" },
      {
        type: "p",
        text: "Tricuspid regurgitation (TR), also known as tricuspid insufficiency, is the backward flow of blood from the right ventricle into the right atrium during systole due to incomplete closure of the tricuspid valve. This leads to right atrial and right ventricular volume overload, progressive chamber dilation, systemic venous congestion, and eventually right-sided heart failure. TR can be functional (secondary to annular dilation or RV pressure overload) or organic (due to structural damage of the valve).",
      },
      { type: "h3", text: "Classification / Types" },
      { type: "p", text: "By Etiology:" },
      { type: "p", text: "Primary (Organic) TR:" },
      {
        type: "ul",
        items: [
          "Rheumatic heart disease",
          "Carcinoid syndrome",
          "Infective endocarditis",
          "Congenital abnormalities (e.g., Ebstein anomaly)",
          "Trauma (e.g., pacemaker or ICD lead)",
        ],
      },
      { type: "p", text: "Secondary (Functional) TR:" },
      {
        type: "ul",
        items: [
          "Left-sided heart disease (e.g., mitral stenosis or regurgitation)",
          "Pulmonary hypertension",
          "Right ventricular dilation or dysfunction",
          "Atrial fibrillation (atrial TR due to annular dilation)",
        ],
      },
      { type: "p", text: "By Chronicity:" },
      {
        type: "ul",
        items: [
          "Chronic TR: gradual development with compensatory right heart dilation; symptoms develop late.",
          "Acute TR: sudden volume overload; rare, often endocarditis or trauma.",
        ],
      },

      { type: "h3", text: "Epidemiology" },
      {
        type: "ul",
        items: [
          "Sex: more common in women",
          "Age: typically middle-aged and elderly adults",
          "Geography: functional TR is prevalent globally; rheumatic TR more common in low-income countries",
          "Comorbidities: often associated with pulmonary hypertension, atrial fibrillation, and left-sided heart disease",
        ],
      },

      { type: "h3", text: "Pathophysiology" },
      {
        type: "p",
        text: "Incompetent tricuspid coaptation allows regurgitation from RV to RA during systole. In chronic TR the right heart dilates eccentrically — initially compensating for the volume load, but eventually producing systemic venous congestion manifest as hepatic congestion, ascites, and peripheral edema. Acute TR presents with rapid RA pressure rise and, if severe, low-output shock.",
      },

      { type: "h2", text: "Etiology" },
      { type: "h3", text: "Causes" },
      { type: "p", text: "Primary Causes:" },
      {
        type: "ul",
        items: [
          "Rheumatic fever",
          "Endocarditis (especially with IV drug use or devices)",
          "Congenital anomalies (e.g., Ebstein anomaly)",
          "Carcinoid heart disease",
          "Myxomatous degeneration",
        ],
      },
      { type: "p", text: "Secondary Causes:" },
      {
        type: "ul",
        items: [
          "Left-sided heart failure (e.g., mitral valve disease)",
          "Pulmonary hypertension",
          "Right ventricular infarction",
          "Chronic atrial fibrillation",
          "Right ventricular pacing leads",
        ],
      },
      { type: "h3", text: "Risk Factors" },
      {
        type: "ul",
        items: [
          "Chronic left-sided heart disease",
          "Pulmonary hypertension",
          "Atrial fibrillation",
          "Intracardiac devices (e.g., pacemaker, ICD)",
          "IV drug use",
          "Rheumatic heart disease",
          "Connective tissue disorders",
        ],
      },

      { type: "h2", text: "Clinical Presentation" },
      { type: "h3", text: "History (Symptoms)" },
      { type: "p", text: "Chronic TR:" },
      {
        type: "ul",
        items: [
          "Fatigue",
          "Lower extremity edema",
          "Abdominal fullness and bloating",
          "Right upper quadrant discomfort (hepatic congestion)",
          "Anorexia and weight loss",
          "Ascites",
        ],
      },
      { type: "p", text: "Acute TR:" },
      {
        type: "ul",
        items: [
          "Sudden onset of right heart failure",
          "Hypotension (if severe)",
          "Dyspnea (with associated left-sided lesions or pulmonary edema)",
        ],
      },
      { type: "h3", text: "Physical Exam (Signs)" },
      { type: "p", text: "Vital Signs:" },
      {
        type: "ul",
        items: [
          "Normal or low blood pressure",
          "Elevated jugular venous pressure (JVP)",
        ],
      },
      { type: "p", text: "Cardiac Exam:" },
      {
        type: "ul",
        items: [
          "Holosystolic murmur best heard at the left lower sternal border, increasing with inspiration (Carvallo's sign)",
          "Right ventricular heave",
          "S3 gallop at left lower sternal border",
        ],
      },
      { type: "p", text: "Peripheral Signs:" },
      {
        type: "ul",
        items: [
          "Prominent v-wave in JVP",
          "Pulsatile hepatomegaly",
          "Ascites",
          "Peripheral edema",
          "Cyanosis (severe chronic TR with right-to-left shunt)",
        ],
      },
      { type: "p", text: "Pulmonary: usually clear unless left-sided failure or pulmonary edema coexists." },

      { type: "h2", text: "Differential Diagnosis" },
      {
        type: "ul",
        items: [
          "Pulmonary hypertension",
          "Constrictive pericarditis",
          "Pericardial tamponade",
          "Right ventricular failure (non-valvular)",
          "Atrial septal defect",
          "Mitral stenosis or regurgitation",
          "Hepatic cirrhosis (similar signs)",
        ],
      },

      { type: "h2", text: "Diagnostic Testing" },
      { type: "h3", text: "Initial Tests" },
      { type: "p", text: "Transthoracic Echocardiogram (TTE):" },
      {
        type: "ul",
        items: [
          "Determines TR severity (jet area, vena contracta, hepatic vein flow reversal)",
          "Assesses right atrial and ventricular size and function",
          "Evaluates valve morphology",
        ],
      },
      { type: "p", text: "Transesophageal Echocardiogram (TEE):" },
      {
        type: "ul",
        items: [
          "Better visualization of valve leaflets",
          "Used in endocarditis, device-related TR",
        ],
      },
      { type: "p", text: "Electrocardiogram (ECG):" },
      {
        type: "ul",
        items: [
          "Right atrial enlargement",
          "Right ventricular hypertrophy",
          "Atrial fibrillation",
        ],
      },
      { type: "p", text: "Chest X-ray:" },
      {
        type: "ul",
        items: [
          "Cardiomegaly (right heart enlargement)",
          "Pleural effusion (occasionally)",
          "Clear lungs unless left-sided involvement",
        ],
      },
      { type: "p", text: "BNP / NT-proBNP:" },
      {
        type: "ul",
        items: [
          "May be mildly elevated in isolated TR",
          "More elevated if biventricular failure",
        ],
      },
      { type: "p", text: "Cardiac MRI: accurate quantification of RV size/function and regurgitant volume." },
      { type: "p", text: "Right Heart Catheterization:" },
      {
        type: "ul",
        items: [
          "Confirms pulmonary hypertension",
          "Measures right-sided pressures and cardiac output",
        ],
      },

      { type: "h2", text: "Treatment" },
      { type: "h3", text: "Medical Management" },
      { type: "p", text: "Functional TR:" },
      {
        type: "ul",
        items: [
          "Treat the underlying cause (left-sided heart failure, pulmonary hypertension)",
          "Diuretics: mainstay for symptom relief (edema, ascites)",
          "Aldosterone antagonists for volume overload",
          "Avoid excessive preload or afterload reduction (may worsen symptoms)",
        ],
      },
      { type: "p", text: "Primary TR (mild to moderate):" },
      {
        type: "ul",
        items: [
          "Monitor with serial imaging",
          "Manage risk factors (endocarditis prophylaxis where indicated)",
        ],
      },
      { type: "p", text: "Acute TR:" },
      {
        type: "ul",
        items: [
          "Diuresis, vasopressors, treat underlying cause",
          "Consider urgent surgical evaluation in endocarditis or trauma",
        ],
      },
      { type: "h3", text: "Interventional / Surgical" },
      { type: "p", text: "Indications for Tricuspid Valve Repair or Replacement:" },
      {
        type: "ul",
        items: [
          "Severe symptomatic TR not responsive to medical therapy",
          "Severe TR with other left-sided surgery planned",
          "Progressive right ventricular dysfunction",
          "Annular dilation >40 mm even without severe TR",
        ],
      },
      { type: "p", text: "Surgical Options:" },
      {
        type: "ul",
        items: [
          "Annuloplasty (preferred in functional TR)",
          "Valve replacement (bioprosthetic preferred — lower thrombosis risk)",
        ],
      },
      { type: "p", text: "Transcatheter Options:" },
      {
        type: "ul",
        items: [
          "Emerging therapies for high-risk surgical candidates (edge-to-edge repair, valve-in-valve procedures)",
        ],
      },

      { type: "h2", text: "Consults" },
      {
        type: "ul",
        items: [
          "Cardiology: diagnostic evaluation, TR severity grading, and optimization",
          "Cardiothoracic Surgery: if surgical correction is needed",
          "Infectious Disease: for infective endocarditis management",
          "Gastroenterology / Hepatology: if hepatic congestion or ascites dominates",
          "Primary Care: management of comorbidities and routine follow-up",
        ],
      },

      { type: "h2", text: "Patient Education, Screening, Vaccines" },
      {
        type: "ul",
        items: [
          "Educate on early signs of right heart failure (leg swelling, fatigue, ascites)",
          "Emphasize adherence to diuretics and follow-up",
          "Encourage sodium restriction in severe cases",
          "Promote good dental hygiene to prevent endocarditis",
          "Vaccinations: influenza, pneumococcal, COVID-19",
        ],
      },

      { type: "h2", text: "Follow-Up" },
      { type: "p", text: "Echocardiography cadence:" },
      {
        type: "ul",
        items: [
          "Mild TR: every 3–5 years",
          "Moderate TR: every 1–2 years",
          "Severe TR (asymptomatic): every 6–12 months",
        ],
      },
      { type: "p", text: "Monitoring goals:" },
      {
        type: "ul",
        items: [
          "Right ventricular function and size",
          "Progression of TR severity",
          "Symptoms and response to diuretic therapy",
          "Evaluate candidacy for surgical / interventional therapy",
        ],
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
