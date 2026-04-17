export interface TeamMember {
  name: string;
  role: string;
  slug: string;
  category: "executive" | "physician" | "advisory";
  bio: string[];
  image?: string;
  imagePosition?: string;
  imageScale?: number;
}

export const executiveBoard: TeamMember[] = [
  {
    name: "Bakary Jatta, M.D.",
    role: "Chair & Founder, HMD",
    slug: "bakary-jatta",
    category: "executive",
    bio: [],
    image: "/Bakary Jatta, M.D..jpeg",
  },
  {
    name: "Vanessa Nunes De Paiva, MBA, Ph.D.",
    role: "Chief Physician Liaison, HMD",
    slug: "vanessa-nunes-de-paiva",
    category: "executive",
    image: "/Vanessa Nunes Depaiva, MBA, Ph. D..jpeg",
    imagePosition: "50% 20%",
    bio: [
      "Vanessa Nunes de Paiva is an accomplished Medical Science Liaison whose career reflects a steadfast commitment to scientific excellence, patient-centered engagement, and cross-functional collaboration. With a strong foundation in medical sciences and extensive field experience, she has built a reputation for delivering high-impact scientific exchange, strengthening strategic partnerships, and advancing healthcare solutions for complex and underserved patient populations.",
      "She is from Brazil and she did her master degree in science in Immunology in Brazil, her Ph.D. in Neuroimmunology in Germany. She did a postdoc program at Florida International University in Neuroscience, and a second postdoc in Immuno-Oncology at University of Miami, and recently graduated with her MBA in Marketing.",
      "Vanessa specializes in rare diseases, dermatology, and neurology, with a particular focus on elevating clinical awareness around Tuberous Sclerosis Complex and improving access to innovative therapies such as Hyftor. She demonstrates a disciplined, structured approach to stakeholder engagement, informed by deep scientific knowledge, operational rigor, and unwavering respect for regulatory compliance. Vanessa is recognized for her ability to cultivate trust-based relationships with Key Opinion Leaders, effectively bridging scientific evidence with real-world clinical practice.",
      "Known for her resilience, determination, and strong sense of purpose, Vanessa consistently champions the needs of patients and clinicians across diverse and challenging territories. She leverages data-driven insights, emerging digital tools, and evidence-based strategies to support medical planning, scientific education, and field execution. Her traditional values rooted in integrity, accountability, and professionalism are complemented by a forward-looking mindset that embraces innovation and continuous learning.",
      "Vanessa is deeply committed to supporting the Latino community within the MSL profession and advancing diversity in Medical Affairs leadership. Her passion for science, people, and impact continues to guide her mission: enabling better care, expanding clinical understanding, and shaping a more informed healthcare ecosystem for the future.",
    ],
  },
  {
    name: "Helena Pei\u0107 Tukuljac, Ph.D, MSc",
    role: "Chief Data Scientist, HMD",
    slug: "helena-peic-tukuljac",
    category: "executive",
    image: "/Helena Peic Tukuljac , Ph.D, MSc.jpeg",
    bio: [
      "Helena Pei\u0107 Tukuljac is a senior data and healthcare innovation leader with over a decade of international experience across academia, startups, and large-scale enterprise environments. Guided by a mindset of resilience and adaptability, she builds data-driven solutions with a clear focus on real-world impact, always letting evidence, users, state-of-the-art solutions and the market shape outcomes.",
      "Based in Switzerland for more than ten years, Helena has also worked professionally in Serbia, France, and the United States. She brings a rare hybrid professional background, combining a PhD in Data Science with an MSc in Embedded Systems, enabling her to bridge advanced mathematics, software engineering, and strategic business problem-solving. This combination allows her to design and deliver scalable, production-ready data and AI systems that create measurable value.",
      "Over the past two years, Helena has served as a Healthcare Data Architect, working across operational, clinical, and medical research data domains. She recently contributed to a nationwide Swiss initiative, \u201cSemantic Interoperability at National Scale: The SPHN Federated Clinical Routine Dataset,\u201d collaborating with other five leading hospitals in Switzerland and acting as the sole pediatric representative.",
      "At Zurich\u2019s Children\u2019s Hospital, her work on data strategy, AI strategy, and long-term roadmaps has reinforced the vision of a resource-efficient, smart hospital that serves both local and broader communities, while remaining fully compliant with stringent cantonal and national regulations on data protection and patient privacy.",
      "Previously, Helena worked as an Applied Machine Learning Consultant at IMD in Lausanne, one of the world\u2019s leading business schools. There, she advised international executives within the TransformTECH program, translating complex AI and machine-learning concepts into actionable insights for leaders from non-technical backgrounds.",
    ],
  },
  {
    name: "Karthik Saravanan, BMBCh Bound, BA (Oxon)",
    role: "Strategic Advisor For Medical AI & UK Programs, HMD",
    slug: "karthik-saravanan",
    category: "executive",
    image: "/Karthik Saravanan, BMBCh Bound, BA.jpeg",
    imagePosition: "center 55%",
    bio: [
      "Karthik Saravanan, a final year medical student at the University of Oxford, is the strategic advisor for medical AI and UK programs for HMD. With his passion for medical education, teaching and machine learning, he employs his multi-faceted skill set across many different areas.",
      "What initially began as a self-taught interest during the COVID pandemic, Karthik has developed a strong programming background with Python over the past six years, undertaking many projects relating to data science and machine learning. As a research intern at the Botnar Institute, Oxford, a number of his projects have been published in scientific journals and presented at national/international scientific meetings. Most notably, his recent project involving the implementation of a dynamical graph based post-processing algorithm was published as a conference paper at IEEE International Symposium of Biomedical Imaging 2025.",
      "Alongside his studies at Oxford, Karthik has nurtured a special interest in medical education and teaching. Capitalising on over six years\u2019 experience doing freelance online tuition, he recently co-founded Trinity Scholars: a tuition company that provides bespoke support for students undertaking medical school applications. As operational head, Karthik utilised his expertise to carefully curate a team of specialist tutors and develop his own set of meticulously crafted teaching materials for both his tutors and students. Multiple students at Trinity Scholars have since gained admission into several top medical schools across the UK, including but not limited to Oxford and Cambridge.",
      "As an academic tutor at the Queen\u2019s College, Oxford, Karthik also continues to enjoy teaching 3rd year undergraduate students studying medicine and biomedical sciences. In this role, he has developed a novel teaching programme aimed at preparing students for their oral viva examinations as a key component of their intercalated research projects. His teaching has been well received, with exemplary feedback over the past three years; many of his students went on to achieve First Class marks in their research projects following their viva examinations.",
      "Combining his technical expertise in machine learning with his ever-evolving passion for teaching and medical education, Karthik possesses a unique range of insights that will guide the future strategic implementation of AI and UK-based medical education at HMD.",
    ],
  },
  {
    name: "Janet Machuka",
    role: "Head of Digital Strategy and Communications, HMD",
    slug: "janet-machuka",
    category: "executive",
    image: "/Machuka copy.jpg",
    imageScale: 1,
    imagePosition: "center 15%",
    bio: [
      "Janet Machuka is the Head of Digital Strategy and Communications at HMD, where she leads the organization\u2019s global digital positioning, brand architecture, and strategic communications initiatives. She oversees digital growth strategy, audience engagement, media partnerships, and thought leadership distribution, ensuring HMD\u2019s mission at the intersection of medicine, leadership, and innovation reaches a global audience.",
      "A trained journalist and accomplished Corporate Digital Marketing and Communications Strategist, Janet is widely recognized as one of Africa\u2019s leading voices in digital marketing. She brings extensive experience in digital strategy, corporate communications, content development, brand positioning, and executive training, advising organizations on how to build influential, purpose-driven brands in an evolving digital landscape.",
      "Janet is the Founder of ATC Digital Academy, an ed-tech platform delivering professional digital marketing training and upskilling programs. She also leads Sparks Corporates, a marketing agency serving local and international brands with integrated marketing and communications solutions.",
      "She is the visionary behind #AfricaTweetChat, Africa\u2019s largest marketing community on X (formerly Twitter), which has reached a cumulative audience of over 700 million participants over the past eight years. Through this platform, she has convened high-impact conversations on entrepreneurship, digital transformation, marketing innovation, and leadership across the continent.",
      "Her professional interests span Climate, Agriculture, EdTech, Health, and STEM industries, with a growing focus on the intersection of AI and human behavior in digital communication. At HMD, she leverages this cross-sector expertise to drive digital influence, strengthen institutional partnerships, and position the organization as a global authority in physician leadership and innovation.",
    ],
  },
];

export const physicianLeaders: TeamMember[] = [
  {
    name: "Tsion Yehualashet Wubshet, M.D.",
    role: "HMD Regional Executive, East Africa",
    slug: "tsion-yehualashet-wubshet",
    category: "physician",
    bio: [],
    image: "/Tsion Yehualashet Wubshet, M.D.jpeg",
    imageScale: 1.8,
    imagePosition: "75% 15%",
  },
  {
    name: "Chidinma Nwoha, MD, MPH",
    role: "HMD Regional Executive, West Africa",
    slug: "chidinma-nwoha",
    category: "physician",
    bio: [],
    image: "/Chidinma Nwoha, MD, MPH.jpeg",
    imagePosition: "center 30%",
  },
  {
    name: "Sadia Ambreen, MBBS, FCPS",
    role: "Consultant Anesthesiologist | Research And Evidence-Based Medicine Contributor, HMD",
    slug: "sadia-ambreen",
    category: "physician",
    image: "/Sadia Amebreen, MBBS, FCPS.jpeg",
    bio: [
      "Dr. Sadia Ambreen is a consultant anesthesiologist and a fellow of the College of Physicians and Surgeons Pakistan (FCPS) in anesthesia and intensive care. She is currently practicing at Social Security Hospital, Lahore, Pakistan, where she is actively involved in perioperative care and critical care medicine. She completed her MBBS (Bachelor of Medicine, Bachelor of Surgery) from Quaid-e-Azam Medical College, followed by residency training in anesthesiology. She later obtained her fellowship in anesthesia and intensive care from the College of Physicians and Surgeons Pakistan (CPSP), reflecting her advanced specialization in the perioperative medicine and critical care.",
      "Dr. Ambreen has completed advanced professional training through the College of Physicians and Surgeons Pakistan in research methodology, communication skills, medical ethics, and information technology, strengthening her clinical, academic, and interdisciplinary competencies. With over 1.5 years of experience in medical research and evidence synthesis, she has contributed to international research collaborations, including working with Netherlands-based health and nutrition companies such as Probiogurt and YMProof. Her work has focused on critical appraisal and evidence-based analysis and clinical data.",
      "She has a strong interest in evidence-based medicine and medical content creation, aiming to bridge the gap between research and clinical practice through clear, accurate, and impactful medical writing. At HMD, she contributes to research development, literature review, and evidence synthesis to support academically rigorous and clinically relevant educational resources.",
    ],
  },
];

export const advisoryBoard: TeamMember[] = [
  {
    name: "Howard Maibach, M.D., FAAD",
    role: "Advisory Board Member, HMD",
    slug: "howard-maibach",
    category: "advisory",
    bio: [],
    image: "/Howard Maibach.jpeg",
  },
  {
    name: "Tamesh Sivaguru",
    role: "Technical Board Advisor, HMD",
    slug: "tamesh-sivaguru",
    category: "advisory",
    bio: [],
    image: "/Tamesh Sivaguru.jpeg",
    imagePosition: "center 85%",
  },
  {
    name: "Andy Barbeau, Ph.D., MBA",
    role: "Chief Operating Officer, HMD",
    slug: "andy-barbeau",
    category: "advisory",
    image: "/Andy Barbeau,Ph.D, MBA.png",
    bio: [
      "Dr. Barbeau is HMD\u2019s COO providing strategic and operational leadership in managerial & organizational design, alignment, execution, growth, change, and governance. He is a seasoned consultant, researcher, author, professor, and Founder/CEO of MOReLLC.com; a global consultancy passionate about offering entirely new, systems-based ways of understanding management and organization that heal and align all employees to improve customer and enterprise outcomes.",
      "Taking a systems view on the current state of the world, he asks; Is this the best we can do? He now offers solutions and provides a source of hope and healing by helping leaders see the connection between workplace health and overall performance. He is dedicated to bringing these perspectives to life, help solve the global employee engagement problem, and improve overall human experiences all while driving better organizational performance.",
      "His extensive career in consulting has given him deep insights from multiple industries that align well with HMD\u2019s core mission. These include CVS Health, Moderna, AHIMA, Harvard University, Houghton Mifflin, Wolters Kluwer, and several others. He will leverage his extensive background and passion to ensure core operational integrity for HMD while also contributing to HMD\u2019s mission to improve healthcare outcomes via improved operating models.",
    ],
  },
];

export const allTeamMembers: TeamMember[] = [
  ...executiveBoard,
  ...physicianLeaders,
  ...advisoryBoard,
];
