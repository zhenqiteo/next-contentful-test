// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h2 className="text-lg font-bold mb-4">
              Leading Industrial AI To
              <br />
              Sustainable Growth
            </h2>
          </div>

          {/* About */}
          <div>
            <h3 className="font-bold mb-4">ABOUT SUPCON</h3>
            <ul className="space-y-2">
              <li>
                <a href="#">Who Are We</a>
              </li>
              <li>
                <a href="#">Location</a>
              </li>
              <li>
                <a href="#">Sustainability</a>
              </li>
              <li>
                <a href="#">Resources</a>
              </li>
              <li>
                <a href="#">Newsroom</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-bold mb-4">SOLUTIONS</h3>
            <ul className="space-y-2">
              <li>
                <a href="#">Next Gen Automation</a>
              </li>
              <li>
                <a href="#">Control & Instrumentation</a>
              </li>
              <li>
                <a href="#">Digital Solutions</a>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-bold mb-4">INDUSTRIES</h3>
            <ul className="space-y-2">
              <li>
                <a href="#">Oil & Gas</a>
              </li>
              <li>
                <a href="#">Chemical</a>
              </li>
              <li>
                <a href="#">Power</a>
              </li>
              <li>
                <a href="#">Building Material</a>
              </li>
              <li>
                <a href="#">Pulp & Paper</a>
              </li>
              <li>
                <a href="#">Metallurgy</a>
              </li>
              <li>
                <a href="#">Life Science</a>
              </li>
              <li>
                <a href="#">Food & Beverage</a>
              </li>
              <li>
                <a href="#">Utility</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex justify-between items-center">
          <div>© 2024 SUPCON. All Rights Reserved</div>
          <div className="flex gap-6">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms Of Service</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
