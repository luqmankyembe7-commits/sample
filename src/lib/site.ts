export const company = {
  name: "Pearlcrest Security",
  legalName: "Pearlcrest Security Limited",
  tagline: "Security for the places Uganda depends on",
  phoneDisplay: "+256 414 780 440",
  phoneHref: "+256414780440",
  deskDisplay: "+256 700 441 220",
  deskHref: "+256700441220",
  email: "hello@pearlcrest.ug",
  salesEmail: "briefings@pearlcrest.ug",
  address: "Plot 18, Kyadondo Road, Nakasero",
  city: "Kampala",
  poBox: "P.O. Box 21440, Kampala",
  hours: "Control room open every day, all night. Front office Monday to Friday, 08:00–17:30.",
};

export type Service = {
  slug: string;
  name: string;
  eyebrow: string;
  summary: string;
  detail: string;
  points: string[];
  suited: string[];
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: "manned-guarding",
    name: "Manned guarding",
    eyebrow: "People on post",
    summary:
      "Screened officers for gates, floors, compounds, and night shifts, briefed on the site they actually stand.",
    detail:
      "A post is only as good as the orders behind it. Pearlcrest recruits in Uganda, checks identity and references, and trains officers on access control, customer care, incident notes, and the specific routine of each site. Supervisors visit. The Nakasero control room is the escalation point when a shift needs help.",
    points: [
      "Static guards, patrol officers, and reception security",
      "Day and night deployments with relief cover",
      "Site orders written with the client, not copied from a template",
      "Supervisor checks and a written incident record",
      "Uniformed presence for offices, plants, schools, and residences",
    ],
    suited: ["Corporate offices", "Factories", "Schools", "Residential compounds"],
    image: "/home/guard-gate.jpg",
    imageAlt: "Uniformed officer standing at a gated entrance",
  },
  {
    slug: "cash-solutions",
    name: "Cash solutions",
    eyebrow: "Cash in motion",
    summary:
      "Collections, transit, and counting support for banks, retailers, and sites that still move physical cash.",
    detail:
      "Cash still moves every day between branches, supermarkets, fuel stations, and tills. Pearlcrest plans the run, crews the vehicle, and keeps the chain of custody short and documented. Schedules flex around trading hours in Kampala and the towns, so cash leaves the premises without disrupting the counter.",
    points: [
      "Scheduled cash-in-transit between agreed points",
      "Retail and branch collections timed to your close of day",
      "Counting and preparation support before bank deposit",
      "ATM replenishment coordination with your engineer or bank",
      "Sealed-bag procedures and a written handover at every stop",
    ],
    suited: ["Banks", "Retail chains", "Fuel stations", "Hospitality tills"],
    image: "/services/cam2.jpg",
    imageAlt: "A closed bank vault door",
  },
  {
    slug: "security-systems",
    name: "Security systems",
    eyebrow: "Technology",
    summary:
      "CCTV, alarms, and access control designed, installed, and maintained by a Kampala workshop.",
    detail:
      "Cameras and alarms only help if someone answers them. Pearlcrest designs the system around how the building is used, installs it, and keeps it in service. Monitoring can sit with your own team or with our control room. We service what we install and we will also maintain systems already on the wall.",
    points: [
      "CCTV design, installation, and health checks",
      "Intruder alarms with a named response path",
      "Access control for doors, gates, and staff entrances",
      "Control-room monitoring from Nakasero",
      "Maintenance visits and spare-part support",
    ],
    suited: ["Offices", "Warehouses", "Estates", "Retail parks"],
    image: "/home/dome.jpg",
    imageAlt: "A dome camera mounted indoors",
  },
  {
    slug: "risk-consulting",
    name: "Risk consulting",
    eyebrow: "Advice before deployment",
    summary:
      "A clear look at how a site, journey, or event can fail, and a programme sized to that risk.",
    detail:
      "Before we put people on a gate, we walk the site with you. Consulting covers access points, lighting, cash handling, visitor flow, and the roads your staff actually use. The output is a written programme: posts, technology, and the incidents you want called in the same hour. It is advice for your operation, not a generic checklist.",
    points: [
      "Site and route surveys across Uganda",
      "Security programmes for new offices and compounds",
      "Event threat reviews before tickets go on sale",
      "Advice for NGOs, missions, and project sites",
      "A written brief your own managers can use",
    ],
    suited: ["New sites", "NGOs and missions", "Project offices", "Boards"],
    image: "/home/consult.jpg",
    imageAlt: "A consultant presenting a site brief to colleagues",
  },
  {
    slug: "events-and-executive",
    name: "Events and executive protection",
    eyebrow: "Crowds and principals",
    summary:
      "Stewards, access teams, and close protection for concerts, conferences, and private movements.",
    detail:
      "Kampala’s calendar runs from hotel conferences to stadium shows. Pearlcrest builds the access plan, staffs the doors, and keeps a supervisor on the radio. For principals, protection is discreet: arrivals, venues, and the road between them, coordinated with your protocol team.",
    points: [
      "Access control, search points, and crowd flow",
      "Hotel and conference security",
      "Close protection for visits and movements",
      "Coordination with venue management and police liaison",
      "A debrief note after the event",
    ],
    suited: ["Festivals", "Conferences", "Visiting delegations", "Private clients"],
    image: "/services/cand-2747446.jpg",
    imageAlt: "A concert crowd facing a lit stage",
  },
  {
    slug: "estates-and-concierge",
    name: "Estates and concierge",
    eyebrow: "How a place feels",
    summary:
      "Gatehouse teams who know residents by name and still keep the register exact.",
    detail:
      "A residential gate is a security post and a welcome. Pearlcrest officers manage visitors, deliveries, and night patrols on managed estates, diplomatic residences, and serviced compounds. The standard is the same as a commercial site, with the manners of a front door.",
    points: [
      "Gatehouse and visitor management",
      "Resident and guest reception",
      "Delivery and contractor control",
      "Night patrol of common areas",
      "Liaison with estate managers and landlords",
    ],
    suited: ["Managed estates", "Serviced residences", "Diplomatic homes", "Hotels"],
    image: "/home/concierge.jpg",
    imageAlt: "A uniformed concierge at a reception desk",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export type Office = {
  city: string;
  role: string;
  address: string;
  phone: string;
  focus: string;
};

export const offices: Office[] = [
  {
    city: "Kampala",
    role: "Headquarters and control room",
    address: "Plot 18, Kyadondo Road, Nakasero",
    phone: "+256 414 780 440",
    focus: "National coordination, cash desk, systems workshop, and the 24-hour control room.",
  },
  {
    city: "Entebbe",
    role: "Airport corridor",
    address: "Kitoro Road, Entebbe",
    phone: "+256 414 780 441",
    focus: "Airport-area compounds, crew movements, and lakeshore residences.",
  },
  {
    city: "Jinja",
    role: "Eastern industry",
    address: "Main Street, Jinja",
    phone: "+256 434 780 442",
    focus: "Factories, warehouses, and the industrial belt toward the source of the Nile.",
  },
  {
    city: "Mbale",
    role: "Eastern highlands",
    address: "Republic Street, Mbale",
    phone: "+256 454 780 443",
    focus: "Town centres, trading sites, and Elgon-side project locations.",
  },
  {
    city: "Mbarara",
    role: "Western region",
    address: "High Street, Mbarara",
    phone: "+256 485 780 444",
    focus: "Banks, ranches, and the roads that feed Kampala from the west.",
  },
  {
    city: "Gulu",
    role: "Northern region",
    address: "Coronation Road, Gulu",
    phone: "+256 471 780 445",
    focus: "NGO compounds, project offices, and town security in the north.",
  },
];

export type Story = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  body: string[];
  image: string;
  imageAlt: string;
};

export const stories: Story[] = [
  {
    slug: "nakasero-control-room",
    date: "12 March 2026",
    title: "Nakasero control room moves to a 24-hour watch",
    excerpt:
      "Alarm response, shift welfare, and night supervisors now sit in one room on Kyadondo Road.",
    image: "/services/p1.jpg",
    imageAlt: "Cameras mounted on an exterior wall",
    body: [
      "Pearlcrest has extended the Nakasero desk to a full night watch. Alarm signals, officer welfare calls, and supervisor checks that used to wait until morning now land with a controller who is already on duty.",
      "Clients with monitored alarms keep the same numbers. What changes is the hour: a gate that fails at 02:00 is treated with the same call path as one that fails at 14:00.",
      "The day office on Kyadondo Road is unchanged. Visitors are still received from 08:00 to 17:30, Monday to Friday.",
    ],
  },
  {
    slug: "jinja-industrial-belt",
    date: "2 February 2026",
    title: "A larger night deployment along the Jinja industrial belt",
    excerpt:
      "Factories that run a second shift asked for patrols that match the shift, not a standard dusk-to-dawn template.",
    image: "/home/factory.jpg",
    imageAlt: "An empty industrial hall with overhead cranes",
    body: [
      "Three manufacturing sites between Jinja and the Nile corridor have moved to a shift pattern that follows their own production clock. Officers change when the plant changes, so a handover is never left to an empty gate.",
      "The Jinja office coordinates relief and the Kampala control room keeps the escalation line. Site orders were rewritten with each plant manager before the first new roster went live.",
      "Pearlcrest is speaking with two further sites in the same belt about the same pattern for the second half of the year.",
    ],
  },
  {
    slug: "estate-gatehouses",
    date: "18 November 2025",
    title: "Estate gatehouses adopt a shared visitor register",
    excerpt:
      "Managed compounds in Kololo, Naguru, and Entebbe now use one register format, whether the visitor arrives by car or on foot.",
    image: "/services/house.jpg",
    imageAlt: "A modern house behind a garden at dusk",
    body: [
      "Residents asked for a gate that felt consistent from one estate to the next. Pearlcrest has standardised the visitor register, the delivery log, and the way a contractor is booked in, while leaving house rules in the hands of each estate manager.",
      "Officers on these posts are briefed on names, standing instructions, and the difference between a resident’s guest and an unknown caller. The manner at the window is part of the post, not an extra.",
      "Estate managers who want the same format can ask the Kampala office for a walkthrough before the next residents’ meeting.",
    ],
  },
];

export function getStory(slug: string) {
  return stories.find((story) => story.slug === slug);
}

export type Role = {
  id: string;
  title: string;
  location: string;
  type: string;
  summary: string;
  requirements: string[];
};

export const roles: Role[] = [
  {
    id: "security-officer-kampala",
    title: "Security officer",
    location: "Kampala and Wakiso",
    type: "Full time, shifts",
    summary:
      "Gate, patrol, and reception posts for offices and compounds. Shifts include nights and weekends.",
    requirements: [
      "Right to work in Uganda and at least 18 years of age",
      "Able to stand a full shift and write a clear incident note",
      "Police clearance and two referees before deployment",
      "Courtesy with visitors, residents, and colleagues",
    ],
  },
  {
    id: "control-room-operator",
    title: "Control room operator",
    location: "Nakasero, Kampala",
    type: "Full time, rotating nights",
    summary:
      "Answer alarm and welfare calls, keep the night log, and escalate to the duty supervisor.",
    requirements: [
      "Calm telephone manner and reliable written English",
      "Comfortable with radios, screens, and a strict log",
      "Willing to work nights on a published roster",
      "Previous dispatch or security experience is useful, not required",
    ],
  },
  {
    id: "cit-crew",
    title: "Cash crew member",
    location: "Kampala, with regional runs",
    type: "Full time",
    summary:
      "Crew a scheduled cash run. The work is procedural: seals, handovers, and timing.",
    requirements: [
      "Clean record and willingness to be vetted for cash handling",
      "Punctual, and able to follow a route brief without improvising",
      "Full driving licence is an advantage for some seats on the crew",
      "Based in Kampala or able to start early from the Nakasero yard",
    ],
  },
  {
    id: "systems-technician",
    title: "Systems technician",
    location: "Kampala, travelling to sites",
    type: "Full time",
    summary:
      "Install and maintain cameras, alarms, and access control with the workshop team.",
    requirements: [
      "Hands-on experience with CCTV or intruder alarms",
      "Able to explain a fault to a client without jargon",
      "Driving licence and willingness to travel to Jinja and Entebbe",
      "Careful cable work and respect for an occupied building",
    ],
  },
  {
    id: "supervisor-north",
    title: "Area supervisor",
    location: "Gulu",
    type: "Full time",
    summary:
      "Visit posts in the northern region, check site orders, and be the first call for officers on shift.",
    requirements: [
      "At least three years in a supervised security role",
      "Able to write a site report a client can act on",
      "Based in Gulu or ready to relocate",
      "A driving licence",
    ],
  },
];

export const industries = [
  {
    name: "Banks and cash",
    text: "Branch doors, ATM approaches, and the runs that join them.",
  },
  {
    name: "Missions and NGOs",
    text: "Compounds, project offices, and visitors who need a quiet gate.",
  },
  {
    name: "Energy and industry",
    text: "Plants, yards, and night shifts along the Jinja and Hoima corridors.",
  },
  {
    name: "Retail and malls",
    text: "Trading floors, service yards, and the close-of-day cash count.",
  },
  {
    name: "Hospitality",
    text: "Hotel entrances, conferences, and events that fill a ballroom.",
  },
  {
    name: "Homes and estates",
    text: "Gatehouses where residents expect to be recognised.",
  },
];

export const steps = [
  {
    number: "01",
    title: "Walk the site",
    text: "We look at gates, lighting, cash, visitors, and the road your people use. The note is specific to that address.",
  },
  {
    number: "02",
    title: "Put the programme in writing",
    text: "Posts, technology, and the call path sit in one brief. You see the cost and the cover before anyone is deployed.",
  },
  {
    number: "03",
    title: "Keep a watch on it",
    text: "Supervisors visit. The control room answers. When the site changes, the orders change with it.",
  },
];
