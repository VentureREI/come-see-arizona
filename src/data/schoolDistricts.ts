import type { SchoolDistrict } from './types';

export const SCHOOL_DISTRICTS: SchoolDistrict[] = [
  // ============================================================
  // MARICOPA COUNTY
  // ============================================================
  {
    slug: 'scottsdale-unified',
    name: 'Scottsdale Unified School District',
    citySlugs: ['scottsdale', 'phoenix', 'paradise-valley'],
    countySlug: 'maricopa',
    rating: 'A',
    totalSchools: 30,
    studentCount: 23000,
    description:
      'Scottsdale Unified has long been one of the most respected districts in Arizona, blending rigorous academics with outstanding arts and athletics. Chaparral High School and Desert Mountain High School consistently rank among the top public schools statewide, and Saguaro High School fields championship-caliber athletic programs year after year. The district offers International Baccalaureate coursework, robust STEM electives, and gifted-education tracks that begin in elementary school. Families also appreciate smaller specialty campuses like Coronado High School and the hands-on learning environment at Kiva Elementary. Strong parent involvement and well-funded programs help keep graduation rates well above the state average.',
    zipCodes: ['85250', '85251', '85253', '85254', '85255', '85257', '85258', '85259', '85260', '85262', '85266'],
    notableSchools: ['Chaparral High School', 'Desert Mountain High School', 'Saguaro High School', 'Coronado High School', 'Kiva Elementary'],
    highlights: [
      'International Baccalaureate programs at multiple campuses',
      'Consistently rated A by the Arizona Department of Education',
      'Championship athletics programs across several sports',
      'Strong gifted-education pipeline from elementary through high school',
      'High graduation and college-enrollment rates'
    ]
  },
  {
    slug: 'paradise-valley-unified',
    name: 'Paradise Valley Unified School District',
    citySlugs: ['phoenix', 'scottsdale', 'paradise-valley', 'cave-creek'],
    countySlug: 'maricopa',
    rating: 'A',
    totalSchools: 47,
    studentCount: 31000,
    description:
      'Paradise Valley Unified is one of the largest A-rated districts in Arizona, serving families from north Phoenix through Cave Creek. Pinnacle High School regularly appears on national rankings, while Horizon High School and Shadow Mountain High School offer diverse Advanced Placement catalogs and career and technical education pathways. The district is known for its innovative magnet programs, dual-language immersion schools, and a growing emphasis on STEM education. North Canyon High School brings a strong performing arts tradition, and Paradise Valley High School anchors the community with decades of alumni pride. With nearly fifty campuses, PV Unified balances neighborhood-school charm with big-district resources.',
    zipCodes: ['85020', '85022', '85023', '85024', '85027', '85028', '85032', '85050', '85054', '85253', '85254', '85255', '85331'],
    notableSchools: ['Pinnacle High School', 'Paradise Valley High School', 'Shadow Mountain High School', 'Horizon High School', 'North Canyon High School'],
    highlights: [
      'Multiple nationally ranked high schools',
      'Magnet and dual-language immersion programs',
      'Broad Advanced Placement and career tech offerings',
      'Strong performing and visual arts departments',
      'Consistent A rating from the state'
    ]
  },
  {
    slug: 'phoenix-union',
    name: 'Phoenix Union High School District',
    citySlugs: ['phoenix', 'tempe', 'guadalupe'],
    countySlug: 'maricopa',
    rating: 'B',
    totalSchools: 22,
    studentCount: 27000,
    description:
      'Phoenix Union High School District is a high-school-only district and one of the oldest and most storied in Arizona, stretching across much of central and south Phoenix. Central High School, founded in 1895, carries deep community roots, while North High School and Camelback High School have been launching pads for generations of local leaders. The district operates several specialty campuses focused on bioscience, coding, and the arts. Trevor Browne High School and Alhambra High School add strong vocational and dual-enrollment programs. Phoenix Union has invested heavily in college-readiness initiatives, and its partnership with local community colleges gives students a head start on higher education.',
    zipCodes: ['85003', '85004', '85006', '85007', '85008', '85009', '85012', '85013', '85014', '85015', '85016', '85017', '85018', '85019', '85020', '85034', '85040', '85041', '85042'],
    notableSchools: ['Central High School', 'North High School', 'Camelback High School', 'Trevor Browne High School', 'Alhambra High School'],
    highlights: [
      'Historic district with roots dating to 1895',
      'Specialty campuses in bioscience and coding',
      'Dual-enrollment partnerships with community colleges',
      'Strong vocational and career tech education tracks',
      'Significant investment in college-readiness programs'
    ]
  },
  {
    slug: 'mesa-unified',
    name: 'Mesa Unified School District (Mesa Public Schools)',
    citySlugs: ['mesa', 'tempe'],
    countySlug: 'maricopa',
    rating: 'B+',
    totalSchools: 83,
    studentCount: 62000,
    description:
      'Mesa Public Schools is the largest district in Arizona by campus count, educating over 62,000 students across more than eighty schools. Mountain View High School and Red Mountain High School are perennial academic and athletic powerhouses, while Westwood High School and Mesa High School keep strong traditions alive in the heart of Mesa. Franklin at Brimhall offers a sought-after traditional-school model, and Skyline High School continues to expand advanced coursework options. The district runs dedicated academies for aerospace, medical professions, and information technology, giving students real-world experience before they even graduate. Mesa Public Schools is a cornerstone of the East Valley community.',
    zipCodes: ['85201', '85202', '85203', '85204', '85205', '85206', '85207', '85208', '85209', '85210', '85212', '85213', '85215'],
    notableSchools: ['Mountain View High School', 'Red Mountain High School', 'Westwood High School', 'Mesa High School', 'Skyline High School'],
    highlights: [
      'Largest district in Arizona by number of campuses',
      'Dedicated career academies in aerospace and medical fields',
      'Franklin at Brimhall traditional-school model',
      'Championship athletics at multiple high schools',
      'Extensive special education and ESL support services'
    ]
  },
  {
    slug: 'gilbert-unified',
    name: 'Gilbert Unified School District (Gilbert Public Schools)',
    citySlugs: ['gilbert', 'mesa', 'queen-creek'],
    countySlug: 'maricopa',
    rating: 'A',
    totalSchools: 42,
    studentCount: 38000,
    description:
      'Gilbert Public Schools has earned its A rating through a relentless focus on student achievement and innovative instruction. Highland High School and Perry High School frequently top statewide lists for AP exam pass rates, and Mesquite High School brings award-winning fine arts programs. Campo Verde High School anchors the rapidly growing southeast corner of Gilbert with modern facilities and strong STEM coursework. Gilbert High School, the district original campus, remains a point of community pride. The district also supports robust special education services, full-day kindergarten at every elementary site, and competitive extracurricular programs that keep families engaged from enrollment through graduation day.',
    zipCodes: ['85233', '85234', '85295', '85296', '85297', '85298'],
    notableSchools: ['Gilbert High School', 'Highland High School', 'Perry High School', 'Mesquite High School', 'Campo Verde High School'],
    highlights: [
      'Consistent A rating from Arizona Department of Education',
      'High AP exam pass rates districtwide',
      'Award-winning fine arts at Mesquite High School',
      'Full-day kindergarten at every elementary campus',
      'Modern STEM facilities at Campo Verde High School'
    ]
  },
  {
    slug: 'chandler-unified',
    name: 'Chandler Unified School District',
    citySlugs: ['chandler', 'gilbert', 'phoenix', 'mesa'],
    countySlug: 'maricopa',
    rating: 'A',
    totalSchools: 44,
    studentCount: 45000,
    description:
      'Chandler Unified is widely regarded as one of the best large districts in the state, educating 45,000 students across forty-four campuses. Hamilton High School is a flagship known for nationally competitive academic decathlon teams and powerhouse athletics. Basha High School and Chandler High School round out a trio of high-performing high schools, each offering deep Advanced Placement catalogs. Arizona College Prep provides a college-preparatory environment for students seeking an accelerated path. The district invests heavily in technology integration, 1-to-1 device programs, and project-based learning. Strong community partnerships with Chandler employers like Intel and Microchip Technology give students real-world career exposure.',
    zipCodes: ['85224', '85225', '85226', '85248', '85249', '85286'],
    notableSchools: ['Hamilton High School', 'Basha High School', 'Chandler High School', 'Arizona College Prep', 'Perry High School'],
    highlights: [
      'Hamilton High School nationally ranked in academics and athletics',
      '1-to-1 student device program across all campuses',
      'Partnerships with Intel and local tech employers',
      'Deep Advanced Placement catalog at every high school',
      'Project-based learning integrated into core curriculum'
    ]
  },
  {
    slug: 'tempe-union',
    name: 'Tempe Union High School District',
    citySlugs: ['tempe', 'chandler', 'phoenix', 'ahwatukee'],
    countySlug: 'maricopa',
    rating: 'A',
    totalSchools: 9,
    studentCount: 14000,
    description:
      'Tempe Union High School District may be compact with just nine campuses, but it punches well above its weight. Corona del Sol High School and Desert Vista High School are both recognized as top-tier schools statewide, earning accolades for academics, athletics, and student leadership. Mountain Pointe High School and Marcos de Niza High School bring strong career and technical education options, while McClintock High School offers an International Baccalaureate programme that draws families from across the region. The district benefits from its proximity to Arizona State University, giving students access to dual-enrollment courses and campus resources. Graduation rates consistently exceed the state average by a wide margin.',
    zipCodes: ['85281', '85282', '85283', '85284', '85044', '85048', '85226'],
    notableSchools: ['Corona del Sol High School', 'Desert Vista High School', 'Mountain Pointe High School', 'Marcos de Niza High School', 'McClintock High School'],
    highlights: [
      'International Baccalaureate programme at McClintock High School',
      'Proximity to ASU enables dual-enrollment opportunities',
      'Corona del Sol and Desert Vista among top schools statewide',
      'Strong career and technical education pathways',
      'Graduation rates well above the Arizona average'
    ]
  },
  {
    slug: 'tempe-elementary',
    name: 'Tempe Elementary School District',
    citySlugs: ['tempe'],
    countySlug: 'maricopa',
    rating: 'B+',
    totalSchools: 22,
    studentCount: 12000,
    description:
      'Tempe Elementary School District has served the heart of Tempe for well over a century, building a reputation for solid foundational instruction and warm, welcoming campuses. Ward Traditional Academy attracts families who want a structured, back-to-basics approach, while Holdeman Elementary and Rover Elementary offer innovative project-based models. Curry Elementary is recognized for its inclusive community feel and strong parent engagement. Connolly Middle School prepares students for the rigors of high school with honors-track options and extracurricular clubs. The district offers free preschool programs, extensive English-learner support, and after-school enrichment, making it a well-rounded choice for Tempe families raising young learners.',
    zipCodes: ['85281', '85282', '85283'],
    notableSchools: ['Holdeman Elementary', 'Rover Elementary', 'Curry Elementary', 'Ward Traditional Academy', 'Connolly Middle School'],
    highlights: [
      'Ward Traditional Academy offers a structured back-to-basics model',
      'Free preschool programs for qualifying families',
      'Over a century of service to the Tempe community',
      'Extensive English-learner and special education support',
      'After-school enrichment programs at most campuses'
    ]
  },
  {
    slug: 'kyrene',
    name: 'Kyrene School District',
    citySlugs: ['tempe', 'chandler', 'phoenix'],
    countySlug: 'maricopa',
    rating: 'A',
    totalSchools: 25,
    studentCount: 18000,
    description:
      'Kyrene School District is a highly sought-after elementary and middle school district stretching across south Tempe, west Chandler, and Ahwatukee. Kyrene de la Mirada and Kyrene del Norte consistently earn top marks for reading and math proficiency, and Aprende Middle School prepares students exceptionally well for high school honors tracks. Altadeña Middle School rounds out the middle school options with a focus on STEM and the arts. Kyrene de los Lagos is beloved for its community-oriented campus culture. The district emphasizes technology literacy from kindergarten onward, provides robust gifted services, and offers dual-language immersion at select schools. Parents frequently cite Kyrene as a key reason they chose their neighborhood.',
    zipCodes: ['85226', '85282', '85283', '85284', '85044', '85048'],
    notableSchools: ['Kyrene de la Mirada', 'Kyrene del Norte', 'Aprende Middle School', 'Altadeña Middle School', 'Kyrene de los Lagos'],
    highlights: [
      'A-rated district with strong reading and math proficiency',
      'Dual-language immersion options at select campuses',
      'Technology literacy curriculum starting in kindergarten',
      'Robust gifted-education services districtwide',
      'Frequently cited by parents as a top reason for choosing their neighborhood'
    ]
  },
  {
    slug: 'deer-valley-unified',
    name: 'Deer Valley Unified School District',
    citySlugs: ['phoenix', 'glendale', 'peoria', 'anthem'],
    countySlug: 'maricopa',
    rating: 'B+',
    totalSchools: 38,
    studentCount: 33000,
    description:
      'Deer Valley Unified covers a wide swath of northwest Phoenix and the Anthem community, giving families access to nearly forty campuses. Sandra Day O\'Connor High School, named for the Supreme Court justice, is known for outstanding academics and civics education. Boulder Creek High School brings championship sports and a growing fine arts department, while Barry Goldwater High School has deep roots in the community dating back decades. Mountain Ridge High School adds modern facilities and popular career tech pathways. Deer Valley High School, the district namesake, anchors the south end with strong dual-enrollment and honors programs. The district has invested in new construction to keep pace with rapid residential growth in the Anthem and Norterra corridors.',
    zipCodes: ['85024', '85027', '85029', '85051', '85053', '85083', '85085', '85086', '85087', '85310'],
    notableSchools: ['Barry Goldwater High School', 'Sandra Day O\'Connor High School', 'Boulder Creek High School', 'Deer Valley High School', 'Mountain Ridge High School'],
    highlights: [
      'Sandra Day O\'Connor High School known for civics and academics',
      'Rapid campus expansion in Anthem and Norterra areas',
      'Strong career and technical education pathways',
      'Championship athletics at Boulder Creek High School',
      'Dual-enrollment and honors programs across all high schools'
    ]
  },
  {
    slug: 'peoria-unified',
    name: 'Peoria Unified School District',
    citySlugs: ['peoria', 'glendale', 'surprise', 'sun-city', 'sun-city-west'],
    countySlug: 'maricopa',
    rating: 'B+',
    totalSchools: 42,
    studentCount: 37000,
    description:
      'Peoria Unified School District spans a vast footprint from central Peoria through Surprise and the Sun Cities, educating 37,000 students at forty-two campuses. Liberty High School leads the way with strong AP offerings and competitive athletics, and Sunrise Mountain High School has quickly built a reputation for academic excellence in the west valley. Centennial High School and Cactus High School provide solid college-prep tracks alongside vocational programs. Ironwood High School rounds out the lineup with specialized business and entrepreneurship courses. The district offers open enrollment, meaning families outside its boundaries can apply, and it runs popular online learning options for flexible scheduling. Peoria Unified continues to grow alongside the booming west side of the metro.',
    zipCodes: ['85345', '85381', '85382', '85383', '85351', '85372', '85373', '85374', '85375', '85379', '85388'],
    notableSchools: ['Liberty High School', 'Sunrise Mountain High School', 'Centennial High School', 'Cactus High School', 'Ironwood High School'],
    highlights: [
      'Open enrollment available to families outside district boundaries',
      'Liberty High School recognized for AP offerings and athletics',
      'Online learning options for flexible scheduling',
      'Rapid growth alongside west valley development',
      'Business and entrepreneurship courses at Ironwood High School'
    ]
  },
  {
    slug: 'glendale-union',
    name: 'Glendale Union High School District',
    citySlugs: ['glendale', 'phoenix'],
    countySlug: 'maricopa',
    rating: 'B',
    totalSchools: 10,
    studentCount: 16000,
    description:
      'Glendale Union High School District operates ten high school campuses across Glendale and northwest Phoenix, serving about 16,000 students. Thunderbird High School is the district flagship, well known for its marching band, strong academics, and deep community ties. Apollo High School and Moon Valley High School carry proud athletic traditions, while Independence High School has built a reputation for its career and technical education programs in health sciences and engineering. Greenway High School and Washington High School in Glendale offer honors tracks and diverse elective choices. The district places a strong emphasis on college readiness, providing SAT and ACT preparation resources at every campus and maintaining active partnerships with local community colleges for dual enrollment.',
    zipCodes: ['85301', '85302', '85303', '85304', '85305', '85306', '85307', '85308', '85021', '85029', '85051'],
    notableSchools: ['Thunderbird High School', 'Apollo High School', 'Independence High School', 'Greenway High School', 'Moon Valley High School'],
    highlights: [
      'Thunderbird High School known for marching band and academics',
      'Career tech programs in health sciences and engineering',
      'SAT and ACT prep resources at every campus',
      'Dual-enrollment partnerships with local community colleges',
      'Diverse elective offerings across all ten campuses'
    ]
  },
  {
    slug: 'glendale-elementary',
    name: 'Glendale Elementary School District',
    citySlugs: ['glendale'],
    countySlug: 'maricopa',
    rating: 'B',
    totalSchools: 20,
    studentCount: 13000,
    description:
      'Glendale Elementary School District provides K-8 education across twenty campuses in central Glendale, one of the oldest settled areas in the west valley. Bicentennial South Elementary and Discovery Elementary are standouts for reading proficiency and hands-on science instruction. Glendale Landmark School operates as a traditional academy with uniforms and structured learning, attracting families who prefer a more conventional classroom environment. The district has invested in updating aging facilities while preserving the neighborhood feel that parents value. Free breakfast and lunch programs serve a large portion of the student body, and after-school tutoring is available at most sites. Glendale Elementary continues to strengthen its bilingual and English-learner programs to reflect the community it serves.',
    zipCodes: ['85301', '85302', '85303', '85304'],
    notableSchools: ['Bicentennial South Elementary', 'Discovery Elementary', 'Glendale Landmark School'],
    highlights: [
      'Traditional academy option at Glendale Landmark School',
      'Free breakfast and lunch programs widely available',
      'Strong bilingual and English-learner support',
      'Facility upgrades across aging campuses',
      'After-school tutoring at most sites'
    ]
  },
  {
    slug: 'washington-elementary',
    name: 'Washington Elementary School District',
    citySlugs: ['phoenix', 'glendale'],
    countySlug: 'maricopa',
    rating: 'B+',
    totalSchools: 32,
    studentCount: 24000,
    description:
      'Washington Elementary School District is one of the larger K-8 districts in central Phoenix and north Glendale, operating thirty-two schools for about 24,000 students. Royal Palm Middle School is a district jewel, known for its honors program and competitive academic teams. Orangewood Elementary draws families with its gifted cluster grouping, and Desert View Elementary earns praise for strong parent-teacher collaboration. Mountain Sky Middle School rounds out the middle school lineup with robust STEM electives. The district runs a popular open-enrollment policy that lets families across the area apply to specialty campuses. Music, art, and physical education are offered at every school, which is increasingly rare in districts of this size.',
    zipCodes: ['85013', '85015', '85017', '85019', '85021', '85029', '85051', '85053'],
    notableSchools: ['Royal Palm Middle School', 'Orangewood Elementary', 'Desert View Elementary', 'Mountain Sky Middle School'],
    highlights: [
      'Open-enrollment policy for specialty campuses',
      'Music, art, and PE offered at every school',
      'Gifted cluster grouping at Orangewood Elementary',
      'Honors program and academic teams at Royal Palm Middle School',
      'Strong parent-teacher collaboration districtwide'
    ]
  },
  {
    slug: 'cartwright',
    name: 'Cartwright Elementary School District',
    citySlugs: ['phoenix', 'tolleson', 'avondale'],
    countySlug: 'maricopa',
    rating: 'C+',
    totalSchools: 20,
    studentCount: 18000,
    description:
      'Cartwright Elementary School District serves a diverse student population of 18,000 across twenty campuses in southwest Phoenix, Tolleson, and parts of Avondale. Cartwright Elementary, the district namesake, has a long history in the community. Desert Oasis Elementary and Starlight Park Elementary are recognized for their welcoming environments and improving test scores. The district has focused on literacy initiatives in recent years, partnering with Read On Arizona to boost early reading outcomes. Free meal programs, extended-day options, and summer enrichment camps help support working families. Cartwright also provides dual-language classrooms at several schools, reflecting the bilingual character of the neighborhoods it serves. Community engagement events and family resource nights keep parents connected to campus life.',
    zipCodes: ['85009', '85031', '85033', '85035', '85037', '85043', '85353'],
    notableSchools: ['Cartwright Elementary', 'Desert Oasis Elementary', 'Starlight Park Elementary'],
    highlights: [
      'Dual-language classrooms at several campuses',
      'Partnership with Read On Arizona for literacy improvement',
      'Free meal programs and extended-day options',
      'Summer enrichment camps for students',
      'Family resource nights and community engagement events'
    ]
  },
  {
    slug: 'creighton',
    name: 'Creighton Elementary School District',
    citySlugs: ['phoenix'],
    countySlug: 'maricopa',
    rating: 'B',
    totalSchools: 11,
    studentCount: 7000,
    description:
      'Creighton Elementary School District is a small but distinctive K-8 district nestled in the Biltmore and Arcadia corridors of central Phoenix. Biltmore Preparatory Academy is the district crown jewel, consistently earning top marks and attracting families from across the city through open enrollment. Loma Linda Elementary and Simis Elementary offer strong foundational instruction with an emphasis on critical thinking, and Griffith Elementary adds a nurturing environment for younger learners. Despite its modest size, Creighton punches above its weight with enrichment programs, art and music instruction at every campus, and a dedicated gifted program. The district benefits from active parent organizations that fund classroom resources and field trip experiences throughout the year.',
    zipCodes: ['85006', '85008', '85012', '85014', '85016', '85018'],
    notableSchools: ['Biltmore Preparatory Academy', 'Loma Linda Elementary', 'Simis Elementary', 'Griffith Elementary'],
    highlights: [
      'Biltmore Preparatory Academy is a top-rated open-enrollment campus',
      'Located in the desirable Biltmore and Arcadia corridors',
      'Art and music instruction at every school',
      'Dedicated gifted program districtwide',
      'Active parent organizations fund enrichment opportunities'
    ]
  },
  {
    slug: 'roosevelt-district',
    name: 'Roosevelt Elementary School District',
    citySlugs: ['phoenix'],
    countySlug: 'maricopa',
    rating: 'C+',
    totalSchools: 22,
    studentCount: 12000,
    description:
      'Roosevelt Elementary School District is one of the most historic districts in Phoenix, serving the downtown core and surrounding neighborhoods. Roosevelt Elementary, the district namesake, sits in the heart of the Roosevelt Row arts district and embodies the area\'s creative spirit. Garfield Elementary and Kenilworth Middle School are community anchors that have educated generations of Phoenix families. The district has made significant strides in improving reading and math outcomes through targeted intervention programs and smaller class sizes. Wraparound services including school-based counseling, health clinics, and free meals support students beyond the classroom. Roosevelt is committed to bilingual education, with several campuses offering dual-language tracks from kindergarten onward.',
    zipCodes: ['85003', '85004', '85006', '85007', '85009', '85034'],
    notableSchools: ['Roosevelt Elementary', 'Garfield Elementary', 'Kenilworth Middle School'],
    highlights: [
      'Historic district serving the downtown Phoenix core',
      'School-based health clinics and counseling services',
      'Dual-language tracks from kindergarten at several campuses',
      'Targeted reading and math intervention programs',
      'Located near the vibrant Roosevelt Row arts district'
    ]
  },
  {
    slug: 'madison',
    name: 'Madison Elementary School District',
    citySlugs: ['phoenix'],
    countySlug: 'maricopa',
    rating: 'A',
    totalSchools: 8,
    studentCount: 6000,
    description:
      'Madison Elementary School District is a small, elite K-8 district in the heart of central Phoenix that families routinely move across town to access. Madison Highland Prep operates as a high-performing STEM-focused school that produces standout science fair and robotics competitors. Madison Simis Elementary and Madison Traditional Academy draw families who want structured academics with high expectations, and Madison Rose Lane is prized for its warm, community-driven culture. With only eight campuses and about 6,000 students, the district fosters close relationships between teachers, parents, and students. Every school offers gifted pull-out services, and the district regularly outperforms much larger neighbors on state assessments.',
    zipCodes: ['85012', '85014', '85016', '85018', '85020'],
    notableSchools: ['Madison Highland Prep', 'Madison Simis Elementary', 'Madison Traditional Academy', 'Madison Rose Lane'],
    highlights: [
      'A-rated district with state assessment scores above larger neighbors',
      'Madison Highland Prep excels in STEM and robotics',
      'Gifted pull-out services at every campus',
      'Small district fosters close teacher-parent relationships',
      'Families frequently relocate specifically for Madison schools'
    ]
  },
  {
    slug: 'higley-unified',
    name: 'Higley Unified School District',
    citySlugs: ['gilbert', 'queen-creek', 'mesa'],
    countySlug: 'maricopa',
    rating: 'A',
    totalSchools: 13,
    studentCount: 14000,
    description:
      'Higley Unified School District has quickly risen to prominence in southeast Gilbert and the Queen Creek corridor, earning an A rating as one of the fastest-growing districts in the state. Higley High School anchors the community with strong academics, spirited traditions, and competitive athletics. Williams Field High School has earned its own identity with popular CTE pathways and a passionate student body. Sossaman Middle School bridges the elementary and high school years with honors coursework and a focus on leadership development. The district builds brand-new schools to keep pace with housing construction, meaning students benefit from modern classrooms and up-to-date technology. Families appreciate the combination of small-town feel and big-district academic resources.',
    zipCodes: ['85212', '85295', '85297', '85298'],
    notableSchools: ['Higley High School', 'Williams Field High School', 'Sossaman Middle School'],
    highlights: [
      'One of the fastest-growing districts in Arizona',
      'A-rated with modern, recently built campuses',
      'Strong CTE pathways at Williams Field High School',
      'Leadership development focus at Sossaman Middle School',
      'Small-town atmosphere with robust academic resources'
    ]
  },
  {
    slug: 'queen-creek-unified',
    name: 'Queen Creek Unified School District',
    citySlugs: ['queen-creek', 'san-tan-valley'],
    countySlug: 'maricopa',
    rating: 'A-',
    totalSchools: 12,
    studentCount: 11000,
    description:
      'Queen Creek Unified School District captures the spirit of a rapidly growing southeastern valley community that still values its agricultural heritage. Queen Creek High School is the district flagship, fielding competitive sports teams and offering a wide array of AP and honors courses. Crismon High School, the district newer campus, opened with state-of-the-art facilities and has already built strong academic programs. The district emphasizes character education and community service alongside traditional academics, giving students a well-rounded experience. With about 11,000 students across twelve schools, Queen Creek Unified maintains manageable class sizes and personal attention. The FFA and agriscience programs reflect the town\'s ranching roots and remain a point of local pride.',
    zipCodes: ['85140', '85142'],
    notableSchools: ['Queen Creek High School', 'Crismon High School', 'Benjamin Franklin Charter School (nearby)'],
    highlights: [
      'State-of-the-art facilities at Crismon High School',
      'Strong FFA and agriscience programs reflecting local heritage',
      'Character education woven into all grade levels',
      'Manageable class sizes across twelve campuses',
      'Rapidly growing with new campus construction underway'
    ]
  },
  {
    slug: 'florence-unified',
    name: 'Florence Unified School District',
    citySlugs: ['florence', 'anthem', 'coolidge'],
    countySlug: 'pinal',
    rating: 'B',
    totalSchools: 12,
    studentCount: 9500,
    description:
      'Florence Unified School District stretches from the historic town of Florence through the Anthem at Merrill Ranch community, serving about 9,500 students at twelve campuses. Poston Butte High School is the district largest campus and a hub for athletics and performing arts in Pinal County. Florence High School, one of the oldest schools in Arizona, carries a proud tradition that dates back to territorial days. Anthem Preparatory Academy provides a rigorous college-prep curriculum in the master-planned Anthem community. The district has grown rapidly alongside new housing development and has responded by opening modern elementary schools with technology-rich classrooms. Agriculture and career tech programs remain popular, connecting students to the area\'s farming and ranching heritage.',
    zipCodes: ['85132', '85128'],
    notableSchools: ['Poston Butte High School', 'Florence High School', 'Anthem Preparatory Academy'],
    highlights: [
      'Florence High School among the oldest in Arizona',
      'Rapid growth driven by new residential development',
      'Modern elementary campuses with technology-rich classrooms',
      'Agriculture and career tech programs reflecting local heritage',
      'Anthem Preparatory Academy offers rigorous college-prep curriculum'
    ]
  },
  {
    slug: 'jo-combs-unified',
    name: 'J.O. Combs Unified School District',
    citySlugs: ['san-tan-valley', 'queen-creek'],
    countySlug: 'pinal',
    rating: 'B+',
    totalSchools: 10,
    studentCount: 8500,
    description:
      'J.O. Combs Unified School District serves the San Tan Valley area and parts of Queen Creek in Pinal County, educating roughly 8,500 students across ten campuses. Combs High School is the community anchor, known for spirited homecoming traditions, competitive athletics, and an expanding menu of career and technical education courses. Ellsworth Elementary and Simonton Elementary are both praised for their welcoming staff and reading-focused instruction. CTA Liberty, a career and technology campus, gives older students hands-on experience in fields like automotive, culinary arts, and health sciences. The district has built several new schools in recent years to keep up with explosive population growth. Families appreciate the responsive leadership and the tight-knit school culture that comes with a mid-size district.',
    zipCodes: ['85140', '85143'],
    notableSchools: ['Combs High School', 'Ellsworth Elementary', 'Simonton Elementary', 'CTA Liberty'],
    highlights: [
      'CTA Liberty campus for career and technology education',
      'New schools built to accommodate rapid population growth',
      'Reading-focused instruction at elementary campuses',
      'Hands-on CTE in automotive, culinary arts, and health sciences',
      'Tight-knit school culture in a growing community'
    ]
  },
  {
    slug: 'casa-grande-union',
    name: 'Casa Grande Union High School District',
    citySlugs: ['casa-grande', 'coolidge', 'eloy'],
    countySlug: 'pinal',
    rating: 'B-',
    totalSchools: 5,
    studentCount: 7000,
    description:
      'Casa Grande Union High School District operates five campuses serving high school students across the Casa Grande, Coolidge, and Eloy communities. Casa Grande Union High School is the longtime heart of the district, with generations of alumni who remain active in the community. Vista Grande High School opened more recently to relieve overcrowding and offers modern science labs and athletic facilities. The district provides career and technical education in agriculture, welding, and health professions, giving students practical skills alongside college-prep coursework. JTED partnerships expand vocational training options even further. While the district works to raise its academic profile, it benefits from strong school spirit, Friday night football traditions, and dedicated teachers who know their students by name.',
    zipCodes: ['85122', '85128', '85131', '85193', '85194'],
    notableSchools: ['Casa Grande Union High School', 'Vista Grande High School'],
    highlights: [
      'Career tech programs in agriculture, welding, and health',
      'Vista Grande High School features modern facilities',
      'JTED partnerships for expanded vocational training',
      'Strong Friday night football and school spirit traditions',
      'Dedicated teachers in a close-knit community setting'
    ]
  },
  {
    slug: 'casa-grande-elementary',
    name: 'Casa Grande Elementary School District',
    citySlugs: ['casa-grande'],
    countySlug: 'pinal',
    rating: 'C+',
    totalSchools: 10,
    studentCount: 6000,
    description:
      'Casa Grande Elementary School District provides K-8 education to about 6,000 students across ten schools in the heart of Casa Grande. Villago Middle School is the district largest campus and serves as a transition point where students can explore elective interests before heading to high school. Saguaro Elementary and Cottonwood Elementary are community staples with experienced teaching staffs and active parent groups. The district has prioritized literacy coaching and math intervention to lift student achievement scores, and recent investments in classroom technology are beginning to show results. Free and reduced-price meal programs serve the majority of students, and the district offers extended learning time and summer school to help close achievement gaps.',
    zipCodes: ['85122', '85193', '85194'],
    notableSchools: ['Villago Middle School', 'Saguaro Elementary', 'Cottonwood Elementary'],
    highlights: [
      'Literacy coaching and math intervention programs',
      'Recent classroom technology investments showing results',
      'Extended learning time and summer school available',
      'Free and reduced-price meals serve the majority of students',
      'Experienced teaching staffs at Saguaro and Cottonwood Elementary'
    ]
  },
  {
    slug: 'maricopa-unified',
    name: 'Maricopa Unified School District',
    citySlugs: ['maricopa-city'],
    countySlug: 'pinal',
    rating: 'B',
    totalSchools: 10,
    studentCount: 9000,
    description:
      'Maricopa Unified School District serves the fast-growing City of Maricopa in Pinal County, educating about 9,000 students across ten campuses. Maricopa High School is the community centerpiece, offering a broad range of AP courses, competitive athletics, and popular performing arts programs. Desert Wind Middle School bridges elementary and high school with a focus on academic rigor and character development. Butterfield Elementary and Saddleback Elementary provide strong foundational instruction in master-planned neighborhoods filled with young families. The district has opened new schools steadily as housing construction continues, and it maintains a student-to-teacher ratio that allows for more personalized attention. Community pride runs deep, with parents and local businesses supporting school events and booster programs throughout the year.',
    zipCodes: ['85138', '85139'],
    notableSchools: ['Maricopa High School', 'Desert Wind Middle School', 'Butterfield Elementary', 'Saddleback Elementary'],
    highlights: [
      'New campuses opening to match rapid city growth',
      'Broad AP course offerings at Maricopa High School',
      'Strong community support from parents and local businesses',
      'Performing arts programs drawing regional recognition',
      'Favorable student-to-teacher ratios for personalized learning'
    ]
  },

  // ============================================================
  // PIMA COUNTY
  // ============================================================
  {
    slug: 'tucson-unified',
    name: 'Tucson Unified School District',
    citySlugs: ['tucson', 'south-tucson'],
    countySlug: 'pima',
    rating: 'B',
    totalSchools: 89,
    studentCount: 42000,
    description:
      'Tucson Unified School District is the largest district in southern Arizona, operating eighty-nine campuses for about 42,000 students. University High School routinely ranks as one of the top public schools in the entire country, drawing academically driven students from across the city. Tucson High Magnet School, the district oldest campus, offers specialized academies in law, medicine, and engineering. Catalina High School serves the east side with strong community ties, and Roskruge Bilingual K-8 is a nationally recognized dual-language school. The district offers open enrollment, magnet programs, and a wide variety of career and technical courses. Despite its size, TUSD has made meaningful progress on equity initiatives, restorative practices, and culturally responsive curriculum in recent years.',
    zipCodes: ['85701', '85702', '85704', '85705', '85706', '85710', '85711', '85712', '85713', '85714', '85716', '85719', '85726', '85730', '85745', '85746'],
    notableSchools: ['Tucson High Magnet School', 'University High School', 'Catalina High School', 'Tucson Magnet High School', 'Roskruge Bilingual K-8'],
    highlights: [
      'University High School ranked among top public schools nationally',
      'Magnet academies in law, medicine, and engineering',
      'Roskruge Bilingual K-8 nationally recognized for dual-language education',
      'Equity initiatives and culturally responsive curriculum',
      'Largest district in southern Arizona with extensive open enrollment'
    ]
  },
  {
    slug: 'amphitheater',
    name: 'Amphitheater Unified School District',
    citySlugs: ['tucson', 'oro-valley', 'catalina'],
    countySlug: 'pima',
    rating: 'B+',
    totalSchools: 21,
    studentCount: 13000,
    description:
      'Amphitheater Unified School District stretches from northwest Tucson through Oro Valley and into the Catalina foothills area, educating 13,000 students at twenty-one campuses. Canyon del Oro High School is the district academic and athletic flagship, consistently fielding championship teams and sending students to top universities. Ironwood Ridge High School has quickly become a rival powerhouse since opening in the Oro Valley corridor. Amphitheater High School anchors the southern portion with deep community roots and a diverse student body. Wilson K-8 offers a seamless elementary-through-middle-school experience. The district is known for its performing arts, with multiple campuses earning recognition at state drama and music festivals. Amphitheater also runs a popular online academy for families seeking flexible scheduling.',
    zipCodes: ['85704', '85705', '85718', '85737', '85739', '85741', '85742', '85755'],
    notableSchools: ['Canyon del Oro High School', 'Ironwood Ridge High School', 'Amphitheater High School', 'Wilson K-8'],
    highlights: [
      'Canyon del Oro High School is an academic and athletic flagship',
      'Ironwood Ridge High School thriving in the Oro Valley corridor',
      'Award-winning performing arts programs at multiple campuses',
      'Online academy option for flexible scheduling',
      'Diverse student body with strong community engagement'
    ]
  },
  {
    slug: 'catalina-foothills-district',
    name: 'Catalina Foothills Unified School District',
    citySlugs: ['tucson'],
    countySlug: 'pima',
    rating: 'A',
    totalSchools: 7,
    studentCount: 5500,
    description:
      'Catalina Foothills Unified School District is widely considered the premier public school district in southern Arizona, consistently earning an A rating from the state. With just seven campuses and 5,500 students, it delivers a boutique educational experience set against the stunning backdrop of the Santa Catalina Mountains. Catalina Foothills High School produces National Merit Scholars at a remarkable rate and offers a deep catalog of AP and honors courses. Esperero Canyon Middle School bridges elementary and high school with project-based learning and strong advisory support. Sunrise Drive Elementary is beloved for its outdoor learning spaces and family-centered culture. The district attracts families who prioritize academic rigor, small class sizes, and an engaged parent community.',
    zipCodes: ['85718', '85749', '85750'],
    notableSchools: ['Catalina Foothills High School', 'Esperero Canyon Middle School', 'Sunrise Drive Elementary'],
    highlights: [
      'Considered the premier public school district in southern Arizona',
      'High rate of National Merit Scholars at Catalina Foothills High School',
      'Project-based learning at Esperero Canyon Middle School',
      'Small class sizes and boutique educational experience',
      'Stunning campus settings at the base of the Santa Catalina Mountains'
    ]
  },
  {
    slug: 'vail-district',
    name: 'Vail Unified School District',
    citySlugs: ['tucson', 'vail'],
    countySlug: 'pima',
    rating: 'A',
    totalSchools: 24,
    studentCount: 14000,
    description:
      'Vail Unified School District is one of the fastest-growing A-rated districts in Arizona, located on the southeast side of the Tucson metro. Cienega High School is the district original high school and is known for strong honors programs and an active student government. Empire High School made national headlines as one of the first paperless high schools in the country, issuing laptops to every student instead of textbooks. Vail Academy and High School provides a smaller, community-oriented campus, while Andrada Polytechnic High School focuses on project-based STEM and career readiness. The district builds new schools regularly to keep up with residential growth, ensuring modern facilities and current technology for every student. Vail families enjoy a suburban feel with easy access to Tucson amenities.',
    zipCodes: ['85641', '85706', '85730', '85747', '85756', '85757'],
    notableSchools: ['Cienega High School', 'Empire High School', 'Vail Academy and High School', 'Andrada Polytechnic High School'],
    highlights: [
      'Empire High School pioneered the paperless school model',
      'One of the fastest-growing A-rated districts in Arizona',
      'Andrada Polytechnic High School focuses on STEM and career readiness',
      'Modern facilities built to keep pace with growth',
      'Suburban feel with easy access to Tucson'
    ]
  },
  {
    slug: 'sunnyside',
    name: 'Sunnyside Unified School District',
    citySlugs: ['tucson'],
    countySlug: 'pima',
    rating: 'C+',
    totalSchools: 22,
    studentCount: 16000,
    description:
      'Sunnyside Unified School District serves the south side of Tucson and surrounding areas, educating about 16,000 students at twenty-two schools. Sunnyside High School is the district flagship, recognized for its mariachi program, which has won state competitions and brought national attention. Desert View High School brings a strong sense of identity on the far southeast side, and Lauffer Middle School is noted for academic improvement efforts. Los Amigos Technology Academy provides hands-on learning in a tech-enriched environment. The district places a strong emphasis on bilingual education and culturally responsive teaching, reflecting the rich heritage of the community. Sunnyside has invested in wraparound student support services, including counseling, health services, and family engagement programs that extend beyond the school day.',
    zipCodes: ['85706', '85707', '85713', '85714', '85746', '85756', '85757'],
    notableSchools: ['Sunnyside High School', 'Desert View High School', 'Lauffer Middle School', 'Los Amigos Technology Academy'],
    highlights: [
      'Award-winning mariachi program at Sunnyside High School',
      'Strong bilingual and culturally responsive teaching',
      'Wraparound support including counseling and health services',
      'Los Amigos Technology Academy for hands-on tech learning',
      'Deep community roots on Tucson south side'
    ]
  },
  {
    slug: 'flowing-wells',
    name: 'Flowing Wells Unified School District',
    citySlugs: ['tucson'],
    countySlug: 'pima',
    rating: 'B',
    totalSchools: 10,
    studentCount: 6000,
    description:
      'Flowing Wells Unified School District is a tight-knit district of ten schools on the northwest side of Tucson, serving around 6,000 students. Flowing Wells High School is the community heart, famous for its spirited Caballeros athletic program and an alumni base that stretches back generations. Sentinel Peak Elementary and Walter Douglas Elementary provide solid elementary education with experienced teachers who often stay in the district for their entire careers. The district prides itself on being a welcoming place for families of all backgrounds and has built a reputation for responsiveness and personal attention. Flowing Wells runs summer enrichment programs, provides free meals year-round, and partners with the University of Arizona on teacher training pipelines that benefit classrooms directly.',
    zipCodes: ['85705', '85741'],
    notableSchools: ['Flowing Wells High School', 'Sentinel Peak Elementary', 'Walter Douglas Elementary'],
    highlights: [
      'Flowing Wells High School known for spirited Caballeros athletics',
      'Partnership with University of Arizona for teacher training',
      'Free meals available year-round for students',
      'Long-tenured teachers committed to the community',
      'Summer enrichment programs for continued learning'
    ]
  },
  {
    slug: 'tanque-verde',
    name: 'Tanque Verde Unified School District',
    citySlugs: ['tucson'],
    countySlug: 'pima',
    rating: 'A',
    totalSchools: 4,
    studentCount: 2200,
    description:
      'Tanque Verde Unified School District is the smallest A-rated district in the Tucson area, with just four campuses serving about 2,200 students on the east side near Saguaro National Park. Tanque Verde High School offers a personalized high school experience where teachers know every student, and its AP participation rate is among the highest in Pima County. Emily Gray Junior High is recognized for its enrichment programs and strong preparation for high school coursework. Tanque Verde Elementary and Agua Caliente Elementary give younger students a nature-connected learning environment surrounded by desert landscapes. The district draws families who value a small, close-knit school community paired with high academic standards and generous access to outdoor education opportunities.',
    zipCodes: ['85748', '85749', '85750'],
    notableSchools: ['Tanque Verde High School', 'Emily Gray Junior High', 'Tanque Verde Elementary', 'Agua Caliente Elementary'],
    highlights: [
      'Smallest A-rated district in the Tucson area',
      'High AP participation rate at Tanque Verde High School',
      'Nature-connected learning near Saguaro National Park',
      'Personalized attention with teachers who know every student',
      'Strong enrichment programs at Emily Gray Junior High'
    ]
  },
  {
    slug: 'marana-unified',
    name: 'Marana Unified School District',
    citySlugs: ['marana', 'tucson'],
    countySlug: 'pima',
    rating: 'B+',
    totalSchools: 18,
    studentCount: 13000,
    description:
      'Marana Unified School District serves the growing town of Marana and parts of northwest Tucson, educating 13,000 students at eighteen campuses. Marana High School is a tradition-rich campus known for its competitive athletics and active student organizations. Mountain View High School in the Marana district provides a newer campus experience with modern labs and facilities. Tortolita Middle School is a bridge campus that emphasizes academic preparation and character development. Dove Mountain CSTEM is a standout school focused on computer science, technology, engineering, and math, attracting families from across the region. The district benefits from steady residential growth in the Dove Mountain and Continental Ranch areas and has opened new schools to meet demand while maintaining a B+ rating.',
    zipCodes: ['85653', '85658', '85741', '85742', '85743'],
    notableSchools: ['Marana High School', 'Mountain View High School (Marana)', 'Tortolita Middle School', 'Dove Mountain CSTEM'],
    highlights: [
      'Dove Mountain CSTEM is a regional draw for tech-focused education',
      'Steady growth in the Dove Mountain and Continental Ranch areas',
      'Modern facilities at Mountain View High School',
      'Competitive athletics and active student life at Marana High School',
      'New schools opening to meet ongoing residential demand'
    ]
  },
  {
    slug: 'sahuarita-unified',
    name: 'Sahuarita Unified School District',
    citySlugs: ['sahuarita', 'green-valley'],
    countySlug: 'pima',
    rating: 'B+',
    totalSchools: 9,
    studentCount: 6000,
    description:
      'Sahuarita Unified School District serves the communities of Sahuarita and Green Valley south of Tucson, educating about 6,000 students at nine campuses. Sahuarita High School is the district original high school and a hub for community events, competitive sports, and a growing list of AP course options. Walden Grove High School opened to serve the expanding Rancho Sahuarita area and quickly built strong academic and extracurricular programs. Anza Trail Elementary takes its name from the historic Juan Bautista de Anza trail and offers project-based learning rooted in local history. Rancho Sahuarita K-8 provides a seamless educational experience in one of the region\'s most popular master-planned communities. The district enjoys strong support from retirees and young families alike, creating a uniquely multigenerational community spirit.',
    zipCodes: ['85614', '85622', '85629'],
    notableSchools: ['Sahuarita High School', 'Walden Grove High School', 'Anza Trail Elementary', 'Rancho Sahuarita K-8'],
    highlights: [
      'Walden Grove High School thriving in the Rancho Sahuarita area',
      'Project-based learning rooted in local history at Anza Trail Elementary',
      'Multigenerational community support from retirees and young families',
      'Growing AP course offerings at Sahuarita High School',
      'Seamless K-8 experience at Rancho Sahuarita campus'
    ]
  }
];
