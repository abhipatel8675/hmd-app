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
    slug: "multiple-comorbidities-t2dm",
    title: "Multiple Comorbidities in an Obese Female: Poorly Controlled T2DM with Hypertension, OSA, and Epilepsy",
    subtitle:
      "A 50-year-old obese female with poorly controlled type 2 diabetes, hypertension, intermediate-risk OSA, and post-traumatic epilepsy — an evidence-based case report.",
    excerpt:
      "Recognizing the bidirectional metabolic and cardiovascular interplay between obesity, T2DM, and hypertension with guideline-directed management.",
    author: "HMD Clinical Review",
    authorRole: "HMD Faculty · Endocrinology",
    date: "Apr 25, 2026",
    readTime: "22 min read",
    tags: ["Endocrinology", "Diabetes", "Clinical Review"],
    coverGradient: "linear-gradient(135deg, #0A1628 0%, #112240 55%, #1a3260 100%)",
    coverAccent: "#C9A84C",
    blocks: [
      { type: "h2", text: "Learning Objectives" },
      {
        type: "ul",
        items: [
          "Recognize the bidirectional metabolic and cardiovascular interplay between obesity, T2DM, and hypertension",
          "Apply the STOP-BANG questionnaire to risk-stratify patients for obstructive sleep apnea",
          "Evaluate pharmacologic interactions and adverse metabolic effects in multimorbidity",
          "Construct an evidence-based, prioritized problem list with current guideline-directed management",
          "Apply USPSTF and CDC/ACIP screening and vaccination recommendations to a complex chronic disease patient",
        ],
      },

      { type: "h2", text: "Patient Information" },
      {
        type: "table",
        headers: ["Parameter", "Details"],
        rows: [
          ["Age / Sex", "50-year-old female"],
          ["Occupation", "Housewife"],
          ["Parity", "G5P5"],
          ["Reason for Visit", "Scheduled follow-up — chronic disease management"],
        ],
      },

      { type: "h2", text: "History" },
      { type: "h3", text: "Chief Complaint" },
      {
        type: "p",
        text: "Follow-up for type 2 diabetes mellitus, hypertension, and post-traumatic epilepsy.",
      },
      { type: "h3", text: "History of Present Illness" },
      {
        type: "p",
        text: "A 50-year-old obese female (BMI 39.7 kg/m²) presents for scheduled follow-up of multiple chronic conditions. She was diagnosed with type 2 diabetes mellitus (T2DM) several years ago and is currently on premixed insulin 70/30. Despite insulin therapy, glycemic control remains suboptimal with HbA1c 8.2%, above the ADA target of <7.0% for most non-pregnant adults. Blood pressure today is 150/89 mmHg, exceeding the ADA-recommended target of <130/80 mmHg in patients with diabetes and cardiovascular risk factors. She has post-traumatic epilepsy currently managed with sodium valproate with no recent breakthrough seizures. She was started on escitalopram and bromazepam for anxiety and insomnia. She endorses habitual snoring but denies witnessed apneas or excessive daytime somnolence.",
      },
      { type: "h3", text: "Past Medical History" },
      {
        type: "ul",
        items: [
          "Type 2 Diabetes Mellitus — on insulin therapy",
          "Hypertension — on losartan",
          "Post-Traumatic Epilepsy — on sodium valproate",
          "Anxiety/insomnia — on escitalopram and bromazepam",
          "Obesity (Class II, BMI 39.7 kg/m²)",
        ],
      },
      { type: "h3", text: "Medications" },
      {
        type: "table",
        caption: "Current Medications",
        headers: ["Medication", "Dose / Frequency", "Indication", "Notable Concerns"],
        rows: [
          ["Insulin 70/30", "35 units SC QAM; 40 units SC QPM", "T2DM", "Fixed ratio limits flexibility; may need basal-bolus conversion"],
          ["Losartan", "50 mg PO daily", "Hypertension", "Undertitrated; max dose 100 mg/day"],
          ["Sodium Valproate", "500 mg PO BID", "Post-traumatic epilepsy", "Associated with weight gain and insulin resistance"],
          ["Escitalopram", "20 mg PO at bedtime", "Anxiety/depression", "Monitor QTc if adding other agents"],
          ["Bromazepam", "3 mg PO at bedtime", "Insomnia/anxiety", "CONTRAINDICATED in suspected OSA; respiratory depression risk"],
        ],
      },
      {
        type: "callout",
        variant: "red",
        label: "Safety Warning",
        text: "Bromazepam is CONTRAINDICATED in suspected OSA due to respiratory depression risk. Benzodiazepines reduce upper airway muscle tone and blunt the arousal response to hypoxia.",
      },
      { type: "h3", text: "Allergies" },
      { type: "p", text: "No known drug allergies." },
      { type: "h3", text: "Family History" },
      {
        type: "ul",
        items: [
          "Obesity and type 2 diabetes mellitus — maternal side",
          "No known family history of seizure disorder or premature cardiovascular disease",
        ],
      },
      { type: "h3", text: "Social History" },
      {
        type: "ul",
        items: [
          "Housewife; mother of five children; predominantly sedentary lifestyle",
          "No tobacco, alcohol, or illicit drug use",
          "Dietary habits not formally assessed; medical nutrition therapy (MNT) not previously initiated",
        ],
      },
      { type: "h3", text: "Review of Systems" },
      {
        type: "ul",
        items: [
          "Positive: snoring, fatigue, persistently elevated home blood pressure",
          "Negative: no witnessed apneas, no excessive daytime somnolence, no polyuria/polydipsia, no chest pain, no palpitations, no focal neurological symptoms, no recent seizures, no melena, no hematuria",
        ],
      },

      { type: "h2", text: "Physical Examination" },
      { type: "h3", text: "Vital Signs" },
      {
        type: "table",
        headers: ["Parameter", "Value", "Guideline Target / Reference"],
        rows: [
          ["Blood Pressure", "150/89 mmHg", "<130/80 mmHg (ADA 2025, AHA/ACC 2024)"],
          ["Heart Rate", "87 bpm", "60–100 bpm"],
          ["Respiratory Rate", "15 /min", "12–20 /min"],
          ["Temperature", "37.0 °C", "Normal"],
          ["Weight / Height", "108 kg / 165 cm", "—"],
          ["BMI", "39.7 kg/m² (Class II Obesity)", "Class I ≥30; Class II ≥35 (WHO/NHLBI)"],
          ["Neck Circumference", "38 cm", "OSA risk threshold: >40 cm (F), >43 cm (M)"],
        ],
      },
      {
        type: "stat",
        items: [
          { number: "39.7", label: "BMI kg/m² — Class II Obesity" },
          { number: "8.2", sup: "%", label: "HbA1c — above ADA target of <7.0%" },
          { number: "150/89", label: "mmHg BP — above target <130/80" },
        ],
      },
      { type: "h3", text: "General" },
      { type: "p", text: "Alert, oriented x3, obese female in no acute distress." },
      { type: "h3", text: "Cardiovascular" },
      { type: "p", text: "Regular rate and rhythm. No murmurs, rubs, or gallops. No peripheral edema. Peripheral pulses 2+ bilaterally." },
      { type: "h3", text: "Respiratory" },
      { type: "p", text: "Clear to auscultation bilaterally. No wheezes, rhonchi, or crackles." },
      { type: "h3", text: "Abdomen" },
      { type: "p", text: "Obese, soft, non-tender, no hepatosplenomegaly." },
      { type: "h3", text: "Neurological" },
      { type: "p", text: "GCS 15/15. No focal motor or sensory deficits. Cranial nerves II–XII grossly intact." },

      { type: "h2", text: "STOP-BANG Questionnaire for OSA Screening" },
      {
        type: "p",
        text: "The STOP-BANG questionnaire is a validated, 8-item tool with sensitivity of 93% and specificity of 36% for moderate-to-severe OSA at a cutoff score ≥3.",
      },
      {
        type: "table",
        caption: "STOP-BANG Assessment",
        headers: ["Item", "Response", "Score"],
        rows: [
          ["S — Snoring loudly", "Yes", "1"],
          ["T — Tired/sleepy most days", "No", "0"],
          ["O — Observed apnea", "No", "0"],
          ["P — Pressure (hypertension treated or BP >140/90)", "Yes", "1"],
          ["B — BMI >35 kg/m²", "Yes (BMI 39.7)", "1"],
          ["A — Age >50 years", "Yes (age 50, borderline)", "1"],
          ["N — Neck circumference >40 cm", "No (38 cm)", "0"],
          ["G — Gender male", "No", "0"],
        ],
        footer: "TOTAL: 4/8 — INTERMEDIATE RISK. Scores 0–2 = low risk; 3–4 = intermediate risk; 5–8 = high risk.",
      },
      {
        type: "callout",
        variant: "gold",
        label: "Clinical Context",
        text: "Score ≥3 warrants further evaluation with polysomnography or home sleep apnea test per AASM guidelines. This patient scores 4/8, placing her at intermediate risk for OSA.",
      },

      { type: "h2", text: "Diagnostic Studies" },
      { type: "h3", text: "Laboratory Results" },
      {
        type: "table",
        caption: "Laboratory Findings",
        headers: ["Test", "Result", "Reference", "Interpretation"],
        rows: [
          ["Hemoglobin", "10.8 g/dL", "12.0–16.0 g/dL", "Mild anemia — workup required"],
          ["Hematocrit", "32%", "36–46%", "Low"],
          ["WBC", "7.2 ×10⁹/L", "4.5–11.0 ×10⁹/L", "Normal"],
          ["Platelets", "230 ×10⁹/L", "150–400 ×10⁹/L", "Normal (monitor on valproate)"],
          ["Random Glucose", "191 mg/dL", "<140 mg/dL (2-hr PP)", "Elevated"],
          ["HbA1c", "8.2%", "<7.0% (ADA 2025 target)", "Suboptimal glycemic control"],
          ["Total Bilirubin", "0.4 mg/dL", "0.2–1.2 mg/dL", "Normal"],
          ["ALT", "38 U/L", "7–56 U/L", "High-normal; monitor for MASLD"],
          ["AST", "35 U/L", "10–40 U/L", "Normal"],
          ["Creatinine", "0.6 mg/dL", "0.5–1.1 mg/dL", "Normal; eGFR adequate"],
        ],
      },
      { type: "h3", text: "Additional Studies Ordered / Recommended" },
      {
        type: "ul",
        items: [
          "Fasting lipid panel — ASCVD risk stratification; statin initiation likely indicated per ADA 2025 and ACC/AHA Pooled Cohort Equations",
          "Urine albumin-to-creatinine ratio (UACR) + eGFR — annual DKD screening per ADA Standards of Care 2025",
          "Dilated funduscopic exam — annual diabetic retinopathy screen per ADA 2025",
          "10-g monofilament foot exam — annual peripheral neuropathy screen per ADA 2025",
          "Iron studies, reticulocyte count, peripheral smear, B12, folate, TSH — anemia workup; exclude valproate-associated cytopenias",
          "Home sleep apnea test (HSAT) or polysomnography — per AASM 2023 clinical practice guidelines given STOP-BANG ≥3 and benzodiazepine use",
          "PHQ-9 and GAD-7 — depression and anxiety screening per USPSTF Grade B recommendations",
        ],
      },

      { type: "h2", text: "Differential Diagnosis (Prioritized)" },
      { type: "h3", text: "1. Poorly Controlled Type 2 Diabetes Mellitus" },
      {
        type: "p",
        text: "Most likely and confirmed diagnosis. HbA1c 8.2% reflects persistent hyperglycemia above the individualized ADA 2025 target of <7.0%. Contributing drivers include: obesity-mediated insulin resistance, premixed insulin limitations, medication effects (sodium valproate), dietary non-adherence, sedentary lifestyle, and possible undiagnosed OSA exacerbating insulin resistance via intermittent hypoxia and sympathetic overactivation.",
      },
      { type: "h3", text: "2. Uncontrolled Hypertension" },
      {
        type: "p",
        text: "BP 150/89 mmHg despite ARB therapy. Per the 2024 AHA/ACC Hypertension Guideline, target BP in patients with T2DM is <130/80 mmHg. Differential includes: losartan undertitration (currently at half the maximum dose), obesity-driven sympathetic overactivation and RAAS upregulation, and possible contribution from untreated OSA causing nocturnal and sustained hypertension.",
      },
      { type: "h3", text: "3. Intermediate-Risk Obstructive Sleep Apnea" },
      {
        type: "p",
        text: "STOP-BANG 4/8 with snoring, BMI >35, hypertension, and age ≥50. OSA affects approximately 34% of middle-aged men and 17% of middle-aged women, with higher prevalence in obese individuals. The absence of witnessed apneas does not exclude OSA; subclinical or mild-moderate disease is clinically relevant given its bidirectional relationship with insulin resistance, hypertension, and cardiovascular risk.",
      },
      { type: "h3", text: "4. Medication-Induced Metabolic Dysregulation" },
      {
        type: "p",
        text: "Sodium valproate promotes weight gain (estimated 4–8 kg average) and induces insulin resistance through PPAR-γ activation and hyperinsulinemia mechanisms. This may be a significant contributor to both suboptimal glycemic control and worsening obesity in this patient.",
      },
      { type: "h3", text: "5. Mild Anemia — Etiology Undetermined" },
      {
        type: "p",
        text: "Hgb 10.8 g/dL. Differential includes iron deficiency anemia (most prevalent in women of this age group), anemia of chronic disease (T2DM, chronic inflammation), B12 or folate deficiency, or valproate-associated hematologic effects including thrombocytopenia or aplastic anemia (rare).",
      },
      { type: "h3", text: "6. Metabolic-Associated Steatotic Liver Disease (MASLD)" },
      {
        type: "p",
        text: "Formerly NAFLD/NASH; renamed per 2023 Delphi consensus. MASLD is present in up to 55–75% of patients with T2DM and obesity. Borderline ALT (38 U/L) and AST (35 U/L) in this metabolic context warrant monitoring. Fibrosis-4 (FIB-4) index should be calculated per 2023 AASLD guidance.",
      },

      { type: "h2", text: "Prioritized Problem List & Management Plan" },
      { type: "h3", text: "Problem 1: Poorly Controlled T2DM (HbA1c 8.2%)" },
      {
        type: "p",
        text: "The ADA Standards of Medical Care in Diabetes 2025 recommends HbA1c <7.0% for most non-pregnant adults, with individualization based on comorbidities. In obese patients, GLP-1 receptor agonists (GLP-1 RAs) are now the preferred add-on agents due to weight loss benefit, cardiovascular risk reduction, and demonstrated HbA1c lowering of 1.0–1.8%.",
      },
      {
        type: "ul",
        items: [
          "<strong>Insulin titration:</strong> Increase 70/30 dose by 2 units every 3 days if fasting glucose >130 mg/dL (ADA 2025 insulin titration protocol)",
          "<strong>Add GLP-1 receptor agonist:</strong> Initiate semaglutide (Ozempic) 0.25 mg SQ weekly, titrating to effect. The SUSTAIN-6 trial demonstrated significant HbA1c reduction (1.1%) and 26% reduction in MACE vs. placebo",
          "<strong>Consider SGLT-2 inhibitor:</strong> Empagliflozin or dapagliflozin if eGFR ≥30 mL/min. EMPA-REG OUTCOME trial showed 38% reduction in CV death",
          "<strong>Medical nutrition therapy (MNT):</strong> Refer to registered dietitian for individualized meal planning per ADA 2025",
          "<strong>Physical activity:</strong> Target ≥150 min/week moderate-intensity aerobic exercise; resistance training ≥2×/week",
          "<strong>Monitoring:</strong> Repeat HbA1c in 3 months; annual UACR, eGFR, fasting lipids, foot and eye exams per ADA Standards",
        ],
      },
      { type: "h3", text: "Problem 2: Uncontrolled Hypertension (150/89 mmHg)" },
      {
        type: "p",
        text: "Per the 2024 AHA/ACC Hypertension Guidelines, BP target in T2DM patients is <130/80 mmHg to reduce risk of stroke, MI, and CKD progression. Losartan at 50 mg daily is undertitrated (maximum dose 100 mg/day). ARBs remain the preferred first-line agent in T2DM due to nephroprotective properties validated in the RENAAL and IDNT trials.",
      },
      {
        type: "ul",
        items: [
          "<strong>Uptitrate losartan:</strong> Increase to 100 mg PO daily. Re-check BP and basic metabolic panel (BMP) in 2–4 weeks",
          "<strong>Add amlodipine 5 mg:</strong> If BP remains >130/80 mmHg after uptitration, add a dihydropyridine CCB",
          "<strong>OSA treatment:</strong> CPAP therapy in confirmed OSA reduces systolic BP by approximately 2–3 mmHg",
          "<strong>Lifestyle:</strong> Sodium restriction <2,300 mg/day, DASH dietary pattern, weight loss (5 kg weight reduction lowers systolic BP by ~5 mmHg)",
        ],
      },
      { type: "h3", text: "Problem 3: Intermediate-Risk Obstructive Sleep Apnea" },
      {
        type: "p",
        text: "OSA is present in ~40–60% of patients with T2DM and worsens both insulin resistance and blood pressure via intermittent hypoxia, sympathetic activation, and systemic inflammation. The 2023 AASM Clinical Practice Guidelines recommend objective sleep testing for all patients with intermediate or high STOP-BANG scores.",
      },
      {
        type: "ul",
        items: [
          "<strong>Order home sleep apnea test (HSAT):</strong> Per AASM 2023, HSAT is appropriate for uncomplicated suspected OSA",
          "<strong>Discontinue bromazepam:</strong> Taper gradually over 4–8 weeks to prevent withdrawal. Benzodiazepines are contraindicated in OSA per AASM",
          "<strong>First-line insomnia treatment:</strong> Cognitive Behavioral Therapy for Insomnia (CBT-I) is the first-line treatment for chronic insomnia per 2021 ACP and 2023 AASM guidelines",
          "<strong>If OSA confirmed, initiate CPAP:</strong> CPAP is standard of care for moderate-to-severe OSA per AASM",
        ],
      },
      {
        type: "callout",
        variant: "green",
        label: "Practice Point",
        text: "Benzodiazepine receptor agonists should be avoided in suspected or confirmed OSA as they reduce upper airway muscle tone and suppress hypoxic ventilatory response. CBT-I is the first-line treatment for chronic insomnia.",
      },
      { type: "h3", text: "Problem 4: Post-Traumatic Epilepsy" },
      {
        type: "p",
        text: "Currently seizure-free on sodium valproate 500 mg BID. Valproate is a broad-spectrum AED effective for generalized and focal seizures; however, it is associated with weight gain (mean +4.8 kg), insulin resistance, hyperammonemia, thrombocytopenia, and hepatotoxicity.",
      },
      {
        type: "ul",
        items: [
          "<strong>Maintain valproate:</strong> Continue current dose given seizure-free status. Do not alter AED without neurology guidance",
          "<strong>Neurology referral:</strong> Discuss transition to a weight-neutral or weight-reducing AED (e.g., lamotrigine, levetiracetam, topiramate)",
          "<strong>Monitoring:</strong> Annual CBC, LFTs, serum valproate trough levels, and ammonia if symptomatic",
        ],
      },
      { type: "h3", text: "Problem 5: Mild Anemia (Hgb 10.8 g/dL)" },
      {
        type: "ul",
        items: [
          "<strong>Anemia workup:</strong> Iron studies (serum ferritin, serum iron, TIBC), reticulocyte count, peripheral blood smear, B12, folate, TSH, and valproate drug level",
          "<strong>If iron deficiency confirmed:</strong> Initiate ferrous sulfate 325 mg PO daily or BID with vitamin C to enhance absorption. Recheck CBC in 4–8 weeks",
          "<strong>FIB-4 index:</strong> Calculate to risk-stratify for MASLD-related fibrosis per 2023 AASLD/AGA guidance",
        ],
      },
      { type: "h3", text: "Problem 6: Anxiety/Insomnia" },
      {
        type: "p",
        text: "Escitalopram 20 mg is appropriate for generalized anxiety disorder (GAD) and major depressive disorder (MDD), consistent with APA 2023 and CANMAT 2023 guidelines. Bromazepam poses risk of respiratory depression in OSA, physical dependence, cognitive impairment, and fall risk.",
      },
      {
        type: "ul",
        items: [
          "<strong>Taper and discontinue bromazepam:</strong> Reduce by 25% every 1–2 weeks. Monitor for withdrawal symptoms",
          "<strong>CBT-I:</strong> First-line for chronic insomnia per ACP 2016 and AASM 2021; superior to pharmacotherapy at 12-month follow-up",
          "<strong>If pharmacotherapy needed:</strong> Low-dose doxepin (3–6 mg) — FDA-approved for sleep maintenance insomnia, no respiratory depression risk",
          "<strong>Continue escitalopram:</strong> Reassess depression/anxiety scores (PHQ-9, GAD-7) at each visit",
        ],
      },

      { type: "h2", text: "Consultations" },
      {
        type: "table",
        headers: ["Specialty", "Indication / Goal"],
        rows: [
          ["Endocrinology", "Insulin optimization; GLP-1 RA initiation; SGLT-2 inhibitor consideration; metabolic syndrome management"],
          ["Sleep Medicine", "OSA evaluation — HSAT/PSG per AASM 2023; CPAP initiation if indicated"],
          ["Neurology", "Valproate reassessment; weight-neutral AED consideration; seizure monitoring"],
          ["Registered Dietitian", "Medical nutrition therapy (MNT); ADA-consistent meal planning; caloric deficit for weight reduction"],
          ["Behavioral Health / Psychology", "CBT-I for insomnia; anxiety/depression management; DSMES participation"],
          ["Ophthalmology", "Annual dilated funduscopic exam per ADA 2025 — diabetic retinopathy screening"],
          ["Podiatry", "Annual comprehensive foot exam — monofilament testing, ABI if indicated"],
        ],
      },

      { type: "h2", text: "Patient Education" },
      {
        type: "ul",
        items: [
          "<strong>Diabetes self-management education (DSMES):</strong> Referral to ADA-recognized DSMES program. ADA 2025 recommends DSMES at diagnosis, annually, and at times of complication",
          "<strong>Insulin technique and adherence:</strong> Proper injection technique, rotation sites, glucose monitoring, hypoglycemia recognition and treatment (15-15 rule)",
          "<strong>Blood pressure monitoring:</strong> Home BP monitoring twice daily; sodium restriction; DASH diet; importance of medication adherence",
          "<strong>Weight management:</strong> Explain that 5–10% weight loss improves HbA1c by ~0.6–1.0%, lowers BP, and reduces OSA severity",
          "<strong>OSA education:</strong> Explain OSA symptoms, metabolic consequences, and importance of testing. Discuss CPAP benefits. Emphasize risks of benzodiazepine use in this context",
          "<strong>Epilepsy safety:</strong> Driving restrictions per state regulations; bath and swimming safety; seizure action plan for household members; importance of AED adherence",
          "<strong>Medication education:</strong> Never abruptly stop valproate or benzodiazepines. GLP-1 RA administration and storage. Side effects of new medications",
        ],
      },

      { type: "h2", text: "Preventive Care: Screening Recommendations" },
      { type: "h3", text: "USPSTF-Recommended Screenings" },
      {
        type: "table",
        headers: ["Screening", "Recommendation", "Action"],
        rows: [
          ["Cervical cancer", "Pap + HPV co-test every 5 years, ages 30–65 (Grade A)", "Verify date of last screen"],
          ["Breast cancer", "Mammography every 2 years, ages 40–74 (Grade B, updated 2024)", "Order if not done in 2 years"],
          ["Colorectal cancer", "Ages 45–75 (Grade A); FIT, colonoscopy, or stool DNA (2021)", "Order FIT or refer for colonoscopy"],
          ["Obesity counseling (BMI ≥30)", "Intensive multicomponent behavioral intervention (Grade B)", "Refer to structured weight loss program"],
          ["Depression", "Annual PHQ-9 screening in adults (Grade B)", "Administer PHQ-9 today"],
          ["Anxiety", "Annual GAD-7 for adults <65 (Grade B, 2023)", "Administer GAD-7 today"],
          ["Dyslipidemia/CVD prevention", "Statin for CVD prevention in T2DM, ages 40–75 (Grade B)", "Obtain fasting lipids; calculate ASCVD risk"],
        ],
      },
      { type: "h3", text: "CDC/ACIP Vaccination Recommendations" },
      {
        type: "table",
        headers: ["Vaccine", "Recommendation", "Action"],
        rows: [
          ["Influenza", "Annual for all adults (ACIP)", "Administer today or document refusal"],
          ["COVID-19", "Updated annual booster per CDC 2024–2025 guidance", "Confirm up to date"],
          ["Pneumococcal (PCV20)", "Single dose PCV20 for adults with T2DM (ACIP 2022)", "Administer if not previously given"],
          ["Tdap / Td", "Tdap once (if not given); Td booster every 10 years", "Review records; administer if due"],
          ["Hepatitis B", "3-dose series for unvaccinated adults <60 (ACIP 2022)", "Check anti-HBs; vaccinate if non-immune"],
          ["Zoster (Shingrix)", "2-dose series for adults ≥50 (ACIP; 97% efficacy in ages 50–69)", "Schedule; 2–6 months between doses"],
        ],
      },

      { type: "h2", text: "Follow-Up Plan" },
      {
        type: "table",
        headers: ["Timeframe", "Priority Actions"],
        rows: [
          ["2–4 weeks", "Re-check BP after losartan uptitration; BMP; review glucose log; assess bromazepam taper progress; confirm HSAT/sleep medicine referral"],
          ["3 months", "Repeat HbA1c; CBC and anemia workup results; HSAT/sleep study results; GLP-1 RA titration; PHQ-9 and GAD-7 reassessment"],
          ["6 months", "Review fasting lipid panel; ASCVD risk calculation; CPAP compliance assessment if applicable; weight and BMI trend; medication reconciliation"],
          ["12 months", "Annual: dilated eye exam, UACR/eGFR, foot exam, LFTs, HbA1c, fasting lipids, CBC; full preventive care and immunization review"],
        ],
      },

      { type: "sectionRule", label: "References" },
      {
        type: "references",
        items: [
          "American Diabetes Association Professional Practice Committee. Standards of Medical Care in Diabetes—2025. <em>Diabetes Care.</em> 2025;48(Suppl 1):S1–S352.",
          "Whelton PK, Carey RM, Mancia G, et al. 2024 ACC/AHA Guideline for the Diagnosis and Management of Hypertension in Adults. <em>Hypertension.</em> 2024.",
          "Kapur VK, et al. Clinical Practice Guideline for Diagnostic Testing for Adult Obstructive Sleep Apnea: An AASM Clinical Practice Guideline. <em>J Clin Sleep Med.</em> 2017;13(3):479–504.",
          "Marso SP, et al. Semaglutide and Cardiovascular Outcomes in Patients with Type 2 Diabetes (SUSTAIN-6). <em>NEJM.</em> 2016;375:1834–1844.",
          "Zinman B, et al. Empagliflozin, Cardiovascular Outcomes, and Mortality in Type 2 Diabetes (EMPA-REG OUTCOME). <em>NEJM.</em> 2015;373:2117–2128.",
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
