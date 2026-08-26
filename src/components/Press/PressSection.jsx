import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { PRESS_ARTICLES } from '../../data/content';
import { Link } from 'react-router-dom';
import './Press.css';

export default function PressSection() {
  return (
    <section className="section press-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">PRESS & NEWSROOM</span>
          <h2 className="section-title">Latest Updates & Stories</h2>
          <p className="section-subtitle">
            Stay updated with our latest technology innovations, financial inclusion milestones, and product announcements.
          </p>
        </div>

        <div className="press-grid">
          {PRESS_ARTICLES.map((article) => (
            <article key={article.id} className="press-card">
              <div className="press-card-header">
                <span className="press-cat-badge">{article.category}</span>
                <div className="press-meta">
                  <span><Calendar size={13} /> {article.date}</span>
                  <span>•</span>
                  <span><Clock size={13} /> {article.readTime}</span>
                </div>
              </div>

              <h3 className="press-title">{article.title}</h3>
              <p className="press-summary">{article.summary}</p>

              <Link to="/press" className="press-read-more">
                <span>Read Full Story</span>
                <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
