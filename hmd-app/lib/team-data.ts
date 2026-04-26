export interface TeamMember {
  name: string;
  role: string;
  slug: string;
  category: "executive" | "physician" | "advisory" | "ambassador";
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
    image: "/Bakary Jatta, M.D..jpeg",
    bio: [
      "Dr. Jatta is the Chair and Founder of HMD, a global physician-led platform dedicated to advancing elite medical education, leadership, and innovation. He hails from The Gambia, a beautiful nation in West Africa, where his early exposure to healthcare shaped a lifelong commitment to clinical excellence and systems-level impact.",
      "Driven by a desire to make an indelible contribution to medicine, Dr. Jatta pursued his medical education at the University of The Gambia, earning his degree in Medicine and Surgery after a rigorous academic and clinical training. He briefly practiced at the Edward Francis Small Teaching Hospital \u2014 The Gambia\u2019s largest teaching hospital \u2014 before relocating to the United States.",
      "Dr. Jatta is beginning PGY-1 in internal medicine this July at the Tennova Healthcare in Knoxville, Tennessee. His passion for evidence-based medicine, physician leadership, and healthcare innovation, led to the founding of HMD to train 21st-century physicians.",
      "Through HMD, he is leading a paradigm shift to empower physicians as leaders and executives by integrating medicine with business administration, public health and policy, and health informatics literacy. His vision reflects a conviction that the future of healthcare depends on physicians who are not only clinically astute, but also strategically equipped to shape institutions; one that truly defines modern medicine, both in letter and in spirit.",
    ],
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
    image: "/Tsion Yehualashet Wubshet, M.D.jpeg",
    imageScale: 1.8,
    imagePosition: "75% 15%",
    bio: [
      "Tsion Yehualashet Wubshet, MD is a consultant internist serving as HMD Regional Executive for East Africa. She brings over five years of clinical leadership experience across hospital and community healthcare settings, with a strong track record in managing complex medical conditions, leading multidisciplinary teams, and strengthening health systems in resource-limited environments.",
      "Dr. Wubshet has extensive expertise in internal medicine, infectious disease management, emergency response, chronic disease care, and infection prevention and control. In her clinical leadership roles, she has supervised and mentored physicians, nurses, and medical trainees, led quality improvement initiatives, and contributed to clinical audits and departmental governance. She has also collaborated closely with public health teams to address outbreaks and community health priorities.",
      "Beyond clinical care, Dr. Wubshet is deeply engaged in medical education, research, and professional development. She has participated in evidence-based medical training, mentorship programs, and continuing professional development initiatives, with research interests focused on acute and chronic disease patterns in hospital settings.",
      "As HMD Regional Executive for East Africa, Dr. Wubshet oversees regional strategy, partnerships, and institutional engagement, advancing HMD\u2019s mission to integrate medicine, leadership, and innovation across the continent. She is known for her ethical leadership, cultural competence, operational discipline, and commitment to patient-centered, globally relevant healthcare education.",
      "She is fluent in Amharic and English, with working knowledge of French and Afaan Oromo, and remains a strong advocate for transformative, technology-enabled medicine and sustainable healthcare leadership in Africa.",
    ],
  },
  {
    name: "Chidinma Nwoha, MD, MPH",
    role: "HMD Regional Executive, West Africa",
    slug: "chidinma-nwoha",
    category: "physician",
    image: "/Chidinma Nwoha, MD, MPH.jpeg",
    imagePosition: "center 30%",
    bio: [
      "Dr Chidinma Nwoha is a Nigerian physician and public health professional with over six years of clinical experience, including five years in general medical practice. She earned her medical degree from Obafemi Awolowo University and holds a Master\u2019s degree in Public Health, reflecting a strong commitment to preventive medicine, population health, and health systems strengthening.",
      "Her professional background integrates clinical care with public health strategy, mental health awareness, and wellness promotion, enabling a holistic and patient-centred approach to healthcare delivery. Dr Nwoha\u2019s work is informed by an understanding of both individual-level care and broader social and systemic determinants of health.",
      "Dr Nwoha is recognised for her collaborative leadership style, strong interpersonal skills, and ability to work effectively within multidisciplinary and cross-cultural teams. She is innovative, self-motivated, and highly adaptable, with strong digital literacy and communication capabilities that support her interests in digital health, remote healthcare models, and health education.",
      "In addition to clinical practice, Dr Nwoha is actively engaged in community outreach, health advocacy, and thought leadership through writing. She has contributed articles as an ambassador with The Borgen Project, participating in global discourse on poverty alleviation, public health, and social development.",
      "Her professional interests include leadership development, research methodology, public health practice, and project management. Looking ahead, Dr Nwoha seeks to expand her impact through research, policy engagement, and global health initiatives, with a focus on building sustainable health programs, strengthening mental health services, and improving access to quality healthcare for underserved and vulnerable populations both locally and internationally.",
    ],
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

export const ambassadors: TeamMember[] = [
  {
    name: "Fahmida Zahin, MBBS Candidate",
    role: "HMD Ambassador, United Kingdom",
    slug: "fahmida-zahin",
    category: "ambassador",
    image: "/Fahmida Zahin, MBBS Candidate.jpeg",
    bio: [
      "Fahmida Zahin is a UK-based medical student at the University of Buckingham with a strong focus on neurosurgery, neuroscience, AI-driven medicine, and surgical innovation. Alongside her clinical training, she is deeply engaged in high-impact research, leadership, and global health initiatives, with a particular interest in integrating advanced medical science, technology, and equitable healthcare delivery.",
      "She has authored and co-authored multiple peer-reviewed systematic reviews and meta-analyses across neurosurgery, neurology, oncology, cardiology, and infectious disease, with work presented at leading international conferences including the Society of British Neurological Surgeons, World Congress of Neurology, SCAI, SOHO, and Korean Digestive Disease Week. Her research spans complex and rare conditions such as brainstem cavernous malformations, neurodegenerative disease, and advanced gastrointestinal malignancies, frequently incorporating artificial intelligence, digital biomarkers, and data-driven methodologies to enhance diagnosis, prognosis, and clinical decision-making.",
      "In parallel, Fahmida has held senior leadership roles within medical education, spearheading structured research mentorship, interdisciplinary academic initiatives, and peer-led learning ecosystems. She is actively developing expertise in coding and computational methods, contributing to AI-assisted research pipelines for evidence synthesis, content analysis, and digital health innovation.",
      "Beyond academia, she works at the intersection of medicine, entrepreneurship, and technology, having contributed to AI-enabled health and med-tech platforms. Her intellectual interests in history and philosophy inform her approach to ethics, leadership, and long-term thinking in healthcare.",
      "As an HMD Ambassador for the United Kingdom, Fahmida supports institutional engagement and student outreach in furtherance of HMD\u2019s mission to integrate medicine, leadership, and innovation globally. She is fluent in Assamese and English; professionally proficient in Hindi and Urdu; has working knowledge of Bengali and French; and is currently learning Arabic and Italian.",
    ],
  },
  {
    name: "Melody Olajide, MBBS Candidate",
    role: "HMD Ambassador, West Africa",
    slug: "melody-olajide",
    category: "ambassador",
    image: "/Melody Olajide, MMBS Candidate.jpeg",
    bio: [
      "Melody Olajide is a distinguished medical student and emerging physician-technologist serving as the HMD Ambassador for West Africa. Based at the University of Ibadan, Nigeria, he brings a unique fusion of clinical acumen, digital strategy, and organizational leadership, with a strong track record in managing national healthcare networks and advocating for technological integration in medical education.",
      "Mr. Olajide has extensive expertise in strategic communications, neuro-scientific education, and data-driven leadership. He currently holds executive responsibilities within national medical student governance bodies, where he manages public relations and strategic messaging for thousands of trainees. Simultaneously, he leads technical communities focused on data analysis and programming within the healthcare space, bridging the gap between clinical medicine and health-tech to prepare peers for the future of AI-driven diagnostics.",
      "Beyond his clinical training, Melody is deeply engaged in academic excellence and educational content creation. He leads content strategy for independent neuroscience education platforms, translating complex neuroanatomical concepts into accessible resources. His commitment to academic rigor is evidenced by his recognition in competitive academic forums and his consistent advocacy for \u201cpristine\u201d medical education standards.",
      "As HMD Ambassador for West Africa, Melody focuses on regional advocacy, institutional outreach, and identifying high-potential partnerships. He is tasked with expanding HMD\u2019s footprint across the region, connecting West African medical institutions with global standards of leadership and innovation. He is known for his creative problem-solving, digital proficiency, and dedication to the \u201cPhysician-Executive\u201d model.",
      "He is a vocal advocate for the intersection of design, technology, and medicine, remaining committed to building a pipeline of clinically excellent and technologically savvy leaders across the African continent.",
    ],
  },
  {
    name: "Praise Emmanuel, MD Candidate",
    role: "HMD Ambassador, Southern Europe",
    slug: "praise-emmanuel",
    category: "ambassador",
    image: "/Praise Emmanuel, MD Candidate.jpeg",
    bio: [
      "Praise Emmanuel is a medical student at NOVA Medical School in Lisbon and an aspiring oncologist with a focused interest in the integration of artificial intelligence and digital technologies in clinical medicine. Alongside her medical education, she is pursuing computer science training to support interdisciplinary innovation in healthcare systems and data-driven diagnostics.",
      "She serves as an HMD Ambassador for Southern Europe with HMD Global, where she contributes to initiatives that promote technology-enabled medical education and cross-regional collaboration. She is the founder of Wellness Africa, a health advocacy platform dedicated to preventive medicine, early screening awareness, and accessible public health education. In Portugal, she collaborates with Marco Mundo to support free health screenings for the elderly population, strengthening community-based preventive care.",
      "Beyond her academic and clinical interests, Praise mentors pre-teens and teenagers and works as a science tutor, encouraging youth engagement in STEM education. She is fluent in English and Igbo and professionally fluent in Portuguese and Russian, allowing her to work effectively across multicultural healthcare environments.",
    ],
  },
];

export const advisoryBoard: TeamMember[] = [
  {
    name: "Howard Maibach, M.D., FAAD",
    role: "Advisory Board Member, HMD",
    slug: "howard-maibach",
    category: "advisory",
    image: "/Howard Maibach.jpeg",
    bio: [
      "Dr Howard Maibach is a dermatologist with expertise in treating contact dermatitis (a rash caused by touching an irritating substance) and occupational dermatitis (a rash resulting from workplace exposure to an irritating substance). His specialities include allergic skin disorders and skin conditions caused by exposure to toxic substances. He also has an interest in dermatopharmacology, the study of medications for skin disorders.",
      "Prof. Maibach earned his medical degree from Tulane University School of Medicine. He completed a residency as well as a fellowship in dermatology at the Hospital of the University of Pennsylvania.",
      "Prof. Maibach has served on the editorial boards of more than 30 scientific journals. He is a member of 19 professional societies, including the American Academy of Dermatology, San Francisco Dermatological Society and International Commission on Occupational Health.",
    ],
  },
  {
    name: "Tamesh Sivaguru",
    role: "Technical Board Advisor, HMD",
    slug: "tamesh-sivaguru",
    category: "advisory",
    image: "/Tamesh Sivaguru.jpeg",
    imageScale: 1.4,
    imagePosition: "center 40%",
    bio: [
      "Tamesh Sivaguru is an Enterprise Software Engineering Consultant and Physicist with a career spanning nearly 15 years as a high-stakes independent contractor and strategic consultant. Originally trained in Physics with a focus on Nuclear Astrophysics, Tamesh applies scientific rigor to the design of high-performance distributed systems and quantitative risk infrastructure.",
      "His professional trajectory began in the demanding environment of Investment Banking, transitioning into a significant tenure within the Commodities sector, and recently branching into the Insurance industry. Having led technical strategy for premier global institutions\u2014including Willis Towers Watson, Anglo American, and Mitsubishi UFJ Financial Group\u2014he specializes in transforming complex business domains into robust enterprise assets. His expertise lies in .NET architecture, Azure cloud orchestration, and pioneering AI-driven development workflows to ensure institutional-level scalability.",
    ],
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
  ...ambassadors,
  ...advisoryBoard,
];
