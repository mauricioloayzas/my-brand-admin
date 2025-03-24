type Props = {
  footerStyle?: string;
};
const FooterSection = ({ footerStyle }: Props) => {
  const url = import.meta.env.VITE_API_FRONTPAGE_URL;
  return (
    <footer className={`footer-area ${footerStyle ? footerStyle : ""}`}>
      <div className="copywrite-text px-4">
        <p>
          Copyright &copy; {new Date().getFullYear()} all rights reserved by{" "}
          <a href={ url } target={"_blank"}>Mauloasan</a>
        </p>
      </div>
    </footer>
  );
};
export default FooterSection;
