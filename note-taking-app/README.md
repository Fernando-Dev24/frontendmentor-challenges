# Real-Time Notes App

This project is a **collaborative real-time note-taking application** built with **Next.js 14/15, Socket.io, and Prisma**. It allows multiple users to edit notes simultaneously with instant synchronization.

## 🚀 Features

- **Live collaboration** using WebSockets (Socket.io)
- **Database persistence** with Prisma and SQLite
- **Auto-sync updates** across multiple clients
- **Modern Next.js architecture** with the App Router

## 📦 Installation

1. First, clone the repository and install dependencies:
2. Clone `.template.env` file, rename it with `.env`, and replace variables with yours.
3. Install dependencies `npm install`
4. Run postgress daemonized on Docker `docker compose up -d`
5. Execute `npx prisma migrate dev`
6. Execute dev script `npm run dev`

### Database Setup

Configure the database using Prisma:

```bash
npx prisma migrate dev --name init
```

### Run the App

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

## 🛠 Tech Stack

- **Next.js 14/15** - Framework for building modern web applications
- **Socket.io** - Real-time communication
- **Prisma** - Database ORM for managing data
- **SQLite** - Lightweight database
- **React (Client Components)** - For a smooth user experience

## 🔧 How It Works

1. **Users open a note** in their browser.
2. **Edits are sent** via WebSockets (`updateNote` event).
3. **The server saves** the updates in the database and broadcasts them.
4. **All connected clients receive** the latest note content (`noteUpdated` event).

## 📝 Folder Structure

```
/app
  /api/socket/route.ts   # WebSocket server
  /note/[id]/page.tsx    # Note page with real-time sync
/components
  NoteEditor.tsx         # Collaborative note editor
/prisma
  schema.prisma          # Database schema
```

## 🎯 Future Improvements

- **User authentication** to track who edits a note
- **Conflict resolution** using CRDTs or Yjs
- **Cloud database** support for production deployment

## 📜 License

This project is licensed under the MIT License.
