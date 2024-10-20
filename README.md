# Express.js-Post-Management-App
 Express.js Post Management App A simple post management application built with Express.js and EJS template engine. Users can create, view, edit, and delete posts in a smooth, user-friendly web interface.

🛠️ Tech Stack
    Backend: Express.js (Node.js framework)
    Frontend: EJS (Embedded JavaScript templates), CSS
    Database: In-memory (using arrays)
    Middleware: Method Override (for PATCH and DELETE requests)

Features
   1) CRUD Operations:
         Create, view, edit, and delete posts.
   2) In-memory data storage using an array for demo purposes.
   3) EJS Templates for dynamic HTML rendering.
   4) Method Override middleware to enable PATCH and DELETE HTTP methods through forms.
   5) Minimal styling for a simple, clean UI.

Usage:
    1) View All Posts:
    Open http://localhost:8080/posts.

    2) Create New Post:
    Click the "Create New Post" link to open the post creation form.

    3) View a Post:
    Click on any post's "See In Details" link to view the post in detail.

    4) Edit a Post:
    Use the "Edit" link to modify a post.

    5) Delete a Post:
    Click the "Delete" button on a post to remove it.

Dependencies:
    Express: Web framework for Node.js
    EJS: Templating engine for HTML rendering
    Method-Override: Enables HTTP PATCH/DELETE requests
    UUID: Generates unique IDs for posts
