'use client'

import '../styles/PagesCard.css';
import pages from '../data/data.json'

const PagesCard = () => {
  return (
    <div className="card-container">
      <div className="card">
        <form className="card-item">
          <div className="form-title">
            <span>All Pages</span>
            <input type="checkbox" className="checkbox" />
          </div>
          <div className="line"></div>
          
            {/* Rendering the title of all pages */}

            {pages.pages.map((page) => (
              <div key={page.id} className="card-list-item">
                <span>{page.title}</span>
                <input type="checkbox" className="checkbox" />
              </div>
            ))}
            <div className="line"></div>
          <button type="submit" className="submitBtn">
            Done
          </button>
        </form>
      </div>
    </div>
  )
}

export default PagesCard
