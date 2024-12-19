import { navMenu } from "@/lib/data";
import React from "react";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Tangan Berbagi</h2>
            <p>
              Tangan Berbagi adalah organisasi sosial yang berfokus pada
              kegiatan kemanusiaan, sosial, pendidikan, dan lingkungan.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              {navMenu.map((menu) => (
                <li key={menu.id}>
                  <a href={menu.url} className="hover:text-green-400">
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Kontak Kami</h3>
            <ul className="space-y-2">
              <li>
                <span>📍</span> Jl. Tuparev No.70, Kedungjaya, Kec. Kedawung,
                Kabupaten Cirebon, Jawa Barat 45153
              </li>
              <li>
                <span>📧</span> info@tanganberbagi.org
              </li>
              <li>
                <span>📞</span> +62 838-4557-9401
              </li>
              <li className="flex items-center gap-3">
                <FaInstagram />{" "}
                <a href="https://www.instagram.com/tanganberbagi_mj22b?igsh=djBsMzh2enNlbTc%3D">
                  <span className="underline">@tanganberbagi_mj22b</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Tangan Berbagi. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
