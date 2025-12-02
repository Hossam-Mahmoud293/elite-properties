/**
 * Search Functionality for Elite Properties Real Estate
 * Handles search input, suggestions, and form submission
 */

document.addEventListener("DOMContentLoaded", function () {
  const searchBox = document.querySelector(".search-box");
  if (!searchBox) return;

  const searchInput = document.getElementById("propertySearch");
  const searchClear = searchBox.querySelector(".search-clear");
  const searchForm = searchBox.closest("form") || searchBox;
  const suggestionsContainer = searchBox.querySelector(".search-suggestions");
  const propertyTypeSelect = document.getElementById("propertyType");
  const propertyStatusSelect = document.getElementById("propertyStatus");
  const searchBtn = searchBox.querySelector(".search-btn");

  let searchTimeout;
  let currentSuggestions = [];

  // Initialize search functionality
  function initSearch() {
    setupEventListeners();
    updateClearButton();
  }

  // Set up event listeners
  function setupEventListeners() {
    // Search input events
    searchInput.addEventListener("input", handleSearchInput);
    searchInput.addEventListener("focus", showSuggestions);

    // Clear button
    searchClear.addEventListener("click", clearSearch);

    // Form submission
    if (searchForm) {
      searchForm.addEventListener("submit", handleFormSubmit);
    } else {
      searchBtn.addEventListener("click", handleSearch);
    }

    // Click outside to close suggestions
    document.addEventListener("click", handleClickOutside);

    // Keyboard navigation
    searchInput.addEventListener("keydown", handleKeyNavigation);

    // Select change events
    if (propertyTypeSelect) {
      propertyTypeSelect.addEventListener("change", handleSearch);
    }
    if (propertyStatusSelect) {
      propertyStatusSelect.addEventListener("change", handleSearch);
    }
  }

  // Handle search input
  function handleSearchInput(e) {
    updateClearButton();
    const query = e.target.value.trim();

    clearTimeout(searchTimeout);

    if (query.length < 2) {
      hideSuggestions();
      return;
    }

    searchTimeout = setTimeout(() => {
      fetchSuggestions(query);
    }, 300);
  }

  // Fetch search suggestions
  function fetchSuggestions(query) {
    // In a real application, this would be an API call
    // For now, we'll use mock data
    const mockData = [
      {
        id: 1,
        title: "فيلا للبيع في القاهرة الجديدة",
        type: "فيلا",
        status: "للبيع",
        location: "القاهرة الجديدة",
        price: "5,000,000 ج.م",
        image: "images/properties/property-1.jpg",
      },
      {
        id: 2,
        title: "شقة للايجار في الشيخ زايد",
        type: "شقة",
        status: "للإيجار",
        location: "الشيخ زايد",
        price: "8,000 ج.م/شهر",
        image: "images/properties/property-2.jpg",
      },
      {
        id: 3,
        title: "أرض للبيع في 6 أكتوبر",
        type: "أرض",
        status: "للبيع",
        location: "6 أكتوبر",
        price: "2,500 ج.م/م²",
        image: "images/properties/property-3.jpg",
      },
      {
        id: 4,
        title: "شاليه للبيع في الساحل الشمالي",
        type: "شاليه",
        status: "للبيع",
        location: "الساحل الشمالي",
        price: "3,500,000 ج.م",
        image: "images/properties/property-4.jpg",
      },
    ];

    // Filter mock data based on query and selected filters
    const typeFilter = propertyTypeSelect ? propertyTypeSelect.value : "";
    const statusFilter = propertyStatusSelect ? propertyStatusSelect.value : "";

    const filtered = mockData.filter((item) => {
      const matchesQuery =
        item.title.includes(query) ||
        item.location.includes(query) ||
        item.type.includes(query);

      const matchesType =
        !typeFilter ||
        item.type === typeFilter ||
        (typeFilter === "apartment" && item.type === "شقة") ||
        (typeFilter === "villa" && item.type === "فيلا") ||
        (typeFilter === "land" && item.type === "أرض") ||
        (typeFilter === "commercial" && item.type === "تجاري");

      const matchesStatus =
        !statusFilter ||
        (statusFilter === "sale" && item.status === "للبيع") ||
        (statusFilter === "rent" && item.status === "للإيجار");

      return matchesQuery && matchesType && matchesStatus;
    });

    currentSuggestions = filtered;
    displaySuggestions(filtered);
  }

  // Display search suggestions
  function displaySuggestions(suggestions) {
    if (!suggestions || suggestions.length === 0) {
      suggestionsContainer.innerHTML = `
        <div class="suggestion-item no-results">
          <i class="far fa-search"></i>
          <span>لا توجد نتائج مطابقة</span>
        </div>`;
      showSuggestions();
      return;
    }

    const html = suggestions
      .map(
        (item) => `
      <div class="suggestion-item" data-id="${item.id}">
        <div class="suggestion-image">
          <img src="${item.image}" alt="${item.title}" />
        </div>
        <div class="suggestion-details">
          <h4>${item.title}</h4>
          <div class="suggestion-meta">
            <span class="suggestion-location"><i class="fas fa-map-marker-alt"></i> ${item.location}</span>
            <span class="suggestion-price">${item.price}</span>
          </div>
        </div>
        <span class="suggestion-type">${item.type}</span>
      </div>
    `
      )
      .join("");

    suggestionsContainer.innerHTML = html;
    showSuggestions();

    // Add click event to suggestion items
    const suggestionItems = suggestionsContainer.querySelectorAll(
      ".suggestion-item:not(.no-results)"
    );
    suggestionItems.forEach((item) => {
      item.addEventListener("click", () => {
        const id = item.dataset.id;
        selectSuggestion(id);
      });
    });
  }

  // Handle suggestion selection
  function selectSuggestion(id) {
    const selected = currentSuggestions.find(
      (item) => item.id === parseInt(id)
    );
    if (selected) {
      // In a real app, you would navigate to the property page
      console.log("Selected property:", selected);
      // window.location.href = `/property/${selected.id}`;

      // For demo, just fill the search and submit
      searchInput.value = selected.title;
      handleSearch();
    }
    hideSuggestions();
  }

  // Show suggestions dropdown
  function showSuggestions() {
    if (suggestionsContainer.children.length > 0) {
      suggestionsContainer.style.opacity = "1";
      suggestionsContainer.style.visibility = "visible";
      suggestionsContainer.style.transform = "translateY(0)";
    }
  }

  // Hide suggestions dropdown
  function hideSuggestions() {
    suggestionsContainer.style.opacity = "0";
    suggestionsContainer.style.visibility = "hidden";
    suggestionsContainer.style.transform = "translateY(10px)";
  }

  // Handle form submission
  function handleFormSubmit(e) {
    e.preventDefault();
    handleSearch();
  }

  // Handle search button click
  function handleSearch() {
    const query = searchInput.value.trim();
    const type = propertyTypeSelect ? propertyTypeSelect.value : "";
    const status = propertyStatusSelect ? propertyStatusSelect.value : "";

    // In a real app, this would submit the search form or navigate to search results
    console.log("Searching for:", { query, type, status });
    // window.location.href = `/search?q=${encodeURIComponent(query)}&type=${type}&status=${status}`;

    // For demo, just show an alert
    if (query) {
      alert(
        `بحث عن: ${query}\nالنوع: ${type || "الكل"}\nالحالة: ${
          status || "الكل"
        }`
      );
    }

    hideSuggestions();
  }

  // Update clear button visibility
  function updateClearButton() {
    if (searchInput.value.trim() !== "") {
      searchClear.classList.add("visible");
    } else {
      searchClear.classList.remove("visible");
    }
  }

  // Clear search input
  function clearSearch() {
    searchInput.value = "";
    searchInput.focus();
    updateClearButton();
    hideSuggestions();
  }

  // Handle click outside search box
  function handleClickOutside(e) {
    if (!searchBox.contains(e.target)) {
      hideSuggestions();
    }
  }

  // Handle keyboard navigation
  function handleKeyNavigation(e) {
    const items = suggestionsContainer.querySelectorAll(
      ".suggestion-item:not(.no-results)"
    );
    if (!items.length) return;

    let currentIndex = Array.from(items).findIndex(
      (item) => item === document.activeElement
    );

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        currentIndex = (currentIndex + 1) % items.length;
        items[currentIndex].focus();
        break;
      case "ArrowUp":
        e.preventDefault();
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        items[currentIndex].focus();
        break;
      case "Enter":
        if (document.activeElement.classList.contains("suggestion-item")) {
          e.preventDefault();
          document.activeElement.click();
        }
        break;
      case "Escape":
        hideSuggestions();
        searchInput.focus();
        break;
    }
  }

  // Initialize the search functionality
  initSearch();
});
