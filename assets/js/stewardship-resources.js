/**
 * Stewardship Resources Page
 * Handles product filtering and dynamic display
 */

(function() {
  'use strict';

  // Load products from data file
  async function loadProducts() {
    try {
      const response = await fetch('/data/stewardship-resources.json');
      if (!response.ok) {
        console.warn('Product data not yet available');
        return null;
      }
      return await response.json();
    } catch (error) {
      console.warn('Could not load products:', error);
      return null;
    }
  }

  // Create product card HTML
  function createProductCard(product) {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.dataset.category = product.category;
    
    card.innerHTML = `
      <div class="product-category-badge">${product.category}</div>
      <h3 class="product-title">${escapeHtml(product.title)}</h3>
      <p class="product-description">${escapeHtml(product.description)}</p>
      ${product.personal_note ? `<p class="product-note">"${escapeHtml(product.personal_note)}"</p>` : ''}
      <a href="${escapeHtml(product.amazon_url)}" 
         class="product-link" 
         target="_blank" 
         rel="noopener nofollow sponsored">
        View on Amazon
      </a>
    `;
    
    return card;
  }

  // Escape HTML to prevent XSS
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // Filter products by category
  function filterProducts(category) {
    const cards = document.querySelectorAll('.product-card');
    
    cards.forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  }

  // Initialize page
  async function init() {
    const products = await loadProducts();
    const grid = document.getElementById('resourcesGrid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    // If products loaded, render them
    if (products && grid) {
      // Clear placeholder
      grid.innerHTML = '';
      
      // Flatten products from all categories
      const allProducts = [];
      Object.keys(products).forEach(category => {
        if (Array.isArray(products[category])) {
          products[category].forEach(product => {
            allProducts.push({ ...product, category });
          });
        }
      });
      
      // Sort by date_added (newest first)
      allProducts.sort((a, b) => {
        return new Date(b.date_added) - new Date(a.date_added);
      });
      
      // Render cards
      allProducts.forEach(product => {
        grid.appendChild(createProductCard(product));
      });
      
      // If no products, show message
      if (allProducts.length === 0) {
        grid.innerHTML = `
          <div class="resources-placeholder">
            <p><strong>No products added yet.</strong></p>
            <p>Check back soon for curated recommendations.</p>
          </div>
        `;
      }
    }
    
    // Set up filter buttons
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Update active state
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Filter products
        const category = btn.dataset.category;
        filterProducts(category);
      });
    });
  }

  // Run when DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
