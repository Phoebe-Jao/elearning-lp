import ScrollFadeInUp from "./ScrollFadeInUp";

const Layout = ({ left, right, className="" }) => {
  return (
    <div className={`flex w-full h-full ${className} max-sm:flex-col`}>
      <div className="w-1/2 py-11 max-sm:py-8 bg-primary max-sm:w-full">
        <div className="w-full max-w-[56%] mx-auto relative">
          <ScrollFadeInUp>
            { left }
          </ScrollFadeInUp>
        </div>
      </div>
      <div className="w-1/2 bg-gray-50 relative max-sm:w-full">
        <ScrollFadeInUp>
          { right }
        </ScrollFadeInUp>
      </div>
    </div>
  )
}

export default Layout;