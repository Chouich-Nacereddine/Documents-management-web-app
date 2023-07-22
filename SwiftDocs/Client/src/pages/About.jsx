import React from 'react'

const About = () => {
  return (
    <>
        <section id='about' className='pt-[15vh] text-white'>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center">
            <img
              src="https://via.placeholder.com/400"
              alt="Company Logo"
              className="rounded-full w-64 h-64 mx-auto border-4 border-white shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              About SwiftDocs
            </h2>
            <p className="text-lg">
              Welcome to SwiftDocs, a revolutionary document management
              application for businesses. Our mission is to simplify and enhance
              the way companies handle their critical documents, ensuring
              seamless collaboration and improved productivity.
            </p>

            <p className="text-lg mt-6">
              With SwiftDocs, you can securely store, organize, and share
              documents with your team, clients, and partners. Our user-friendly
              interface and powerful features make it easy to find and access
              important files, reducing time spent searching for misplaced
              documents.
            </p>

            <p className="text-lg mt-6">
              Our document versioning system ensures that you always have the
              latest version of a file, preventing confusion and costly errors.
              Collaborate in real-time, track changes, and streamline approval
              processes with ease.
            </p>

            <p className="text-lg mt-6">
              Whether you are a small business or a large enterprise, SwiftDocs
              adapts to your specific needs. We prioritize data security and
              privacy, providing multiple layers of protection to safeguard your
              sensitive information.
            </p>

            <p className="text-lg mt-6">
              Join thousands of businesses who have already transformed their
              document management with SwiftDocs. Sign up today and experience
              the next generation of document collaboration.
            </p>
          </div>
        </div>
      </div>

    </section>
    </>
  )
}

export default About
