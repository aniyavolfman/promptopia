# Promptopia

Promptopia is an open-source AI prompting fullstack tool for the modern world. It provides users with the ability to discover, create, and share creative prompts to inspire their writing, brainstorming sessions, and creative projects. Uses tailwindcss for styling. This README file will guide you through the features, setup, and deployment process for Promptopia app. 

## Features

- **Authentication with Google:** Users can sign in to Promptopia using their Google accounts, ensuring a secure and hassle-free login process.
- **Create, Edit, and Delete Posts:** Once logged in, users can create new prompts, edit existing ones, or delete prompts they no longer wish to keep. This gives them complete control over their prompt collection.
- **User Profiles:** Each user has their own profile page where they can showcase their created prompts. Other users can visit these profile pages to view and gain inspiration from the prompts shared by that user.
- **Search Functionality:** The main page of Promptopia allows users to search for prompts using keywords, tags, or usernames. This feature makes it easier for users to discover prompts related to specific themes or topics.
- **Copy Prompt Text:** A handy button allows users to copy the text of a prompt with a single click. This makes it convenient to paste the prompt into an AI tool or any other writing platform.

## Prerequisites

Before running the application, you need to have the following installed on your system:

- Next.js (version 13)
- React
- Node.js (version 14 or later)
- MongoDB (version 4.0 or later)

Promptopia is deployed on Vercel, a cloud platform for static sites and serverless functions.

## Installation

1. Clone the repository to your local machine using the following command:
```bash
   git clone https://github.com/aniyavolfman/promptopia.git
```
2. Install the necessary dependencies by navigating to the project directory and running:
```bash
npm install
```
3. Create a `.env` file in the root directory of the project and add the following environment variables:

```bash

GOOGLE_ID=
GOOGLE_CLIENT_SECRET=
MONGODB_URI=
NEXTAUTH_URL=
NEXTAUTH_URL_INTERNAL=
NEXTAUTH_SECRET=

```

4. Run the app:

```bash
   npm run dev
```
## API Endpoints

The following API endpoints are available:

- POST /api/prompt/new :
Create new prompt.

- GET /api/users/${session.user.id}/posts:
Get all posts for the user.

- GET /api/users/${params?.id}/posts:
Get all posts of the user on the user`s profile.

- GET /api/prompt/${promptId}
Get prompt.

- PATCH /api/prompt/${promptId}
Update prompt.

- GET  /api/prompts/${project}/prompts
Get all prompts.

- DELETE /api/prompt/${post._id.toString()}
Delete prompt.

## Error Handling

The API endpoints return error responses with code and message.
