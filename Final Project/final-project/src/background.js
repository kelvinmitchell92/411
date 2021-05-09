import './index.css';

const Background = ({ children }) => {
  return (
    // Remove transition-all to disable the background color transition.
    <body className="new bg-primary dark:bg-secondary transition-all">{children}</body>
  );
};
export default Background;