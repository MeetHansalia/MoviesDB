


const Footer = () => {
  return (
    
    <div className="bg-slate-gray-800">
    <footer className="bg-white shadow dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 mb-2 md:mb-0">© 2023 <a href="" className="hover:underline">MoviesDB</a>. All Rights Reserved.</span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Instagram</a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">LinkedIn</a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">YouTube</a>
          </li>
          <li>
            <a href="#" className="hover:underline">GitHub</a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
    
  )
}


export default Footer