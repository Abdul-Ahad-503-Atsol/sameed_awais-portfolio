export const posts = [
  {
    slug: "building-production-rag-systems",
    title: "Building RAG Systems That Survive Production",
    description:
      "Chunking, hybrid retrieval, evaluation, and the failure modes of retrieval-augmented generation that only show up after launch.",
    date: "2026-10-21",
    category: "AI Engineering",
    tags: ["RAG", "LLMs", "Vector Search", "Python"],
    readingTime: "8 min read",
    body: [
      {
        type: "p",
        text: "Retrieval-augmented generation looks deceptively simple in a demo: embed some documents, search, and pass the results to a model. In production, the model is rarely the problem. Retrieval quality, latency, and observability decide whether the system is useful.",
      },
      { type: "h2", text: "Start with retrieval, not the model" },
      {
        type: "p",
        text: "Teams often spend weeks comparing models while their retrieval returns loosely related chunks. A stronger model cannot recover from context that never contained the answer. Measure retrieval first: recall at k, precision at the top ranks, and whether the returned chunks actually support the claim you expect.",
      },
      {
        type: "ul",
        items: [
          "Build a small, labeled evaluation set from real user questions.",
          "Track recall@k and mean reciprocal rank before tuning anything else.",
          "Inspect failure cases by reading the retrieved context, not just the answer.",
        ],
      },
      { type: "h2", text: "Chunking is a product decision" },
      {
        type: "p",
        text: "Chunk size is not a hyperparameter to tune in isolation. It encodes assumptions about how your content is structured and how users ask questions. Support tickets cluster around short paragraphs; policy documents need section-level context; code needs symbol boundaries.",
      },
      {
        type: "ul",
        items: [
          "Chunk on semantic boundaries such as headings, sections, and functions before reaching for fixed token windows.",
          "Store metadata with every chunk: source, section, timestamp, and permissions.",
          "Overlap only enough to preserve meaning across boundaries.",
        ],
      },
      { type: "h2", text: "Hybrid retrieval beats pure vectors" },
      {
        type: "p",
        text: "Dense embeddings capture meaning but miss exact identifiers: SKUs, error codes, policy numbers. Sparse retrieval such as BM25 catches those. Run both, merge the candidates, then rerank.",
      },
      {
        type: "code",
        code: "candidates = hybrid_search(query, k=24)\nreranked = rerank(candidates, query, top_n=6)\nanswer = generate(query, context=reranked)",
      },
      {
        type: "ul",
        items: [
          "Use reciprocal rank fusion to combine dense and sparse results.",
          "Add a reranker when domain vocabulary diverges from the embedding model.",
          "Cap the context you send to the model; more context is not automatically better.",
        ],
      },
      { type: "h2", text: "Evaluate before you tune" },
      {
        type: "p",
        text: "Offline evaluation is the only way to improve a RAG system without guessing. Build a pipeline that runs every change against a fixed question set and scores both retrieval and generation. If the score moves, you know why.",
      },
      { type: "h2", text: "Design for failure" },
      {
        type: "ul",
        items: [
          "Return sources with every answer so users can verify.",
          "Define a confidence threshold below which the system asks for clarification instead of inventing.",
          "Log the query, retrieved chunk IDs, model version, latency, and user feedback.",
        ],
      },
      {
        type: "quote",
        text: "If you cannot point to the chunk that supported an answer, you do not have a RAG system: you have a search box with a language model attached.",
      },
      { type: "h2", text: "Takeaways" },
      {
        type: "ul",
        items: [
          "Retrieval quality determines answer quality; measure it separately.",
          "Choose chunking by content structure, not by convention.",
          "Combine dense and sparse retrieval, then rerank.",
          "Instrument every request so failures are diagnosable.",
        ],
      },
    ],
  },
  {
    slug: "langgraph-vs-langchain-agents",
    title: "LangGraph vs LangChain: Picking the Right Abstraction for Agents",
    description:
      "When a linear chain is enough and when you actually need a graph, with a practical decision framework from shipping agentic systems.",
    date: "2026-09-09",
    category: "AI/ML",
    tags: ["LangGraph", "LangChain", "Agents", "LLMs"],
    readingTime: "6 min read",
    body: [
      {
        type: "p",
        text: "LangChain and LangGraph are often compared as competing frameworks. They solve different problems. One is a toolkit for composing model calls; the other is a runtime for stateful, branching workflows. Choosing correctly keeps agents readable and debuggable.",
      },
      { type: "h2", text: "Chains are for pipelines" },
      {
        type: "p",
        text: "A chain fits when work moves in one direction: format a prompt, call a model, parse output, maybe call another tool. Summarization, extraction, classification, and straightforward RAG flows belong here. The control flow is known before the request starts.",
      },
      { type: "h2", text: "Graphs are for state" },
      {
        type: "p",
        text: "An agent needs a graph when the next step depends on what happened earlier and the path can loop. Tool selection, retries, human approval, and multi-step research are graph problems: they need explicit state, conditional edges, and checkpoints.",
      },
      {
        type: "ul",
        items: [
          "Loops or retries based on intermediate results.",
          "Multiple agents that hand work to each other.",
          "Human-in-the-loop pauses that must resume later.",
          "Long-running workflows that need persisted state.",
        ],
      },
      { type: "h2", text: "The decision framework" },
      { type: "p", text: "Ask three questions before choosing an abstraction." },
      {
        type: "ul",
        items: [
          "Can the workflow be drawn as a straight line? Use a chain.",
          "Does any step depend on a decision made mid-run? Reach for a graph.",
          "Do you need to pause, resume, or replay execution? Require checkpoints from day one.",
        ],
      },
      { type: "h2", text: "What this looks like in production" },
      {
        type: "p",
        text: "Most systems I have shipped use both. The graph coordinates the workflow while individual nodes stay small chains. That keeps nodes testable in isolation and limits the blast radius of a bug.",
      },
      {
        type: "ul",
        items: [
          "Keep node functions pure and typed where possible.",
          "Persist state after every meaningful transition.",
          "Log the path taken, not just the final output.",
        ],
      },
      {
        type: "quote",
        text: "The framework choice matters less than the state model. If you cannot describe your state, no abstraction will save the workflow.",
      },
      { type: "h2", text: "Key takeaways" },
      {
        type: "ul",
        items: [
          "Use chains for linear pipelines; use graphs for branching, looping workflows.",
          "Model state explicitly before writing agent code.",
          "Mix both: a graph of small chains is easier to test and operate.",
        ],
      },
    ],
  },
  {
    slug: "scaling-django-ai-workloads",
    title: "Scaling Django for AI Workloads",
    description:
      "Background jobs, connection management, and API boundaries for Django services that sit next to LLMs and vector databases.",
    date: "2026-08-12",
    category: "Backend Engineering",
    tags: ["Django", "Python", "Celery", "PostgreSQL"],
    readingTime: "7 min read",
    body: [
      {
        type: "p",
        text: "Django remains a reliable foundation for AI products: mature tooling, a strong ORM, and an ecosystem that scales. The friction usually comes from treating model calls like ordinary database queries. They are slow, expensive, and unreliable, and the architecture has to reflect that.",
      },
      { type: "h2", text: "Treat LLM calls like external I/O" },
      {
        type: "p",
        text: "A language model is a third-party dependency with variable latency. Wrap calls with timeouts, retries, and circuit breakers. Keep them out of request handlers when the user does not need the result immediately.",
      },
      {
        type: "ul",
        items: [
          "Set explicit timeouts per provider and per model.",
          "Retry only idempotent requests, with exponential backoff.",
          "Record provider latency so regressions are visible.",
        ],
      },
      { type: "h2", text: "Queue everything that can wait" },
      {
        type: "p",
        text: "Celery or a similar worker should own embedding generation, document ingestion, batch scoring, and long-running agent workflows. Web requests should enqueue work and return quickly.",
      },
      { type: "h2", text: "Keep the database out of the hot path" },
      {
        type: "p",
        text: "PostgreSQL handles application data well; vector search belongs in a system designed for it. Keep embeddings in a vector store and store references in Postgres so transactions and permissions stay consistent.",
      },
      {
        type: "ul",
        items: [
          "Store chunk IDs and metadata, not raw vectors, in relational tables.",
          "Separate read replicas for analytics-heavy queries.",
          "Use connection pooling: workers multiply connections quickly.",
        ],
      },
      { type: "h2", text: "Stream responses, but respect boundaries" },
      {
        type: "p",
        text: "Streaming improves perceived latency, but it complicates error handling. Decide which failures are recoverable after the first token. Validate permissions before the stream starts, not after.",
      },
      { type: "h2", text: "Observability is non-negotiable" },
      {
        type: "ul",
        items: [
          "Trace each request across web, worker, vector store, and model provider.",
          "Attach request IDs to logs and surface them in error reports.",
          "Track cost per feature and per customer from the first release.",
        ],
      },
      { type: "h2", text: "Takeaways" },
      {
        type: "ul",
        items: [
          "Treat model providers as unreliable external services.",
          "Move long-running AI work to background workers.",
          "Keep relational data and vector data in the systems built for them.",
          "Instrument latency, errors, and cost before scaling.",
        ],
      },
    ],
  },
  {
    slug: "system-design-ai-products",
    title: "System Design for AI Products: What Actually Matters",
    description:
      "Latency budgets, evaluation loops, graceful degradation, and cost controls: the architecture decisions behind dependable AI products.",
    date: "2026-07-03",
    category: "Architecture",
    tags: ["System Design", "AI", "Product"],
    readingTime: "6 min read",
    body: [
      {
        type: "p",
        text: "AI features fail differently from conventional software. Outputs are probabilistic, costs scale with usage, and quality can drift without a code change. The architecture has to make those properties visible and manageable.",
      },
      { type: "h2", text: "Start with the latency budget" },
      {
        type: "p",
        text: "Work backward from the interaction. A chat reply should start streaming within a second; a background report can take minutes. The budget determines whether you can call multiple models, run a reranker, or need aggressive caching.",
      },
      { type: "h2", text: "Make evaluation part of the architecture" },
      {
        type: "p",
        text: "Evaluation is not a notebook exercise. Treat it as a pipeline that runs on every prompt, model, or retrieval change. Store inputs, outputs, scores, and model versions together so regressions are explainable.",
      },
      { type: "h2", text: "Assume the model will fail" },
      {
        type: "ul",
        items: [
          "Define fallback behavior for timeouts, refusals, and malformed output.",
          "Validate structured responses against a schema before using them.",
          "Design the UI for uncertainty: cite sources, show confidence, and allow correction.",
        ],
      },
      { type: "h2", text: "Control cost at the boundary" },
      {
        type: "p",
        text: "Cost is an architectural concern. Cap context, cache deterministic work, route simple requests to smaller models, and meter usage per customer. A feature that is economically unviable at scale is a design bug.",
      },
      { type: "h2", text: "Design for iteration" },
      {
        type: "p",
        text: "Prompts and models will change. Keep them outside business logic, version them, and make rollbacks trivial. The teams that ship AI reliably are the ones that can change a prompt without redeploying the product.",
      },
      {
        type: "quote",
        text: "The best AI systems are boring to operate: predictable latency, explicit failure modes, and a clear cost per request.",
      },
      { type: "h2", text: "Takeaways" },
      {
        type: "ul",
        items: [
          "Set the latency budget before choosing the model stack.",
          "Automate evaluation for every prompt and model change.",
          "Plan for failure and validation at every boundary.",
          "Treat cost and iteration speed as first-class design constraints.",
        ],
      },
    ],
  },
];

export const getPostBySlug = (slug) => posts.find((post) => post.slug === slug);

export const formatPostDate = (date) =>
  new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
