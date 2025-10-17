const Layout = ({ left, right, className="" }) => {
  return (
    <div className={`flex w-full h-full ${className} max-sm:flex-col`}>
      <div className="w-1/2 py-11 bg-accent max-sm:w-full">
        <div className="w-full max-w-[56%] mx-auto relative">
          { left }
        </div>
      </div>
      <div className="w-1/2 bg-gray-50 relative max-sm:w-full">
        { right }
      </div>
    </div>
  )
}

export default Layout;