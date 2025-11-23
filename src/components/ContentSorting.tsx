import { colors } from "@/utilities/colors";
import { fonts } from "@/utilities/font";
import { useState } from "react";

export type SortOption = "name" | "kind" | "date" | "views" | "likes" | "place";

interface ContentSortingProps {
  onSortChange?: (sortBy: SortOption) => void;
}

const ContentSorting = ({ onSortChange }: ContentSortingProps) => {
  const [sortBy, setSortBy] = useState<SortOption>("name");

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as SortOption;
    setSortBy(value);
    if (onSortChange) {
      onSortChange(value);
    }
  };

  return (
    <select
      value={sortBy}
      onChange={handleSortChange}
      style={{
        backgroundColor: colors.background,
        borderRadius: "10px",
        borderWidth: "2px",
        borderColor: colors.border,
        borderStyle: "solid",
        color: colors.dark,
        fontFamily: fonts.body,
        fontSize: "14px",
        padding: "8px 12px",
        cursor: "pointer",
        outline: "none",
      }}
      onFocus={(e) => {
        e.target.style.borderColor = colors.border;
      }}
      onBlur={(e) => {
        e.target.style.borderColor = colors.border;
        e.target.style.boxShadow = "none";
      }}
    >
      <option value="name">مرتب‌سازی بر اساس نام</option>
      <option value="kind">مرتب‌سازی بر اساس نوع</option>
      <option value="date">مرتب‌سازی بر اساس تاریخ</option>
      <option value="views">مرتب‌سازی بر اساس بازدید</option>
      <option value="likes">مرتب‌سازی بر اساس پسند</option>
      <option value="place">مرتب‌سازی بر اساس مکان</option>
    </select>
  );
};

export default ContentSorting;
