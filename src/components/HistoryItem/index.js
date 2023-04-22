import './index.css'

const HistoryItem = props => {
  const {details, deleteUser} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = details

  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li>
      <div className="li_element_container">
        <p>{timeAccessed}</p>
      </div>
      <div className="li_element_container">
        <img src={logoUrl} alt="domain logo" />
      </div>
      <div className="li_element_container">
        <p>{title}</p>
      </div>
      <div className="li_element_container">
        <p>{domainUrl}</p>
      </div>
      <div className="delete_icon">
        <button type="button" onClick={onDelete} data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
