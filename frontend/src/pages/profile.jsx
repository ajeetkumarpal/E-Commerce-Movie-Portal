function ProfilePage() {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8 bg-gray-50 min-h-screen">
      {/* Project Title */}
      <h1 className="text-center text-3xl font-bold text-gray-900">
        Project Name: E-Commerce & Movie Portal Web App
      </h1>

      {/* Status */}
      <h2 className="text-left font-bold text-gray-800 text-xl">Status: In Progress</h2>

      {/* Short Description */}
      <div className="space-y-2">
        <h3 className="text-left font-bold text-gray-700 text-lg">Short Description</h3>
        <p className="text-gray-800 leading-relaxed">
          This is a full-stack web application combining an e-commerce system and a movie search portal.<br />
          The project is built using React (frontend), Node.js + Express (backend), and MongoDB as database.<br />
          It demonstrates user authentication, movie listing, and profile management features with JWT and secure cookies.
        </p>
      </div>

      {/* Completed Features */}
      <div className="space-y-4">
        <h2 className="text-left font-bold text-gray-800 text-xl">Completed Features</h2>

        {/* Frontend */}
        <div className="border-2 border-gray-900 p-4 rounded-md space-y-2 bg-gray-200 hover:bg-gray-300 transition duration-400">
          <h3 className="text-left font-bold text-gray-800 text-lg">Frontend</h3>
          <ul className="list-disc list-inside text-gray-800 space-y-1">
            <li>User Registration and Login with proper validation</li>
            <li>JWT Authentication and HTTP-only Cookies for secure session management</li>
            <li>Movie Listing Component: displays movies fetched from OMDB API by search keywords</li>
            <li>Next Button functionality to navigate through movie lists</li>
            <li>Responsive Forms for login and registration</li>
            <li>Navbar with Routing using React Router</li>
            <li>Profile Page (EJS) setup with ability to upload profile images via Cloudinary</li>
          </ul>
        </div>

        {/* Backend */}
        <div className="border-2 border-gray-900 p-4 rounded-md space-y-2 bg-gray-200 hover:bg-gray-300 transition duration-400">
          <h3 className="text-left font-bold text-gray-800 text-lg">Backend</h3>
          <ul className="list-disc list-inside text-gray-800 space-y-1">
            <li>User Registration API with validation, password hashing, and duplicate email check</li>
            <li>Login API with JWT generation and cookie setting</li>
            <li>JWT verification on login and protected routes</li>
            <li>Profile Image Upload using Multer and Cloudinary</li>
            <li>Database Connection with MongoDB using Mongoose</li>
            <li>Form Validation using Zod schema</li>
          </ul>
        </div>
      </div>

      {/* Technologies Used */}
      <div className="space-y-2">
        <h3 className="text-left font-bold text-gray-800 text-lg">Technologies Used</h3>
        <p className="text-gray-800 leading-relaxed">
          Frontend: React, React Router, Axios, Tailwind CSS<br />
          Backend: Node.js, Express.js, JWT, bcrypt, Multer, Cloudinary<br />
          Database: MongoDB<br />
          API: OMDB API for movie search
        </p>
      </div>

      {/* Pending / Future Features */}
      <div className="space-y-2">
        <h3 className="text-left font-bold text-gray-800 text-lg">Pending / Future Features</h3>
        <p className="text-gray-800 leading-relaxed">
          Movie Search by Name fully integrated in frontend<br />
          Complete Profile Page with all user details editable<br />
          Pagination / Sliding Window for movie listings<br />
          Advanced Features: order management, admin dashboard, payment integration
        </p>
      </div>

      {/* Why This Project is Important */}
      <div className="space-y-2">
        <h3 className="text-left font-bold text-gray-800 text-lg">Why This Project is Important</h3>
        <p className="text-gray-800 leading-relaxed">
          Demonstrates full-stack development skills<br />
          Uses modern authentication practices with JWT and HTTP-only cookies<br />
          Integrates third-party APIs (OMDB, Cloudinary)<br />
          Shows ability to handle file uploads and validations<br />
          Well-structured frontend + backend architecture
        </p>
      </div>
    </div>
  );
}

export default ProfilePage;
