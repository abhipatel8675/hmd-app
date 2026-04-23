export type Article = {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  author: string;
  authorRole: string;
  authorImage?: string;
  date: string;
  readTime: string;
  tags: string[];
  coverGradient: string;
  coverAccent: string;
  body: { heading?: string; paragraphs: string[] }[];
};

export const articles: Article[] = [
  {
    slug: "why-weight-returns-after-stopping-glp-1-therapy",
    title: "Why Weight Returns After Stopping GLP-1 Therapy: The Biology You Need to Understand",
    subtitle:
      "Across randomized trials, stopping GLP-1/dual incretin therapy is typically followed by clinically meaningful weight regain and loss of cardiometabolic gains — often within months — highlighting obesity as a chronic, relapsing condition.",
    excerpt:
      "The clinical reality of GLP-1 discontinuation — and why obesity behaves like every other chronic disease we treat.",
    author: "Michael Albert",
    authorRole: "Physician, HMD Faculty",
    date: "Mar 6, 2026",
    readTime: "20 min read",
    tags: ["GLP1", "Obesity", "Endocrinology"],
    coverGradient: "linear-gradient(135deg, #0A1628 0%, #112240 55%, #1a3260 100%)",
    coverAccent: "#C9A84C",
    body: [
      {
        heading: "The Question Everyone Is Asking",
        paragraphs: [
          "Tens of millions of people worldwide are now taking GLP-1 receptor agonists — semaglutide (Ozempic, Wegovy), tirzepatide (Mounjaro, Zepbound), and others — for weight management and type 2 diabetes. These medications have delivered results that were, until recently, unimaginable outside of surgery: participants in clinical trials routinely lose 15–20% of their body weight.",
          "But almost every patient eventually asks the same question: what happens when I stop?",
          "The answer, across multiple randomized withdrawal trials, is remarkably consistent: a majority of the lost weight returns within 12 months, and with it, many of the cardiometabolic improvements that made the therapy worthwhile in the first place.",
        ],
      },
      {
        heading: "What the Randomized Withdrawal Data Show",
        paragraphs: [
          "The STEP-1 extension, STEP-4, and SURMOUNT-4 trials offer the clearest picture. Participants who switched from active drug to placebo regained roughly two-thirds of their prior weight loss within a year. Improvements in blood pressure, triglycerides, and glycemic control largely reverted toward baseline on the same timeline.",
          "This is not a failure of the drugs. It is a faithful expression of obesity's underlying biology — and it is the same signature we see after bariatric surgery reversal, after behavioral intervention withdrawal, and after any other energy-balance intervention is removed.",
        ],
      },
      {
        heading: "The Biology of Defended Body Weight",
        paragraphs: [
          "The human body defends a set point for adiposity through a coordinated network of hormonal, neural, and metabolic signals. When weight drops, leptin falls, ghrelin rises, resting energy expenditure declines beyond what body composition alone would predict, and the hedonic pull of calorie-dense food intensifies.",
          "GLP-1 agonists work, in large part, by overriding this defense. They blunt appetite, slow gastric emptying, and act on central reward circuits. Remove the drug, and the defense reasserts itself — often with surprising speed.",
        ],
      },
      {
        heading: "What This Means Clinically",
        paragraphs: [
          "The implication is uncomfortable but clarifying: obesity is a chronic, relapsing condition. Treating it with a time-limited course of pharmacotherapy is analogous to treating hypertension with a finite course of antihypertensives — biologically coherent only if we expect the disease to resolve, which it generally does not.",
          "The path forward is not to abandon these drugs, nor to demand lifelong adherence from every patient. It is to match the duration of therapy to the duration of the disease, to build around pharmacology with durable behavioral and environmental scaffolding, and to be honest with patients about what stopping means.",
        ],
      },
    ],
  },
  {
    slug: "before-or-after-glp-1-and-surgery-sequencing",
    title: "Before or After? The GLP-1 and Surgery Sequencing Question",
    subtitle:
      "The science of sequencing GLP-1 therapy and bariatric surgery — and why the answer is more complicated than anyone wants to admit.",
    excerpt:
      "Sequencing GLP-1 therapy and bariatric surgery is rapidly becoming one of the most consequential decisions in metabolic medicine.",
    author: "Michael Albert",
    authorRole: "Physician, HMD Faculty",
    date: "Apr 22, 2026",
    readTime: "17 min read",
    tags: ["GLP1", "Bariatric Surgery", "Clinical"],
    coverGradient: "linear-gradient(135deg, #060f1e 0%, #0A1628 60%, #1A3D3D 100%)",
    coverAccent: "#E2C070",
    body: [
      {
        heading: "A Decision That Didn't Exist Five Years Ago",
        paragraphs: [
          "Before the incretin era, the sequencing question was simple: either surgery or medical therapy, rarely both in close succession. The pharmacology was not potent enough to change the calculus.",
          "That era is over. Patients now routinely present to bariatric programs already on semaglutide or tirzepatide, having lost 10–15% of body weight. The question is no longer whether to use these drugs, but when.",
        ],
      },
      {
        heading: "The Case for GLP-1 First",
        paragraphs: [
          "Pre-surgical GLP-1 therapy reduces hepatic steatosis, improves insulin sensitivity, and may lower perioperative risk. It also gives patients a preview of sustained caloric restriction before committing to an irreversible anatomical change.",
          "For some, the drug alone is enough. For others, it becomes a bridge that makes surgery safer and more durable.",
        ],
      },
      {
        heading: "The Case for Surgery First",
        paragraphs: [
          "Surgery remains the most durable weight-loss intervention we have. For patients with long-standing, severe obesity, delaying definitive anatomical treatment to trial medical therapy may prolong disease burden without altering long-term outcomes.",
          "There is also the economics: GLP-1s are expensive and, for most patients, lifelong. Surgery is a one-time investment with a decades-long return.",
        ],
      },
    ],
  },
  {
    slug: "inside-the-peptide-revolution",
    title: "Inside the Peptide Revolution — What the Science Actually Shows",
    subtitle:
      "The science underpinning the peptide revolution is genuinely extraordinary. The human trials are not. A physician goes deep on both.",
    excerpt:
      "Separating the genuine breakthroughs from the wellness-industry noise around peptide therapeutics.",
    author: "Michael Albert",
    authorRole: "Physician, HMD Faculty",
    date: "Apr 18, 2026",
    readTime: "24 min read",
    tags: ["Pharmacology", "Peptides"],
    coverGradient: "linear-gradient(135deg, #0A1628 0%, #1a3260 70%, #112240 100%)",
    coverAccent: "#C9A84C",
    body: [
      {
        heading: "The Promise",
        paragraphs: [
          "Peptide therapeutics sit at a rare intersection: molecular precision, biological plausibility, and — for a select handful — real randomized evidence. The incretins are the most visible example, but they are not alone.",
          "Beyond GLP-1 sits a growing pipeline: amylin analogs, glucagon co-agonists, myostatin inhibitors, and a dozen others.",
        ],
      },
      {
        heading: "The Reality",
        paragraphs: [
          "For every peptide with a phase-3 trial behind it, there are twenty being sold off-label by clinics operating in the regulatory gray zone. The molecules are real. The evidence, in most cases, is not.",
          "The job of the physician is to hold both truths at once: the science is extraordinary, and most of what is being sold under the banner of that science is premature.",
        ],
      },
    ],
  },
  {
    slug: "statins-dont-cause-what-you-think",
    title: "Statins Don't Cause What You Think They Cause. Except When They Do.",
    subtitle:
      "Muscle damage. Memory loss. Cancer. Diabetes. Four fears, one physician, and what the evidence actually shows.",
    excerpt:
      "A careful look at the four most common fears about statins — and which ones the evidence supports.",
    author: "Michael Albert",
    authorRole: "Physician, HMD Faculty",
    date: "Apr 15, 2026",
    readTime: "16 min read",
    tags: ["Cardiology", "Pharmacology"],
    coverGradient: "linear-gradient(135deg, #060f1e 0%, #112240 50%, #0A1628 100%)",
    coverAccent: "#E2C070",
    body: [
      {
        heading: "Four Fears",
        paragraphs: [
          "Ask any primary care physician what their patients fear about statins and you'll hear the same four answers: muscle damage, memory loss, cancer, and diabetes. Three of those fears are largely unsupported. One is real.",
          "Untangling the difference is the difference between a patient who takes their medication and one who quietly stops.",
        ],
      },
      {
        heading: "The Muscle Question",
        paragraphs: [
          "Statin-associated muscle symptoms are real but dramatically over-attributed. In blinded crossover trials, the vast majority of patients who report muscle symptoms on open-label statins report them equally on placebo.",
          "This is not to dismiss the patients who do have true myopathy — they exist, they matter, and they need alternatives. But the base rate is far lower than the clinical narrative suggests.",
        ],
      },
      {
        heading: "The Diabetes Question",
        paragraphs: [
          "Here the evidence is less kind to statins. High-intensity statin therapy does modestly increase the risk of incident type 2 diabetes, particularly in patients with pre-existing metabolic risk factors.",
          "The cardiovascular benefit outweighs this risk for patients with meaningful ASCVD risk. For patients without it, the calculus is less obvious.",
        ],
      },
    ],
  },
  {
    slug: "statins-dont-lower-ldl-liver-does",
    title: "Statins Don't Lower LDL. The Liver Does.",
    subtitle:
      "A mechanistic tour through HMG-CoA reductase, LDL receptor upregulation, and why the mental model matters at the bedside.",
    excerpt:
      "A common misconception about how statins actually work — and why getting it right changes how you talk to patients.",
    author: "Michael Albert",
    authorRole: "Physician, HMD Faculty",
    date: "Apr 10, 2026",
    readTime: "14 min read",
    tags: ["Cardiology", "Physiology"],
    coverGradient: "linear-gradient(135deg, #060f1e 0%, #0A1628 50%, #112240 100%)",
    coverAccent: "#C9A84C",
    body: [
      {
        heading: "The Misconception",
        paragraphs: [
          "Ask most patients — and more than a few clinicians — how statins work, and you'll hear some version of: they lower cholesterol in the blood. True, but incomplete, and the missing piece changes how you counsel patients.",
        ],
      },
      {
        heading: "The Mechanism",
        paragraphs: [
          "Statins inhibit HMG-CoA reductase, the rate-limiting enzyme in hepatic cholesterol synthesis. The liver, sensing lower intracellular cholesterol, upregulates LDL receptors on its surface. Those receptors pull circulating LDL particles out of the blood.",
          "In other words: statins don't lower LDL directly. They instruct the liver to lower it.",
        ],
      },
    ],
  },
  {
    slug: "the-longevity-stack",
    title: "The Longevity Stack",
    subtitle:
      "Which interventions have real evidence, which have promising evidence, and which are being sold ahead of the science.",
    excerpt:
      "A physician's framework for thinking about longevity interventions — from the boring and proven to the novel and speculative.",
    author: "Michael Albert",
    authorRole: "Physician, HMD Faculty",
    date: "Apr 5, 2026",
    readTime: "22 min read",
    tags: ["Longevity", "Preventive Medicine"],
    coverGradient: "linear-gradient(135deg, #0A1628 0%, #112240 40%, #1A3D3D 100%)",
    coverAccent: "#E2C070",
    body: [
      {
        heading: "Tier One: Boring and Proven",
        paragraphs: [
          "Exercise. Sleep. Not smoking. Treating blood pressure. Treating ASCVD risk. These aren't glamorous, but they are the only interventions with decades of randomized data behind them.",
          "Any longevity discussion that skips past these is a sales pitch, not a clinical conversation.",
        ],
      },
      {
        heading: "Tier Two: Promising",
        paragraphs: [
          "GLP-1 therapy for appropriate patients. SGLT2 inhibitors. Lp(a)-lowering therapies now entering late-stage trials. These have mechanism, early evidence, and realistic clinical pathways.",
        ],
      },
      {
        heading: "Tier Three: Ahead of the Evidence",
        paragraphs: [
          "NAD precursors, rapamycin for healthy individuals, peptide therapy outside of FDA indications. The mechanistic stories are compelling. The human evidence, at present, is not.",
        ],
      },
    ],
  },
  {
    slug: "im-36-im-a-physician-i-take-a-statin",
    title: "I'm 36. I'm a Physician. I Take a Statin Every Day.",
    subtitle:
      "Here's what the evidence actually says — and why I stopped waiting for my fifties.",
    excerpt:
      "The case for earlier, more aggressive lipid management — and a physician's personal decision to walk the talk.",
    author: "Michael Albert",
    authorRole: "Physician, HMD Faculty",
    date: "Apr 1, 2026",
    readTime: "15 min read",
    tags: ["Cardiology", "Preventive Medicine", "Personal"],
    coverGradient: "linear-gradient(135deg, #060f1e 0%, #0A1628 60%, #6B2737 100%)",
    coverAccent: "#E2C070",
    body: [
      {
        heading: "The Decision",
        paragraphs: [
          "I am thirty-six years old. I do not have diabetes, I am not overweight, and my blood pressure is unremarkable. By every conventional calculator, I am low risk.",
          "I take rosuvastatin 10 mg every night.",
        ],
      },
      {
        heading: "The Reasoning",
        paragraphs: [
          "Atherosclerosis is a cumulative disease. The plaque in the arteries of a seventy-year-old with a heart attack didn't appear in their sixties — it accumulated, silently, over decades.",
          "The question is not whether to eventually lower LDL. The question is when. And once you accept that earlier is mechanistically better, the only remaining question is whether the tolerability and cost justify starting now.",
          "For me, it does.",
        ],
      },
    ],
  },
  {
    slug: "the-incretin-class-primer",
    title: "The Incretin Class: A Primer for the Busy Clinician",
    subtitle:
      "GLP-1, GIP, glucagon — a compact mechanistic tour of the hormones rewriting metabolic medicine.",
    excerpt:
      "A fast, clinician-focused orientation to the incretin class and why tirzepatide is not just a better GLP-1.",
    author: "Michael Albert",
    authorRole: "Physician, HMD Faculty",
    date: "Mar 22, 2026",
    readTime: "12 min read",
    tags: ["GLP1", "Endocrinology"],
    coverGradient: "linear-gradient(135deg, #0A1628 0%, #1a3260 50%, #0A1628 100%)",
    coverAccent: "#C9A84C",
    body: [
      {
        heading: "What the Incretins Are",
        paragraphs: [
          "The incretin hormones — GLP-1 and GIP — are released by the gut in response to nutrient ingestion. Their job is to coordinate the body's response to a meal: amplify insulin secretion, suppress glucagon, slow gastric emptying, and signal satiety to the brain.",
          "Semaglutide is a GLP-1 receptor agonist. Tirzepatide engages both the GLP-1 and GIP receptors. The addition of GIP agonism is not a minor tweak — it substantially amplifies weight-loss efficacy.",
        ],
      },
    ],
  },
  {
    slug: "reading-a-cv-paper-in-fifteen-minutes",
    title: "Reading a Cardiovascular Paper in Fifteen Minutes",
    subtitle:
      "A working clinician's framework for evaluating cardiovascular trials without reading every page.",
    excerpt:
      "The essential questions to ask of any cardiovascular trial — and how to know when to stop reading.",
    author: "Michael Albert",
    authorRole: "Physician, HMD Faculty",
    date: "Mar 14, 2026",
    readTime: "10 min read",
    tags: ["EBM", "Cardiology"],
    coverGradient: "linear-gradient(135deg, #060f1e 0%, #112240 55%, #0A1628 100%)",
    coverAccent: "#E2C070",
    body: [
      {
        heading: "Start With the Primary Endpoint",
        paragraphs: [
          "Before you read the abstract, ask: what was the primary endpoint, and was it hit? Everything else — subgroup analyses, secondary endpoints, narrative framing — is downstream of that single question.",
        ],
      },
      {
        heading: "Then Check the Population",
        paragraphs: [
          "A trial's results are only as generalizable as its enrollment criteria. A statin trial in patients with documented ASCVD does not tell you how to treat a forty-year-old with borderline LDL.",
        ],
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
