# JSON Share

A web application that allows users to share JSON data publicly. Built with Next.js, Clerk for authentication, and shadcn/ui components.

## 🚀 Features

- User authentication with Clerk
- JSON editor with syntax highlighting using CodeMirror
- Public sharing of JSON data
- Modern UI with shadcn/ui components
- Responsive design
- Public access to shared JSON data without login

## 💻 Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [Clerk](https://clerk.dev/) - Authentication
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [CodeMirror](https://www.npmjs.com/package/@codemirror/lang-json) - JSON editor (@codemirror/lang-json)
- [Tailwind CSS](https://tailwindcss.com/) - Styling

## 🛠️ Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/json-share.git
cd json-share
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

## 🎥 Video Tutorial

For a detailed step-by-step guide on how to build this project, you can watch the tutorial video:
[JSON Share Project Tutorial](https://youtu.be/H0GUJV5a8Wg)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/ckriswinarto/sharejson/issues).
