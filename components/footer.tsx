export const Footer = () => {
  return (
    <footer className="mt-20 md:mt-28 lg:mt-40">
      <div className="container">
        <div className="flex flex-col gap-8 items-center py-6 text-sm border-t border-gray-200 md:justify-between md:flex-row">
          <div className="text-black/80">
            &copy; 2024 Relink. All rights reserved.
          </div>
          <div className="flex flex-col gap-2 items-center text-sm underline md:flex-row underline-offset-1 md:gap-8 text-black/80">
            <p className="cursor-pointer">Privacy Policy</p>
            <p className="cursor-pointer">Terms of Service</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
