export const PROJECTS = [
  {
    slug: "charlie",
    name: "Charlie — AI Property Listing Agent",
    link: "https://loqol.ai/",
    tech: ["FastAPI", "LangGraph", "LangChain", "Supabase", "Next.js", "Prompt Engineering"],
    desc: "Autonomous AI agent that orchestrates multi-state workflows to list properties on Zillow and Redfin — end to end.",
    problem:
      "Real estate agents were spending 20+ minutes per listing manually gathering property data and posting across platforms, leading to inconsistent listings and high operational overhead.",
    solution:
      "Architected 'Charlie', an autonomous LangGraph agent with multi-state graph transitions, tool-calling logic, and custom prompt engineering for data collection, validation, and publishing workflows. Built a high-performance FastAPI backend with Supabase for auth, storage, and real-time state management, plus a Next.js frontend with live AI feedback and auto-fill.",
    impact:
      "Reduced manual effort by 50–60%, cut time-to-list from 25 to under 10 minutes, improved listing consistency by 30%, and increased user completion rates by 35%.",
    category: "AI",
    featured: true,
  },
  {
    slug: "hr-management-system",
    name: "HR Management System",
    link: null,
    tech: ["Django", "React", "MySQL", "Celery", "Redis", "REST APIs"],
    desc: "Full-stack enterprise platform automating employee tracking, attendance, and payroll workflows for 1,000+ employees.",
    problem:
      "An enterprise HR team managing 1,000+ employees relied entirely on manual processes for attendance tracking, payroll, and records — causing errors, duplication, and significant administrative overhead.",
    solution:
      "Built a full-stack platform with a Django backend and React frontend. Automated attendance rollups and notifications using Celery and Redis for background task processing. Optimized RESTful APIs with query indexing and serializer tuning. Designed a production-ready security module with FastAPI and OAuth2.",
    impact:
      "Reduced manual HR tasks by 40%, improved system throughput by 35% through API and query optimization, and cut administrative overhead by 45%. Delivered features 20% faster in an Agile environment.",
    category: "Full-stack",
    featured: true,
  },
  {
    slug: "user-authentication-system",
    name: "User Authentication System",
    link: null,
    tech: ["FastAPI", "OAuth2", "JWT", "Google OAuth", "Python"],
    desc: "Production-grade authentication module with stateless JWT sessions, Google OAuth, and role-based access control.",
    problem:
      "Applications lacked a scalable, production-grade authentication layer capable of handling both traditional credentials and social login while enforcing fine-grained role-based permissions.",
    solution:
      "Designed a security module with FastAPI and OAuth2: JWT tokens for stateless session management and Google OAuth for social login. Implemented role-based access control to protect endpoints across multiple application layers.",
    impact:
      "Delivered a reusable, production-ready auth system that secures multi-role applications with zero-trust access patterns and minimal latency overhead.",
    category: "Full-stack",
    featured: false,
  },
  {
    slug: "cold-email-generator",
    name: "Cold Email Generator",
    link: null,
    githubUrl: "https://github.com/mokshashah0111/Cold-Email-Generator",
    tech: ["Python", "LangChain", "Llama 3.3-70B", "ChromaDB", "Streamlit", "GROQ API"],
    desc: "AI tool that scrapes job posting URLs, extracts role requirements, matches relevant portfolio projects via vector search, and writes personalized cold emails.",
    problem:
      "Job seekers spend significant time writing cold emails for each role from scratch, often missing the mark on relevance. Generic emails perform poorly and fail to connect the applicant's specific experience to what the employer needs.",
    solution:
      "Built an LLM-powered pipeline: Meta's Llama 3.3-70B (via GROQ cloud) parses job posting URLs and extracts structured role requirements. LangChain orchestrates the workflow, querying a ChromaDB vector store of portfolio projects for semantic matches. The model then generates a tailored cold email that incorporates the most relevant work.",
    impact:
      "End-to-end automation of personalized outreach — from job URL to ready-to-send email. Addresses LLM resource constraints by offloading to GROQ Cloud, making large-model inference accessible without local GPU requirements.",
    category: "AI",
    featured: true,
  },
  {
    slug: "music-artist-recommender",
    name: "Music Artist Recommender",
    link: null,
    githubUrl: "https://github.com/mokshashah0111/Music-Artist-Recommender/blob/main/musicrecommendersystem.pdf",
    tech: ["Python", "Apache Spark", "Implicit (ALS)", "Collaborative Filtering", "Sparse Matrices"],
    desc: "Scalable collaborative filtering recommendation engine trained on the LastFM dataset, achieving a 40% scalability improvement over an initial Spark-based ALS implementation.",
    problem:
      "Building a recommendation system on a large-scale dataset with millions of user–artist interactions was initially attempted with Apache Spark's ALS. Spark's overhead and resource demands made it inefficient and difficult to scale, causing poor performance under real-world data volume.",
    solution:
      "Switched from Spark ALS to Python's Implicit library, which uses highly optimized sparse matrix operations and streamlined matrix factorization. Tested the refined model on the LastFM dataset — a real-world dataset of millions of user–artist interaction records — using collaborative filtering to surface personalized artist recommendations.",
    impact:
      "Achieved a 40% improvement in scalability compared to the Spark-based implementation. The system delivers highly accurate, personalized music artist suggestions while balancing speed and precision at scale.",
    category: "Machine Learning",
    featured: true,
  },
  {
    slug: "personality-detection",
    name: "Personality Detection & Classification",
    link: null,
    githubUrl: "https://github.com/mokshashah0111/Personality-Detection",
    tech: ["Azure ML Studio", "K-Means Clustering", "Decision Forest", "Python", "MLTable"],
    desc: "End-to-end ML pipeline on Azure ML Studio classifying personality types (Introvert/Extrovert/Ambivert) across 20,000 individuals — achieving 98.28% accuracy.",
    problem:
      "Personality classification from behavioral data traditionally requires deep ML expertise and significant custom code, making it inaccessible for applied research and business use cases like career counseling, student grouping, and personalized recommendations.",
    solution:
      "Applied Azure ML Studio's no-code pipeline to a Kaggle dataset of 20,000 individuals with 30 behavioral attributes. Implemented two approaches: K-Means Clustering (unsupervised) to discover natural personality groupings, and Multiclass Decision Forest Classification (supervised) to predict personality type. Data was preprocessed via normalization and a 70/30 train/test split.",
    impact:
      "Decision Forest Classification achieved 98.28% accuracy with balanced precision and recall across all three personality classes. Clustering revealed three distinct behavioral segments aligned with the labeled categories. Demonstrated that advanced ML pipelines can be built and validated without writing code.",
    category: "Machine Learning",
    featured: true,
  },
]

export const PROJECT_FILTERS = ["All", "AI", "Full-stack", "Machine Learning"]
