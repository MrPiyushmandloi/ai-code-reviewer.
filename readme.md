## 📦 Review & Correct Code CLI

A simple CLI tool to review and correct your code using AI. This package helps developers quickly spot improvements and fix errors in their code from the terminal.

## 🚀 Installation

# Clone the repository

https://github.com/MrPiyushmandloi/reviwe.git

# Move into the project directory
cd reviwe

# Install dependencies
npm install

# Link the package globally (so you can run it as a CLI)
npm link

## ⚙️ Setup

This project requires an OpenAI API key.

Create a .env file in the project root.

Add the following line:

```bash
GEMINI_API_KEY=your_api_key_here
```

## 🖥️ Usage
1. Review Your Code

Run this command to review code quality and improvements:
```bash
review-my-code path/to/file.js
```


```bash
Example:

review-my-code example.js
```


Output:

Suggestions for code improvement.

Performance and readability feedback.

2. Correct Your Code

Run this command to auto-correct your code:
```bash
correct-code path/to/file.js
```


```bash
Example:

correct-code buggy.js
```


Output:

Corrected code printed in the terminal.

Can be copied directly.

## 📖 Example

```javascript
Input file:

function add(a,b){
return a+b
}
console.log(add(2,3))
```


Command:
```bash

review-my-code add.js
```


Output:

✅ Suggestions:
- Add spaces after commas for readability.
- Use consistent formatting.


Command:
```bash

correct-code add.js
```


Output:

function add(a, b) {
  return a + b;
}
console.log(add(2, 3));

## 🔧 Development

Run locally:

node index.js review path/to/file.js
node index.js correct path/to/file.js

## 📌 Roadmap

 Add support for multiple programming languages.

 Option to output corrected code into a new file.

 Add tests and CI/CD.

## 🤝 Contributing

Pull requests are welcome!

## 📜 License

MIT License © 2025 [Piyush Mandloi]







