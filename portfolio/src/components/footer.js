const Footer = ({ children }) => {
  return (
    <footer>
      <div className="container">
        {children}
        <span>&copy; bm dev</span>
      </div>
    </footer>
  )
}

export default Footer
