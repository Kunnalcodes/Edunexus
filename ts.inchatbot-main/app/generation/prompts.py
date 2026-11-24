SYSTEM_PROMPT = """
You are the official EDUNEXUS AI Academic Copilot. You must act as a professional, helpful, and highly accurate advisor for students and academic institutions.

CRITICAL RULES for ZERO HALLUCINATION:
1. You may ONLY answer questions using the provided context passages. If the answer is not in the context, you MUST politely state: "I don't have that information. Please reach out to us at https://edunexus.io."
2. DO NOT invent, guess, or hallucinate courses, skills, mentors, or platform features.
3. If asked about fees, pricing, cost, or how to enroll, DO NOT provide numbers. Always direct the user to the platform admissions page (https://edunexus.io).
4. Basic Conversation: If a user inputs a greeting (e.g., "hi", "hie", "hye", "hey", "hello", "what's up", "how are you") respond politely and introduce yourself as the EDUNEXUS AI Academic Copilot, offering to help them explore our curriculum and virtual labs. If they say a farewell (e.g., "bye", "goodbye"), respond with a warm closing message wishing them well.
5. Strict Scope: You MUST NOT answer any questions or engage in conversation about topics outside of EDUNEXUS courses, virtual labs, and platform features. If a user inputs non-educational queries, you must strictly refuse: "I am specifically here to help with EDUNEXUS courses, sandboxes, and learning features."
6. When discussing student benefits (Dashboard, NEXUS-ID, Virtual Sandboxes, Verifiable Certificates), only mention what is explicitly stated in the context.
7. Keep replies short and practical. For course catalogue questions, do not dump modules or huge markdown breakdowns. Prefer a brief list of course names, duration, and key skills.
8. For broad queries, answer with the available tracks only, include duration, and end with one short invitation to compare tracks or ask about mentors or projects.
9. For mentor queries: provide a short, smart answer stating that our mentors are active industry professionals with real world experience.
10. For project queries: state that students work on industry ready projects designed to produce portfolio ready proof of work.
11. NEVER use dashes or hyphens (- or —) in your responses. Use colons (:) instead.

Maintain a professional, structured, and encouraging educational tone at all times.
"""


from typing import Optional

def check_hardcoded_response(query: str) -> Optional[str]:
    query_lower = query.lower()

    greeting_query = any(
        query_lower.strip() == keyword or query_lower.startswith(keyword + " ") or query_lower.startswith(keyword + "!")
        for keyword in ["hi", "hie", "hye", "hey", "heya", "hello", "sup"]
    )

    farewell_query = any(
        query_lower.strip() == keyword or query_lower.startswith(keyword + " ") or query_lower.startswith(keyword + "!")
        for keyword in ["bye", "bie", "goodbye", "cya", "see ya", "see you", "byee", "byeee"]
    )

    if greeting_query:
        return "Hello! I am the official EDUNEXUS AI Academic Copilot. I can help you explore our multi-tenant courses, labs, and mentorship. How can I assist you today?"
    if farewell_query:
        return "Goodbye! Have a great day ahead, and feel free to return if you have more questions about EDUNEXUS!"

    return None

def is_specific_course_query(query: str) -> bool:
    query_lower = query.lower()
    return any(
        keyword in query_lower
        for keyword in [
            "45 day", "45-day", "6 month", "6-month", "fellowship",
            "python for ai", "data analysis", "machine learning",
            "deep learning", "cyber fundamentals", "ethical hacking", "vapt",
            "vulnerability assessment", "soc", "blue team", "red team",
            "penetration testing", "network security", "ai & data science",
            "foundational", "fundamental", "beginner", "intro", "introductory",
            "basic", "intermediate", "advanced", "beginner level",
            "tell me about", "what is", "explain", "details", "describe",
            "what does", "what are the modules", "syllabus", "curriculum",
            "what will i learn", "what can i learn", "which course", "which program",
        ]
    ) or any(
        keyword in query_lower
        for keyword in ["days course", "month course", "months course", "day program", "month program"]
    )


def is_broad_catalog_query(query: str) -> bool:
    query_lower = query.lower()
    return (not is_specific_course_query(query)) and any(
        keyword in query_lower
        for keyword in [
            "ai courses", "cyber courses", "courses", "what do you offer", "programs",
            "course", "program", "fellowships", "cyber", "ai", "cybersecurity",
            "artificial intelligence", "machine learning", "ml", "security", "data science",
        ]
    )


def build_prompt(query: str, retrieved_context: list[str]) -> str:
    if not retrieved_context:
        context_str = "No relevant context found in the knowledge base."
    else:
        context_str = "\n---\n".join(retrieved_context)

    query_lower = query.lower()
    specific_course_query = is_specific_course_query(query)
    broad_catalog_query = is_broad_catalog_query(query)

    mentor_query = any(
        keyword in query_lower
        for keyword in ["mentor", "mentors", "instructor", "teacher", "trainer", "who teaches"]
    )

    project_query = any(
        keyword in query_lower
        for keyword in ["project", "projects", "real-world project", "real world project", "capstone", "portfolio"]
    )

    placement_query = any(
        keyword in query_lower
        for keyword in ["industry standard", "industry standards", "placement", "job", "career", "hiring", "job ready", "job-ready", "employment", "recruit"]
    )

    if specific_course_query:
        reply_constraints = (
            "The user is asking about a specific course or track. Using ONLY the provided context, "
            "describe the matching course or track clearly: state its exact name, parent program, "
            "duration, description, and 3-5 key skills. Do not substitute a different course or "
            "the entire catalogue. If the matching name is not in the context, say you do not have "
            "that information instead of guessing."
        )
    elif broad_catalog_query:
        all_catalog_requested = any(
            keyword in query_lower
            for keyword in ["all", "every", "each", "list"]
        )
        if all_catalog_requested:
            reply_constraints = (
                "List every matching course or fellowship track from the context. For each item, give "
                "its exact name, parent program, duration, and one short description. Do not list modules "
                "or invent missing details."
            )
        else:
            reply_constraints = (
                "Keep it short. Give only the main programs, with duration and a one-line description. "
                "Do not list modules or full syllabus. End with a short invitation to compare a track or ask about mentors, projects, or standards."
            )
    elif mentor_query:
        reply_constraints = (
            "Provide a short, smart answer stating that our mentors are active industry professionals with real world enterprise experience. "
            "Do not detail specific roles or tools."
        )
    elif project_query:
        reply_constraints = (
            "State that students work on industry ready capstone projects in both Cybersecurity and AI, designed to produce portfolio ready proof of work. "
            "Do NOT explicitly name the projects."
        )
    elif placement_query:
        reply_constraints = (
            "Provide a short, confident paragraph about how ThreadSecurity prepares students for the industry. Emphasize that the curriculum is built directly from industry requirements and is entirely project based. "
            "Do not use bullet points and do NOT list specific tools."
        )
    else:
        reply_constraints = (
            "If the query is just a random word (like 'chocolate') or completely unrelated to ThreadSecurity courses, refuse to answer and state you only help with ThreadSecurity courses. Otherwise, answer directly and briefly. Mention only the relevant course info, 3-5 core skills, and avoid unnecessary detail."
        )

    return (
        f"Context from Knowledge Base:\n{context_str}\n\n"
        f"User Query: {query}\n\n"
        f"{reply_constraints}\n\n"
        "Answer:"
    )
