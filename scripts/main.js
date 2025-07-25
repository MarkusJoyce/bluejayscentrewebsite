// Dark/Light mode toggle
document.getElementById('darkModeToggle').addEventListener('click', function() {
  document.documentElement.classList.toggle('dark');
});

// Search bar filter (basic for demo)
document.getElementById('searchForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const query = this.querySelector('input').value.toLowerCase();
  // filter articles in #article-grid (implement logic as needed)
  // This is a placeholder for actual search functionality
  alert('Search for: ' + query);
});

// Fetch featured and recent articles (placeholder logic)
fetch('/content/articles/articles.json')
  .then(res => res.json())
  .then(data => {
    // Inject featured article and cards into index.html
    // Implement as needed
  });