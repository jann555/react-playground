/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import './directory-container.styles.scss'
import DirectoryItem from '../directory-item/directory-item.component'

const Directory = ({ categories }) => {
  return (
        <div className="directory-container">
        {
            categories.map((category) => (
            <DirectoryItem key={category.id} category={category} />
            ))
        }
        </div>
  )
}

export default Directory
