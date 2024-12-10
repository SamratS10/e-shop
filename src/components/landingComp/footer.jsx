import  Logo  from "./Logo";

const footerLinks = {
  product: ["Features", "Pricing", "Testimonials", "API"],
  company: ["About", "Blog", "Careers", "Contact"],
  legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"]
};

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <Logo />
            <p className="text-sm text-muted-foreground mt-4">
              Empowering businesses to succeed in the digital age.
            </p>
          </div>
          <FooterSection title="Product" items={footerLinks.product} />
          <FooterSection title="Company" items={footerLinks.company} />
          <FooterSection title="Legal" items={footerLinks.legal} />
        </div>
        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} e-shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterSection({ title, items }) {
  return (
    <div>
      <h4 className="font-semibold mb-4">{title}</h4>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {items.map((item) => (
          <li key={item} className="hover:text-primary cursor-pointer transition-colors">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}