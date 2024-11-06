**Structured Prompt Sequence for Building an Anonymous Blogging Web App**

---

**Prompt 1: Project Initialization**

- **Task**: Initialize a new Next.js project with TypeScript support.
- **Instructions**:
  - Use `create-next-app` to set up the project.
  - Ensure TypeScript is configured.
- **Expected Output**:
  - Commands and code snippets to initialize the project.

---

**Prompt 2: Database Setup with SQLite**

- **Task**: Install and configure SQLite as the database.
- **Instructions**:
  - Install necessary packages (e.g., `sqlite3`, `better-sqlite3`).
  - Set up a connection to a SQLite database file.
- **Expected Output**:
  - Code for database configuration.
  - Instructions on where to place the database file.

---

**Prompt 3: Define the Blog Post Model**

- **Task**: Create a model for blog posts.
- **Instructions**:
  - Define fields: `id` (primary key), `title` (string), `content` (text), `createdAt` (timestamp).
  - Use an ORM like Prisma or write raw SQL queries.
- **Expected Output**:
  - Model definition code.
  - Migration scripts if using an ORM.

---

**Prompt 4: Build API Routes for CRUD Operations**

- **Task**: Implement API routes to create and fetch blog posts.
- **Instructions**:
  - Create a POST API route for adding new blog posts.
  - Create a GET API route for retrieving all blog posts.
- **Expected Output**:
  - Code for `/api/posts` endpoints.
  - Error handling and data validation.

---

**Prompt 5: Create the Blog Listing Page**

- **Task**: Develop a page to display all blog posts.
- **Instructions**:
  - Fetch data from the GET API route.
  - Display blog posts using shadcn/ui components.
- **Expected Output**:
  - Code for the index page (`pages/index.tsx`).
  - Styling and layout code.

---

**Prompt 6: Develop the New Post Page**

- **Task**: Build a page for users to write a new blog post.
- **Instructions**:
  - Create a form with fields for `title` and `content`.
  - Submit form data to the POST API route.
  - Use shadcn/ui components for the form.
- **Expected Output**:
  - Code for the new post page (`pages/new.tsx`).
  - Form handling and submission logic.

---

**Prompt 7: Ensure Anonymity and No Authentication**

- **Task**: Remove any authentication requirements.
- **Instructions**:
  - Do not implement login or signup functionality.
  - Make all pages and API routes publicly accessible.
- **Expected Output**:
  - Confirmation that no authentication code exists.
  - Code snippets showing public access.

---

**Prompt 8: Integrate shadcn/ui Components**

- **Task**: Style the app using shadcn/ui components.
- **Instructions**:
  - Install shadcn/ui library.
  - Replace default HTML elements with shadcn/ui components.
- **Expected Output**:
  - Updated code with shadcn/ui components.
  - Consistent styling across pages.

---

**Prompt 9: Provide Run and Test Instructions**

- **Task**: Explain how to run and test the app locally.
- **Instructions**:
  - List all commands for installation, running, and building.
  - Mention any environment variables or configurations.
- **Expected Output**:
  - Step-by-step instructions.
  - Troubleshooting tips.

---

**Prompt 10: Deliver Complete Source Code**

- **Task**: Compile all code into a cohesive project.
- **Instructions**:
  - Organize code into appropriate files and directories.
  - Ensure all dependencies are listed in `package.json`.
- **Expected Output**:
  - A link to a GitHub repository or a zipped project folder.
  - Readme file with project overview.

---

**Note to the Coding LLM**:

- Follow best practices for Next.js and React development.
- Write clean, maintainable code with comments where necessary.
- Ensure that the app is fully functional and meets all the requirements specified.

---
