The page features a responsive layout, dynamic product fetching from a mock API, and interactive filtering, searching, and sorting capabilities. It demonstrates core front-end development skills using React.js, pure CSS for styling, and emphasizes clean, efficient, and semantic code.

Live Demo
Experience the live application here:
[Live PLP on Netlify]([Your Netlify URL Here])

Features
Responsive Design: Adapts seamlessly to desktop, tablet, and mobile screen sizes.
Dynamic Product Fetching: Integrates with the Fake Store API to fetch product data.

Product Filters:
Filter by Category.
Filter by Price Range (min/max input and slider).
Placeholder for "In Stock" (as Fake Store API does not provide stock data).
Search Functionality: Real-time search by product title.
Sorting Options: Sort products by:
Default order (API order)
Price (Low to High)
Price (High to Low)
Name (A-Z)
Modular React Components: Project structured into reusable components (Header, Filters, ProductCard, ProductGrid, Footer).
SEO Optimization:
Semantic HTML5 tags.
Dynamic page title, meta description, and keywords using react-helmet-async.
Structured data (JSON-LD) for ItemList schema using react-helmet-async to improve search engine understanding.
Pure CSS Styling: Minimal external dependencies, leveraging native CSS for layout (Flexbox, Grid) and responsiveness (Media Queries).
Modern JavaScript: Utilizes React Hooks (useState, useEffect, useMemo) for state management and performance optimization.

Technologies Used
React.js: Front-end JavaScript library.
HTML5: Semantic page structure.
CSS3: Styling and responsiveness (Flexbox, Grid, Media Queries).
JavaScript (ES6+): Core logic.
Axios: Promise-based HTTP client for API requests.
React Helmet Async: For managing document head tags and SEO metadata in React.
Git & GitHub: Version control.
Netlify: Deployment.

Setup Instructions
Follow these steps to get the project up and running on your local machine.
Prerequisites
Before you begin, ensure you have the following installed:
Node.js (v14 or higher) & npm (v6 or higher): Download & Install Node.js (npm is included).
Git: Download & Install Git.
Code Editor: Visual Studio Code

Installation
Clone the Repository:

git clone https://github.com/srikanthgopu11/Appscrip-task-Srikanth-Gopu.git

Navigate to the Project Directory:

cd Appscrip-task-Srikanth-Gopu

Install Dependencies:
Install all the required Node.js packages. Due to potential peer dependency conflicts with newer npm versions, it's recommended to use the --legacy-peer-deps flag for a smoother installation.

npm install --legacy-peer-deps

Running the Application Locally
Start the Development Server:

npm start


Project Structure
The project follows a standard Create React App structure, with an emphasis on component modularity:

Appscrip-task-Srikanth-Gopu/
├── public/
│   ├── index.html        
│   └── favicon.ico       
├── src/
│   ├── components/       
│   │   ├── Header.js
│   │   ├── Filters.js
│   │   ├── ProductCard.js
│   │   ├── ProductGrid.js
│   │   └── Footer.js
│   ├── App.js            
│   ├── App.css           
│   ├── index.js          
│   └── index.css         
├── .gitignore            
├── package.json          
├── README.md             
└── ...

Deployment
The application is deployed using Netlify for continuous deployment.
Build the project for production:

npm run build

Deploy to Netlify:
Connect your GitHub repository to Netlify, configuring the build command as npm run build and the publish directory as build.
Alternatively, you can manually drag and drop the contents of the build folder to the Netlify deploy interface.