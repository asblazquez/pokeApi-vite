export function ButtonToTop () {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
        <button type="button" className="btn-toTop" onClick={scrollToTop}>
            <i className="nes-icon coin is-medium"></i>
        </button>
  )
}
