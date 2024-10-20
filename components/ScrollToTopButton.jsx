"use client";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // 위쪽 화살표 아이콘

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // 스크롤 이벤트 핸들러
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // 맨 위로 스크롤하는 함수
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // 스크롤 이벤트 등록
    window.addEventListener("scroll", toggleVisibility);

    // 클린업 함수로 이벤트 제거
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 xl:bottom-8 xl:right- z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-2 xl:p-3 bg-white text-primary rounded-full shadow-lg hover:bg-gray-200 transition"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
