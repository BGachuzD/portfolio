export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-neutral-600">
        © {new Date().getFullYear()} Gachuz. All rights reserved.
      </div>
    </footer>
  );
}
