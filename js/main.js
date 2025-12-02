// Load properties data from JSON file
async function loadPropertiesData() {
  try {
    const response = await fetch("js/properties-data.json");
    if (!response.ok) {
      throw new Error("فشل في تحميل بيانات العقارات");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("خطأ في تحميل بيانات العقارات:", error);
    return [];
  }
}

// Testimonials Data
const testimonialsData = [
  {
    id: 1,
    name: "أحمد محمد",
    title: "عميل",
    category: "buyers",
    rating: 5,
    comment:
      "لقد ساعدتني نخبة العقارية في العثور على منزل أحلامي بكل سهولة واحترافية. شكراً لكم على الجهود الرائعة!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    date: "2023-11-15",
  },
  {
    id: 2,
    name: "سارة أحمد",
    title: "عميلة",
    category: "sellers",
    rating: 5,
    comment:
      "خدمة ممتازة وفريق محترف. ساعدوني في بيع شقتي بسرعة وبسعر ممتاز. أنصح الجميع بالتعامل معهم.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    date: "2023-11-10",
  },
  {
    id: 3,
    name: "محمد علي",
    title: "مستثمر",
    category: "investors",
    rating: 5,
    comment:
      "أعجبتني جداً الخدمة المقدمة والشفافية في التعامل. فريق محترف ويستحق كل التقدير.",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    date: "2023-11-08",
  },
  {
    id: 4,
    name: "فاطمة خالد",
    title: "عميلة",
    category: "buyers",
    rating: 5,
    comment:
      "تجربة رائعة في شراء شقتي الأولى. الفريق كان متعاوناً جداً وأرشدني إلى أفضل الخيارات.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    date: "2023-11-05",
  },
  {
    id: 5,
    name: "عمر حسن",
    title: "مستثمر",
    category: "investors",
    rating: 4,
    comment:
      "استثمارات ناجحة مع نخبة العقارية. نسبة أرباح ممتازة وفريق متخصص في السوق.",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    date: "2023-11-01",
  },
  {
    id: 6,
    name: "نورا محمود",
    title: "بائعة",
    category: "sellers",
    rating: 5,
    comment:
      "بعت فيلتي خلال أسبوعين فقط! السعر كان أفضل من توقعاتي بفضل تقييمهم الدقيق.",
    avatar: "https://randomuser.me/api/portraits/women/28.jpg",
    date: "2023-10-28",
  },
  {
    id: 7,
    name: "خالد عبدالله",
    title: "مشتري",
    category: "buyers",
    rating: 5,
    comment:
      "وجدت شقة مثالية لعائلتي. الموظفين كانوا صبورين واستمعوا لمتطلباتي بعناية.",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
    date: "2023-10-25",
  },
  {
    id: 8,
    name: "مريم سعيد",
    title: "مستثمرة",
    category: "investors",
    rating: 5,
    comment:
      "محفظة استثمارية متنوعة وعائدات شهرية منتظمة. نخبة العقارية شريك موثوق.",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    date: "2023-10-20",
  },
  {
    id: 9,
    name: "ياسر محمود",
    title: "بائع",
    category: "sellers",
    rating: 4,
    comment:
      "عملية بيع سلسة وسريعة. الفريق تعامل مع كل الإجراءات بكفاءة عالية.",
    avatar: "https://randomuser.me/api/portraits/men/55.jpg",
    date: "2023-10-18",
  },
  {
    id: 10,
    name: "ليلى أحمد",
    title: "مشترية",
    category: "buyers",
    rating: 5,
    comment:
      "خدمة عملاء ممتازة ومتابعة مستمرة بعد الشراء. أشعر بالرضا التام عن تعاملي معهم.",
    avatar: "https://randomuser.me/api/portraits/women/52.jpg",
    date: "2023-10-15",
  },
  {
    id: 11,
    name: "إبراهيم حسن",
    title: "مستثمر",
    category: "investors",
    rating: 5,
    comment:
      "نصائح استثمارية قيمة وساعدوني في بناء محفظة متنوعة. خبرتهم واضحة في السوق.",
    avatar: "https://randomuser.me/api/portraits/men/68.jpg",
    date: "2023-10-12",
  },
  {
    id: 12,
    name: "هند محمد",
    title: "بائعة",
    category: "sellers",
    rating: 5,
    comment:
      "سعر بيع ممتاز وتسريع للإجراءات. تعامل احترافي من البداية للنهاية.",
    avatar: "https://randomuser.me/api/portraits/women/47.jpg",
    date: "2023-10-10",
  },
  {
    id: 13,
    name: "أسامة خالد",
    title: "مشتري",
    category: "buyers",
    rating: 4,
    comment:
      "تنوع كبير في العقارات المعروضة. وجدت ما يناسب ميزانيتي ومتطلباتي.",
    avatar: "https://randomuser.me/api/portraits/men/38.jpg",
    date: "2023-10-08",
  },
  {
    id: 14,
    name: "دعاء علي",
    title: "مستثمرة",
    category: "investors",
    rating: 5,
    comment:
      "عائدات استثمارية تفوق التوقعات. فريق متخصص وذو خبرة عالية في السوق العقاري.",
    avatar: "https://randomuser.me/api/portraits/women/26.jpg",
    date: "2023-10-05",
  },
  {
    id: 15,
    name: "مراد سالم",
    title: "بائع",
    category: "sellers",
    rating: 5,
    comment:
      "بيعت عقاري بأفضل سعر في السوق. التسويق كان احترافياً والعملاء جادين.",
    avatar: "https://randomuser.me/api/portraits/men/62.jpg",
    date: "2023-10-03",
  },
  {
    id: 16,
    name: "رنا محمود",
    title: "مشترية",
    category: "buyers",
    rating: 5,
    comment:
      "تجربة شراء ممتازة. الفريق ساعدني في اختيار أفضل موقع وتسهيل إجراءات التمويل.",
    avatar: "https://randomuser.me/api/portraits/women/73.jpg",
    date: "2023-10-01",
  },
  {
    id: 17,
    name: "باسل أحمد",
    title: "مستثمر",
    category: "investors",
    rating: 4,
    comment:
      "استثمار ناجح في عقارات تجارية. عائدات شهرية منتظمة ونمو رأس المال.",
    avatar: "https://randomuser.me/api/portraits/men/29.jpg",
    date: "2023-09-28",
  },
  {
    id: 18,
    name: "سما حسين",
    title: "بائعة",
    category: "sellers",
    rating: 5,
    comment:
      "عملية بيع سريعة وسلسة. الفريق تعامل مع كل التفاصيل بدقة واحترافية.",
    avatar: "https://randomuser.me/api/portraits/women/31.jpg",
    date: "2023-09-25",
  },
  {
    id: 19,
    name: "حسام علي",
    title: "مشتري",
    category: "buyers",
    rating: 5,
    comment:
      "وجدت شقة تجمع بين الموقع المميز والسعر المناسب. خدمة ممتازة ومتابعة جيدة.",
    avatar: "https://randomuser.me/api/portraits/men/51.jpg",
    date: "2023-09-22",
  },
  {
    id: 20,
    name: "نور الدين محمد",
    title: "مستثمر",
    category: "investors",
    rating: 5,
    comment:
      "محفظة استثمارية متنوعة وعائدات ممتازة. نخبة العقارية خيار موثوق للاستثمار.",
    avatar: "https://randomuser.me/api/portraits/men/43.jpg",
    date: "2023-09-20",
  },
  {
    id: 21,
    name: "أمل خالد",
    title: "بائعة",
    category: "sellers",
    rating: 4,
    comment: "سعر تنافسي وبيع سريع. الفريق كان متعاوناً ومرناً في التعامل.",
    avatar: "https://randomuser.me/api/portraits/women/59.jpg",
    date: "2023-09-18",
  },
  {
    id: 22,
    name: "شادي محمود",
    title: "مشتري",
    category: "buyers",
    rating: 5,
    comment:
      "خدمة عملاء ممتازة وتسهيل في جميع الإجراءات. أوصي بشدة بالتعامل معهم.",
    avatar: "https://randomuser.me/api/portraits/men/35.jpg",
    date: "2023-09-15",
  },
  {
    id: 23,
    name: "سوسن أحمد",
    title: "مستثمرة",
    category: "investors",
    rating: 5,
    comment:
      "استثمارات آمنة ومربحة. فريق متخصص ويقدم نصائح قيمة لزيادة العائدات.",
    avatar: "https://randomuser.me/api/portraits/women/67.jpg",
    date: "2023-09-12",
  },
  {
    id: 24,
    name: "كريم حسن",
    title: "بائع",
    category: "sellers",
    rating: 5,
    comment:
      "عملية بيع احترافية من جميع النواحي. التسويق كان ممتازاً والنتائج سريعة.",
    avatar: "https://randomuser.me/api/portraits/men/71.jpg",
    date: "2023-09-10",
  },
  {
    id: 25,
    name: "مي علي",
    title: "مشترية",
    category: "buyers",
    rating: 5,
    comment:
      "تجربة شراء رائعة. الفريق ساعدني في العثور على شقة مثالية لعائلتي.",
    avatar: "https://randomuser.me/api/portraits/women/23.jpg",
    date: "2023-09-08",
  },
  {
    id: 26,
    name: "طارق محمود",
    title: "مستثمر",
    category: "investors",
    rating: 4,
    comment:
      "عائدات استثمارية جيدة ونمو مستمر. أنصح بالاستثمار مع نخبة العقارية.",
    avatar: "https://randomuser.me/api/portraits/men/47.jpg",
    date: "2023-09-05",
  },
  {
    id: 27,
    name: "منى سعيد",
    title: "بائعة",
    category: "sellers",
    rating: 5,
    comment:
      "بعت عقاري بسرعة وبسعر ممتاز. الفريق كان محترفاً في جميع مراحل البيع.",
    avatar: "https://randomuser.me/api/portraits/women/41.jpg",
    date: "2023-09-03",
  },
  {
    id: 28,
    name: "جمال أحمد",
    title: "مشتري",
    category: "buyers",
    rating: 5,
    comment:
      "خدمة ممتازة ومتابعة مستمرة. وجدت شقة تناسب جميع متطلباتي وميزانيتي.",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    date: "2023-09-01",
  },
  {
    id: 29,
    name: "رشا خالد",
    title: "مستثمرة",
    category: "investors",
    rating: 5,
    comment:
      "محفظة استثمارية متنوعة وعائدات شهرية منتظمة. فريق ذو خبرة وكفاءة عالية.",
    avatar: "https://randomuser.me/api/portraits/women/29.jpg",
    date: "2023-08-30",
  },
  {
    id: 30,
    name: "سالم محمد",
    title: "بائع",
    category: "sellers",
    rating: 4,
    comment: "عملية بيع سلسة وسريعة. التعامل كان احترافياً والنتائج مرضية.",
    avatar: "https://randomuser.me/api/portraits/men/59.jpg",
    date: "2023-08-28",
  },
  {
    id: 31,
    name: "هالة علي",
    title: "مشترية",
    category: "buyers",
    rating: 5,
    comment:
      "تجربة شراء ممتازة. الفريق كان متعاوناً وساعدني في اختيار أفضل عقار.",
    avatar: "https://randomuser.me/api/portraits/women/35.jpg",
    date: "2023-08-25",
  },
  {
    id: 32,
    name: "ماهر حسن",
    title: "مستثمر",
    category: "investors",
    rating: 5,
    comment:
      "استثمارات ناجحة ومربحة. نخبة العقارية شريك موثوق في السوق العقاري.",
    avatar: "https://randomuser.me/api/portraits/men/39.jpg",
    date: "2023-08-22",
  },
  {
    id: 33,
    name: "نادية أحمد",
    title: "بائعة",
    category: "sellers",
    rating: 5,
    comment:
      "بعت فيلتي بأفضل سعر في السوق. التسويق كان احترافياً والعملاء جادين.",
    avatar: "https://randomuser.me/api/portraits/women/53.jpg",
    date: "2023-08-20",
  },
  {
    id: 34,
    name: "عمرو محمود",
    title: "مشتري",
    category: "buyers",
    rating: 4,
    comment:
      "تنوع كبير في الخيارات المتاحة. وجدت شقة تناسب ميزانيتي ومتطلباتي.",
    avatar: "https://randomuser.me/api/portraits/men/28.jpg",
    date: "2023-08-18",
  },
  {
    id: 35,
    name: "إيمان سعيد",
    title: "مستثمرة",
    category: "investors",
    rating: 5,
    comment: "عائدات استثمارية ممتازة ونمو مستمر. فريق متخصص ويقدم نصائح قيمة.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    date: "2023-08-15",
  },
  {
    id: 36,
    name: "عبدالله خالد",
    title: "بائع",
    category: "sellers",
    rating: 5,
    comment:
      "عملية بيع احترافية وسريعة. الفريق تعامل مع جميع الإجراءات بكفاءة.",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    date: "2023-08-12",
  },
  {
    id: 37,
    name: "سارة علي",
    title: "مشترية",
    category: "buyers",
    rating: 5,
    comment:
      "خدمة عملاء ممتازة ومتابعة جيدة بعد الشراء. تجربة رائعة مع نخبة العقارية.",
    avatar: "https://randomuser.me/api/portraits/women/27.jpg",
    date: "2023-08-10",
  },
  {
    id: 38,
    name: "خالد حسن",
    title: "مستثمر",
    category: "investors",
    rating: 4,
    comment: "استثمار آمن ومربح. فريق ذو خبرة عالية في السوق العقاري.",
    avatar: "https://randomuser.me/api/portraits/men/54.jpg",
    date: "2023-08-08",
  },
  {
    id: 39,
    name: "منار أحمد",
    title: "بائعة",
    category: "sellers",
    rating: 5,
    comment:
      "سعر بيع ممتاز وتسريع للإجراءات. تعامل احترافي من البداية للنهاية.",
    avatar: "https://randomuser.me/api/portraits/women/37.jpg",
    date: "2023-08-05",
  },
  {
    id: 40,
    name: "يوسف محمد",
    title: "مشتري",
    category: "buyers",
    rating: 5,
    comment:
      "وجدت شقة مثالية في موقع مميز. خدمة ممتازة وتسهيل في جميع الإجراءات.",
    avatar: "https://randomuser.me/api/portraits/men/42.jpg",
    date: "2023-08-03",
  },
  {
    id: 41,
    name: "دعاء محمود",
    title: "مستثمرة",
    category: "investors",
    rating: 5,
    comment:
      "محفظة استثمارية متنوعة وعائدات شهرية منتظمة. أنصح بالاستثمار معهم.",
    avatar: "https://randomuser.me/api/portraits/women/48.jpg",
    date: "2023-08-01",
  },
  {
    id: 42,
    name: "أحمد سالم",
    title: "بائع",
    category: "sellers",
    rating: 4,
    comment: "عملية بيع سلسة وسريعة. الفريق كان متعاوناً ومرناً في التعامل.",
    avatar: "https://randomuser.me/api/portraits/men/31.jpg",
    date: "2023-07-30",
  },
  {
    id: 43,
    name: "نورهان علي",
    title: "مشترية",
    category: "buyers",
    rating: 5,
    comment:
      "تجربة شراء رائعة. الفريق ساعدني في اختيار أفضل عقار يناسب عائلتي.",
    avatar: "https://randomuser.me/api/portraits/women/55.jpg",
    date: "2023-07-28",
  },
  {
    id: 44,
    name: "محمود حسن",
    title: "مستثمر",
    category: "investors",
    rating: 5,
    comment: "عائدات استثمارية تفوق التوقعات. فريق متخصص وذو خبرة في السوق.",
    avatar: "https://randomuser.me/api/portraits/men/37.jpg",
    date: "2023-07-25",
  },
  {
    id: 45,
    name: "سماح أحمد",
    title: "بائعة",
    category: "sellers",
    rating: 5,
    comment:
      "بعت عقاري بسرعة وبسعر ممتاز. التسويق كان احترافياً والنتائج سريعة.",
    avatar: "https://randomuser.me/api/portraits/women/61.jpg",
    date: "2023-07-22",
  },
  {
    id: 46,
    name: "حسن محمود",
    title: "مشتري",
    category: "buyers",
    rating: 4,
    comment:
      "خدمة ممتازة وتسهيل في الإجراءات. وجدت شقة تناسب متطلباتي وميزانيتي.",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    date: "2023-07-20",
  },
  {
    id: 47,
    name: "رنا خالد",
    title: "مستثمرة",
    category: "investors",
    rating: 5,
    comment:
      "استثمارات آمنة ومربحة. فريق متخصص ويقدم نصائح قيمة لزيادة العائدات.",
    avatar: "https://randomuser.me/api/portraits/women/39.jpg",
    date: "2023-07-18",
  },
  {
    id: 48,
    name: "عمر أحمد",
    title: "بائع",
    category: "sellers",
    rating: 5,
    comment:
      "عملية بيع احترافية. الفريق تعامل مع كل التفاصيل بدقة وكفاءة عالية.",
    avatar: "https://randomuser.me/api/portraits/men/53.jpg",
    date: "2023-07-15",
  },
  {
    id: 49,
    name: "مروة حسن",
    title: "مشترية",
    category: "buyers",
    rating: 5,
    comment:
      "تجربة شراء ممتازة. الفريق كان متعاوناً وساعدني في العثور على شقة مثالية.",
    avatar: "https://randomuser.me/api/portraits/women/49.jpg",
    date: "2023-07-12",
  },
  {
    id: 50,
    name: "كريم سعيد",
    title: "مستثمر",
    category: "investors",
    rating: 5,
    comment:
      "عائدات استثمارية ممتازة ونمو مستمر. نخبة العقارية خيار موثوق للاستثمار.",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
    date: "2023-07-10",
  },
  {
    id: 51,
    name: "ليلى محمود",
    title: "بائعة",
    category: "sellers",
    rating: 4,
    comment: "سعر تنافسي وبيع سريع. الفريق كان محترفاً في جميع مراحل العملية.",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    date: "2023-07-08",
  },
  {
    id: 52,
    name: "شادي علي",
    title: "مشتري",
    category: "buyers",
    rating: 5,
    comment:
      "خدمة عملاء ممتازة وتسهيل في جميع الإجراءات. أوصي بشدة بالتعامل معهم.",
    avatar: "https://randomuser.me/api/portraits/men/27.jpg",
    date: "2023-07-05",
  },
  {
    id: 53,
    name: "هند أحمد",
    title: "مستثمرة",
    category: "investors",
    rating: 5,
    comment:
      "محفظة استثمارية متنوعة وعائدات شهرية منتظمة. فريق ذو خبرة وكفاءة.",
    avatar: "https://randomuser.me/api/portraits/women/57.jpg",
    date: "2023-07-03",
  },
];

// Initialize testimonials
function initializeTestimonials() {
  const grid = document.querySelector(".testimonials-grid");
  const filterButtons = document.querySelectorAll(
    ".testimonials-filters .filter-btn"
  );
  const loadMoreBtn = document.querySelector(".load-more-testimonials");

  if (!grid) return;

  let currentFilter = "all";
  let displayedCount = 6;
  let filteredTestimonials = [...testimonialsData];

  // Render testimonials
  function renderTestimonials(testimonials, append = false) {
    if (!append) {
      grid.innerHTML = "";
    }

    testimonials.forEach((testimonial, index) => {
      const card = createTestimonialCard(testimonial);
      if (append) {
        setTimeout(() => {
          grid.appendChild(card);
        }, index * 100);
      } else {
        grid.appendChild(card);
      }
    });

    // Update load more button
    updateLoadMoreButton();
  }

  // Create testimonial card
  function createTestimonialCard(testimonial) {
    const card = document.createElement("div");
    card.className = "testimonial-card";
    card.dataset.category = testimonial.category;

    const stars = Array(5)
      .fill("")
      .map(
        (_, i) =>
          `<i class="fas fa-star star ${
            i < testimonial.rating ? "" : "empty"
          }"></i>`
      )
      .join("");

    card.innerHTML = `
      <div class="testimonial-header">
        <div class="testimonial-rating">
          ${stars}
        </div>
      </div>
      <div class="testimonial-content">
        <div class="quote-icon">
          <i class="fas fa-quote-right"></i>
        </div>
        <p>${testimonial.comment}</p>
      </div>
      <div class="testimonial-author">
        <img src="${testimonial.avatar}" alt="${testimonial.name}" />
        <div class="author-info">
          <h4>${testimonial.name}</h4>
          <span class="author-title">${testimonial.title}</span>
          <span class="author-date">${formatDate(testimonial.date)}</span>
        </div>
      </div>
    `;

    return card;
  }

  // Format date
  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("ar-EG", options);
  }

  // Filter testimonials
  function filterTestimonials(category) {
    currentFilter = category;
    displayedCount = 6;

    if (category === "all") {
      filteredTestimonials = [...testimonialsData];
    } else {
      filteredTestimonials = testimonialsData.filter(
        (t) => t.category === category
      );
    }

    renderTestimonials(filteredTestimonials.slice(0, displayedCount));
  }

  // Update load more button
  function updateLoadMoreButton() {
    if (!loadMoreBtn) return;

    const remaining = filteredTestimonials.length - displayedCount;
    if (remaining <= 0) {
      loadMoreBtn.style.display = "none";
    } else {
      loadMoreBtn.style.display = "inline-flex";
      loadMoreBtn.innerHTML = `
        <span>عرض ${Math.min(6, remaining)} آراء إضافية</span>
        <i class="fas fa-chevron-down"></i>
      `;
    }
  }

  // Load more testimonials
  function loadMoreTestimonials() {
    if (!loadMoreBtn) return;

    loadMoreBtn.classList.add("loading");

    setTimeout(() => {
      const newTestimonials = filteredTestimonials.slice(
        displayedCount,
        displayedCount + 6
      );
      renderTestimonials(newTestimonials, true);
      displayedCount += 6;

      loadMoreBtn.classList.remove("loading");
      updateLoadMoreButton();
    }, 500);
  }

  // Filter button clicks
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      filterTestimonials(btn.dataset.filter);
    });
  });

  // Load more button click
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", loadMoreTestimonials);
  }

  // Initial render
  renderTestimonials(filteredTestimonials.slice(0, displayedCount));
}

// Initialize the page with properties
async function initializePage() {
  // Load properties data
  const properties = await loadPropertiesData();

  // Store properties in a global variable for filtering
  window.allProperties = properties;

  // Display properties on the homepage
  if (document.querySelector(".properties-grid")) {
    displayProperties(properties);
  }

  // Initialize testimonials
  if (document.querySelector(".testimonials-grid")) {
    initializeTestimonials();
  }

  // Initialize search functionality
  setupSearchFunctionality();

  // Initialize counter animation
  function initializeCounterAnimation() {
    const counters = document.querySelectorAll(".counter");
    if (!counters.length) return;

    const animate = (counter, target) => {
      const count = +counter.innerText;
      const increment = target / 200; // Adjust speed here

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(() => animate(counter, target), 10);
      } else {
        counter.innerText = target.toLocaleString();
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counter = entry.target;
            const target = +counter.getAttribute("data-target");
            animate(counter, target);
            observer.unobserve(counter);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((counter) => {
      counter.innerText = "0";
      observer.observe(counter);
    });
  }

  initializeCounterAnimation();
}

// Call initializePage when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", initializePage);

// تفعيل القائمة المتنقلة
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    mobileMenuBtn.innerHTML = navLinks.classList.contains("active")
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>';
  });
}

// إغلاق القائمة عند النقر على رابط
const navItems = document.querySelectorAll(".nav-links a");
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("active");
    if (mobileMenuBtn) {
      mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
  });
});

// تأثير التمرير لشريط التنقل مع تأثير سلس
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// تفعيل وظيفة البحث
function setupSearchFunctionality() {
  const searchInput = document.querySelector(".search-input");
  const searchInputField = document.querySelector(".search-input input");
  const searchBtn = document.querySelector(".search-btn");
  const searchSelect = document.querySelector(".search-select");
  const searchIcon = document.querySelector(".search-input .fa-search");
  const filterButtons = document.querySelectorAll(".filter-btn");

  if (!searchInput || !searchBtn || !searchInputField) return;

  // Add click event to search button
  searchBtn.addEventListener("click", performSearch);

  // Add click event to search icon
  if (searchIcon) {
    searchIcon.style.cursor = "pointer";
    searchIcon.addEventListener("click", performSearch);
  }

  // Add Enter key press event to search input
  searchInputField.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      performSearch();
    }
  });

  // Add click events to filter buttons
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      button.classList.add("active");

      // Get filter value
      const filter = button.getAttribute("data-filter");
      filterProperties(filter);
    });
  });

  // Improve mobile experience
  if (window.innerWidth <= 768) {
    searchInputField.style.padding = "0.8rem 2.5rem 0.8rem 1rem";
    searchBtn.style.width = "100%";
    searchBtn.style.padding = "0.8rem";
    searchBtn.style.marginTop = "0.5rem";
    searchInputField.style.fontSize = "0.95rem";
    searchBtn.style.fontSize = "1rem";
  }

  // Function to perform search
  function performSearch() {
    const searchTerm = searchInputField.value.trim().toLowerCase();
    const searchType = searchSelect ? searchSelect.value : "";

    if (!searchTerm) {
      searchInputField.placeholder = "الرجاء إدخال كلمة بحث...";
      searchInputField.focus();
      return;
    }

    const originalBtnText = searchBtn.innerHTML;
    searchBtn.innerHTML =
      '<i class="fas fa-spinner fa-spin"></i> جاري البحث...';
    searchBtn.disabled = true;

    // Filter properties based on search term and type
    const filteredProperties = window.allProperties.filter((property) => {
      const matchesSearch =
        property.title.toLowerCase().includes(searchTerm) ||
        property.location.toLowerCase().includes(searchTerm) ||
        property.type.toLowerCase().includes(searchTerm);

      if (searchType === "sale") {
        return matchesSearch && !property.period;
      } else if (searchType === "rent") {
        return matchesSearch && property.period === "شهرياً";
      }
      return matchesSearch;
    });

    // Display search results
    displayProperties(filteredProperties);
    searchBtn.innerHTML = originalBtnText;
    searchBtn.disabled = false;
  }
}

// Filter properties based on type
function filterProperties(filter) {
  if (!window.allProperties) return;

  let filteredProperties = [...window.allProperties];

  if (filter === "sale" || filter === "all") {
    // For sale properties only (default)
    filteredProperties = filteredProperties.filter((property) => {
      const type = String(property.type || "").toLowerCase();
      const title = String(property.title || "").toLowerCase();
      return (
        !type.includes("إيجار") &&
        !type.includes("ايجار") &&
        !title.includes("إيجار") &&
        !title.includes("ايجار") &&
        !title.includes("للايجار") &&
        !title.includes("للإيجار") &&
        property.period !== "شهرياً"
      );
    });
  } else if (filter === "featured") {
    filteredProperties = filteredProperties.filter(
      (property) => property.featured
    );
  }

  // Display filtered properties
  displayProperties(filteredProperties);
}

// تأثير التمرير السلس للروابط
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// تحميل العقارات بشكل ديناميكي
const propertiesGrid = document.querySelector(".properties-grid");

// دالة لإنشاء عنصر DOM من سلسلة HTML
function createElementFromHTML(htmlString) {
  if (!htmlString) return null;
  const div = document.createElement("div");
  div.innerHTML = htmlString.trim();
  return div.firstElementChild;
}

// دالة لإنشاء بطاقة عقار
function createPropertyCard(property) {
  try {
    if (!property || typeof property !== "object") {
      console.error("بيانات العقار غير صالحة");
      return "";
    }

    console.log("إنشاء بطاقة لعقار:", property.id, property.title);

    // Ensure required properties have default values
    const {
      id = 0,
      title = "عنوان غير معروف",
      type = "نوع غير محدد",
      price = 0,
      location = "موقع غير محدد",
      area = 0,
      beds = 0,
      baths = 0,
      image = "https://via.placeholder.com/400x300?text=صورة+غير+متوفرة",
      featured = false,
      description = "لا يوجد وصف متاح",
    } = property;

    // Format price with commas
    const formattedPrice = new Intl.NumberFormat("ar-EG").format(price);

    // Determine property status and price label
    let statusBadge = "";
    let priceLabel = "جنيه";
    let statusClass = "";

    // Check if it's for rent - check status, type, and title
    const titleCheck = title ? title.toLowerCase() : "";
    const isForRent =
      property.status === "rent" ||
      (type &&
        (type.includes("إيجار") ||
          type.includes("ايجار") ||
          type.toLowerCase().includes("rent"))) ||
      titleCheck.includes("إيجار") ||
      titleCheck.includes("ايجار") ||
      titleCheck.includes("rent");

    if (isForRent) {
      priceLabel = "جنيه/شهرياً";
      statusBadge = `<span class="property-status rent-status">للإيجار</span>`;
      statusClass = "rent-property";
    } else {
      statusBadge = `<span class="property-status sale-status">للبيع</span>`;
      statusClass = "sale-property";
    }

    // Add featured badge if property is featured
    if (featured) {
      statusBadge += `<span class="property-status featured-status">مميز</span>`;
    }

    // Clean and validate image URL
    let imageUrl = image;
    if (!imageUrl || typeof imageUrl !== "string") {
      console.warn("رابط الصورة غير صالح للعقار:", id);
      imageUrl = "https://via.placeholder.com/400x300?text=صورة+غير+متوفرة";
    }

    // Clean and validate title
    const cleanTitle = String(title || "").trim() || "عنوان غير معروف";

    // Create the card HTML
    const cardHTML = `
      <div class="property-card ${statusClass}" data-id="${id}" data-type="${
      isForRent ? "rent" : "sale"
    }" data-featured="${featured}">
        <div class="property-image">
          <img src="${imageUrl}" alt="${cleanTitle.replace(
      /"/g,
      "&quot;"
    )}" loading="lazy">
          <div class="property-badges">
            ${statusBadge}
          </div>
        </div>
        <div class="property-details">
          <div class="property-header">
            <h3>${cleanTitle}</h3>
            <span class="property-type">${type}</span>
          </div>
          <div class="property-location">
            <i class="fas fa-map-marker-alt"></i>
            <span>${location}</span>
          </div>
          <div class="property-price">
            <span class="price">${formattedPrice}</span>
            <span class="currency">${priceLabel}</span>
          </div>
          <div class="property-features">
            <div class="feature">
              <i class="fas fa-ruler-combined"></i>
              <span>${area} م²</span>
            </div>
            ${
              beds
                ? `
            <div class="feature">
              <i class="fas fa-bed"></i>
              <span>${beds} ${beds === 1 ? "غرفة" : "غرف"}</span>
            </div>`
                : ""
            }
            ${
              baths
                ? `
            <div class="feature">
              <i class="fas fa-bath"></i>
              <span>${baths} ${baths === 1 ? "حمام" : "حمامات"}</span>
            </div>`
                : ""
            }
          </div>
          ${
            description
              ? `
          <div class="property-description">
            <p>${description.substring(0, 100)}${
                  description.length > 100 ? "..." : ""
                }</p>
          </div>
          `
              : ""
          }
        </div>
      </div>
    `;
    return cardHTML;
  } catch (error) {
    console.error("خطأ في إنشاء بطاقة عقار:", error);
    console.error("بيانات العقار المسبب للخطأ:", property);
    return "";
  }
}

// عرض العقارات في الصفحة
function displayProperties(propertiesList, showAll = false) {
  console.log("عرض العقارات...");
  const propertiesGrid = document.querySelector(".properties-grid");

  if (!propertiesGrid) {
    console.error("عذراً، لم يتم العثور على عنصر properties-grid");
    return;
  }

  console.log(`جاري عرض ${propertiesList.length} عقار`);

  try {
    // Clear existing content with a loading state
    propertiesGrid.innerHTML = `
      <div class="loading-state">
        <div class="spinner"></div>
        <p>جاري تحميل العقارات...</p>
      </div>
    `;

    // Small delay to allow the UI to update
    setTimeout(() => {
      try {
        // Clear the loading state
        propertiesGrid.innerHTML = "";

        if (!Array.isArray(propertiesList) || propertiesList.length === 0) {
          console.warn("لا توجد عقارات متاحة للعرض");
          propertiesGrid.innerHTML = `
            <div class="no-properties" style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem;">
              <i class="fas fa-search" style="font-size: 3rem; color: #ddd; margin-bottom: 1rem; display: block;"></i>
              <p style="font-size: 1.2rem; color: #666; margin: 0;">لا توجد عقارات متاحة حاليًا</p>
              <p style="color: #999; margin-top: 0.5rem;">الرجاء تغيير معايير البحث والمحاولة مرة أخرى</p>
            </div>
          `;
          return;
        }

        // Determine how many properties to show initially
        const initialCount = showAll ? propertiesList.length : 8;
        const propertiesToShow = propertiesList.slice(0, initialCount);

        // Create a document fragment for better performance
        const fragment = document.createDocumentFragment();
        let cardsAdded = 0;

        // Process and add properties to the fragment
        propertiesToShow.forEach((property, index) => {
          try {
            if (!property || typeof property !== "object") {
              console.warn("بيانات العقار غير صالحة:", property);
              return;
            }

            // Create and append the property card
            const cardHTML = createPropertyCard(property);
            if (!cardHTML) {
              console.warn("فشل في إنشاء HTML لبطاقة العقار:", property.id);
              return;
            }

            const cardElement = createElementFromHTML(cardHTML);
            if (cardElement) {
              // Add data-index for reference
              cardElement.setAttribute("data-index", index);
              fragment.appendChild(cardElement);
              cardsAdded++;
            } else {
              console.warn("فشل في تحويل HTML إلى عنصر DOM");
            }
          } catch (error) {
            console.error("خطأ في معالجة عقار:", error, property);
          }
        });

        // Append all cards at once
        propertiesGrid.appendChild(fragment);

        // Store remaining properties for load more functionality
        if (!showAll && propertiesList.length > 8) {
          // Store the total and shown counts
          const totalProperties = propertiesList.length;
          const shownProperties = Math.min(8, totalProperties);

          // Store remaining properties in a global variable
          window.remainingProperties = propertiesList.slice(shownProperties);

          // Add load more button if there are more properties to show
          if (window.remainingProperties.length > 0) {
            const loadMoreBtn = document.createElement("button");
            loadMoreBtn.className = "load-more";
            loadMoreBtn.innerHTML = '<i class="fas fa-plus"></i> تحميل المزيد';
            loadMoreBtn.addEventListener("click", loadMoreProperties);
            propertiesGrid.appendChild(loadMoreBtn);

            // Add loading indicator that will be shown when loading more properties
            const loadingIndicator = document.createElement("div");
            loadingIndicator.className = "loading-more";
            loadingIndicator.style.display = "none";
            loadingIndicator.innerHTML =
              '<div class="spinner"></div><p>جاري التحميل...</p>';
            propertiesGrid.appendChild(loadingIndicator);
          }

          // Update the properties grid with data attributes
          propertiesGrid.setAttribute("data-total-properties", totalProperties);
          propertiesGrid.setAttribute("data-shown-properties", shownProperties);

          console.log(
            `عرض ${shownProperties} من إجمالي ${totalProperties} عقار`
          );
        } else {
          // If showing all or less than 8 properties, clear any remaining properties
          window.remainingProperties = [];
          propertiesGrid.removeAttribute("data-total-properties");
          propertiesGrid.removeAttribute("data-shown-properties");
        }

        // Initialize AOS animations if available
        if (typeof AOS !== "undefined") {
          AOS.refresh();
        }

        console.log(`تم عرض ${cardsAdded} عقار بنجاح`);
      } catch (error) {
        console.error("حدث خطأ غير متوقع أثناء عرض العقارات:", error);
        propertiesGrid.innerHTML = `
          <div class="error-message" style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem;">
            <i class="fas fa-exclamation-triangle" style="color: #e74c3c; font-size: 2.5rem; margin-bottom: 1rem; display: block;"></i>
            <h3 style="color: #333; margin-bottom: 0.5rem;">حدث خطأ غير متوقع</h3>
            <p style="color: #666; margin-bottom: 1.5rem;">عذراً، حدث خطأ أثناء تحميل العقارات. يرجى تحديث الصفحة والمحاولة مرة أخرى.</p>
            <button onclick="window.location.reload()" class="btn" style="background: #3498db; color: white; border: none; padding: 0.6rem 1.5rem; border-radius: 4px; cursor: pointer; font-size: 1rem;">
              <i class="fas fa-sync-alt"></i> إعادة تحميل الصفحة
            </button>
          </div>
        `;
      }
    }, 100); // Small delay to ensure UI updates
  } catch (error) {
    console.error("فشل في عرض العقارات:", error);
    propertiesGrid.innerHTML = `
      <div class="error-message" style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem;">
        <i class="fas fa-exclamation-triangle" style="color: #e74c3c; font-size: 2.5rem; margin-bottom: 1rem; display: block;"></i>
        <h3 style="color: #333; margin-bottom: 0.5rem;">حدث خطأ غير متوقع</h3>
        <p style="color: #666; margin-bottom: 1.5rem;">عذراً، حدث خطأ أثناء تحميل العقارات. يرجى تحديث الصفحة والمحاولة مرة أخرى.</p>
        <button onclick="window.location.reload()" class="btn" style="background: #3498db; color: white; border: none; padding: 0.6rem 1.5rem; border-radius: 4px; cursor: pointer; font-size: 1rem;">
          <i class="fas fa-sync-alt"></i> إعادة تحميل الصفحة
        </button>
      </div>
    `;
  }
}

// دالة لتحميل المزيد من العقارات
function loadMoreProperties() {
  try {
    const propertiesGrid = document.querySelector(".properties-grid");
    if (!propertiesGrid) {
      console.error("لم يتم العثور على عنصر properties-grid");
      return;
    }

    // Check if there are remaining properties to load
    if (
      !window.remainingProperties ||
      window.remainingProperties.length === 0
    ) {
      // Remove the load more button if it exists
      const loadMoreBtn = propertiesGrid.querySelector(".load-more");
      if (loadMoreBtn) {
        loadMoreBtn.remove();
      }
      return;
    }

    // Remove the load more button before adding new content
    const loadMoreBtn = propertiesGrid.querySelector(".load-more");
    if (loadMoreBtn) {
      loadMoreBtn.remove();
    }

    // Get the next batch of properties (4 at a time)
    const nextBatchSize = Math.min(4, window.remainingProperties.length);
    const nextBatch = window.remainingProperties.splice(0, nextBatchSize);

    // Create a document fragment for better performance
    const fragment = document.createDocumentFragment();
    const cardsToAdd = [];

    // Prepare all cards first
    nextBatch.forEach((property) => {
      try {
        const cardHTML = createPropertyCard(property);
        if (cardHTML) {
          const cardElement = createElementFromHTML(cardHTML);
          if (cardElement) {
            cardsToAdd.push(cardElement);
          }
        }
      } catch (error) {
        console.error("خطأ في معالجة عقار:", error, property);
      }
    });

    // Add all cards to the fragment
    cardsToAdd.forEach((card) => {
      fragment.appendChild(card);
    });

    // Append all new cards at once
    propertiesGrid.appendChild(fragment);

    // Update the shown properties count
    const currentShown =
      parseInt(propertiesGrid.getAttribute("data-shown-properties") || "0") +
      nextBatch.length;
    propertiesGrid.setAttribute("data-shown-properties", currentShown);

    // Add the load more button back if there are more properties
    if (window.remainingProperties.length > 0) {
      const newLoadMoreBtn = document.createElement("button");
      newLoadMoreBtn.className = "load-more";
      newLoadMoreBtn.innerHTML = '<i class="fas fa-plus"></i> تحميل المزيد';
      newLoadMoreBtn.addEventListener("click", loadMoreProperties);
      propertiesGrid.appendChild(newLoadMoreBtn);
    }

    // Refresh AOS animations
    if (typeof AOS !== "undefined") {
      AOS.refresh();
    }

    console.log(`تم إضافة ${nextBatch.length} عقار جديد`);
    console.log(`العقارات المتبقية: ${window.remainingProperties.length}`);
  } catch (error) {
    console.error("حدث خطأ في دالة loadMoreProperties:", error);
  }
}

// قائمة العقارات (سيتم تحميلها من ملف JSON)
let properties = [];

// دالة لتحديث قسم أحدث العقارات
function updateLatestProperties() {
  console.log("DEBUG: updateLatestProperties called");
  console.log("جاري تحديث قسم أحدث العقارات...");
  console.log("عدد العقارات المتاحة:", properties ? properties.length : 0);

  const latestPropertiesContainer = document.querySelector(
    ".featured-properties .properties-grid"
  );
  console.log("DEBUG: Container found:", !!latestPropertiesContainer);
  console.log("DEBUG: Properties array:", properties.length);
  if (properties.length > 0) {
    console.log("DEBUG: Sample property:", properties[0]);
  }

  if (!latestPropertiesContainer) {
    console.error("لم يتم العثور على عنصر latest-properties .properties-grid");
    return;
  }

  if (!properties || properties.length === 0) {
    console.warn("لا توجد بيانات عقارات متاحة لعرضها في أحدث العقارات");
    latestPropertiesContainer.innerHTML = `
      <div class="no-properties">
        <i class="fas fa-info-circle"></i>
        <p>لا توجد عقارات متاحة حالياً</p>
      </div>
    `;
    return;
  }

  // تصفية العقارات المميزة
  const featuredProperties = properties
    .filter((property) => property.featured === true)
    .slice(0, 6);
  console.log("DEBUG: Featured properties found:", featuredProperties.length);
  if (featuredProperties.length > 0) {
    console.log("DEBUG: First featured property:", featuredProperties[0].title);
  }

  console.log("عدد العقارات المميزة:", featuredProperties.length);
  console.log(
    "العقارات المميزة:",
    featuredProperties.map((p) => p.id)
  );

  // مسح المحتوى الحالي
  latestPropertiesContainer.innerHTML = "";

  if (featuredProperties.length === 0) {
    console.warn("لا توجد عقارات مميزة");
    latestPropertiesContainer.innerHTML = `
      <div class="no-properties">
        <i class="fas fa-info-circle"></i>
        <p>لا توجد عقارات مميزة متاحة حالياً</p>
      </div>
    `;
    return;
  }

  // إضافة العقارات الجديدة
  featuredProperties.forEach((property, index) => {
    try {
      console.log(`عرض عقار مميز ${index + 1}:`, property.title);
      const cardHTML = createPropertyCard(property);
      if (cardHTML) {
        // Create a temporary div to parse the HTML
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = cardHTML;
        const propertyElement = tempDiv.firstElementChild;
        if (propertyElement) {
          latestPropertiesContainer.appendChild(propertyElement);
          console.log(`تم إضافة عقار ${property.title} بنجاح`);
        } else {
          console.error("فشل في إنشاء عنصر من HTML للعقار:", property.id);
        }
      } else {
        console.error("فشل في إنشاء HTML للعقار:", property.id);
      }
    } catch (error) {
      console.error("خطأ في إنشاء بطاقة عقار:", error, property);
    }
  });

  console.log("تم تحديث قسم أحدث العقارات بنجاح");
}

// إعداد الفلاتر المتقدمة في صفحة العقارات

// دالة لتحديث قسم آراء العملاء
function updateTestimonials() {
  const testimonialsContainer = document.querySelector(
    ".testimonials .testimonials-grid"
  );
  if (!testimonialsContainer) return;

  const testimonials = [
    {
      id: 1,
      name: "أحمد محمد",
      role: "عميل",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      rating: 5,
      comment:
        "خدمة ممتازة وسريعة، ساعدوني في العثور على الشقة المثالية لعائلتي في وقت قياسي. شكراً لكم على الاحترافية العالية.",
    },
    {
      id: 2,
      name: "سارة أحمد",
      role: "مستثمرة",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      rating: 4,
      comment:
        "تعامل محترف جداً، وقدم لي الفريق استشارة استثمارية ممتازة ساعدتني في اتخاذ القرار الصحيح لشراء شقة استثمارية.",
    },
    {
      id: 3,
      name: "خالد عبدالله",
      role: "عميل",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      rating: 5,
      comment:
        "أشكر فريق العمل على الصدق والشفافية في التعامل. وجدت ما أبحث عنه بالضبط وكان السعر مناسباً جداً.",
    },
    {
      id: 4,
      name: "نورا سعيد",
      role: "مستأجرة",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
      rating: 5,
      comment:
        "تجربة رائعة مع شركة نخبة للعقارات. ساعدوني في العثور على شقة جميلة بمواصفات ممتازة وسعر مناسب.",
    },
    {
      id: 5,
      name: "محمد علي",
      role: "مستثمر",
      avatar: "https://randomuser.me/api/portraits/men/5.jpg",
      rating: 4,
      comment:
        "خدمة احترافية وفريق عمل متعاون. أوصي بهم بشدة لأي شخص يبحث عن عقار للبيع أو الشراء.",
    },
    {
      id: 6,
      name: "هبة محمود",
      role: "عميلة",
      avatar: "https://randomuser.me/api/portraits/women/6.jpg",
      rating: 5,
      comment:
        "شكراً لكم على المساعدة في بيع شقتي بسرعة وبسعر ممتاز. فريق محترف ويستحق التقدير.",
    },
  ];

  // مسح المحتوى الحالي
  testimonialsContainer.innerHTML = "";

  // إضافة آراء العملاء الجديدة
  testimonials.forEach((testimonial) => {
    const testimonialElement = document.createElement("div");
    testimonialElement.className = "testimonial-card";
    testimonialElement.innerHTML = `
      <div class="testimonial-content">
        <p>"${testimonial.comment}"</p>
        <div class="testimonial-rating">
          ${'<i class="fas fa-star"></i>'.repeat(testimonial.rating)}
          ${'<i class="far fa-star"></i>'.repeat(5 - testimonial.rating)}
        </div>
      </div>
      <div class="testimonial-author">
        <img src="${testimonial.avatar}" alt="${
      testimonial.name
    }" class="testimonial-avatar">
        <div class="author-info">
          <h4>${testimonial.name}</h4>
          <span>${testimonial.role}</span>
        </div>
      </div>
    `;
    testimonialsContainer.appendChild(testimonialElement);
  });

  // تفعيل السلايدر
  initTestimonialsSlider();
}

// تحميل العقارات من ملف JSON
async function loadProperties() {
  try {
    console.log("جاري تحميل بيانات العقارات...");
    const response = await fetch("js/properties-data.json");
    console.log("DEBUG: Fetch response:", response.ok, response.status);
    if (!response.ok) {
      throw new Error("فشل في تحميل بيانات العقارات");
    }

    // Clear existing properties
    properties = [];

    // Parse and store properties
    const loadedProperties = await response.json();
    if (Array.isArray(loadedProperties)) {
      properties = loadedProperties;
      console.log("DEBUG: Properties loaded:", properties.length);
      console.log(`تم تحميل ${properties.length} عقار بنجاح`);
    } else {
      throw new Error("تنسيق بيانات العقارات غير صالح");
    }

    // Display properties using the new displayProperties function
    console.log("��� �������� ���� �����:", properties.length);
    console.log("��� ����:", properties[0]);
    displayProperties(properties);
    console.log("DEBUG: displayProperties called for main page");

    // Update latest properties section
    updateLatestProperties();

    // Initialize property filters after loading properties
    setupPropertyFilters();

    // Setup advanced filters for properties page only if elements exist
    if (document.getElementById("filterType")) {
      setupAdvancedFilters();
    }

    return properties; // Return the loaded properties
  } catch (error) {
    console.error("حدث خطأ أثناء تحميل بيانات العقارات:", error);

    // Show error in properties grid
    const propertiesContainer = document.querySelector(".properties-grid");
    if (propertiesContainer) {
      propertiesContainer.innerHTML = `
        <div class="error-message">
                  <i class="fas fa-exclamation-circle"></i>
          <p>عذراً، حدث خطأ أثناء تحميل بيانات العقارات. يرجى تحديث الصفحة والمحاولة مرة أخرى.</p>
        </div>
      `;
    }

    // Also update latest properties section to show error
    const latestPropertiesContainer = document.querySelector(
      ".featured-properties .properties-grid"
    );
    console.log("DEBUG: Container found:", !!latestPropertiesContainer);
    console.log("DEBUG: Properties array:", properties.length);
    if (properties.length > 0) {
      console.log("DEBUG: Sample property:", properties[0]);
    }
    if (latestPropertiesContainer) {
      latestPropertiesContainer.innerHTML = `
        <div class="error-message">
          <i class="fas fa-exclamation-circle"></i>
          <p>حدث خطأ في تحميل أحدث العقارات</p>
        </div>
      `;
    }

    throw error; // Re-throw to allow handling by the caller
  }
}

// إعداد الفلاتر المتقدمة في صفحة العقارات
function setupAdvancedFilters() {
  const filterType = document.getElementById("filterType");
  const filterLocation = document.getElementById("filterLocation");
  const filterMinPrice = document.getElementById("filterMinPrice");
  const filterMaxPrice = document.getElementById("filterMaxPrice");
  const applyFiltersBtn = document.getElementById("applyFilters");
  const resetFiltersBtn = document.getElementById("resetFilters");

  if (!filterType || !applyFiltersBtn) return;

  // Apply filters button click
  applyFiltersBtn.addEventListener("click", () => {
    applyAdvancedFilters();
  });

  // Reset filters button click
  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener("click", () => {
      resetAdvancedFilters();
    });
  }

  // Apply filters on Enter key in input fields
  [filterLocation, filterMinPrice, filterMaxPrice].forEach((input) => {
    if (input) {
      input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          applyAdvancedFilters();
        }
      });
    }
  });
}

// تطبيق الفلاتر المتقدمة
function applyAdvancedFilters() {
  const filterType = document.getElementById("filterType");
  const filterLocation = document.getElementById("filterLocation");
  const filterMinPrice = document.getElementById("filterMinPrice");
  const filterMaxPrice = document.getElementById("filterMaxPrice");

  let filtered = [...properties];

  // Filter by type
  if (filterType && filterType.value !== "all") {
    const type = filterType.value;
    if (type === "sale") {
      filtered = filtered.filter((p) => {
        const pType = String(p.type || "").toLowerCase();
        return !pType.includes("إيجار") && !pType.includes("ايجار");
      });
    } else if (type === "rent") {
      filtered = filtered.filter((p) => {
        const pType = String(p.type || "").toLowerCase();
        return pType.includes("إيجار") || pType.includes("ايجار");
      });
    } else if (type === "featured") {
      filtered = filtered.filter((p) => p.featured === true);
    }
  }

  // Filter by location
  if (filterLocation && filterLocation.value.trim()) {
    const location = filterLocation.value.trim().toLowerCase();
    filtered = filtered.filter((p) =>
      String(p.location || "")
        .toLowerCase()
        .includes(location)
    );
  }

  // Filter by minimum price
  if (filterMinPrice && filterMinPrice.value) {
    const minPrice = parseFloat(filterMinPrice.value);
    filtered = filtered.filter((p) => p.price >= minPrice);
  }

  // Filter by maximum price
  if (filterMaxPrice && filterMaxPrice.value) {
    const maxPrice = parseFloat(filterMaxPrice.value);
    filtered = filtered.filter((p) => p.price <= maxPrice);
  }

  console.log(
    `تم العثور على ${filtered.length} عقار بعد تطبيق الفلاتر المتقدمة`
  );
  displayProperties(filtered);
}

// إعادة تعيين الفلاتر المتقدمة
function resetAdvancedFilters() {
  const filterType = document.getElementById("filterType");
  const filterLocation = document.getElementById("filterLocation");
  const filterMinPrice = document.getElementById("filterMinPrice");
  const filterMaxPrice = document.getElementById("filterMaxPrice");

  if (filterType) filterType.value = "all";
  if (filterLocation) filterLocation.value = "";
  if (filterMinPrice) filterMinPrice.value = "";
  if (filterMaxPrice) filterMaxPrice.value = "";

  displayProperties(properties);
  console.log("DEBUG: displayProperties called for main page");
  console.log("تم إعادة تعيين الفلاتر المتقدمة");
}

// Initialize when the page loads
function initializeApp() {
  console.log("جاري تهيئة التطبيق...");

  // Initialize page scripts
  initializePageScripts();

  // Set up property filters
  setupPropertyFilters();

  // Load properties
  loadProperties()
    .then(() => {
      console.log("تم تحميل العقارات بنجاح");
      // Update testimonials after properties are loaded
      updateTestimonials();
    })
    .catch((error) => {
      console.error("حدث خطأ أثناء تحميل العقارات:", error);
    });
}

// Test direct loading - FORCED DEBUG
console.log("DEBUG: Script loaded successfully!");
(async () => {
  try {
    console.log("DEBUG: Direct test loading...");
    const testResponse = await fetch("js/properties-data.json");
    console.log("DEBUG: Test response:", testResponse.ok);
    const testData = await testResponse.json();
    console.log("DEBUG: Test data length:", testData.length);
    if (testData.length > 0) {
      console.log("DEBUG: First property:", testData[0].title);
    }
  } catch (error) {
    console.error("DEBUG: Test error:", error);
  }
})();

// Check if the page is already loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp);
} else {
  // Page is already loaded, initialize immediately
  initializeApp();
}

// This function will be called after properties are loaded
function setupPropertyFilters() {
  console.log("جاري تهيئة الفلاتر...");
  const filterButtons = document.querySelectorAll(
    ".property-filter .filter-btn"
  );

  if (!filterButtons || filterButtons.length === 0) {
    console.warn("لم يتم العثور على أزرار التصفية");
    return;
  }

  console.log(`تم العثور على ${filterButtons.length} زر تصفية`);

  // Add click event to each filter button
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const filter = btn.getAttribute("data-filter");
      console.log(`تصفية العقارات حسب: ${filter}`);

      // Update active state
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // Apply filters using window.allProperties for consistency
      let filtered = [];
      const propertiesToFilter = window.allProperties || properties || [];

      if (filter === "all" || filter === "sale") {
        // Show all properties for sale (default)
        filtered = propertiesToFilter.filter((p) => {
          const type = String(p.type || "").toLowerCase();
          const title = String(p.title || "").toLowerCase();
          return (
            !type.includes("إيجار") &&
            !type.includes("ايجار") &&
            !title.includes("إيجار") &&
            !title.includes("ايجار") &&
            !title.includes("للايجار") &&
            !title.includes("للإيجار") &&
            p.period !== "شهرياً"
          );
        });
      } else if (filter === "featured") {
        // Show featured properties for sale only
        filtered = propertiesToFilter.filter((p) => {
          const type = String(p.type || "").toLowerCase();
          const title = String(p.title || "").toLowerCase();
          return (
            p.featured === true &&
            !type.includes("إيجار") &&
            !type.includes("ايجار") &&
            !title.includes("إيجار") &&
            !title.includes("ايجار") &&
            !title.includes("للايجار") &&
            !title.includes("للإيجار") &&
            p.period !== "شهرياً"
          );
        });
      }

      console.log(
        `تم العثور على ${filtered.length} عقار يطابق التصفية: ${filter}`
      );

      // Update the display
      displayProperties(filtered);

      // Scroll to properties section
      const propertiesSection = document.querySelector(".properties");
      if (propertiesSection && filter !== "all") {
        propertiesSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Set default active filter (show all)
  const defaultFilter = document.querySelector(
    '.property-filter .filter-btn[data-filter="all"]'
  );
  if (defaultFilter) {
    defaultFilter.click();
  } else if (filterButtons.length > 0) {
    filterButtons[0].click();
  }

  console.log("تم تهيئة الفلاتر بنجاح");
}

// تأثيرات الظهور عند التمرير
function initAOS() {
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }

  // Initialize counter animation
  const counters = document.querySelectorAll(".counter");
  if (counters.length > 0) {
    const animateCounter = (counter) => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const increment = target / 200; // Adjust speed here

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(() => animateCounter(counter), 1);
      } else {
        counter.innerText = target.toLocaleString();
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counter = entry.target;
            animateCounter(counter);
            observer.unobserve(counter);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((counter) => {
      counter.innerText = "0";
      observer.observe(counter);
    });
  }
}

// Success message for contact form
const contactForm = document.getElementById("contactFormPage");
if (contactForm) {
  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    // Get form elements
    const formData = new FormData(contactForm);
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const btnText = submitBtn.querySelector(".btn-text");
    const btnLoading = submitBtn.querySelector(".btn-loading");
    const formMessage = document.getElementById("formMessage");

    try {
      // Show loading state
      submitBtn.classList.add("loading");
      submitBtn.disabled = true;
      if (formMessage) formMessage.style.display = "none";

      // Simulate form submission (replace with actual form submission)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Show success message
      if (formMessage) {
        formMessage.innerHTML =
          '<i class="fas fa-check-circle"></i> تم إرسال رسالتك بنجاح، سنتواصل معك قريباً.';
        formMessage.className = "form-message success";
        formMessage.style.display = "flex";
      }

      // Reset form
      contactForm.reset();

      // Hide message after 5 seconds
      if (formMessage) {
        setTimeout(() => {
          formMessage.style.opacity = "0";
          setTimeout(() => {
            formMessage.style.display = "none";
            formMessage.style.opacity = "1";
          }, 300);
        }, 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      if (formMessage) {
        formMessage.innerHTML =
          '<i class="fas fa-exclamation-circle"></i> عذراً، حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.';
        formMessage.className = "form-message error";
        formMessage.style.display = "flex";
      }
    } finally {
      // Reset button state
      if (submitBtn) {
        submitBtn.classList.remove("loading");
        submitBtn.disabled = false;
      }
    }
  });
}

// إضافة زر للعودة للأعلى مع تحسينات الأداء
function createScrollToTopButton() {
  // التحقق من وجود الزر مسبقاً
  let scrollToTopBtn = document.getElementById("scrollToTop");

  // إذا كان الزر موجوداً في الصفحة، نستخدمه بدلاً من إنشاء زر جديد
  if (scrollToTopBtn) {
    // إزالة أي مستمعات أحداث سابقة لتجنب التكرار
    const newBtn = scrollToTopBtn.cloneNode(true);
    scrollToTopBtn.parentNode.replaceChild(newBtn, scrollToTopBtn);
    scrollToTopBtn = newBtn;
  } else {
    // إذا لم يكن الزر موجوداً، نقوم بإنشائه
    scrollToTopBtn = document.createElement("button");
    scrollToTopBtn.id = "scrollToTop";
    scrollToTopBtn.className = "scroll-to-top";
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.setAttribute("aria-label", "العودة إلى الأعلى");
    document.body.appendChild(scrollToTopBtn);
  }

  // دالة للتحكم في ظهور/إخفاء الزر
  const toggleScrollButton = () => {
    // حساب المسافة من أعلى الصفحة إلى نهايتها
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollThreshold = documentHeight - windowHeight - 100; // 100px من الأسفل

    if (scrollPosition > 300 && scrollPosition > scrollThreshold) {
      scrollToTopBtn.classList.add("visible");
    } else {
      scrollToTopBtn.classList.remove("visible");
    }
  };

  // إضافة مستمع الأحداث للتمرير مع تقليل عدد المرات التي يتم فيها استدعاء الدالة
  let isScrolling;
  const handleScroll = () => {
    window.clearTimeout(isScrolling);
    isScrolling = setTimeout(toggleScrollButton, 100);
  };

  // إزالة أي مستمعات أحداث سابقة لتجنب التكرار
  window.removeEventListener("scroll", handleScroll);
  window.addEventListener("scroll", handleScroll, { passive: true });

  // إزالة أي مستمعات سابقة للزر
  const newBtn = scrollToTopBtn.cloneNode(true);
  scrollToTopBtn.parentNode.replaceChild(newBtn, scrollToTopBtn);
  scrollToTopBtn = newBtn;

  // النقر على الزر للتمرير إلى الأعلى
  scrollToTopBtn.addEventListener(
    "click",
    (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    { passive: true }
  );

  // التحقق الأولي عند تحميل الصفحة
  toggleScrollButton();
}

// تهيئة سكربتات الصفحة
function initializePageScripts() {
  // تهيئة وظيفة البحث
  setupSearchFunctionality();

  // تهيئة زر العودة للأعلى
  createScrollToTopButton();

  // تفعيل سلايدر آراء العملاء مع إعدادات محسنة
  initTestimonialsSlider();

  // تحميل وتفعيل العقارات
  initProperties();

  // تفعيل زر تحميل المزيد
  setupLoadMore();

  // إضافة تأثيرات للبطاقات
  const propertyCards = document.querySelectorAll(".property-card");
  propertyCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
  });
}

// تفعيل سلايدر آراء العملاء
function initTestimonialsSlider() {
  if (window.jQuery && typeof window.jQuery.fn.slick === "function") {
    const $ = window.jQuery;
    if (
      $(".testimonials-slider").length &&
      !$(".testimonials-slider").hasClass("slick-initialized")
    ) {
      $(".testimonials-slider").slick({
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        rtl: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        centerMode: true,
        centerPadding: "0",
        prevArrow:
          '<button type="button" class="slick-prev" aria-label="السابق"><i class="fas fa-chevron-right"></i></button>',
        nextArrow:
          '<button type="button" class="slick-next" aria-label="التالي"><i class="fas fa-chevron-left"></i></button>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: false,
              arrows: false,
            },
          },
        ],
      });
    }
  }
}

// تهيئة قائمة العقارات
function initProperties() {
  const propertiesGrid = document.querySelector(".properties-grid");
  if (!propertiesGrid) return;

  // مسح المحتوى الحالي
  propertiesGrid.innerHTML = "";

  // إضافة العقارات إلى الشبكة
  properties.forEach((property) => {
    propertiesGrid.appendChild(createPropertyCard(property));
  });
}

// إعداد زر تحميل المزيد
function setupLoadMore() {
  const loadMoreBtn = document.querySelector(".load-more");
  if (!loadMoreBtn) return;

  const allProperties = document.querySelectorAll(".property-card");
  const visibleCount = 8; // عدد العقارات المعروضة في البداية
  let currentVisible = visibleCount;

  // Function to update visibility of properties
  const updatePropertiesVisibility = () => {
    allProperties.forEach((property, index) => {
      if (index < currentVisible) {
        property.style.display = "block";
      } else {
        property.style.display = "none";
      }
    });

    // Show/hide load more button
    if (currentVisible >= allProperties.length) {
      loadMoreBtn.style.display = "none";
    } else {
      loadMoreBtn.style.display = "block";
    }
  };

  // Initial setup
  updatePropertiesVisibility();

  // Remove any existing event listeners
  const newLoadMoreBtn = loadMoreBtn.cloneNode(true);
  loadMoreBtn.parentNode.replaceChild(newLoadMoreBtn, loadMoreBtn);

  // Add click event to the new button
  newLoadMoreBtn.addEventListener("click", () => {
    currentVisible = Math.min(currentVisible + 4, allProperties.length);
    updatePropertiesVisibility();
  });
}
