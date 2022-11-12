const Buttons = ({name, className, onClick}) => {

  return (
    <button className={className} onClick={onClick}>
      {name}
    </button>
  )
}

export default Buttons;